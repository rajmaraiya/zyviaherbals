import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Log the contact form submission (in production, you'd save to database)
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
    })

    // TODO: Integrate with Resend or other email service
    // Example:
    // await resend.emails.send({
    //   from: 'noreply@zyviaherbals.com',
    //   to: 'hello@zyviaherbals.com',
    //   subject: `Contact Form: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // });

    // TODO: Send auto-reply to customer
    // await resend.emails.send({
    //   from: 'hello@zyviaherbals.com',
    //   to: email,
    //   subject: 'Thank you for contacting Zyvia Herbals',
    //   html: `
    //     <h2>Thank you for reaching out!</h2>
    //     <p>Hi ${name},</p>
    //     <p>We've received your message and will get back to you within 24 hours.</p>
    //     <p>Best regards,<br>The Zyvia Herbals Team</p>
    //   `
    // });

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
