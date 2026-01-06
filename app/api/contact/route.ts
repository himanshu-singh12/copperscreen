import { NextRequest, NextResponse } from 'next/server'
import { leadService } from '@/lib/supabase'
import { Logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  
  try {
    const body = await request.json()
    Logger.info('Contact form submission received', { 
      email: body.email, 
      service: body.service,
      hasCompany: !!body.company 
    })
    
    // Validate required fields
    const { name, email, service, message } = body
    if (!name || !email || !service || !message) {
      Logger.error('Missing required fields', { name: !!name, email: !!email, service: !!service, message: !!message })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create lead data
    const leadData = {
      name,
      email,
      company: body.company || '',
      phone: body.phone || '',
      service,
      budget: body.budget || '',
      message,
      source: 'Contact Form API',
      status: 'new' as const
    }

    try {
      // Only try to save to Supabase - no fallbacks to local database
      const lead = await leadService.create(leadData)
      Logger.logFormSubmission('supabase', true)
      
      return NextResponse.json({
        success: true,
        message: 'Thank you! We\'ll get back to you within 24 hours.',
        leadId: lead.id,
        processingTime: Date.now() - startTime
      })
    } catch (supabaseError) {
      Logger.logFormSubmission('supabase', false, supabaseError)
      
      // Fallback to Google Apps Script only (no local database)
      const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      if (googleScriptUrl) {
        try {
          const formData = new FormData()
          formData.append('name', name)
          formData.append('email', email)
          formData.append('company', body.company || '')
          formData.append('phone', body.phone || '')
          formData.append('service', service)
          formData.append('budget', body.budget || '')
          formData.append('message', message)
          formData.append('source', 'Contact Form API')
          formData.append('timestamp', new Date().toISOString())

          const response = await fetch(googleScriptUrl, {
            method: 'POST',
            body: formData
          })

          Logger.logFormSubmission('google_apps_script', true)

          return NextResponse.json({
            success: true,
            message: 'Thank you! We\'ll get back to you within 24 hours.',
            method: 'google_apps_script',
            processingTime: Date.now() - startTime
          })
        } catch (googleError) {
          Logger.logFormSubmission('google_apps_script', false, googleError)
        }
      } else {
        Logger.warn('Google Apps Script URL not configured')
      }

      // If both methods fail, return error to user
      Logger.error('All submission methods failed', {
        supabaseError: (supabaseError as any)?.message || String(supabaseError),
        hasGoogleScript: !!googleScriptUrl
      })
      
      return NextResponse.json({
        success: false,
        message: 'Unable to submit form. Please try again or contact us directly at hello@copperscreen.com',
        processingTime: Date.now() - startTime
      }, { status: 500 })
    }
  } catch (error) {
    Logger.logFormSubmission('api_route', false, error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Please try again or contact us directly at hello@copperscreen.com',
        processingTime: Date.now() - startTime
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}