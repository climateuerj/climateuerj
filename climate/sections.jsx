// Climate — page sections

const { useState, useMemo, useEffect, useRef } = React;

/* ============================================================
   NAV
============================================================ */
function Nav({ density }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['Serviços', '#servicos'],
    ['Como funciona', '#processo'],
    ['Capacidades', '#capacidades'],
    ['Métodos', '#metodos'],
    ['Projetos', '#projetos'],
    ['Equipe', '#equipe'],
    ['Contato', '#contato'],
  ];
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(247, 247, 240, 0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68,
      }}>
        <Logo size={20} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', gap: 22 }} className="nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href} style={{
                fontSize: '0.88rem',
                color: 'var(--ink-2)',
                fontWeight: 400,
                letterSpacing: '-0.005em',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--moss)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#contato" style={{
            background: 'var(--ink)',
            color: 'var(--paper)',
            padding: '10px 18px',
            fontSize: '0.85rem',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--moss)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
          >
            Solicitar orçamento
            <span style={{ fontSize: '1.1em', lineHeight: 1 }}>→</span>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

/* ============================================================
   HERO
============================================================ */
function Hero() {
  return (
    <section style={{ paddingTop: 56, paddingBottom: 80, position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: 56,
          alignItems: 'end',
        }} className="hero-grid">
          <div>
            <MonoKicker>Lab · UERJ · Rio de Janeiro</MonoKicker>
            <h1 className="display" style={{
              fontSize: 'clamp(2.6rem, 6vw, 5.2rem)',
              marginTop: 28,
              marginBottom: 28,
            }}>
              Know-how acadêmico para demandas <em style={{ fontStyle: 'italic', color: 'var(--moss)', fontWeight: 400 }}>ambientais</em> de média e alta complexidade.
            </h1>
            <p style={{
              fontSize: '1.12rem',
              color: 'var(--ink-2)',
              maxWidth: 560,
              lineHeight: 1.55,
            }}>
              A Climate é o braço de serviços do <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>LARAMG</strong> — Laboratório de Radioecologia e Mudanças Globais — atuando em monitoramento atmosférico, qualidade do ar e sedimentologia em corpos d'água.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
              <a href="#servicos" style={{
                background: 'var(--moss)',
                color: 'var(--paper)',
                padding: '14px 22px',
                fontSize: '0.95rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}>
                Ver serviços
                <span style={{ fontSize: '1.1em' }}>↓</span>
              </a>
              <a href="#contato" style={{
                background: 'transparent',
                color: 'var(--ink)',
                padding: '14px 22px',
                fontSize: '0.95rem',
                fontWeight: 500,
                border: '1px solid var(--line-2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}>
                Falar com a equipe
              </a>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 380 }}>
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              width: '100%',
            }}>
              <AbstractPlaceholder seed={1} label="Microscopia · sedimento" tone="moss" />
            </div>
            <div style={{
              position: 'absolute',
              bottom: -28,
              left: -40,
              width: 180,
              aspectRatio: '1/1',
              border: '8px solid var(--paper)',
            }} className="hero-overlap">
              <AbstractPlaceholder seed={5} label="Pb-210" tone="deep" />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          marginTop: 96,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
        }} className="stats-strip">
          {[
            ['2005', 'LARAMG fundado', 'Departamento de Biofísica e Biometria · UERJ'],
            ['7', 'Linhas de serviço', 'De datação Pb-210 a qualidade do ar'],
            ['150', 'Anos de janela temporal', 'Em datação sedimentar com Pb-210'],
            ['5', 'Resoluções de referência', 'CONAMA · Ministério da Saúde · ANVISA'],
          ].map(([big, label, sub], i) => (
            <div key={i} style={{
              padding: '32px 24px',
              borderRight: i < 3 ? '1px solid var(--line)' : 'none',
            }} className={`stat-cell stat-cell-${i}`}>
              <div className="display" style={{ fontSize: '2.6rem', marginBottom: 10, color: 'var(--ink)' }}>{big}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-3)', lineHeight: 1.4 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-overlap { display: none; }
          .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-cell-1 { border-right: none !important; }
          .stat-cell-0, .stat-cell-1 { border-bottom: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   SERVICES — interactive filter + search
============================================================ */
function ServicesSection() {
  const [activeCat, setActiveCat] = useState('todos');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    return SERVICES.filter(s => {
      const catMatch = activeCat === 'todos' || s.category === activeCat;
      const q = query.trim().toLowerCase();
      const qMatch = !q ||
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.technique.toLowerCase().includes(q);
      return catMatch && qMatch;
    });
  }, [activeCat, query]);

  return (
    <section id="servicos" style={{ paddingTop: 96, paddingBottom: 96, background: 'var(--paper)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 40,
          alignItems: 'end',
          marginBottom: 48,
        }} className="services-header">
          <div>
            <MonoKicker>Catálogo de serviços</MonoKicker>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.4rem)', marginTop: 22 }}>
              Sete linhas técnicas, prontas para suportar pesquisa e demandas ambientais.
            </h2>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--ink-2)', maxWidth: 460, justifySelf: 'end' }}>
            Cada serviço é executado pela equipe da Climate na infraestrutura LARAMG/UERJ. Filtre por área ou busque por técnica.
          </p>
        </div>

        {/* Filter & search bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 22,
          borderBottom: '1px solid var(--line)',
          marginBottom: 32,
        }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                style={{
                  padding: '8px 14px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  background: activeCat === cat.id ? 'var(--ink)' : 'transparent',
                  color: activeCat === cat.id ? 'var(--paper)' : 'var(--ink-2)',
                  border: `1px solid ${activeCat === cat.id ? 'var(--ink)' : 'var(--line-2)'}`,
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                {cat.label}
                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--mono)',
                  opacity: 0.6,
                }}>
                  {cat.id === 'todos' ? SERVICES.length : SERVICES.filter(s => s.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid var(--line-2)',
            padding: '6px 14px',
            background: 'var(--paper)',
            minWidth: 220,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por técnica, equipamento..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: '0.85rem',
                fontFamily: 'var(--body)',
                width: '100%',
                color: 'var(--ink)',
              }}
            />
          </div>
        </div>

        {/* Service grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 0,
          border: '1px solid var(--line)',
          background: 'var(--line)',
        }}>
          {filtered.map(s => (
            <ServiceCard key={s.id} service={s} expanded={expanded === s.id} onToggle={() => setExpanded(expanded === s.id ? null : s.id)} />
          ))}
          {filtered.length === 0 && (
            <div style={{
              gridColumn: '1 / -1',
              padding: '64px 24px',
              background: 'var(--paper)',
              textAlign: 'center',
              color: 'var(--ink-3)',
              fontSize: '0.95rem',
            }}>
              Nenhum serviço corresponde a esses filtros.
            </div>
          )}
        </div>

        <div style={{
          marginTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          color: 'var(--ink-3)',
          fontSize: '0.85rem',
          fontFamily: 'var(--mono)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>
          <span>Mostrando {filtered.length} de {SERVICES.length}</span>
          <a href="#contato" style={{ color: 'var(--moss)', borderBottom: '1px solid var(--moss)', paddingBottom: 2 }}>
            Solicitar orçamento personalizado →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .services-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, expanded, onToggle }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onClick={onToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: expanded ? 'var(--ink)' : 'var(--paper)',
        color: expanded ? 'var(--paper)' : 'var(--ink)',
        padding: '28px 24px 24px',
        cursor: 'pointer',
        transition: 'background 0.25s, color 0.25s',
        position: 'relative',
        gridColumn: expanded ? 'span 2' : 'auto',
      }}
      className={expanded ? 'service-expanded' : ''}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        gap: 16,
        marginBottom: 18,
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          color: expanded ? 'var(--lichen)' : 'var(--moss)',
        }}>
          {service.id}
        </span>
        <Tag variant={expanded ? 'lichen' : 'outline'}>{service.categoryLabel}</Tag>
      </div>
      <h3 className="display" style={{
        fontSize: '1.5rem',
        marginBottom: 10,
        fontWeight: 500,
        letterSpacing: '-0.015em',
      }}>
        {service.title}
      </h3>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: expanded ? 'var(--lichen)' : 'var(--moss)',
        marginBottom: 14,
      }}>
        {service.technique}
      </div>
      <p style={{
        fontSize: '0.92rem',
        lineHeight: 1.5,
        color: expanded ? 'oklch(0.85 0.02 130)' : 'var(--ink-2)',
      }}>
        {service.summary}
      </p>

      {expanded && (
        <div style={{
          marginTop: 24,
          paddingTop: 22,
          borderTop: '1px solid oklch(0.36 0.014 150)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
        }} className="service-detail-grid">
          <div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--lichen)',
              marginBottom: 12,
            }}>
              Inclui
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {service.details.map((d, i) => (
                <li key={i} style={{
                  fontSize: '0.88rem',
                  padding: '6px 0',
                  borderBottom: i < service.details.length - 1 ? '1px solid oklch(0.36 0.014 150)' : 'none',
                  display: 'flex',
                  alignItems: 'start',
                  gap: 10,
                }}>
                  <span style={{ color: 'var(--lichen)', fontFamily: 'var(--mono)', fontSize: '0.72rem', marginTop: 2 }}>·</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--lichen)',
              marginBottom: 12,
            }}>
              Entrega
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.5, marginBottom: 18 }}>
              {service.deliverable}
            </p>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--lichen)',
              marginBottom: 8,
            }}>
              Prazo
            </div>
            <p style={{ fontSize: '0.88rem' }}>{service.duration}</p>
            <a href="#contato"
              onClick={e => e.stopPropagation()}
              style={{
                marginTop: 24,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--lichen)',
                color: 'var(--ink)',
                padding: '10px 16px',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}>
              Solicitar este serviço →
            </a>
          </div>
        </div>
      )}

      <div style={{
        position: 'absolute',
        bottom: 18,
        right: 18,
        fontFamily: 'var(--mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.06em',
        opacity: hover || expanded ? 1 : 0.5,
        transition: 'opacity 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        {expanded ? '— Recolher' : '+ Detalhes'}
      </div>
      <style>{`
        @media (max-width: 760px) {
          .service-expanded { grid-column: auto !important; }
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </article>
  );
}

/* ============================================================
   PROCESS
============================================================ */
function ProcessSection() {
  return (
    <section id="processo" style={{
      paddingTop: 96,
      paddingBottom: 96,
      background: 'var(--ink)',
      color: 'var(--paper)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 60,
          marginBottom: 56,
        }} className="process-header">
          <div>
            <MonoKicker color="var(--lichen)">Como funciona</MonoKicker>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginTop: 22 }}>
              Do briefing à publicação acadêmica.
            </h2>
          </div>
          <p style={{ fontSize: '1rem', color: 'oklch(0.78 0.02 130)', maxWidth: 520, alignSelf: 'end' }}>
            Cada projeto começa com uma conversa técnica. Depois disso, escopo, cronograma e referência metodológica são alinhados por escrito antes de qualquer coleta.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '1px solid oklch(0.36 0.014 150)',
        }} className="process-grid">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.n} style={{
              padding: '32px 24px 36px',
              borderRight: i < 3 ? '1px solid oklch(0.36 0.014 150)' : 'none',
              position: 'relative',
            }} className={`process-cell process-cell-${i}`}>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.78rem',
                color: 'var(--lichen)',
                letterSpacing: '0.08em',
                marginBottom: 32,
              }}>
                Etapa {step.n}
              </div>
              <h3 className="display" style={{ fontSize: '1.6rem', marginBottom: 14, fontWeight: 500 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'oklch(0.78 0.02 130)', lineHeight: 1.55 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .process-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-cell-1 { border-right: none !important; }
          .process-cell-0, .process-cell-1 { border-bottom: 1px solid oklch(0.36 0.014 150); }
        }
        @media (max-width: 540px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .process-cell { border-right: none !important; border-bottom: 1px solid oklch(0.36 0.014 150); }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   CAPABILITIES (lab tour)
============================================================ */
function CapabilitiesSection() {
  return (
    <section id="capacidades" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: 56,
          alignItems: 'start',
        }} className="cap-grid">
          <div>
            <MonoKicker>Capacidades · Infraestrutura</MonoKicker>
            <h2 className="display" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginTop: 22,
              marginBottom: 28,
            }}>
              Equipamentos sob a estrutura LARAMG/UERJ.
            </h2>
            <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.55, maxWidth: 520, marginBottom: 36 }}>
              Toda a infraestrutura laboratorial e administrativa fica nas dependências da UERJ. Contamos com o apoio de docentes, pós-graduados e alunos em todos os níveis do ensino superior.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, borderTop: '1px solid var(--line)' }}>
              {CAPABILITIES.map((c, i) => (
                <li key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr auto',
                  alignItems: 'center',
                  padding: '14px 0',
                  borderBottom: '1px solid var(--line)',
                  gap: 16,
                }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.72rem',
                    color: 'var(--ink-3)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{c.label}</span>
                  <Tag variant="outline">{c.kind}</Tag>
                </li>
              ))}
            </ul>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}>
            <div style={{ aspectRatio: '3/4' }}>
              <AbstractPlaceholder seed={2} label="Lab tour · XRF" tone="moss" />
            </div>
            <div style={{ aspectRatio: '3/4', marginTop: 40 }}>
              <AbstractPlaceholder seed={4} label="Sediment Trap" tone="paper" />
            </div>
            <div style={{ aspectRatio: '1/1', gridColumn: '1 / -1' }}>
              <AbstractPlaceholder seed={7} label="Sala de processamento Pb-210" tone="deep" />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .cap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   METHODS / REGULATIONS
