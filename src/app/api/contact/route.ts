import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const name = String(data?.name ?? "");
    const email = String(data?.email ?? "");
    const subject = String(data?.subject ?? "");
    const message = String(data?.message ?? "");

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes" },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, SMTP_SECURE } =
      process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
      return NextResponse.json(
        { error: "Servidor de e-mail não configurado" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Inter, Arial, sans-serif; color: #111; line-height: 1.6">
        <h2 style="margin: 0 0 12px">Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mensagem:</strong></p>
        <div>${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfólio" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: subject ? `[Portfólio] ${subject}` : "[Portfólio] Nova mensagem",
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\n${message}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Falha ao enviar mensagem" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
