"use server";

/**
 * Sends the quote request to your email via Resend.
 * Set in .env.local:
 *   RESEND_API_KEY=re_xxxx (from resend.com)
 *   CONTACT_EMAIL=Admin@renewexteriorcleaning.com.au
 */
export async function sendQuoteRequest(formData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  const toEmail = process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL in .env.local");
    return { ok: false, error: "Email is not configured. Please add RESEND_API_KEY and CONTACT_EMAIL to .env.local." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: [toEmail],
        replyTo: email,
        subject: `Quote request from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          ``,
          `Property details:`,
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `Resend error: ${res.status}`);
    }

    return { ok: true };
  } catch (e) {
    console.error("Send quote email error:", e);
    return { ok: false, error: e.message || "Failed to send. Please try again or email us directly." };
  }
}
