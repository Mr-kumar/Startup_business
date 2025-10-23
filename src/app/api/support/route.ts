
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { sendSupportAdminEmail, sendSupportUserEmail } from "@/lib/mail";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, state, query, adminOnly } = await request.json();

    // Send admin notification using centralized service
    await sendSupportAdminEmail({
      name,
      email,
      phone,
      state,
      query,
    });

    // Send user confirmation email if not adminOnly
    if (!adminOnly) {
      await sendSupportUserEmail({
        name,
        email,
        phone,
        state,
        query,
      });
    }

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
