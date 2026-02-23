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
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Event Type:</strong> ${eventType || "Not specified"}</p>
      <p><strong>Event Date:</strong> ${eventDate || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
