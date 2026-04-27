// Climate — visual primitives & placeholders

// Striped placeholder for "abstract scientific" imagery slots.
// Generates a unique-looking abstract pattern each time based on a seed.
function AbstractPlaceholder({ label, seed = 0, height = '100%', tone = 'moss' }) {
  const palettes = {
    moss: ['oklch(0.42 0.09 155)', 'oklch(0.55 0.10 145)', 'oklch(0.78 0.14 130)', 'oklch(0.88 0.04 125)'],
    paper: ['oklch(0.85 0.02 130)', 'oklch(0.78 0.025 130)', 'oklch(0.55 0.012 150)', 'oklch(0.36 0.014 150)'],
    deep: ['oklch(0.18 0.012 150)', 'oklch(0.30 0.08 158)', 'oklch(0.42 0.09 155)', 'oklch(0.78 0.14 130)'],
  };
  const pal = palettes[tone] || palettes.moss;
  const rand = (n) => {
    const x = Math.sin(seed * 9301 + n * 49297) * 233280;
    return x - Math.floor(x);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height,
      background: pal[3],
      overflow: 'hidden',
      borderRadius: 0,
    }}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* base stripes */}
        <defs>
          <pattern id={`stripes-${seed}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform={`rotate(${rand(1) * 60 + 15})`}>
            <line x1="0" y1="0" x2="0" y2="6" stroke={pal[2]} strokeWidth="1" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#stripes-${seed})`} />
        {/* Concentric rings — microscopy/contour feel */}
        {seed % 3 === 0 && Array.from({ length: 7 }).map((_, i) => (
          <circle key={i}
            cx={80 + rand(i + 2) * 240}
            cy={60 + rand(i + 12) * 180}
            r={20 + i * 18}
            fill="none"
            stroke={pal[1]}
            strokeWidth={i === 3 ? 1.5 : 0.7}
            opacity={0.5 - i * 0.05}
          />
        ))}
        {/* Data viz lines — sediment core / plot feel */}
        {seed % 3 === 1 && Array.from({ length: 12 }).map((_, i) => {
          const y = 30 + i * 22;
          const points = Array.from({ length: 20 }).map((_, j) => {
            const x = j * 21;
            const dy = (rand(i * 20 + j) - 0.5) * 14;
            return `${x},${y + dy}`;
          }).join(' ');
          return <polyline key={i} points={points} fill="none" stroke={pal[1]} strokeWidth="0.8" opacity={0.5} />;
        })}
        {/* Particle scatter — black carbon / PM */}
        {seed % 3 === 2 && Array.from({ length: 80 }).map((_, i) => (
          <circle key={i}
            cx={rand(i + 30) * 400}
            cy={rand(i + 60) * 300}
            r={rand(i + 90) * 4 + 0.5}
            fill={pal[1]}
            opacity={rand(i + 120) * 0.7 + 0.1}
          />
        ))}
        {/* horizontal accent line */}
        <line x1="0" y1={150 + rand(0) * 80} x2="400" y2={150 + rand(0) * 80} stroke={pal[0]} strokeWidth="1.2" opacity="0.6" />
      </svg>
      {label && (
        <div style={{
          position: 'absolute',
          bottom: 12, left: 12,
          fontFamily: 'var(--mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: pal[0],
          background: 'rgba(255,255,255,0.82)',
          padding: '4px 8px',
          backdropFilter: 'blur(4px)',
        }}>
          {label}
        </div>
      )}
    </div>
  );
}

function MonoKicker({ children, color }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)',
      fontSize: '0.72rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: color || 'var(--moss)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    }}>
      <span style={{ width: 24, height: 1, background: 'currentColor', opacity: 0.6 }} />
      {children}
    </div>
  );
}

function Tag({ children, variant = 'default' }) {
  const styles = {
    default: { background: 'var(--paper-2)', color: 'var(--ink-2)', border: '1px solid var(--line)' },
    moss: { background: 'var(--moss)', color: 'var(--paper)', border: '1px solid var(--moss)' },
    outline: { background: 'transparent', color: 'var(--ink-2)', border: '1px solid var(--line-2)' },
    lichen: { background: 'var(--lichen-soft)', color: 'var(--moss-deep)', border: '1px solid transparent' },
  };
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 10px',
      borderRadius: 999,
      fontFamily: 'var(--mono)',
      fontSize: '0.68rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...styles[variant],
    }}>
      {children}
    </span>
  );
}

// SVG wordmark — Climate
function Logo({ size = 22, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke={color || 'currentColor'} strokeWidth="1.6" />
        <path d="M12 2 a10 10 0 0 1 0 20" stroke={color || 'currentColor'} strokeWidth="1.6" fill="none" />
        <line x1="2" y1="12" x2="22" y2="12" stroke={color || 'currentColor'} strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" fill={color || 'currentColor'} />
      </svg>
      <span style={{
        fontFamily: 'var(--display)',
        fontSize: size * 0.95,
        fontWeight: 500,
        letterSpacing: '-0.01em',
        color: color || 'inherit',
      }}>
        Climate
      </span>
    </div>
  );
}

// Animated scrolling marquee for laboratory specs
function Marquee({ items }) {
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      background: 'var(--paper-2)',
    }}>
      <div style={{
        display: 'flex',
        gap: 48,
        padding: '14px 0',
        animation: 'marquee 60s linear infinite',
        whiteSpace: 'nowrap',
        width: 'max-content',
      }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--ink-2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--moss)' }} />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { AbstractPlaceholder, MonoKicker, Tag, Logo, Marquee });
