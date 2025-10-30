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

const Chip = ({ label }) => <span className="chip">{label}</span>

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">MK</div>
          <div>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container hero v2">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1>{profile.name}</h1>
          <p className="muted">{profile.title}</p>
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </header>

      <Section id="about" title="About">
        <div className="grid">
          <div className="card">
            <p className="muted">
              Based in {profile.location}. Focused on backend and full-stack engineering, cloud services, and data workflows — experienced with Python/Django, FastAPI, React/Next.js, AWS, and GCP.
            </p>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid">
          {experience.map((exp, i) => (
            <div className="card" key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                  <strong>{exp.company}</strong> — {exp.role}
                </div>
                <div className="muted">{exp.period}</div>
              </div>
              <div className="muted" style={{ marginTop: 6 }}>
                {exp.location}
              </div>
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
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid">
          {projects.map((p, i) => (
            <motion.div
              className="card half"
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ marginTop: 0 }}>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div className="chips">
                {p.tech.map((t, k) => (
                  <Chip key={k} label={t} />
                ))}
              </div>
              <div className="links" style={{ marginTop: 12 }}>
                {p.links.map((l, k) => (
                  <Anchor key={k} href={l.href}>
                    {l.label}
                  </Anchor>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid">
          {Object.entries(skills).map(([k, arr], i) => (
            <div className="card half" key={i}>
              <strong>{k.replace('_', ' & ')}</strong>
              <div className="chips" style={{ marginTop: 10 }}>
                {arr.map((s, j) => (
                  <Chip key={j} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education & Certifications">
        <div className="grid">
          <div className="card half">
            <ul style={{ marginTop: 0 }}>
              {education.map((e, i) => (
                <li key={i}>
                  <strong>{e.title}</strong> — {e.org} ({e.period})
                </li>
              ))}
            </ul>
          </div>
          <div className="card half">
            <ul style={{ marginTop: 0 }}>
              {certifications.map((c, i) => (
                <li key={i}>
                  <strong>{c.title}</strong> — {c.org} ({c.year})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid">
          <div className="card">
            <div className="links">
              <Anchor href={`mailto:${profile.email}`}>Email</Anchor>
              <Anchor href={profile.github}>GitHub</Anchor>
              <Anchor href={profile.linkedin}>LinkedIn</Anchor>
            </div>
            <p className="muted" style={{ marginTop: 12 }}>
              Available for backend/full-stack roles and cloud-focused projects.
            </p>
          </div>
        </div>
      </Section>

      <div className="container footer">
        © {new Date().getFullYear()} {profile.name} · Built with React + Vite · Deployed via GitHub Pages
      </div>
    </>
  )
}
