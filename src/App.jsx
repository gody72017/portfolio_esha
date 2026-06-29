import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Copy,
  Database,
  ExternalLink,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Menu,
  NotebookTabs,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';

const email = 'eshajaiswal675@gmail.com';
const linkedInUrl = 'http://www.linkedin.com/in/esha-jaiswal-037626245';
const financeRepoUrl = 'https://github.com/gody72017/finance-analytics-portfolio';

const navItems = [
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

const highlights = [
  { value: '3 years', label: 'Finance operations, reporting, controls, and stakeholder support' },
  { value: 'MSc', label: 'Business Analytics and AI at Nottingham Trent University' },
  { value: 'Senior', label: 'Promoted to Senior Process Associate at Genpact in 2024' },
  { value: 'Excel + Python + SQL', label: 'Analytics toolkit for reporting, validation, and RCA' },
];

const projects = [
  {
    slug: 'financial-dashboard',
    title: 'Financial Dashboard',
    type: 'Management reporting + KPI review',
    summary:
      'Built a management-style dashboard for revenue, expenses, gross profit, net profit, profit margin, product revenue, and department costs.',
    contribution:
      'Structured finance KPIs into a clear reporting view so management can review profitability, expense patterns, and product revenue movement quickly.',
    tags: ['Management reporting', 'KPI tracking', 'Profitability analysis', 'Dashboarding'],
    metrics: ['Revenue trend', 'Profit margin', 'Cost review'],
    businessQuestions: ['How are revenue, gross profit, and net profit trending?', 'Which products generate the most revenue?', 'Which departments drive operating costs?', 'Is the company maintaining healthy profit margins?'],
    outputs: ['KPI cards for revenue, expenses, gross profit, net profit, and profit margin', 'Monthly trend chart', 'Product-wise revenue chart', 'Department-wise cost chart', 'Management summary'],
    signal: 'Shows that Esha can turn finance data into executive-style reporting and decision support.',
    tools: ['Management reporting', 'KPI tracking', 'Pandas', 'Plotly', 'Excel-ready datasets'],
    image: '/images/finance/financial-dashboard.png',
  },
  {
    slug: 'budget-vs-actual',
    title: 'Budget vs Actual Analysis',
    type: 'Variance analysis + commentary',
    summary:
      'Reviewed quarterly budget-versus-actual performance to identify profit variance, department-level impact, adverse drivers, and management commentary.',
    contribution:
      'Converted financial variance into useful business language: what changed, where attention is needed, and what management should review next.',
    tags: ['Variance analysis', 'Budget review', 'Favourable/adverse', 'Management commentary'],
    metrics: ['Variance %', 'Profit impact', 'Adverse drivers'],
    businessQuestions: ['Did actual profit finish above or below budget?', 'Which departments created the largest favourable or adverse variances?', 'Which cost categories require management attention?', 'What reason codes explain the biggest budget misses?'],
    outputs: ['Budgeted revenue versus actual revenue', 'Budgeted expense versus actual expense', 'Variance amount and variance percentage', 'Favourable/adverse status', 'Automated management commentary'],
    signal: 'Demonstrates financial performance review, variance explanation, and concise reporting for management.',
    tools: ['Budget review', 'Variance analysis', 'Management commentary', 'Pandas', 'Dashboard reporting'],
    image: '/images/finance/budget-vs-actual.png',
  },
  {
    slug: 'sql-financial-analysis',
    title: 'SQL Financial Analysis',
    type: 'SQL + business insight',
    summary:
      'Used SQL to analyze transaction, customer, product, region, invoice, and payment data to surface performance and payment-delay insights.',
    contribution:
      'Connected relational data analysis to business questions around revenue, margin, customer value, repeat purchase behaviour, and payment risk.',
    tags: ['SQL basics', 'Revenue analysis', 'Customer segmentation', 'Payment delay review'],
    metrics: ['Margin trend', 'Top customers', 'Late payments'],
    businessQuestions: ['Which products generate the most revenue and gross profit?', 'Which customer segments are most valuable?', 'What is the monthly revenue and margin trend?', 'Where are payment delays concentrated?'],
    outputs: ['Monthly revenue, gross profit, and margin trend', 'Top products and customers', 'Segment performance', 'Late payment analysis', 'Regional performance'],
    signal: 'Shows comfort working with relational business data and translating queries into plain-English insights.',
    tools: ['SQL basics', 'Business analysis', 'Customer segmentation', 'Margin analysis', 'CSV reporting'],
    image: '/images/finance/sql-financial-analysis.png',
  },
  {
    slug: 'portfolio-performance',
    title: 'Portfolio Performance Analysis',
    type: 'Return review + benchmark comparison',
    summary:
      'Reviewed portfolio return, risk, benchmark comparison, volatility, Sharpe ratio, drawdown, and allocation balance.',
    contribution:
      'Presented investment analytics in a business-friendly way, showing that performance should be reviewed across return, risk, benchmark, and concentration together.',
    tags: ['Portfolio analytics', 'Benchmarking', 'Risk review', 'Diversification'],
    metrics: ['Return comparison', 'Sharpe ratio', 'Drawdown'],
    businessQuestions: ['How did the portfolio perform against the benchmark?', 'What risk measures should be reviewed together?', 'Where is allocation concentration visible?', 'How can performance be explained without relying on one metric?'],
    outputs: ['Return and benchmark comparison', 'Volatility and Sharpe ratio', 'Drawdown review', 'Allocation visuals', 'Portfolio summary'],
    signal: 'Adds finance analytics range while keeping the explanation business-friendly and decision-oriented.',
    tools: ['Portfolio analytics', 'Benchmarking', 'Risk review', 'Pandas', 'Plotly'],
    image: '/images/finance/portfolio-performance.png',
  },
  {
    slug: 'stock-valuation-dcf',
    title: 'Stock Valuation DCF',
    type: 'Forecasting + valuation assumptions',
    summary:
      'Created a simplified DCF valuation workflow covering free cash flow forecasting, WACC, terminal value, valuation range, and sensitivity.',
    contribution:
      'Structured valuation assumptions into a clear model narrative, making the sensitivity of fair value to WACC and terminal growth easier to review.',
    tags: ['DCF valuation', 'Forecasting', 'Sensitivity analysis', 'Financial modelling'],
    metrics: ['FCF forecast', 'Terminal value', 'Sensitivity range'],
    businessQuestions: ['Which assumptions drive the valuation most?', 'How do WACC and terminal growth affect fair value?', 'What does the valuation range suggest?', 'What limitations should be clearly communicated?'],
    outputs: ['Free cash flow forecast', 'Terminal value calculation', 'Fair value estimate', 'Sensitivity table', 'Valuation summary'],
    signal: 'Shows structured financial modelling thinking and the ability to communicate assumptions clearly.',
    tools: ['DCF valuation', 'Forecasting', 'Sensitivity analysis', 'Financial modelling', 'Python basics'],
    image: '/images/finance/stock-valuation-dcf.png',
  },
];

const experiences = [
  {
    company: 'Genpact India Pvt. Ltd.',
    location: 'Noida, India',
    role: 'Senior Process Associate',
    period: 'Sep 2022 - Jul 2025',
    points: [
      'Supported reporting and operational governance for high-volume finance processes, tracking SLA adherence, backlog, aging, and accuracy through KPI/MIS reporting.',
      'Investigated exceptions and recurring defects, performed root-cause analysis, documented findings, and coordinated corrective actions with Ops and Quality stakeholders.',
      'Created SOPs, checklists, evidence trackers, and month-end support packs to strengthen controls, standardise execution, and improve audit readiness.',
      'Trained and supervised new joiners, performed QC reviews, and coached teams on SAP, Oracle, QuickBooks, and BlackLine workflows.',
    ],
  },
  {
    company: 'Midas Consulting',
    location: 'Noida, India',
    role: 'IT Recruiter',
    period: 'Jul 2022 - Sep 2022',
    points: [
      'Captured client requirements and translated role needs into screening criteria and structured recruitment documentation.',
      'Tracked pipeline KPIs and produced weekly updates on submissions, interviews, and closures for stakeholder decision-making.',
      'Coordinated interview scheduling, feedback loops, and offer documentation across candidates and client stakeholders.',
    ],
  },
];

const skillGroups = [
  {
    icon: ClipboardCheck,
    title: 'Business Analysis',
    items: ['Requirements gathering', 'Process mapping', 'Gap analysis', 'Stakeholder coordination', 'SOPs and checklists'],
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    items: ['KPI/MIS reporting', 'Excel dashboards', 'PivotTables and lookups', 'Power Query basics', 'Basic Python analytics'],
  },
  {
    icon: Database,
    title: 'Data',
    items: ['SQL fundamentals', 'SQLite and MS Access', 'Data validation', 'Trend analysis', 'Issue logging', 'RCA'],
  },
  {
    icon: ShieldCheck,
    title: 'Operations & Controls',
    items: ['SLA monitoring', 'Exception handling', 'Audit evidence', 'Compliance documentation', 'Month-end support'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Systems & Tools',
    items: ['SAP', 'Oracle', 'BlackLine', 'QuickBooks', 'PABS', 'Google Workspace', 'GitHub'],
  },
  {
    icon: UsersRound,
    title: 'Leadership',
    items: ['Onboarding', 'Cross-training', 'QC reviews', 'Coaching', 'Task allocation', 'Escalation support'],
  },
];

const education = [
  {
    school: 'Nottingham Trent University',
    location: 'Nottingham, UK',
    degree: 'MSc Business Analytics and AI',
    period: 'Sep 2025 - Present',
  },
  {
    school: 'Babu Banarasi Das University',
    location: 'Lucknow, India',
    degree: 'Bachelor of Business Administration',
    period: 'Aug 2019 - Jun 2022',
  },
];

const languages = ['English - Proficient', 'Hindi - Proficient'];

function Header({ activeSection, isDetailPage = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="site-header">
      <a className="monogram" href={isDetailPage ? '/' : '#top'} aria-label="Esha Jaiswal, back to top">
        EJ
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={isOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
        {navItems.map(([id, label]) => (
          <a
            key={id}
            className={activeSection === id ? 'is-active' : ''}
            href={isDetailPage ? `/#${id}` : `#${id}`}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </a>
        ))}
        <a className="nav-cta" href={linkedInUrl} target="_blank" rel="noreferrer">
          LinkedIn <ExternalLink size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function AnalyticsPreview({ project }) {
  return (
    <figure className="analytics-preview screenshot-preview" aria-label={`${project.title} dashboard preview`}>
      <div className="preview-header">
        <span>{project.type}</span>
        <LineChart size={22} aria-hidden="true" />
      </div>
      <img src={project.image} alt={`${project.title} dashboard screenshot`} width="1200" height="675" loading="lazy" />
      <figcaption>{project.signal}</figcaption>
    </figure>
  );
}

function ProjectPage({ project }) {
  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  useEffect(() => {
    document.title = `${project.title} | Esha Jaiswal`;
    window.scrollTo(0, 0);
  }, [project.title]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header isDetailPage />
      <main id="main" className="project-page">
        <section className="project-hero" aria-labelledby="project-title">
          <div>
            <a className="back-link" href="/#projects">
              <ArrowLeft size={18} aria-hidden="true" /> Back to projects
            </a>
            <p className="eyebrow">Finance analytics case study</p>
            <h1 id="project-title">{project.title}</h1>
            <p className="project-lead">{project.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={financeRepoUrl} target="_blank" rel="noreferrer">
                View source repo <ExternalLink size={18} aria-hidden="true" />
              </a>
              <a className="button button-ghost dark-button" href={`mailto:${email}`}>
                Contact Esha <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="project-evidence">
            <img src={project.image} alt={`${project.title} dashboard screenshot`} width="1200" height="675" />
            <figcaption>{project.type}</figcaption>
          </figure>
        </section>

        <section className="project-summary-strip" aria-label="Recruiter signal">
          <article>
            <BriefcaseBusiness size={26} aria-hidden="true" />
            <strong>Recruiter signal</strong>
            <p>{project.signal}</p>
          </article>
          <article>
            <ClipboardCheck size={26} aria-hidden="true" />
            <strong>Business focus</strong>
            <p>{project.type}</p>
          </article>
          <article>
            <Database size={26} aria-hidden="true" />
            <strong>Technical support</strong>
            <p>Python, SQL, and dashboards are positioned as support for analysis, reporting, validation, and decision-making.</p>
          </article>
        </section>

        <section className="project-body section-band">
          <div className="project-column">
            <p className="eyebrow">Business questions</p>
            <h2>What this page answers.</h2>
            <ul className="check-list">
              {project.businessQuestions.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-column">
            <p className="eyebrow">Outputs</p>
            <h2>What was produced.</h2>
            <ul className="check-list">
              {project.outputs.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="project-tools section-band" aria-labelledby="tools-title">
          <div>
            <p className="eyebrow">Skills shown</p>
            <h2 id="tools-title">Business-first, technical where useful.</h2>
          </div>
          <div className="tool-chip-grid">
            {project.tools.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="more-projects section-band" aria-labelledby="more-projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">More analytics pages</p>
              <h2 id="more-projects-title">Continue the analytics portfolio.</h2>
            </div>
            <p>Each page is static, fast, and written for business analyst, reporting analyst, finance analyst, and analytics screening.</p>
          </div>
          <div className="compact-project-grid">
            {otherProjects.map((item) => (
              <a href={`/projects/${item.slug}`} key={item.slug}>
                <img src={item.image} alt="" loading="lazy" width="640" height="360" />
                <span>{item.type}</span>
                <strong>{item.title}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <span>&copy; {new Date().getFullYear()} Esha Jaiswal</span>
        <span>Business analysis - finance analytics - reporting</span>
        <a href="/#top">
          Back home <ArrowRight size={15} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const detailProject = projects.find((project) => `/projects/${project.slug}` === path);

  if (detailProject) return <ProjectPage project={detailProject} />;
  return <PortfolioHome />;
}

function PortfolioHome() {
  const [activeSection, setActiveSection] = useState('projects');
  const [activeProject, setActiveProject] = useState(0);
  const [copied, setCopied] = useState(false);
  const observerIds = useMemo(() => navItems.map(([id]) => id), []);
  const selectedProject = projects[activeProject];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-22% 0px -60%', threshold: [0.08, 0.25, 0.5] },
    );

    observerIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) sectionObserver.observe(node);
    });

    return () => sectionObserver.disconnect();
  }, [observerIds]);

  useEffect(() => {
    const targets = [
      ...document.querySelectorAll(
        '.reveal, .highlight-strip article, .skills-grid, .skills-grid article, .timeline article, .education-list article',
      ),
    ];

    targets.forEach((node, index) => {
      node.style.setProperty('--reveal-delay', `${(index % 4) * 60}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8%' },
    );

    targets.forEach((node) => revealObserver.observe(node));
    return () => revealObserver.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header activeSection={activeSection} />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">Business analyst - analytics and AI</p>
            <h1 id="hero-title">Esha Jaiswal</h1>
            <p className="hero-role">
              Business Analyst with finance operations experience, reporting discipline, and an MSc focus in Business
              Analytics and AI.
            </p>
            <p className="hero-summary">
              I turn operational data, process evidence, and stakeholder requirements into clearer reporting, stronger
              controls, and practical decisions. My background spans Genpact finance operations, KPI/MIS reporting,
              documentation, root-cause analysis, and analytics projects in Excel, Python, and SQL.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href={`mailto:${email}`}>
                Contact me <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="highlight-strip" aria-label="Career highlights">
          {highlights.map((item) => (
            <article key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="ambient-strip" aria-hidden="true">
          <img src="/images/hero-studio.webp" alt="" width="1800" height="1200" loading="lazy" />
          <img src="/images/writing-desk.webp" alt="" width="1500" height="1000" loading="lazy" />
          <img src="/images/urban-biodiversity.webp" alt="" width="1500" height="1000" loading="lazy" />
        </section>

        <section className="work section-band" id="projects" aria-labelledby="projects-title">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Project experience</p>
              <h2 id="projects-title">Analytics that ends in a usable decision.</h2>
            </div>
            <p>
              Esha's finance analytics portfolio connects reporting, SQL analysis, variance review, valuation, and
              portfolio performance into management-ready evidence.
            </p>
          </div>

          <div className="work-tabs" role="tablist" aria-label="Selected projects">
            {projects.map((item, index) => (
              <button
                key={item.title}
                className={activeProject === index ? 'work-tab is-active' : 'work-tab'}
                type="button"
                role="tab"
                aria-selected={activeProject === index}
                onClick={() => setActiveProject(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.title}
              </button>
            ))}
          </div>

          <div className="work-detail reveal">
            <div className="work-copy" aria-live="polite">
              <p className="work-type">{selectedProject.type}</p>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.summary}</p>
              <div className="work-note">
                <strong>Contribution</strong>
                <p>{selectedProject.contribution}</p>
              </div>
              <div className="tag-list" aria-label="Project tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="text-link" href={`/projects/${selectedProject.slug}`}>
                View full case study <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <AnalyticsPreview project={selectedProject} />
          </div>
        </section>

        <section className="experience section-band" id="experience" aria-labelledby="experience-title">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 id="experience-title">Finance operations, controls, and reporting under pressure.</h2>
            </div>
            <p>
              Her professional experience combines operational execution with analyst habits: SLA tracking, exception
              investigation, documentation, audit evidence, stakeholder communication, and team coaching.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <div className="timeline-date">{item.period}</div>
                <div>
                  <p className="role-org">
                    {item.company} - {item.location}
                  </p>
                  <h3>{item.role}</h3>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-band" id="skills" aria-labelledby="skills-title">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Core skills</p>
              <h2 id="skills-title">Structured analysis with operational follow-through.</h2>
            </div>
            <p>
              The skill mix is intentionally practical: business analysis, KPI reporting, controls documentation, data
              validation, RCA, and enough technical fluency to work with analytics teams and systems.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, items }, index) => (
              <article key={title} style={{ '--skill-index': index }}>
                <Icon size={28} aria-hidden="true" />
                <h3>{title}</h3>
                <ul>
                  {items.map((item, itemIndex) => (
                    <li key={item} style={{ '--item-index': itemIndex }}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="profile" aria-labelledby="profile-title">
          <div className="profile-image reveal">
            <img src="/images/esha-profile.webp" alt="Esha Jaiswal" width="1000" height="1500" loading="lazy" />
          </div>
          <div className="profile-copy reveal">
            <p className="eyebrow">Profile</p>
            <h2 id="profile-title">A reporting-first analyst growing into business analytics and AI.</h2>
            <p>
              Esha brings three years of finance operations and reporting experience from Genpact, where she supported
              process performance, controls, stakeholder communication, documentation, QC reviews, and month-end evidence
              packs.
            </p>
            <p>
              She is currently pursuing an MSc in Business Analytics and AI at Nottingham Trent University, building on a
              BBA foundation and hands-on project work in optimisation, churn analysis, and recommender systems.
            </p>
            <div className="source-links" aria-label="Profile links">
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn <ExternalLink size={15} aria-hidden="true" />
              </a>
              <a href={`mailto:${email}`}>
                Email <Mail size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="education section-band" id="education" aria-labelledby="education-title">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Education</p>
              <h2 id="education-title">Business foundation, analytics direction.</h2>
            </div>
            <p>
              The academic path moves from business administration into analytics and AI, matching the professional
              shift from finance operations toward data-supported business analysis.
            </p>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <article key={item.degree}>
                <GraduationCap size={28} aria-hidden="true" />
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>
                  {item.school} - {item.location}
                </p>
              </article>
            ))}
            <article>
              <Sparkles size={28} aria-hidden="true" />
              <span>Languages</span>
              <h3>Communication</h3>
              <p>{languages.join(' / ')}</p>
            </article>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-visual" role="img" aria-label="Tree-lined path in Nottingham" />
          <div className="contact-copy reveal">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">For business analyst, reporting, analytics, and operations roles.</h2>
            <p>
              Based in Nottingham, UK, with experience across India-based finance operations and stakeholder support.
              Open to conversations around business analysis, reporting, analytics, process improvement, and operations
              roles.
            </p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${email}`}>
                <Mail size={18} aria-hidden="true" /> Email
              </a>
              <button className="button button-outline" type="button" onClick={copyEmail}>
                {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy email'}
              </button>
            </div>
            <div className="contact-meta">
              <span>
                <MapPin size={18} aria-hidden="true" /> Nottingham, UK
              </span>
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn <ExternalLink size={15} aria-hidden="true" />
              </a>
              <span>
                <NotebookTabs size={18} aria-hidden="true" /> Business Analytics and AI
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>&copy; {new Date().getFullYear()} Esha Jaiswal</span>
        <span>Business analysis - reporting - analytics and AI</span>
        <a href="#top">
          Back to top <ArrowRight size={15} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
