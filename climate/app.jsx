import React from 'react';

export default function App() {
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