============================================================ */
function MethodsSection() {
  return (
    <section id="metodos" style={{
      paddingTop: 96,
      paddingBottom: 96,
      background: 'var(--paper-2)',
    }}>
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 48 }}>
          <MonoKicker>Métodos & legislação</MonoKicker>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 22, marginBottom: 22 }}>
            Toda a metodologia é baseada na legislação vigente.
          </h2>
          <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.55 }}>
            Análises e relatórios técnicos são executados em conformidade com resoluções federais, garantindo rastreabilidade científica e legal para o cliente.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 0,
          border: '1px solid var(--line)',
          background: 'var(--paper)',
        }}>
          {REGULATIONS.map((r, i) => (
            <div key={i} style={{
              padding: '24px 22px',
              borderRight: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
            }}>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.06em',
                color: 'var(--moss)',
                marginBottom: 14,
              }}>
                {r.code}
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CASES
============================================================ */
function CasesSection() {
  return (
    <section id="projetos" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          marginBottom: 48,
          gap: 40,
          flexWrap: 'wrap',
        }}>
          <div>
            <MonoKicker>Projetos selecionados</MonoKicker>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 22, maxWidth: 700 }}>
              Onde nossas técnicas já contribuíram.
            </h2>
          </div>
          <a href="#contato" style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--moss)',
            borderBottom: '1px solid var(--moss)',
            paddingBottom: 2,
          }}>
            Discuta seu projeto →
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="cases-grid">
          {CASES.map((c, i) => (
            <article key={i} style={{
              border: '1px solid var(--line)',
              background: 'var(--paper)',
              transition: 'transform 0.25s, border-color 0.25s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--moss)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--line)';
              }}
            >
              <div style={{ aspectRatio: '4/3' }}>
                <AbstractPlaceholder seed={10 + i} label={c.tag} tone={i % 2 === 0 ? 'moss' : 'paper'} />
              </div>
              <div style={{ padding: '22px 22px 26px' }}>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  color: 'var(--ink-3)',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}>
                  {c.meta}
                </div>
                <h3 className="display" style={{ fontSize: '1.2rem', marginBottom: 10, fontWeight: 500, lineHeight: 1.25 }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   TEAM
============================================================ */
function TeamSection() {
  return (
    <section id="equipe" style={{
      paddingTop: 96,
      paddingBottom: 96,
      background: 'var(--paper-2)',
    }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <MonoKicker>Equipe científica</MonoKicker>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: 22 }}>
            Pesquisadores e docentes do LARAMG conduzem cada projeto.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }} className="team-grid">
          {TEAM.map((t, i) => (
            <div key={i}>
              <div style={{ aspectRatio: '3/4', marginBottom: 16 }}>
                <AbstractPlaceholder seed={20 + i} label="Retrato · placeholder" tone={i % 2 === 0 ? 'paper' : 'moss'} />
              </div>
              <Tag variant="outline">{t.tag}</Tag>
              <h3 className="display" style={{ fontSize: '1.15rem', marginTop: 12, marginBottom: 4, fontWeight: 500 }}>
                {t.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-2)' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   CONTACT — quote request CTA
============================================================ */
function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    institution: '',
    email: '',
    service: 'todos',
    message: '',
  });

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contato" style={{
      paddingTop: 96,
      paddingBottom: 96,
      background: 'var(--ink)',
      color: 'var(--paper)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 64,
          alignItems: 'start',
        }} className="contact-grid">
          <div>
            <MonoKicker color="var(--lichen)">Solicitar orçamento</MonoKicker>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginTop: 22, marginBottom: 28 }}>
              Vamos conversar sobre seu projeto.
            </h2>
            <p style={{ color: 'oklch(0.78 0.02 130)', fontSize: '1rem', lineHeight: 1.55, marginBottom: 40 }}>
              Conte sobre seus objetivos, prazo e contexto. Respondemos em até 3 dias úteis com proposta técnica preliminar.
            </p>

            <div style={{ display: 'grid', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--lichen)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                  Endereço
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Departamento de Biofísica e Biometria<br />
                  Instituto de Biologia Roberto Alcantara Gomes<br />
                  Universidade do Estado do Rio de Janeiro · UERJ<br />
                  Rio de Janeiro · Brasil
                </p>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--lichen)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                  Contato direto
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  contato@climate-laramg.br<br />
                  +55 (21) 0000-0000
                </p>
              </div>
            </div>
          </div>

          <div style={{
            background: 'oklch(0.22 0.014 150)',
            padding: 36,
            border: '1px solid oklch(0.36 0.014 150)',
          }}>
            {submitted ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--lichen)', color: 'var(--ink)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, fontSize: '1.4rem',
                }}>✓</div>
                <h3 className="display" style={{ fontSize: '1.5rem', marginBottom: 12, fontWeight: 500 }}>
                  Solicitação enviada
                </h3>
                <p style={{ color: 'oklch(0.78 0.02 130)', fontSize: '0.95rem' }}>
                  Obrigado, {form.name.split(' ')[0]}. Nossa equipe responde em até 3 dias úteis.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', institution: '', email: '', service: 'todos', message: '' }); }}
                  style={{
                    marginTop: 28,
                    color: 'var(--lichen)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid var(--lichen)',
                    paddingBottom: 2,
                  }}>
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'grid', gap: 20 }}>
                <FormField label="Nome completo *" value={form.name} onChange={handle('name')} />
                <FormField label="Instituição / empresa" value={form.institution} onChange={handle('institution')} />
                <FormField label="E-mail *" value={form.email} onChange={handle('email')} type="email" />
                <FormSelect label="Serviço de interesse" value={form.service} onChange={handle('service')}
                  options={[
                    { value: 'todos', label: 'Não tenho certeza ainda' },
                    ...SERVICES.map(s => ({ value: s.id, label: `${s.id} — ${s.title}` })),
                  ]}
                />
                <FormField label="Sobre o projeto" value={form.message} onChange={handle('message')} multiline />
                <button type="submit" style={{
                  background: 'var(--lichen)',
                  color: 'var(--ink)',
                  padding: '14px 22px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  marginTop: 8,
                }}>
                  Enviar solicitação
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function FormField({ label, value, onChange, type = 'text', multiline }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block' }}>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'oklch(0.78 0.02 130)',
        marginBottom: 8,
      }}>{label}</div>
      <Tag
        type={type}
        value={value}
        onChange={onChange}
        rows={multiline ? 4 : undefined}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid oklch(0.36 0.014 150)',
          padding: '8px 0',
          color: 'var(--paper)',
          fontFamily: 'var(--body)',
          fontSize: '0.95rem',
          outline: 'none',
          resize: 'vertical',
        }}
        onFocus={e => e.currentTarget.style.borderBottomColor = 'var(--lichen)'}
        onBlur={e => e.currentTarget.style.borderBottomColor = 'oklch(0.36 0.014 150)'}
      />
    </label>
  );
}

