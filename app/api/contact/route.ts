import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const senderEmail =
      typeof data.email === "string" ? data.email.trim() : "";

    const emailData: any = {
      from: `Grace One Developments <${process.env.FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO_EMAIL!],

      subject: `Website Contact - ${data.subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Grace One Website Message</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${senderEmail || "Not provided"}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${data.message || "None"}</p>
        </div>
      `,

      text: `
NEW GRACE ONE WEBSITE MESSAGE

Name: ${data.name}
Email: ${senderEmail || "Not provided"}
Phone: ${data.phone || "Not provided"}
Subject: ${data.subject}

Message:
${data.message || "None"}
      `,
    };

    if (isValidEmail(senderEmail)) {
      emailData.replyTo = senderEmail;
    }

    const { error } = await resend.emails.send(emailData);

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}