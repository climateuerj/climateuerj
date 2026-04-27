// Climate — content (PT-BR)

const SERVICES = [
  {
    id: '01',
    title: 'Datação Sedimentar',
    category: 'sedimentos',
    categoryLabel: 'Sedimentos',
    technique: 'Pb-210',
    summary: 'Técnica de chumbo-210 para datação de sedimentos com até 150 anos. Inclui criação de modelo geocronológico.',
    details: [
      'Análise de Pb-210 (chumbo-210)',
      'Janela temporal: até 150 anos',
      'Construção de modelo geocronológico',
      'Aplicação em registros paleoambientais',
    ],
    deliverable: 'Modelo geocronológico + relatório técnico',
    duration: '4–8 semanas',
  },
  {
    id: '02',
    title: 'Monitoramento de Sedimentos',
    category: 'sedimentos',
    categoryLabel: 'Sedimentos',
    technique: 'Sediment Trap · Van Veen',
    summary: 'Coleta contínua e pontual de sedimentos em ambientes aquáticos — de baías a oceanos.',
    details: [
      'Sediment Trap: armadilha de fluxo contínuo e total',
      'Van Veen: pegador para sedimentos superficiais',
      'Aplicável a baías, estuários e oceanos',
      'Suporte para campanhas de longa duração',
    ],
    deliverable: 'Amostras processadas + dados de fluxo',
    duration: 'Contínuo',
  },
  {
    id: '03',
    title: 'Geoquímica',
    category: 'geoquimica',
    categoryLabel: 'Geoquímica',
    technique: 'XRF — Vanta',
    summary: 'Fluorescência de raio-x não destrutiva com equipamento Vanta para caracterização elementar.',
    details: [
      'Análise por XRF (Fluorescência de Raio-X)',
      'Técnica não destrutiva',
      'Equipamento Vanta portátil',
      'Quantificação multielementar',
    ],
    deliverable: 'Perfil elementar + relatório',
    duration: '2–4 semanas',
  },
  {
    id: '04',
    title: 'Análise Granulométrica',
    category: 'sedimentos',
    categoryLabel: 'Sedimentos',
    technique: 'Curva granulométrica',
    summary: 'Construção de curva granulométrica de sedimentos para caracterização textural.',
    details: [
      'Distribuição de tamanho de partículas',
      'Classificação textural (areia, silte, argila)',
      'Curva acumulativa e histograma',
      'Parâmetros estatísticos de Folk & Ward',
    ],
    deliverable: 'Curvas + parâmetros estatísticos',
    duration: '1–3 semanas',
  },
  {
    id: '05',
    title: 'Qualidade do Ar',
    category: 'ar',
    categoryLabel: 'Atmosfera',
    technique: 'PM 2,5 / PM 10',
    summary: 'Amostragem de micropartículas em filtros para PM 2,5 e PM 10 microns.',
    details: [
      'Amostragem ativa em filtros',
      'Frações PM 2,5 µm e PM 10 µm',
      'Gravimetria e análise complementar',
      'Compatível com estudos de exposição',
    ],
    deliverable: 'Concentrações + análise gravimétrica',
    duration: 'Sob demanda',
  },
  {
    id: '06',
    title: 'Black Carbon',
    category: 'ar',
    categoryLabel: 'Atmosfera',
    technique: 'Quantificação ótica',
    summary: 'Registro de micropartículas de incêndios via quantificação da queima incompleta de combustível fóssil e biomassa.',
    details: [
      'Quantificação de partículas de fuligem',
      'Marcador de incêndios e queima de biomassa',
      'Indicador de combustão de fósseis',
      'Aplicação em estudos atmosféricos e paleoambientais',
    ],
    deliverable: 'Concentrações + interpretação',
    duration: '3–5 semanas',
  },
  {
    id: '07',
    title: 'Físico-química da Água',
    category: 'agua',
    categoryLabel: 'Água',
    technique: 'Sonda Hanna',
    summary: 'Determinação de parâmetros físico-químicos in-situ com sonda multiparâmetros Hanna.',
    details: [
      'Temperatura, pH, condutividade',
      'Oxigênio dissolvido, ORP, salinidade',
      'Medições in-situ ou em laboratório',
      'Calibração rastreável',
    ],
    deliverable: 'Tabela de parâmetros + relatório',
    duration: 'Sob demanda',
  },
];

