import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const applicantEmail =
      typeof data.email === "string" ? data.email.trim() : "";

    const emailData: any = {
      from: `Grace One Developments <${process.env.FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO_EMAIL!],

      subject: `New Housing Interest - ${data.firstName} ${data.lastName}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Housing Interest Application</h2>

          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${applicantEmail || "Not provided"}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Household Size:</strong> ${data.householdSize}</p>
          <p><strong>Voucher Status:</strong> ${data.voucherStatus}</p>
          <p><strong>Bedroom Size:</strong> ${data.bedrooms || "Not provided"}</p>
          <p><strong>Move-In Date:</strong> ${data.moveInDate || "Not provided"}</p>
          <p><strong>Housing Authority / County:</strong> ${data.housingAuthority || "Not provided"}</p>

          <hr />

          <p><strong>Additional Information:</strong></p>
          <p>${data.message || "None"}</p>
        </div>
      `,

      text: `
NEW HOUSING INTEREST APPLICATION

Name: ${data.firstName} ${data.lastName}
Email: ${applicantEmail || "Not provided"}
Phone: ${data.phone}
Household Size: ${data.householdSize}
Voucher Status: ${data.voucherStatus}
Bedroom Size: ${data.bedrooms || "Not provided"}
Move-In Date: ${data.moveInDate || "Not provided"}
Housing Authority / County: ${data.housingAuthority || "Not provided"}

Additional Information:
${data.message || "None"}
      `,
    };

    // Only add replyTo if the email is valid
    if (isValidEmail(applicantEmail)) {
      emailData.replyTo = applicantEmail;
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
    console.error("Housing route error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}