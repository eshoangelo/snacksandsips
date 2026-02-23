import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, eventType, eventDate, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Snacks & Sips <onboarding@resend.dev>",
    to: "snacksnsips26@gmail.com",
    subject: `New Inquiry from ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="margin:0;padding:0;background-color:#111111;font-family:Georgia,serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#111111;padding:40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#1a1a1a;border:1px solid #2a2a2a;">

                <!-- Header -->
                <tr>
                  <td align="center" style="padding:48px 40px 36px;">
                    <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:11px;letter-spacing:0.35em;color:#c9a84c;text-transform:uppercase;">Catering &amp; Events</p>
                    <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:600;letter-spacing:0.25em;color:#c9a84c;text-transform:uppercase;line-height:1.2;">SNACKS &amp; SIPS</h1>
                    <!-- Gold separator -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                      <tr>
                        <td style="height:1px;background:linear-gradient(to right,transparent,#c9a84c,transparent);"></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Title -->
                <tr>
                  <td align="center" style="padding:0 40px 36px;">
                    <h2 style="margin:0;font-family:Georgia,serif;font-size:13px;font-weight:400;letter-spacing:0.3em;color:#f5f0e8;text-transform:uppercase;">New Inquiry Received</h2>
                  </td>
                </tr>

                <!-- Details -->
                <tr>
                  <td style="padding:0 40px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">

                      <!-- Name -->
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #2a2a2a;">
                          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:#c9a84c;text-transform:uppercase;">Name</p>
                          <p style="margin:0;font-family:Georgia,serif;font-size:16px;color:#f5f0e8;">${name}</p>
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #2a2a2a;">
                          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:#c9a84c;text-transform:uppercase;">Email</p>
                          <p style="margin:0;font-family:Georgia,serif;font-size:16px;color:#f5f0e8;">${email}</p>
                        </td>
                      </tr>

                      <!-- Event Type -->
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #2a2a2a;">
                          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:#c9a84c;text-transform:uppercase;">Event Type</p>
                          <p style="margin:0;font-family:Georgia,serif;font-size:16px;color:#f5f0e8;">${eventType || "Not specified"}</p>
                        </td>
                      </tr>

                      <!-- Event Date -->
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #2a2a2a;">
                          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:#c9a84c;text-transform:uppercase;">Event Date</p>
                          <p style="margin:0;font-family:Georgia,serif;font-size:16px;color:#f5f0e8;">${eventDate || "Not specified"}</p>
                        </td>
                      </tr>

                      <!-- Message -->
                      <tr>
                        <td style="padding:14px 0;">
                          <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:#c9a84c;text-transform:uppercase;">Message</p>
                          <p style="margin:0;font-family:Georgia,serif;font-size:16px;color:#e8dfd2;line-height:1.7;">${message}</p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:0 40px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="height:1px;background:linear-gradient(to right,transparent,#c9a84c,transparent);"></td>
                      </tr>
                    </table>
                    <p style="margin:24px 0 0;text-align:center;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:#555555;text-transform:uppercase;">Snacks &amp; Sips &mdash; Catering &amp; Events</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
