import { useEffect, useState } from 'react';
import './App.css';
import profileImage from './assets/img/IMG_3973.png';
import {
  MoonStarsFill,
  BrightnessHighFill,
  Github,
  Linkedin,
  EnvelopeFill,
  ArrowUpRight,
  BriefcaseFill,
  Stack,
  CpuFill,
} from 'react-bootstrap-icons';

const experienceData = [
  {
    role: 'DevOps Engineer',
    company: 'Ibiab Systems Ltd',
    period: 'Jan 2024 - Present',
    details: [
      'Worked on TSEP and ICMS platforms with backend delivery, service support, and deployment workflows.',
      'Handled CI/CD support, Linux-based operations, secure service configuration, and production troubleshooting.',
      'Improved observability, deployment readiness, and operational stability across evolving systems.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Atlas Computer Technologies',
    period: 'Mar 2022 - Present',
    details: [
      'Managed Linux environments and containerized delivery workflows across multiple client systems.',
      'Used Zabbix, Grafana, and ELK for monitoring, alerting, dashboards, and root-cause analysis.',
      'Supported backend security and infrastructure using Keycloak, Spring Security, iptables, and pfSense.',
    ],
  },
];

const projectData = [
  {
    title: 'TSEP',
    subtitle: 'AI-powered SME platform',
    description:
      'Contributed to backend service delivery, Linux-based environments, release support, and operational reliability for an AI-powered digital business platform.',
    tags: ['DevOps', 'Backend', 'CI/CD', 'Linux'],
  },
  {
    title: 'ICMS',
    subtitle: 'Intelligent compliance platform',
    description:
      'Supported backend and infrastructure workflows for a compliance-focused platform, improving deployment readiness, service stability, and secure configuration.',
    tags: ['Microservices', 'Monitoring', 'Security', 'Operations'],
  },
  {
    title: 'Wegagen & Hijra E-Banking',
    subtitle: 'Banking solutions support',
    description:
      'Worked on backend and operational support for digital banking platforms including transaction flows, service delivery, and production stability.',
    tags: ['Banking', 'Backend', 'Security', 'Reliability'],
  },
];

const stackData = [
  'Docker',
  'Linux',
  'CI/CD',
  'Spring Boot',
  'Java',
  'REST APIs',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Grafana',
  'Zabbix',
  'ELK Stack',
  'Keycloak',
  'Spring Security',
  'Git',
  'GitHub',
  'Jenkins',
  'Oracle Linux',
  'RHEL',
  'Ubuntu Server',
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="logo">Tselot Beyene</div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <BrightnessHighFill /> : <MoonStarsFill />}
        </button>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <p className="intro-tag">DevOps Engineer · Backend Engineer</p>
            <h1>
              Personal portfolio for
              <br />
              backend systems,
              <br />
              cloud delivery,
              <br />
              and reliable infrastructure.
            </h1>
            <p className="hero-description">
              I am a DevOps and Backend Engineer focused on Linux operations, backend services,
              CI/CD pipelines, observability, container delivery, and secure production systems.
              My work spans AI platforms, compliance systems, and banking solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowUpRight />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="quick-info">
              <div>
                <span>Focus</span>
                <strong>DevOps & Backend</strong>
              </div>
              <div>
                <span>Industries</span>
                <strong>AI · Compliance · Banking</strong>
              </div>
              <div>
                <span>Core Strength</span>
                <strong>Reliable Production Delivery</strong>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-card">
              <img src={profileImage} alt="Tselot Beyene" className="profile-image" />
              <div className="profile-content">
                <h2>Tselot Beyene</h2>
                <p>DevOps Engineer / Backend Engineer</p>

                <div className="profile-mini-grid">
                  <div>
                    <span>Experience</span>
                    <strong>Production systems</strong>
                  </div>
                  <div>
                    <span>Environment</span>
                    <strong>Linux & Containers</strong>
                  </div>
                </div>

                <div className="profile-links">
                  <a href="mailto:tselotbeyene70@gmail.com">
                    <EnvelopeFill /> Email
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <Linkedin /> LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section two-column" id="about">
          <div className="section-title">
            <span>About Me</span>
            <h2>Engineer first. Clean delivery. Reliable systems.</h2>
          </div>

          <div className="about-grid">
            <div className="card large-card">
              <p>
                I build and support backend platforms with a strong operational mindset. My work
                focuses on service reliability, deployment quality, secure system design, and
                maintainable infrastructure.
              </p>
              <p>
                Instead of presenting myself like a company brand, this portfolio highlights what I
                actually do as an engineer: backend services, CI/CD, Linux administration,
                observability, monitoring, and platform support.
              </p>
            </div>

            <div className="card mini-cards">
              <div className="mini-card">
                <BriefcaseFill />
                <h3>Work Style</h3>
                <p>Hands-on, systems-focused, delivery-minded.</p>
              </div>
              <div className="mini-card">
                <CpuFill />
                <h3>Engineering</h3>
                <p>Backend services, DevOps workflows, security, operations.</p>
              </div>
              <div className="mini-card">
                <Stack />
                <h3>Strength</h3>
                <p>Turning unstable delivery into cleaner, repeatable production workflows.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-title">
            <span>Experience</span>
            <h2>Where I have worked</h2>
          </div>

          <div className="experience-list">
            {experienceData.map((item) => (
              <div className="experience-card" key={item.company + item.role}>
                <div className="experience-head">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                </div>

                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <span>Featured Projects</span>
            <h2>Projects that reflect my real background</h2>
          </div>

          <div className="projects-grid">
            {projectData.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>{project.subtitle}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-title">
            <span>Tech Stack</span>
            <h2>Tools and technologies I work with</h2>
          </div>

          <div className="stack-wrap">
            {stackData.map((item) => (
              <span className="stack-badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-box">
            <div>
              <span>Contact</span>
              <h2>Let’s connect</h2>
              <p>
                Open to DevOps, backend engineering, and infrastructure-focused opportunities.
              </p>
            </div>

            <div className="contact-actions">
              <a href="mailto:tselotbeyene70@gmail.com">Email Me</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;