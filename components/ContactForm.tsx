'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setShowModal(true);
  }

  async function handleConfirm() {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Erro ao enviar mensagem.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setErrorMsg('Erro de conexão. Tente novamente.');
      setStatus('error');
    }
  }

  function closeModal() {
    setShowModal(false);
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  }

  return (
    <>
      <form className="contactForm" aria-label="Formulário de contato" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome *
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label htmlFor="email">
          E-mail *
          <input
            id="email"
            type="email"
            placeholder="seuemail@dominio.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <label htmlFor="service">
          Serviço de interesse
          <input
            id="service"
            type="text"
            placeholder="Ex: leitura técnica, elaboração de originais"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          />
        </label>
        <label htmlFor="message">
          Mensagem *
          <textarea
            id="message"
            rows={4}
            placeholder="Descreva brevemente sua demanda"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>
        <button type="submit" className="btn primary">
          Enviar mensagem
        </button>
      </form>

      {showModal && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            {status === 'idle' || status === 'sending' ? (
              <>
                <h3>Confirmar envio</h3>
                <p>Deseja enviar esta solicitação para <strong>editorial@biroprincipia.com.br</strong>?</p>
                <div className="modalSummary">
                  <p><strong>Nome:</strong> {form.name}</p>
                  <p><strong>E-mail:</strong> {form.email}</p>
                  {form.service && <p><strong>Serviço:</strong> {form.service}</p>}
                  <p><strong>Mensagem:</strong> {form.message}</p>
                </div>
                <div className="modalActions">
                  <button className="btn" onClick={closeModal} disabled={status === 'sending'}>
                    Cancelar
                  </button>
                  <button className="btn primary" onClick={handleConfirm} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando...' : 'Confirmar envio'}
                  </button>
                </div>
              </>
            ) : status === 'success' ? (
              <>
                <h3>Mensagem enviada</h3>
                <p>Sua solicitação foi enviada com sucesso. Retornaremos em até um dia útil.</p>
                <div className="modalActions">
                  <button className="btn primary" onClick={closeModal}>
                    Fechar
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>Erro no envio</h3>
                <p>{errorMsg}</p>
                <div className="modalActions">
                  <button className="btn" onClick={closeModal}>
                    Fechar
                  </button>
                  <button className="btn primary" onClick={handleConfirm}>
                    Tentar novamente
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
