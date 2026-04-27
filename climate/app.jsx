// Climate — root app

const { useState: useState2, useEffect: useEffect2 } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "moss",
  "fontPair": "tight",
  "density": "comfortable",
  "showMarquee": true
}/*EDITMODE-END*/;

const ACCENTS = {
  moss:    { primary: 'oklch(0.42 0.09 155)', deep: 'oklch(0.30 0.08 158)', light: 'oklch(0.78 0.14 130)', soft: 'oklch(0.88 0.09 128)' },
  forest:  { primary: 'oklch(0.34 0.07 168)', deep: 'oklch(0.24 0.06 170)', light: 'oklch(0.72 0.16 145)', soft: 'oklch(0.85 0.08 145)' },
  ocean:   { primary: 'oklch(0.42 0.09 220)', deep: 'oklch(0.30 0.08 225)', light: 'oklch(0.78 0.13 210)', soft: 'oklch(0.88 0.07 210)' },
  rust:    { primary: 'oklch(0.45 0.12 50)',  deep: 'oklch(0.32 0.10 50)',  light: 'oklch(0.78 0.13 75)',  soft: 'oklch(0.88 0.08 75)'  },
};

const FONT_PAIRS = {
  tight:  { display: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif" },
  grotesk:{ display: "'Inter', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif" },
  mono:   { display: "'JetBrains Mono', ui-monospace, monospace", body: "'Inter', system-ui, sans-serif" },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to CSS vars
  useEffect2(() => {
    const root = document.documentElement;
    const acc = ACCENTS[tweaks.accent] || ACCENTS.moss;
    root.style.setProperty('--moss', acc.primary);
    root.style.setProperty('--moss-deep', acc.deep);
    root.style.setProperty('--lichen', acc.light);
    root.style.setProperty('--lichen-soft', acc.soft);

    const fp = FONT_PAIRS[tweaks.fontPair] || FONT_PAIRS.tight;
    root.style.setProperty('--display', fp.display);
    root.style.setProperty('--body', fp.body);
  }, [tweaks.accent, tweaks.fontPair]);

  return (
    <div style={{ fontFamily: 'var(--body)' }}>
      <Nav />
      <Hero />
      {tweaks.showMarquee && (
        <Marquee items={[
          'Pb-210 · datação sedimentar',
          'XRF Vanta · fluorescência de raio-x',
          'PM 2,5 · qualidade do ar',
          'PM 10 · micropartículas',
          'Black Carbon · queima de biomassa',
          'Sediment Trap · fluxo contínuo',
          'Van Veen · sedimentos superficiais',
          'Sonda Hanna · físico-química da água',
          'Granulometria · curva textural',
        ]} />
      )}
      <ServicesSection />
      <ProcessSection />
      <CapabilitiesSection />
      <MethodsSection />
      <CasesSection />
      <TeamSection />
      <ContactSection />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Cor de acento">
          <TweakRadio
            value={tweaks.accent}
            onChange={(v) => setTweak('accent', v)}
            options={[
              { value: 'moss', label: 'Moss' },
              { value: 'forest', label: 'Floresta' },
              { value: 'ocean', label: 'Oceano' },
              { value: 'rust', label: 'Terracota' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Tipografia">
          <TweakRadio
            value={tweaks.fontPair}
            onChange={(v) => setTweak('fontPair', v)}
            options={[
              { value: 'tight', label: 'Inter Tight' },
              { value: 'grotesk', label: 'Inter' },
              { value: 'mono', label: 'Mono títulos' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Marquee técnico">
          <TweakToggle
            value={tweaks.showMarquee}
            onChange={(v) => setTweak('showMarquee', v)}
            label="Mostrar"
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
