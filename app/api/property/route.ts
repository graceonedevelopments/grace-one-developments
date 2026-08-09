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

      subject: `New Property Opportunity - ${data.address}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Property Opportunity</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Property Address:</strong> ${data.address}</p>
          <p><strong>Property Type:</strong> ${data.propertyType}</p>
          <p><strong>Asking Price:</strong> ${data.askingPrice || "Not provided"}</p>
          <p><strong>Condition:</strong> ${data.condition || "Not provided"}</p>

          <hr />

          <p><strong>Details:</strong></p>
          <p>${data.message || "None"}</p>
        </div>
      `,

      text: `
NEW PROPERTY OPPORTUNITY

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Property Address: ${data.address}
Property Type: ${data.propertyType}
Asking Price: ${data.askingPrice || "Not provided"}
Condition: ${data.condition || "Not provided"}

Details:
${data.message || "None"}
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
    console.error("Property route error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}import { NextResponse } from "next/server";
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

      subject: `New Property Opportunity - ${data.address}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Property Opportunity</h2>

          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${senderEmail || "Not provided"}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Property Address:</strong> ${data.address}</p>
          <p><strong>Property Type:</strong> ${data.propertyType}</p>
          <p><strong>Asking Price:</strong> ${data.askingPrice || "Not provided"}</p>
          <p><strong>Condition:</strong> ${data.condition || "Not provided"}</p>

          <hr />

          <p><strong>Details:</strong></p>
          <p>${data.message || "None"}</p>
        </div>
      `,

      text: `
NEW PROPERTY OPPORTUNITY

Name: ${data.name}
Email: ${senderEmail || "Not provided"}
Phone: ${data.phone || "Not provided"}
Property Address: ${data.address}
Property Type: ${data.propertyType}
Asking Price: ${data.askingPrice || "Not provided"}
Condition: ${data.condition || "Not provided"}

Details:
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
    console.error("Property route error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}