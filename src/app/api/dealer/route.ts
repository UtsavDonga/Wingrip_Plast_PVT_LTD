import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const dealerSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().min(10).max(13),
  email: z.string().email(),
  city: z.string().min(2),
  state: z.string().min(1),
  productInterest: z.string().min(1),
  currentBusiness: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = dealerSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = parsed.data
    const toEmail = process.env.ENQUIRY_TO_EMAIL || 'sales@wingrippipes.com'
    const fromEmail = process.env.ENQUIRY_FROM_EMAIL || 'noreply@wingrippipes.com'
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY not configured — logging dealer application instead:')
      console.log('Dealer application received:', JSON.stringify(data, null, 2))
      return NextResponse.json({ success: true, message: 'Application received.' })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `Wingrip Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: data.email,
        subject: `New Dealer Application: ${data.name} — ${data.city}, ${data.state}`,
        html: buildDealerEmailHtml(data),
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('Resend API error:', err)
      return NextResponse.json(
        { message: 'Failed to submit application. Please try again or contact us directly.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' })
  } catch (error) {
    console.error('Dealer API error:', error)
    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

function buildDealerEmailHtml(data: z.infer<typeof dealerSchema>): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:10px 16px;background:#f8f9fa;font-weight:600;color:#374151;font-size:13px;width:170px;border-bottom:1px solid #e5e7eb;">${label}</td>
      <td style="padding:10px 16px;color:#111827;font-size:13px;border-bottom:1px solid #e5e7eb;">${value}</td>
    </tr>`

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Dealer Application — Wingrip</title></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);">
    <div style="background:#1B4F8A;padding:20px 32px;">
      <span style="display:inline-block;background:#ffffff;padding:8px 14px;border-radius:8px;">
        <img src="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wingrippipes.com'}/images/wingrip-logo.png" alt="Wingrip Plast Pvt. Ltd." width="130" style="display:block;height:auto;border:0;" />
      </span>
    </div>
    <div style="background:#F97316;padding:10px 32px;">
      <p style="margin:0;font-size:13px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">🤝 NEW DEALER / DISTRIBUTOR APPLICATION</p>
    </div>
    <div style="padding:32px;">
      <p style="margin:0 0 20px;font-size:14px;color:#6b7280;">A new dealership application has been submitted through the Wingrip website.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        ${row('Name', data.name)}
        ${row('Firm / Company', data.company || '—')}
        ${row('Phone', data.phone)}
        ${row('Email', data.email)}
        ${row('City', data.city)}
        ${row('State', data.state)}
        ${row('Product Interest', data.productInterest)}
        ${row('Current Business', data.currentBusiness || '—')}
      </table>
      ${
        data.message
          ? `<div style="margin-top:20px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <div style="background:#f8f9fa;padding:10px 16px;font-weight:600;font-size:13px;color:#374151;border-bottom:1px solid #e5e7eb;">Additional Notes</div>
        <div style="padding:16px;font-size:13px;color:#111827;line-height:1.6;">${data.message.replace(/\n/g, '<br>')}</div>
      </div>`
          : ''
      }
      <div style="margin-top:24px;text-align:center;">
        <a href="mailto:${data.email}?subject=Wingrip Dealership — Next Steps" style="display:inline-block;background:#F97316;color:#ffffff;font-size:14px;font-weight:700;padding:12px 32px;border-radius:8px;text-decoration:none;">Contact ${data.name}</a>
      </div>
    </div>
    <div style="background:#f8f9fa;padding:16px 32px;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="margin:0;font-size:11px;color:#9ca3af;">Generated automatically by the Wingrip website dealer form.</p>
    </div>
  </div>
</body>
</html>`
}
