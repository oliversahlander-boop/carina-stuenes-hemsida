import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const city = String(body.city || "").trim();
    const message = String(body.message || "").trim();

    if (!firstName || !lastName || !email || !phone || !city) {
      return NextResponse.json(
        { error: "Förnamn, efternamn, e-post, telefonnummer och stad är obligatoriska." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Ogiltig e-postadress." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "E-posttjänsten är inte konfigurerad på servern." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const to = "stuenesshop@gmail.com";
    const fromAddress = process.env.SMTP_FROM || smtpUser || "stuenesshop@gmail.com";
    const customerDisplay = `${firstName} ${lastName}`.trim();
    const subject = `Ny kontaktförfrågan från ${firstName} ${lastName}`;
    const submittedAt = new Date().toLocaleString("sv-SE", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Stockholm",
    });
    const safeMessage = message || "(Inget meddelande)";
    const safeMessageHtml = escapeHtml(safeMessage).replace(/\n/g, "<br/>");
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCity = escapeHtml(city);
    const safeCustomerDisplay = escapeHtml(customerDisplay);
    const safeSubmittedAt = escapeHtml(submittedAt);

    const ownerText = [
      "Ny kontaktförfrågan från hemsidan",
      "",
      `Inkommen: ${submittedAt}`,
      "",
      `Förnamn: ${firstName}`,
      `Efternamn: ${lastName}`,
      `E-post: ${email}`,
      `Telefonnummer: ${phone}`,
      `Stad: ${city}`,
      "",
      "Meddelande:",
      safeMessage,
    ].join("\n");

    const ownerHtml = `
      <div style="background:#f6f2eb;padding:28px 16px;font-family:Segoe UI,Arial,sans-serif;color:#2f241c;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#fffaf3;border:1px solid #e3d6c2;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:24px 24px 12px 24px;background:linear-gradient(180deg,#f3e7d7 0%,#fffaf3 100%);">
              <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8f6b42;">Ny kontaktförfrågan</p>
              <h1 style="margin:0;font-size:24px;line-height:1.3;color:#3b2a1d;">Ny förfrågan från ${safeCustomerDisplay}</h1>
              <p style="margin:12px 0 0 0;font-size:14px;color:#7b6248;">Inkommen: ${safeSubmittedAt}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 24px 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;width:34%;font-weight:600;color:#5a4330;">Förnamn</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeFirstName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">Efternamn</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeLastName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">E-post</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">Telefonnummer</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">Stad</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeCity}</td>
                </tr>
              </table>

              <div style="margin-top:18px;padding:14px 16px;background:#fbf5eb;border:1px solid #eee0cf;border-radius:10px;">
                <p style="margin:0 0 8px 0;font-size:13px;font-weight:700;letter-spacing:0.02em;color:#5a4330;">Meddelande</p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#3b2a1d;">${safeMessageHtml}</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `;

    const customerSubject = "Tack för din förfrågan hos Carina Stuenes";
    const customerText = [
      `Hej ${firstName}!`,
      "",
      "Tack för din förfrågan. Jag återkommer så snart jag kan med förslag på lediga tider.",
      "",
      "Din sammanställning:",
      `Förnamn: ${firstName}`,
      `Efternamn: ${lastName}`,
      `E-post: ${email}`,
      `Telefonnummer: ${phone}`,
      `Stad: ${city}`,
      "Meddelande:",
      safeMessage,
      "",
      "Vänliga hälsningar,",
      "Carina Stuenes",
    ].join("\n");

    const customerHtml = `
      <div style="background:#f6f2eb;padding:28px 16px;font-family:Segoe UI,Arial,sans-serif;color:#2f241c;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#fffaf3;border:1px solid #e3d6c2;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:24px 24px 12px 24px;background:linear-gradient(180deg,#f3e7d7 0%,#fffaf3 100%);">
              <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8f6b42;">Tack för din förfrågan</p>
              <h1 style="margin:0;font-size:24px;line-height:1.3;color:#3b2a1d;">Hej ${safeFirstName}!</h1>
              <p style="margin:12px 0 0 0;font-size:15px;line-height:1.6;color:#5a4330;">
                Tack för att du hörde av dig. Jag återkommer så snart jag kan med förslag på lediga tider.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 24px 24px;">
              <p style="margin:0 0 12px 0;font-size:14px;font-weight:700;color:#5a4330;">Din sammanställning</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;width:34%;font-weight:600;color:#5a4330;">Förnamn</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeFirstName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">Efternamn</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeLastName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">E-post</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">Telefonnummer</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;font-weight:600;color:#5a4330;">Stad</td>
                  <td style="padding:10px 0;border-bottom:1px solid #efe3d4;color:#3b2a1d;">${safeCity}</td>
                </tr>
              </table>

              <div style="margin-top:18px;padding:14px 16px;background:#fbf5eb;border:1px solid #eee0cf;border-radius:10px;">
                <p style="margin:0 0 8px 0;font-size:13px;font-weight:700;letter-spacing:0.02em;color:#5a4330;">Ditt meddelande</p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#3b2a1d;">${safeMessageHtml}</p>
              </div>

              <p style="margin:20px 0 0 0;font-size:14px;line-height:1.7;color:#5a4330;">
                Vänliga hälsningar,<br/>
                Carina Stuenes
              </p>
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      to,
      from: `${customerDisplay} via Health Stuenes <${fromAddress}>`,
      replyTo: email,
      subject,
      text: ownerText,
      html: ownerHtml,
    });

    await transporter.sendMail({
      to: email,
      from: `Carina Stuenes <${fromAddress}>`,
      replyTo: to,
      subject: customerSubject,
      text: customerText,
      html: customerHtml,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Något gick fel när förfrågan skulle skickas." },
      { status: 500 },
    );
  }
}