function FormSelect({ label, value, onChange, options }) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'oklch(0.78 0.02 130)',
        marginBottom: 8,
      }}>{label}</div>
      <select value={value} onChange={onChange} style={{
        width: '100%',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid oklch(0.36 0.014 150)',
        padding: '8px 0',
        color: 'var(--paper)',
        fontFamily: 'var(--body)',
        fontSize: '0.95rem',
        outline: 'none',
        appearance: 'none',
        backgroundImage: 'linear-gradient(45deg, transparent 50%, oklch(0.78 0.02 130) 50%), linear-gradient(135deg, oklch(0.78 0.02 130) 50%, transparent 50%)',
        backgroundPosition: 'calc(100% - 14px) 16px, calc(100% - 8px) 16px',
        backgroundSize: '6px 6px',
        backgroundRepeat: 'no-repeat',
      }}>
        {options.map(o => (
          <option key={o.value} value={o.value} style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ============================================================
   FOOTER
============================================================ */
function Footer() {
  return (
    <footer style={{
      background: 'var(--paper)',
      borderTop: '1px solid var(--line)',
      padding: '48px 0 32px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 32,
          marginBottom: 48,
        }} className="footer-grid">
          <div>
            <Logo size={20} />
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-2)', marginTop: 16, maxWidth: 320, lineHeight: 1.5 }}>
              Serviços ambientais associados ao Laboratório de Radioecologia e Mudanças Globais (LARAMG · UERJ).
            </p>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 14 }}>Navegação</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
              <li><a href="#servicos" style={{ fontSize: '0.88rem' }}>Serviços</a></li>
              <li><a href="#processo" style={{ fontSize: '0.88rem' }}>Como funciona</a></li>
              <li><a href="#capacidades" style={{ fontSize: '0.88rem' }}>Capacidades</a></li>
              <li><a href="#equipe" style={{ fontSize: '0.88rem' }}>Equipe</a></li>
            </ul>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 14 }}>Institucional</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
              <li style={{ fontSize: '0.88rem' }}>LARAMG</li>
              <li style={{ fontSize: '0.88rem' }}>Dep. Biofísica e Biometria</li>
              <li style={{ fontSize: '0.88rem' }}>IBRAG · UERJ</li>
            </ul>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 14 }}>Contato</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
              <li style={{ fontSize: '0.88rem' }}>contato@climate-laramg.br</li>
              <li style={{ fontSize: '0.88rem' }}>Rio de Janeiro, RJ</li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: 24,
          borderTop: '1px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--ink-3)',
        }}>
          <span>© 2026 Climate · LARAMG/UERJ</span>
          <span>Rio de Janeiro · Brasil</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, ServicesSection, ProcessSection, CapabilitiesSection,
  MethodsSection, CasesSection, TeamSection, ContactSection, Footer,
});
