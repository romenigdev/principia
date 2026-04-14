import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 },
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Birô Principia - Site <contato@biroprincipia.com.br>',
        reply_to: email,
        to: ['editorial@biroprincipia.com.br'],
        subject: `Nova solicitação — ${service || 'Contato geral'}`,
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
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', data);
      return NextResponse.json(
        { error: 'Não foi possível enviar a mensagem. Tente novamente mais tarde.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    return NextResponse.json(
      { error: 'Não foi possível enviar a mensagem. Tente novamente mais tarde.' },
      { status: 500 },
    );
  }
}