const CATEGORIES = [
  { id: 'todos', label: 'Todos os serviços', count: 7 },
  { id: 'sedimentos', label: 'Sedimentos', count: 3 },
  { id: 'geoquimica', label: 'Geoquímica', count: 1 },
  { id: 'ar', label: 'Atmosfera', count: 2 },
  { id: 'agua', label: 'Água', count: 1 },
];

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Briefing',
    body: 'Conversamos sobre seu projeto, objetivos científicos e cronograma. Avaliamos viabilidade e métodos aplicáveis.',
  },
  {
    n: '02',
    title: 'Proposta',
    body: 'Enviamos escopo técnico, cronograma e orçamento. Toda metodologia é referenciada à legislação vigente.',
  },
  {
    n: '03',
    title: 'Coleta & Análise',
    body: 'Equipe da Climate executa campanha de campo ou recebe amostras. Análises na infraestrutura LARAMG/UERJ.',
  },
  {
    n: '04',
    title: 'Relatório',
    body: 'Entregamos relatório técnico, dados brutos e interpretação. Suporte continuado para publicação acadêmica.',
  },
];

const REGULATIONS = [
  { code: 'RE Nº 9', body: 'Resolução — Qualidade do ar em ambientes climatizados' },
  { code: 'MS Nº 2914', body: 'Portaria do Ministério da Saúde — Padrões de potabilidade' },
  { code: 'CONAMA Nº 357', body: 'Classificação de corpos d\u2019água e diretrizes ambientais' },
  { code: 'MS Nº 518', body: 'Portaria do Ministério da Saúde — Controle e vigilância da qualidade da água' },
  { code: 'CONAMA Nº 396', body: 'Diretrizes para o enquadramento de águas subterrâneas' },
];

const CASES = [
  {
    tag: 'Baía de Guanabara',
    title: 'Reconstrução geocronológica de testemunho sedimentar',
    body: 'Datação Pb-210 e XRF de testemunho de 60 cm para reconstrução da contaminação histórica.',
    meta: '2024 · Datação · Geoquímica',
  },
  {
    tag: 'Mata Atlântica · RJ',
    title: 'Black Carbon em campanha de monitoramento atmosférico',
    body: 'Quantificação de partículas de queima de biomassa em estação remota durante estação seca.',
    meta: '2023 · Atmosfera',
  },
  {
    tag: 'Lagoa Rodrigo de Freitas',
    title: 'Monitoramento físico-químico de longo prazo',
    body: 'Sonda Hanna multiparâmetros em sete pontos amostrais ao longo de 18 meses.',
    meta: '2022—2023 · Água',
  },
];

const TEAM = [
  { name: 'Dra. Coordenação Científica', role: 'Diretora · Radioecologia', tag: 'LARAMG/UERJ' },
  { name: 'Dr. Sedimentologia', role: 'Pesquisador · Datação Pb-210', tag: 'Pós-doc' },
  { name: 'Dra. Atmosfera', role: 'Pesquisadora · Aerobiologia', tag: 'Docente' },
  { name: 'MSc. Geoquímica', role: 'Analista · XRF / Granulometria', tag: 'Mestrado' },
];

const CAPABILITIES = [
  { label: 'Espectrômetro XRF Vanta', kind: 'Geoquímica' },
  { label: 'Sonda multiparâmetros Hanna', kind: 'Água' },
  { label: 'Sediment Trap (fluxo contínuo)', kind: 'Sedimentos' },
  { label: 'Pegador Van Veen', kind: 'Sedimentos' },
  { label: 'Amostradores PM 2,5 / PM 10', kind: 'Atmosfera' },
  { label: 'Sistema de quantificação Black Carbon', kind: 'Atmosfera' },
  { label: 'Laboratório de granulometria', kind: 'Sedimentos' },
  { label: 'Sala de processamento radioativo Pb-210', kind: 'Sedimentos' },
];

Object.assign(window, {
  SERVICES, CATEGORIES, PROCESS_STEPS, REGULATIONS, CASES, TEAM, CAPABILITIES,
});
