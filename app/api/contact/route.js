import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, company, teamSize } = body
    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Save to database (e.g., Supabase, MongoDB)
    // 2. Send email notification (e.g., Resend, SendGrid)
    // 3. Add to CRM (e.g., HubSpot, Salesforce)

    // Mock: Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Mock success response
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully. Our team will contact you within 24 hours.',
      data: {
        id: `ENQ-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        name,
        email,
        company,
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Accredian Enterprise Contact API',
    version: '1.0.0',
    endpoints: {
      'POST /api/contact': 'Submit enterprise enquiry form',
    }
  })
}
