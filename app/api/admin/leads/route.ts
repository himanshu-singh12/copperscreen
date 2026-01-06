import { NextRequest, NextResponse } from 'next/server'
import { staticLeads } from '@/lib/static-data'

export async function GET(request: NextRequest) {
  try {
    // In a real application, you would fetch from a database
    // For now, return static demo data
    return NextResponse.json({
      success: true,
      leads: staticLeads,
      total: staticLeads.length
    })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // In a real application, you would save to a database
    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Lead created successfully',
      lead: {
        id: Date.now().toString(),
        ...body,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}