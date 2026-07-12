import './App.css'

const heroStats = [
  { value: '35+', label: 'anos de indústria, do produto ao chão de fábrica' },
  { value: '5', label: 'países: Brasil, China, Índia, México e Argentina' },
  { value: '6', label: 'multinacionais globais na trajetória' },
]

const companies = ['Ford', 'General Motors', 'Volkswagen', 'Honda', 'PSA Peugeot Citroën', 'Faber-Castell']

const differentiators = [
  'Trajetória sólida em montadoras e multinacionais globais',
  'Combinação de estratégia, execução e desenvolvimento de lideranças',
  'Foco em resultado mensurável: desperdício, custo, produtividade e OEE',
  'Experiência prática na implantação de cultura Lean no chão de fábrica',
  'Condução de mudanças com disciplina de gestão diária e governança',
  'Formação de times de alta performance com coaching em gemba',
]

const offerings = [
  {
    icon: 'compass',
    title: 'Estratégia e Desdobramento',
    body: 'Conexão entre visão do negócio, metas anuais e execução no dia a dia por meio de Hoshin Kanri e KPIs críticos.',
  },
  {
    icon: 'clipboard',
    title: 'Sistema de Gestão Diária',
    body: 'Implantação da rotina de liderança com trabalho padronizado, gestão visual, prestação de contas e disciplina operacional.',
  },
  {
    icon: 'cycle',
    title: 'Execução + Melhoria Simultânea',
    body: 'Governança dual para manter performance diária e acelerar ganhos estruturais com DMAIC, PDCA e práticas Lean.',
  },
  {
    icon: 'people',
    title: 'Desenvolvimento de Lideranças',
    body: 'Capacitação prática em comportamento Lean, coaching em gemba e desenvolvimento de equipes orientadas a resultado.',
  },
  {
    icon: 'factory',
    title: 'Excelência em Manufatura',
    body: 'Projetos para reduzir desperdícios, melhorar fluxo, reduzir setup com SMED e elevar produtividade com estabilidade do processo.',
  },
  {
    icon: 'wrench',
    title: 'TPM e Confiabilidade',
    body: 'Aplicação dos fundamentos de TPM para elevar disponibilidade, confiabilidade de ativos e alavancar ganhos de OEE.',
  },
]

const process = [
  {
    step: '01',
    title: 'Diagnóstico no gemba',
    body: 'Avaliação da operação onde o valor acontece: indicadores, rotina de gestão, fluxo e maturidade da liderança.',
  },
  {
    step: '02',
    title: 'Plano com metas mensuráveis',
    body: 'Priorização das alavancas de maior impacto e construção de um plano com metas, responsáveis e prazos claros.',
  },
  {
    step: '03',
    title: 'Execução com o seu time',
    body: 'Implantação lado a lado com as equipes, transferindo método e capacitando líderes para sustentar os ganhos.',
  },
]

const journey = [
  {
    period: '9 anos',
    title: 'Consultoria internacional',
    body: 'Projetos de excelência operacional para clientes no Brasil, México e Argentina, com resultados em produtividade e cultura.',
  },
  {
    period: '7 anos',
    title: 'Bens de consumo · Faber-Castell',
    body: 'Foco em manufatura, manutenção e qualidade, incluindo lançamento de fábrica em Manaus e atuação na Índia.',
  },
  {
    period: '18 anos',
    title: 'Indústria automotiva',
    body: '6 anos em desenvolvimento de produtos e 12 anos em melhoria de manufatura, com contribuições em Ford, GM, VW, PSA e Honda.',
  },
]

const toolbox = ['Lean', 'Hoshin Kanri', 'DMAIC', 'PDCA', 'TPM', 'SMED', 'Gestão Diária', 'Kaizen', '5S', 'Gestão Visual']

const icons = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 2.5h6v3H9z" />
      <path d="m8.5 12 2.2 2.2 4.3-4.4" />
    </>
  ),
  cycle: (
    <>
      <path d="M20 12a8 8 0 1 1-2.4-5.7" />
      <path d="M20 3v4h-4" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.6-3.4 2.8-5 5.5-5s4.9 1.6 5.5 5" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16 15.2c2.3.2 4 1.6 4.5 4.3" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V4h6v17z" />
      <path d="M8 17h.01M13 17h.01M18 17h.01" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 6.5a4.5 4.5 0 0 1 5.6-4.3l-3.1 3.2 1.6 1.6 3.2-3.1a4.5 4.5 0 0 1-5.8 5.6L7.5 18a2 2 0 1 1-2.8-2.8l8.5-8.5Z" />
    </>
  ),
}

function LogoMark({ className = 'logo-mark' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="currentColor">
        <circle cx="24" cy="24" r="15" strokeWidth="11" strokeDasharray="74.25 20" transform="rotate(38 24 24)" />
        <circle cx="24" cy="24" r="6.5" strokeWidth="4" strokeDasharray="30.84 10" transform="rotate(9 24 24)" />
      </g>
    </svg>
  )
}

