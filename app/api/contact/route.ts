import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { from_name, from_email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", 
      to: "amruthav1205@gmail.com",
      subject: `[Portfolio] ${subject}`,
      html: `
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}