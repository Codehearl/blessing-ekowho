import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase, Mail, Phone, MapPin, Linkedin, ExternalLink,
  CheckCircle, Cpu, Heart, ShoppingCart, Coffee, Globe
} from 'lucide-react';

const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
`;

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const RevealBox = ({ children, delay = 0, style = {} }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
};

const profile = {
  name: "Blessing Ekowho",
  title: "Copywriter & Brand Strategist",
  summary: "8+ years crafting words that sell, rank, and stick — across fintech, NGOs, and consumer brands. Direct response, SEO, lifecycle email, UX copy, and brand storytelling.",
  email: "blessingekowho@gmail.com",
  phone: "09065550687",
  location: "Lagos, Nigeria",
  linkedin: "https://linkedin.com/in/blessingekowho",
  drive: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M"
};

const categories = ['All', 'Fintech', 'NGO', 'E-commerce', 'Food & Lifestyle'];

const projects = [
  { title: "CredPal Automated Emails", industry: "Fintech", type: "Email Marketing", desc: "D.engage lifecycle setup — automated sequences, SMS, push notifications. Sub-5% spam rate maintained across all campaigns.", link: "https://drive.google.com/open?id=1zSVAqmxHzaMGrxsNO-rAgMeIO2m7iPB7", tags: ["Automation", "CRM", "Retention"] },
  { title: "Enif Website Copy", industry: "Fintech", type: "Web Copy & UX", desc: "Persuasive positioning and conversion-led landing pages for an AI-automation platform.", link: "https://drive.google.com/open?id=1iDwfaG3AYaYZlhJ_N5Y_62_2aV9QBnDZ", tags: ["UX Writing", "Conversion"] },
  { title: "Vahlid Social Calendar", industry: "Fintech", type: "Content Strategy", desc: "Full content calendar driving 80% signup growth through targeted brand messaging and strategic copy.", link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M", tags: ["Strategy", "Growth"] },
  { title: "WhatsApp BC for Repayment", industry: "Fintech", type: "Direct Response", desc: "High-converting broadcast scripts for credit repayment reminders, balancing urgency and empathy.", link: "https://drive.google.com/open?id=1ZLT5Su034_DpOVP6mXdF0xOa3q9-Fc3E", tags: ["Scripts", "Messaging"] },
  { title: "COMEF Digital Brochure", industry: "NGO", type: "Creative Copy", desc: "Digital brochure copy for health advocacy and community engagement — designed to move people to act.", link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M", tags: ["Advocacy", "Design"] },
  { title: "HACEY Health Social Media", industry: "NGO", type: "Community Management", desc: "Led campaigns growing followers by 2,000+ through compelling health advocacy storytelling.", link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M", tags: ["Advocacy", "Growth"] },
  { title: "Access Bank Sustainability Report", industry: "NGO", type: "Corporate Comms", desc: "Co-created the 2019 Sustainability Report — long-form, research-backed, written to the bank's editorial standards.", link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M", tags: ["Reporting", "ESG"] },
  { title: "Sales Copy for Kobo", industry: "E-commerce", type: "Sales Copy", desc: "Benefit-led sales page using customer psychology and deep avatar research to drive book publishing signups.", link: "https://drive.google.com/open?id=1e8b8qjgeWWK44HIbf7qPSAAJ5rZLCB-I__2yIVUS62Y", tags: ["Direct Response", "Psychology"] },
  { title: "SEO Copy — Pool Safety", industry: "E-commerce", type: "SEO Writing", desc: "Keyword-optimised product pages ranked on Google while maintaining natural readability and flow.", link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M", tags: ["SEO", "Keywords"] },
  { title: "Jikoo Website Copy", industry: "E-commerce", type: "Web Copy", desc: "UX-focused copy for a SaaS product interface and landing pages — reducing friction, driving activation.", link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M", tags: ["SaaS", "UX Writing"] },
  { title: "Eric Kayser Newsletters", industry: "Food & Lifestyle", type: "Email Marketing", desc: "Lifestyle newsletters for the iconic French bakery — brand loyalty copy that made readers crave a visit.", link: "https://drive.google.com/open?id=1iZiAXngZ_NKT5-ir6CB6ueWN-_D33v4PK0z9QOBYC8M", tags: ["Newsletter", "Brand Voice"] },
  { title: "Mikay Launch Calendar", industry: "Food & Lifestyle", type: "Campaign Strategy", desc: "Full launch strategy and social content execution for Mikay Agency's market debut.", link: "https://drive.google.com/open?id=1usVo2R8hvmBsnjBUms01GiPMz6HnMa9S", tags: ["Social Media", "Launch"] }
];

const experience = [
  { company: "4th Leap Consultancy", role: "Client Services & Content Strategist", period: "Sep 2025 – Present", points: ["Built bespoke content strategies mapping pillars, editorial calendars, and channel mix to business growth goals.", "Defined brand voice guidelines for Iconic University, Bovas Group, and Play Street."] },
  { company: "Mikay Agency", role: "Copywriter", period: "Jan 2025 – Sep 2025", points: ["Campaign copy and brand messaging across food, fashion, and real estate brands.", "Supervised full content pipeline — photography briefs, graphic direction, quality control."] },
  { company: "CredPal & Enif", role: "Marketing Communications Officer", period: "2023 – 2024", points: ["60% growth in signups and engagement. Sub-5% spam rate across all lifecycle campaigns.", "Wrote all UX/product copy for app and website, plus ad copy across Meta, Instagram, LinkedIn & Google."] },
  { company: "Coalition Technologies", role: "SEO Copywriter", period: "2022 – 2023", points: ["Long & short-form SEO content across tech, health, finance and e-commerce niches.", "Full on-page optimisation: meta, H1s, alt text, anchor text, internal linking."] },
  { company: "Vahlid", role: "Digital Marketing Specialist & Copywriter", period: "2022", points: ["Rewrote all website and UX app copy from scratch. 80% increase in signups.", "Radio jingles, TV ad scripts, plus paid social on Meta, LinkedIn, and Google."] }
];

const industryIcon = (ind) => {
  if (ind === 'Fintech') return <Cpu size={18} />;
  if (ind === 'NGO') return <Heart size={18} />;
  if (ind === 'E-commerce') return <ShoppingCart size={18} />;
  return <Coffee size={18} />;
};

const industryColor = (ind) => {
  if (ind === 'Fintech') return '#C9A84C';
  if (ind === 'NGO') return '#E8553A';
  if (ind === 'E-commerce') return '#5BB87C';
  return '#A07BDC';
};

const App = () => {
  const [filter, setFilter] = useState('All');
  const [mounted, setMounted] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.industry === filter);
  const skills = ['Direct Response', 'SEO Copywriting', 'Email Automation', 'UX & Product Copy', 'Brand Storytelling', 'Content Strategy', 'Ad & Social Copy', 'Video Scriptwriting'];

  return (
    <>
      <style>{FONTS}</style>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --bg: #07090F;
          --surface: #0D1017;
          --card: #10141C;
          --card-hover: #141A26;
          --border: rgba(255,255,255,0.07);
          --border-hover: rgba(201,168,76,0.4);
          --text: #EDE8DE;
          --muted: #7A8299;
          --gold: #C9A84C;
          --gold-light: #E8C87A;
          --coral: #E8553A;
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Outfit', system-ui, sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: var(--font-body); }
        a { color: inherit; text-decoration: none; }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 2rem;
          height: 64px; display: flex; align-items: center; justify-content: space-between;
          transition: background 0.4s, border-bottom 0.4s, backdrop-filter 0.4s;
        }
        .nav.scrolled {
          background: rgba(7,9,15,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.4rem; font-weight: 700; letter-spacing: 0.05em;
          color: var(--gold);
        }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a { font-size: 0.85rem; font-weight: 400; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s; }
        .nav-links a:hover { color: var(--text); }
        .nav-cta {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 100px;
          border: 1px solid rgba(201,168,76,0.5);
          font-size: 0.8rem; font-weight: 500; letter-spacing: 0.06em;
          color: var(--gold); transition: all 0.2s;
        }
        .nav-cta:hover { background: rgba(201,168,76,0.12); border-color: var(--gold); }

        .hero {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden; padding: 8rem 2rem 6rem;
        }
        .hero-orb {
          position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
        }
        .hero-orb-1 { width: 600px; height: 600px; background: rgba(201,168,76,0.06); top: -100px; right: -150px; }
        .hero-orb-2 { width: 400px; height: 400px; background: rgba(232,85,58,0.05); bottom: 0; left: -80px; }
        .hero-content { max-width: 900px; text-align: center; position: relative; z-index: 1; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px; border-radius: 100px;
          border: 1px solid rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.06);
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 2.5rem;
          opacity: 0; animation: fadeUp 0.6s ease 0.2s forwards;
        }
        .hero-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }
        .hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 700; line-height: 1.05; letter-spacing: -0.02em;
          color: var(--text);
          opacity: 0; animation: fadeUp 0.8s ease 0.4s forwards;
        }
        .hero-h1 em { font-style: italic; color: var(--gold); }
        .hero-sub {
          max-width: 600px; margin: 2rem auto 3rem;
          font-size: 1.05rem; line-height: 1.7; color: var(--muted);
          font-weight: 300;
          opacity: 0; animation: fadeUp 0.8s ease 0.6s forwards;
        }
        .hero-actions {
          display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
          opacity: 0; animation: fadeUp 0.8s ease 0.8s forwards;
        }
        .btn-primary {
          padding: 12px 28px; border-radius: 100px;
          background: var(--gold); color: #07090F;
          font-size: 0.9rem; font-weight: 600; letter-spacing: 0.04em;
          transition: all 0.2s; display: inline-flex; align-items: center; gap: 6px;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }
        .btn-outline {
          padding: 12px 28px; border-radius: 100px;
          border: 1px solid var(--border); color: var(--text);
          font-size: 0.9rem; font-weight: 400; letter-spacing: 0.04em;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.04); }

        .marquee-bar {
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          background: var(--surface); overflow: hidden; padding: 18px 0;
          position: relative;
        }
        .marquee-bar::before, .marquee-bar::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2;
          pointer-events: none;
        }
        .marquee-bar::before { left: 0; background: linear-gradient(to right, var(--surface), transparent); }
        .marquee-bar::after { right: 0; background: linear-gradient(to left, var(--surface), transparent); }
        .marquee-track {
          display: flex; gap: 0; white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        .marquee-item {
          display: inline-flex; align-items: center; gap: 2rem;
          padding: 0 2rem;
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--muted);
        }
        .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }

        .section { padding: 7rem 2rem; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-label {
          font-size: 0.7rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1rem;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 600; line-height: 1.1; color: var(--text);
        }

        .filter-bar { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 3.5rem; }
        .filter-btn {
          padding: 7px 18px; border-radius: 100px;
          border: 1px solid var(--border);
          font-size: 0.8rem; font-weight: 400; letter-spacing: 0.05em;
          color: var(--muted); background: transparent;
          cursor: pointer; transition: all 0.2s;
        }
        .filter-btn:hover { border-color: rgba(255,255,255,0.15); color: var(--text); }
        .filter-btn.active {
          background: var(--gold); border-color: var(--gold);
          color: #07090F; font-weight: 600;
        }

        .project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 20px; }
        .card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.6rem;
          display: flex; flex-direction: column;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer; position: relative; overflow: hidden;
        }
        .card::before {
          content: ''; position: absolute; inset: 0; border-radius: 16px;
          background: radial-gradient(circle at 60% 0%, rgba(201,168,76,0.06), transparent 60%);
          opacity: 0; transition: opacity 0.3s;
        }
        .card:hover { background: var(--card-hover); border-color: var(--border-hover); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.15); }
        .card:hover::before { opacity: 1; }
        .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.2rem; }
        .card-icon-wrap {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          transition: all 0.3s;
        }
        .card:hover .card-icon-wrap { border-color: rgba(201,168,76,0.3); background: rgba(201,168,76,0.08); }
        .card-type {
          font-size: 0.65rem; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--muted); border: 1px solid var(--border); padding: 4px 10px; border-radius: 100px;
        }
        .card-title { font-size: 1.05rem; font-weight: 600; color: var(--text); margin-bottom: 0.6rem; transition: color 0.2s; }
        .card:hover .card-title { color: var(--gold-light); }
        .card-desc { font-size: 0.88rem; line-height: 1.65; color: var(--muted); flex-grow: 1; margin-bottom: 1.4rem; font-weight: 300; }
        .card-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.4rem; }
        .tag { font-size: 0.7rem; font-weight: 500; padding: 3px 10px; border-radius: 100px; background: rgba(255,255,255,0.04); color: var(--muted); letter-spacing: 0.05em; }
        .card-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.82rem; font-weight: 500; color: var(--gold); letter-spacing: 0.04em; transition: gap 0.2s; }
        .card:hover .card-link { gap: 10px; }

        .exp-section { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .exp-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 5rem; align-items: start; }
        .exp-sticky { position: sticky; top: 100px; }
        .timeline { position: relative; padding-left: 1.5rem; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 8px; bottom: 0; width: 1px; background: linear-gradient(to bottom, var(--gold), transparent); }
        .tl-item { position: relative; padding-bottom: 3rem; }
        .tl-dot {
          position: absolute; left: -1.85rem; top: 5px;
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 0 4px rgba(201,168,76,0.15), 0 0 12px rgba(201,168,76,0.4);
        }
        .tl-period { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.5rem; font-weight: 500; }
        .tl-role { font-size: 1.1rem; font-weight: 600; color: var(--text); margin-bottom: 0.2rem; }
        .tl-company { font-size: 0.88rem; color: var(--muted); margin-bottom: 0.9rem; }
        .tl-points { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .tl-point { display: flex; align-items: flex-start; gap: 8px; font-size: 0.86rem; line-height: 1.6; color: var(--muted); font-weight: 300; }
        .tl-check { color: var(--gold); flex-shrink: 0; margin-top: 2px; }

        .contact-section { padding: 6rem 2rem; }
        .contact-card {
          max-width: 900px; margin: 0 auto;
          background: var(--card); border: 1px solid var(--border);
          border-radius: 24px; padding: 4rem;
          display: grid; grid-template-columns: 1fr auto; gap: 3rem;
          align-items: center; position: relative; overflow: hidden;
        }
        .contact-card::before {
          content: ''; position: absolute; top: -60px; right: 0; width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(201,168,76,0.08), transparent 60%);
          pointer-events: none;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600; color: var(--text); line-height: 1.2; margin-bottom: 1rem;
        }
        .contact-title span { color: var(--gold); font-style: italic; }
        .contact-sub { color: var(--muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }
        .contact-details { display: flex; flex-direction: column; gap: 0.7rem; }
        .contact-item { display: flex; align-items: center; gap: 10px; font-size: 0.88rem; color: var(--muted); }
        .contact-item svg { color: var(--gold); flex-shrink: 0; }
        .contact-actions { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
        .social-row { display: flex; gap: 10px; }
        .social-btn {
          width: 44px; height: 44px; border-radius: 10px;
          border: 1px solid var(--border); background: transparent;
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); transition: all 0.2s;
        }
        .social-btn:hover { border-color: rgba(201,168,76,0.4); color: var(--gold); background: rgba(201,168,76,0.06); }

        .footer-bar {
          text-align: center; padding: 2rem;
          font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--muted); border-top: 1px solid var(--border);
        }
        .footer-bar span { color: var(--gold); }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr; gap: 2rem; }
          .exp-sticky { position: static; }
          .contact-card { grid-template-columns: 1fr; padding: 2.5rem; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <span className="nav-logo">BE.</span>
        <div className="nav-links">
          {['About', 'Portfolio', 'Experience', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>
        <a href={profile.drive} target="_blank" className="nav-cta">
          View Portfolio <ExternalLink size={12} />
        </a>
      </nav>

      {/* HERO */}
      <header className="hero" id="about">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-content">
          <div className="hero-badge">{profile.title}</div>
          <h1 className="hero-h1">
            Words that<br /><em>convert,</em> rank &amp; stick.
          </h1>
          <p className="hero-sub">{profile.summary}</p>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={15} /> Get in touch
            </a>
            <a href={profile.drive} target="_blank" className="btn-outline">
              View Portfolio <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee-bar">
        <div className="marquee-track">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" /> {s}
            </span>
          ))}
        </div>
      </div>

      {/* PORTFOLIO */}
      <section className="section" id="portfolio">
        <div className="section-inner">
          <RevealBox>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>Specialised across<br />industries that matter.</h2>
          </RevealBox>

          <RevealBox delay={0.1}>
            <div className="filter-bar">
              {categories.map(cat => (
                <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </RevealBox>

          <div className="project-grid">
            {filteredProjects.map((project, idx) => (
              <RevealBox key={`${project.title}-${filter}`} delay={idx * 0.06}>
                <div className="card">
                  <div className="card-top">
                    <div className="card-icon-wrap" style={{ color: industryColor(project.industry) }}>
                      {industryIcon(project.industry)}
                    </div>
                    <span className="card-type">{project.type}</span>
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>
                  <div className="card-tags">
                    {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <button onClick={() => window.open(project.link, '_blank')} className="card-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    View Asset <ExternalLink size={13} />
                  </button>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section exp-section" id="experience">
        <div className="section-inner">
          <div className="exp-grid">
            <div className="exp-sticky">
              <RevealBox>
                <p className="section-label">Career Journey</p>
                <h2 className="section-title">8+ years.<br />Real results.</h2>
                <p style={{ marginTop: '1.5rem', color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                  From NGO content to fintech lifecycle campaigns — a track record built on understanding what makes people read, click, and buy.
                </p>
              </RevealBox>
            </div>

            <div className="timeline">
              {experience.map((exp, i) => (
                <RevealBox key={i} delay={i * 0.1}>
                  <div className="tl-item">
                    <div className="tl-dot" />
                    <h3 className="tl-role">{exp.role}</h3>
                    <p className="tl-company">{exp.company}</p>
                    <ul className="tl-points">
                      {exp.points.map((pt, pi) => (
                        <li key={pi} className="tl-point">
                          <CheckCircle size={13} className="tl-check" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealBox>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <RevealBox>
          <div className="contact-card">
            <div>
              <h2 className="contact-title">Ready to build something <span>great?</span></h2>
              <p className="contact-sub">Let's craft words that move your audience — and your numbers.</p>
              <div className="contact-details">
                <div className="contact-item"><Mail size={15} />{profile.email}</div>
                <div className="contact-item"><Phone size={15} />{profile.phone}</div>
                <div className="contact-item"><MapPin size={15} />{profile.location}</div>
              </div>
            </div>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Send a Message
              </a>
              <div className="social-row">
                <a href={profile.linkedin} target="_blank" className="social-btn"><Linkedin size={18} /></a>
                <a href={profile.drive} target="_blank" className="social-btn"><Globe size={18} /></a>
              </div>
            </div>
          </div>
        </RevealBox>
      </section>

      <div className="footer-bar">
        © {new Date().getFullYear()} <span>Blessing Ekowho</span> · Copywriter & Brand Strategist
      </div>
    </>
  );
};

export default App;