function Icon({ name }) {
  return (
    <svg
      className="service-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#topo" className="wordmark">
            <LogoMark />
            <span className="wordmark-text">
              Cortazzo <span>Consultoria</span>
            </span>
          </a>
          <nav className="site-nav" aria-label="Seções do site">
            <a href="#diferenciais">Diferenciais</a>
            <a href="#servicos">Serviços</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#contato">Contato</a>
          </nav>
          <a href="#contato" className="btn btn-small">
            Agendar conversa
          </a>
        </div>
      </header>

      <section className="hero" id="topo">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Consultoria e Treinamento em Excelência Operacional</p>
              <h1>
                Transforme sua operação em <em>vantagem competitiva</em>
              </h1>
              <p className="lead">
                Hélio Cortazzo Junior soma mais de 35 anos de experiência em
                desenvolvimento de produtos, manufatura e transformação Lean em empresas
                globais. Apoia indústrias na redução de desperdícios, aumento de
                produtividade, desenvolvimento de líderes e melhoria consistente de
                indicadores.
              </p>
              <div className="hero-actions">
                <a href="#contato" className="btn btn-primary">
                  Agendar conversa
                </a>
                <a href="#servicos" className="btn btn-ghost">
                  Conhecer os serviços
                </a>
              </div>
            </div>
            <figure className="hero-figure">
              <img
                src="/helio.jpg"
                alt="Hélio Cortazzo Junior"
                onError={(event) => {
                  event.currentTarget.closest('figure').style.display = 'none'
                }}
              />
              <figcaption>Hélio Cortazzo Junior</figcaption>
            </figure>
          </div>
          <dl className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.value} className="hero-stat">
                <dt className="visually-hidden">Destaque</dt>
                <dd>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="company-strip" aria-label="Empresas da trajetória">
        <div className="wrap strip-inner">
          <p className="strip-label">Trajetória construída em</p>
          <div className="strip-names">
            {companies.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="section" id="diferenciais">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">01 · Por que contratar</p>
              <h2>Experiência comprovada para gerar resultado no chão de fábrica</h2>
            </div>
            <ul className="check-grid">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-alt" id="servicos">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">02 · Serviços</p>
              <h2>Atuação consultiva para acelerar performance operacional</h2>
            </div>
            <div className="service-grid">
              {offerings.map((item) => (
                <article key={item.title} className="service-card">
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Foto: Unsplash (XBWF6_TEsFM), licença Unsplash — uso comercial permitido */}
        <section className="image-band" aria-label="Chão de fábrica">
          <div className="wrap">
            <p className="band-label">Gemba</p>
            <p className="band-quote">
              O resultado sustentável se constrói no chão de fábrica,
              junto com quem faz.
            </p>
          </div>
        </section>

        <section className="section" id="como-trabalho">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">03 · Como trabalho</p>
              <h2>Do diagnóstico ao resultado sustentado</h2>
            </div>
            <div className="process-grid">
              {process.map((item) => (
                <article key={item.step} className="process-step">
                  <p className="process-number">{item.step}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="trajetoria">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">04 · Trajetória</p>
              <h2>Setores e geografias com atuação prática</h2>
            </div>
            <ol className="journey">
              {journey.map((step) => (
                <li key={step.title}>
                  <p className="journey-period">{step.period}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="metodos" aria-label="Metodologias">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">05 · Métodos e práticas</p>
              <h2>Ferramentas aplicadas para resolver desafios reais</h2>
            </div>
            <div className="tool-list">
              {toolbox.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="cta" id="contato">
        <div className="wrap">
          <p className="eyebrow">Próximo passo</p>
          <h2>Vamos conversar sobre os desafios da sua operação</h2>
          <p className="cta-lead">
            Desenvolvimento de Lideranças, Lean Manufacturing, Gestão Diária, TPM,
            DMAIC e Melhoria Contínua com foco em resultado de negócio.
          </p>
          <div className="cta-actions">
            <a
              href="https://wa.me/5516993204409"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <a href="mailto:helio.cortazzo@outlook.com" className="btn btn-ghost">
              Enviar e-mail
            </a>
          </div>
          <div className="contact-list">
            <a href="tel:+5516993204409">(16) 99320-4409</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:helio.cortazzo@outlook.com">helio.cortazzo@outlook.com</a>
            <span aria-hidden="true">·</span>
            <a href="https://www.linkedin.com/in/hcortazzo/" target="_blank" rel="noreferrer">
              linkedin.com/in/hcortazzo
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <LogoMark className="logo-mark footer-mark" />
          <p>© {new Date().getFullYear()} Cortazzo Consultoria Ltda · Hélio Cortazzo Junior</p>
        </div>
      </footer>
    </div>
  )
}

export default App
