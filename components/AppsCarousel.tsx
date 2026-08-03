'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import type { InteractiveApp } from '@/content/site';

type Props = { apps: InteractiveApp[] };

export function AppsCarousel({ apps }: Props) {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const total = apps.length;
  const app = apps[index];

  const goTo = useCallback(
    (next: number, focusTab = false) => {
      const wrapped = (next + total) % total;
      setIndex(wrapped);
      if (focusTab) tabRefs.current[wrapped]?.focus();
    },
    [total],
  );

  function onTabKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + 1, true);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(index - 1, true);
    } else if (event.key === 'Home') {
      event.preventDefault();
      goTo(0, true);
    } else if (event.key === 'End') {
      event.preventDefault();
      goTo(total - 1, true);
    }
  }

  function onTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) goTo(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  }

  return (
    <div className="carousel" style={{ ['--accent' as string]: app.accent }}>
      {/* Navegação por nome */}
      <div className="carouselTabs" role="tablist" aria-label="Aplicações interativas">
        {apps.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${item.id}`}
            aria-selected={i === index}
            aria-controls={`painel-${item.id}`}
            tabIndex={i === index ? 0 : -1}
            className={`carouselTab${i === index ? ' isActive' : ''}`}
            style={{ ['--tab-accent' as string]: item.accent }}
            onClick={() => goTo(i)}
            onKeyDown={onTabKeyDown}
          >
            {item.shortName}
          </button>
        ))}
      </div>

      {/* Slide */}
      <div
        className="carouselPanel"
        role="tabpanel"
        id={`painel-${app.id}`}
        aria-labelledby={`tab-${app.id}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <figure className="carouselShot">
          <Image
            key={app.shot.src}
            src={app.shot.src}
            alt={app.shot.alt}
            width={app.shot.width}
            height={app.shot.height}
            sizes="(max-width: 900px) 92vw, 620px"
            priority={index === 0}
          />
        </figure>

        <div className="carouselInfo">
          <span className="carouselChip">{app.chip}</span>

          <div className="carouselBrand">
            {app.logo ? (
              <Image
                className="carouselLogo"
                src={app.logo.src}
                alt={app.name}
                width={app.logo.width}
                height={app.logo.height}
                sizes="240px"
              />
            ) : (
              <h3 className="carouselName">{app.name}</h3>
            )}
          </div>

          <p className="carouselTagline">{app.tagline}</p>
          <p className="carouselDescription">{app.description}</p>

          <ul className="carouselHighlights">
            {app.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <a
            className="btn carouselCta"
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Experimente o ${app.name} (abre em nova aba)`}
          >
            Experimente! <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Controles — setas + contador na mesma linha */}
      <div className="carouselControls">
        <button type="button" className="carouselArrow" onClick={() => goTo(index - 1)} aria-label="Aplicação anterior">
          <span aria-hidden="true">←</span>
        </button>

        <p className="carouselCounter" aria-live="polite">
          {index + 1} de {total} · {app.name}
        </p>

        <button type="button" className="carouselArrow" onClick={() => goTo(index + 1)} aria-label="Próxima aplicação">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
