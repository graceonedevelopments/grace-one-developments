import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { error } = await resend.emails.send({
      from: `Grace One Developments <${process.env.FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: data.email,

      subject: `Website Contact - ${data.subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Grace One Website Message</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `,

      text: `
NEW GRACE ONE WEBSITE MESSAGE

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Subject: ${data.subject}

Message:
${data.message}
      `,
    });

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