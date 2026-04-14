import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 },
      );
    }

    const smtpUser = (process.env.SMTP_USER ?? '').trim();
    const smtpPass = (process.env.SMTP_PASS ?? '').trim();
    const smtpHost = (process.env.SMTP_HOST ?? 'smtp.titan.email').trim();
    const smtpPort = Number(process.env.SMTP_PORT) || 587;

    console.log('SMTP config:', { host: smtpHost, port: smtpPort, user: smtpUser });

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      authMethod: 'LOGIN',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Birô Principia - Site" <${smtpUser}>`,
      replyTo: email,
      to: 'editorial@biroprincipia.com.br',
      subject: `Nova solicitação — ${service || 'Contato geral'}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Serviço: ${service || 'Não informado'}`,
        '',
        'Mensagem:',
        message,
      ].join('\n'),
      html: `
        <h2>Nova solicitação via site</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:6px 12px;font-weight:bold">Nome</td><td style="padding:6px 12px">${name}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">E-mail</td><td style="padding:6px 12px">${email}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Serviço</td><td style="padding:6px 12px">${service || 'Não informado'}</td></tr>
        </table>
        <h3>Mensagem</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    return NextResponse.json(
      { error: 'Não foi possível enviar a mensagem. Tente novamente mais tarde.' },
      { status: 500 },
    );
  }
}
