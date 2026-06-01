import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '/profile.jpg'
import { profile, skills, experience, projects, education, certifications } from './data'

const Anchor = ({ href, children }) => (
  <a className="btn" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

const Section = ({ id, title, children }) => (
  <section id={id} className="container">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
)

const Chip = ({ label, skill }) => (
  <span className={`chip${skill ? ' chip--skill' : ''}`}>{label}</span>
)

const Card = ({ className = '', children, animate = false }) => {
  const classes = `card ${className}`.trim()
  if (!animate) return <div className={classes}>{children}</div>
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">MK</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="container hero v2">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="tagline">{profile.summary}</p>
          <div className="links">
            <Anchor href={`mailto:${profile.email}`}>Email</Anchor>
            <Anchor href={profile.github}>GitHub</Anchor>
            <Anchor href={profile.linkedin}>LinkedIn</Anchor>
          </div>
        </motion.div>
        <motion.img
          src={profileImg}
          alt="Profile photo"
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </header>

      <Section id="about" title="About">
        <div className="grid">
          <Card>
            <p>
              Based in {profile.location}. Focused on backend and full-stack engineering, cloud services, and data workflows — experienced with Python/Django, FastAPI, React/Next.js, AWS, and GCP.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid">
          {experience.map((exp, i) => (
            <Card key={i} animate>
              <div className="card-header">
                <div className="card-title">
                  {exp.company}
                  <span className="role"> · {exp.role}</span>
                </div>
                <div className="card-meta">{exp.period}</div>
              </div>
              <p className="card-location">{exp.location}</p>
              <ul>
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="chips">
                {exp.stack.map((s, k) => (
                  <Chip key={k} label={s} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid">
          {projects.map((p, i) => (
            <Card key={i} className="half" animate>
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div className="chips">
                {p.tech.map((t, k) => (
                  <Chip key={k} label={t} />
                ))}
              </div>
              <div className="links">
                {p.links.map((l, k) => (
                  <Anchor key={k} href={l.href}>
                    {l.label}
                  </Anchor>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid">
          {Object.entries(skills).map(([k, arr], i) => (
            <Card key={i} className="half" animate>
              <span className="skill-group-title">{k.replace(/_/g, ' & ')}</span>
              <div className="chips chips--flush">
                {arr.map((s, j) => (
                  <Chip key={j} label={s} skill />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education & Certifications">
        <div className="grid">
          <Card className="half" animate>
            <ul>
              {education.map((e, i) => (
                <li key={i}>
                  <strong>{e.title}</strong> — {e.org} ({e.period})
                </li>
              ))}
            </ul>
          </Card>
          <Card className="half" animate>
            <ul>
              {certifications.map((c, i) => (
                <li key={i}>
                  <strong>{c.title}</strong> — {c.org} ({c.year})
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid">
          <Card>
            <div className="links links--flush">
              <Anchor href={`mailto:${profile.email}`}>Email</Anchor>
              <Anchor href={profile.github}>GitHub</Anchor>
              <Anchor href={profile.linkedin}>LinkedIn</Anchor>
            </div>
            <p className="muted contact-note">
              Available for backend/full-stack roles and cloud-focused projects.
            </p>
          </Card>
        </div>
      </Section>

      <div className="container footer">
        © {new Date().getFullYear()} {profile.name} · Built with React + Vite · Deployed via GitHub Pages
      </div>
    </>
  )
}
