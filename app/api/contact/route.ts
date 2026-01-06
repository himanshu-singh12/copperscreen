import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, service, message } = body
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Submit to Google Apps Script
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
    if (!googleScriptUrl) {
      throw new Error('Google Apps Script URL not configured')
    }

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
        timestamp: new Date().toISOString(),
        source: 'Website Contact Form'
      })
    })

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`)
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ve received your message and will get back to you within 24 hours.'
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Unable to submit form. Please email us directly at hello@copperscreen.com'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  })
}