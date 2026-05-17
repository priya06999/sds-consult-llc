'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const industries: Record<string, { icon: string; tag: string; title: string; desc: string }> = {
  datacenters: {
    icon: '⚡',
    tag: 'Mission-Critical',
    title: 'Data Centers & Mission-Critical',
    desc: 'Specialized coordination for hyperscale and colocation facilities requiring precision, uptime, and seamless MEP integration across large-scale builds.',
  },
  industrial: {
    icon: '🏗️',
    tag: 'Industrial',
    title: 'Industrial & Infrastructure',
    desc: 'Support for large-scale mechanical, electrical, and civil projects requiring coordinated vendor management and transparent reporting across complex job sites.',
  },
  commercial: {
    icon: '🏢',
    tag: 'Commercial',
    title: 'Commercial Construction',
    desc: 'From ground-up office campuses to tenant improvements, we bring scheduling rigor and cost clarity to commercial builds of every scale.',
  },
  healthcare: {
    icon: '🏥',
    tag: 'Healthcare',
    title: 'Healthcare & Life Sciences',
    desc: 'Highly regulated environments demand precision. Our consultants understand infection control, phased construction, and compliance-driven documentation.',
  },
  energy: {
    icon: '🔋',
    tag: 'Energy',
    title: 'Energy & Utilities',
    desc: 'Substations, generation facilities, and utility infrastructure require coordinated planning. We bring the field expertise and reporting tools to deliver them.',
  },
}

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState('datacenters')

  useEffect(() => {
    // Fade-up on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add('visible')
            observer.unobserve(el.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

    // Trigger hero immediately
    setTimeout(() => {
      document.querySelectorAll('.hero .fade-up').forEach((el) => el.classList.add('visible'))
    }, 100)

    return () => observer.disconnect()
  }, [])

  const ind = industries[activeIndustry]

  return (
    <>
      {/* NAV */}
      <nav>
        <Link href="/" className="logo">SDS <span>Consulting</span></Link>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="nav-cta">Get in Touch</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />

        <p className="hero-tag fade-up">AI-Powered Project Consulting</p>

        <h1 className="fade-up" style={{ transitionDelay: '0.1s' }}>
          Built for the<br />
          <em>complexity</em> of<br />
          modern construction.
        </h1>

        <p className="hero-sub fade-up" style={{ transitionDelay: '0.2s' }}>
          SDS Consulting delivers AI-powered coordination, cost estimation, and transparent
          reporting for construction and data-center projects — from groundbreaking to handover.
        </p>

        <div className="hero-actions fade-up" style={{ transitionDelay: '0.3s' }}>
          <a href="#contact" className="btn-primary">Start a Project</a>
          <a href="#services" className="btn-ghost">Explore Services →</a>
        </div>

        <div className="hero-stats fade-up" style={{ transitionDelay: '0.4s' }}>
          <div>
            <div className="stat-num">200<span>+</span></div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div>
            <div className="stat-num">98<span>%</span></div>
            <div className="stat-label">On-Time Rate</div>
          </div>
          <div>
            <div className="stat-num">40<span>+</span></div>
            <div className="stat-label">Active Clients</div>
          </div>
          <div>
            <div className="stat-num">15<span>yr</span></div>
            <div className="stat-label">Industry Experience</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {['AI-Driven Estimation','Vendor Coordination','Project Scheduling','Data-Center Expertise','Field Support','Reporting & Documentation',
            'AI-Driven Estimation','Vendor Coordination','Project Scheduling','Data-Center Expertise','Field Support','Reporting & Documentation'].map((item, i) => (
            <span key={i}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-dot"> · </span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="services-header fade-up">
          <div>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Precision services across every phase of your project.</h2>
          </div>
          <p className="services-desc">
            From pre-construction estimation to final documentation, our AI-augmented team keeps
            your project coordinated, on budget, and on time.
          </p>
        </div>

        <div className="services-grid fade-up">
          {[
            { num: '01', icon: '📊', title: 'AI-Driven Estimation', desc: 'Faster, more accurate cost and manpower forecasting using AI-powered tools — reducing bid risk and improving margin confidence.' },
            { num: '02', icon: '🤝', title: 'Vendor Coordination', desc: 'Aligning subcontractors, schedules, and deliverables to keep your project on track. We manage the complexity so you don\'t have to.' },
            { num: '03', icon: '📅', title: 'Project Scheduling', desc: 'Clear, transparent timelines with automated updates and milestone reporting — always visible to owners, GCs, and stakeholders.' },
            { num: '04', icon: '🔧', title: 'Field Support', desc: 'On-site manpower alignment and real-time issue resolution. Our team shows up when it counts and coordinates directly with crews.' },
            { num: '05', icon: '🛰️', title: 'Data-Center Expertise', desc: 'Specialized support for mission-critical environments requiring precision, uptime, and mechanical, electrical, and civil coordination.' },
            { num: '06', icon: '📋', title: 'Reporting & Documentation', desc: 'Transparent, automated reporting for owners, GCs, and stakeholders — always accurate, always on time.' },
          ].map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-num">{s.num}</div>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="industries-section">
        <div className="industries-layout">
          <div>
            <p className="section-label fade-up">Sectors We Serve</p>
            <h2 className="section-title fade-up">Industries built on complexity — we thrive in them.</h2>

            <div className="industry-list fade-up">
              {Object.entries(industries).map(([key, val]) => (
                <div
                  key={key}
                  className="industry-item"
                  onClick={() => setActiveIndustry(key)}
                >
                  <span className="industry-name" style={{ color: activeIndustry === key ? 'var(--cyan)' : '' }}>
                    {val.title}
                  </span>
                  <span className="industry-arrow">→</span>
                </div>
              ))}
            </div>
          </div>

          <div className="industry-visual fade-up">
            <div className="industry-card-big">
              <div className="industry-card-img">{ind.icon}</div>
              <div className="industry-card-body">
                <div className="industry-card-tag">{ind.tag}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="fade-up">
            <p className="section-label">Why SDS</p>
            <h2 className="section-title">We combine field experience with AI tools others don&apos;t have.</h2>
            <p className="about-body">
              SDS Consulting was built by project managers and field coordinators who grew frustrated
              with outdated tools and opaque reporting. We&apos;ve spent over a decade on job sites and now
              apply AI to the workflows that traditionally create the most waste: estimation, scheduling,
              and vendor alignment.
            </p>
            <p className="about-body">
              Our clients don&apos;t just get a consulting firm — they get a team that has walked their job
              sites and understands the pressures of delivering on time, under budget, and to spec.
            </p>

            <div className="pillars">
              {[
                { title: 'AI-Augmented', desc: 'We use AI to automate estimates, schedules, and reporting — faster and more accurate than manual methods.' },
                { title: 'Field-Rooted', desc: 'Our consultants come from the field. We understand real construction pressure, not just spreadsheets.' },
                { title: 'Transparent', desc: 'All reporting is visible and accessible in real-time — no black boxes, no delayed updates.' },
                { title: 'Scalable', desc: 'From single projects to multi-site programs, our systems scale without loss of quality or oversight.' },
              ].map((p) => (
                <div className="pillar" key={p.title}>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="about-box">
              <p className="testimonial-quote">
                SDS turned our vendor chaos into a system. We hit our data-center go-live date for the first time in three years.
              </p>
              <p className="testimonial-author">— Operations Director, Fortune 500 Tech Client</p>

              <div className="badge-row">
                {['AI Estimation','MEP Coordination','Live Reporting','Risk Mitigation','Subcontractor Mgmt'].map((b) => (
                  <span className="badge" key={b}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-layout">
          <div className="fade-up">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">Let&apos;s talk about your next project.</h2>
            <p style={{ color: 'var(--white-dim)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '3rem' }}>
              Whether you&apos;re in pre-construction or mid-project, our team can plug in quickly
              and start delivering value from day one.
            </p>

            <div className="contact-item">
              <div className="contact-icon-wrap">📧</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">info@sdsconsulting.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrap">📞</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+1 (800) 000-0000</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrap">📍</div>
              <div>
                <div className="contact-label">Office</div>
                <div className="contact-value">Chicago, IL · Serving nationwide</div>
              </div>
            </div>
          </div>

          <div className="contact-form fade-up" style={{ transitionDelay: '0.15s' }}>
            <div className="form-row">
              <div className="field-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="field-group">
                <label>Last Name</label>
                <input type="text" placeholder="Smith" />
              </div>
            </div>
            <div className="field-group">
              <label>Email</label>
              <input type="email" placeholder="john@company.com" />
            </div>
            <div className="field-group">
              <label>Company</label>
              <input type="text" placeholder="Your company name" />
            </div>
            <div className="field-group">
              <label>Service Needed</label>
              <select>
                <option value="">Select a service...</option>
                <option>AI-Driven Estimation</option>
                <option>Vendor Coordination</option>
                <option>Project Scheduling</option>
                <option>Field Support</option>
                <option>Data-Center Expertise</option>
                <option>Reporting &amp; Documentation</option>
                <option>Multiple / Not Sure</option>
              </select>
            </div>
            <div className="field-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your project scope, timeline, or challenges..." />
            </div>
            <button className="form-submit">Send Message →</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">SDS <span style={{ color: 'var(--cyan)' }}>Consulting</span></Link>
            <p>AI-powered coordination, estimation, and reporting for construction and data-center projects.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">AI Estimation</a>
              <a href="#services">Vendor Coordination</a>
              <a href="#services">Project Scheduling</a>
              <a href="#services">Field Support</a>
              <a href="#services">Data Centers</a>
              <a href="#services">Reporting</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#industries">Industries</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 SDS Consulting. All rights reserved.</p>
          <p className="footer-copy">Built to deliver.</p>
        </div>
      </footer>
    </>
  )
}
