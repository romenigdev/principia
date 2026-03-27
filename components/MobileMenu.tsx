'use client';

import { useEffect, useState } from 'react';

type NavItem = { label: string; href: string };

export function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={`hamburger${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="mobileOverlay" onClick={() => setIsOpen(false)} aria-hidden />
      )}

      <nav className={`mobileNav${isOpen ? ' open' : ''}`} aria-label="Menu mobile">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn primary" href="#contato" onClick={() => setIsOpen(false)}>
          Orçamento
        </a>
      </nav>
    </>
  );
}
