// Current Year for Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Data Configuration
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

const skills = ['Direct Response', 'SEO Copywriting', 'Email Automation', 'UX & Product Copy', 'Brand Storytelling', 'Content Strategy', 'Ad & Social Copy', 'Video Scriptwriting'];

// Helper Functions
const getIndustryIcon = (ind) => {
  if (ind === 'Fintech') return 'cpu';
  if (ind === 'NGO') return 'heart';
  if (ind === 'E-commerce') return 'shopping-cart';
  return 'coffee';
};

const getIndustryColor = (ind) => {
  if (ind === 'Fintech') return '#C9A84C';
  if (ind === 'NGO') return '#E8553A';
  if (ind === 'E-commerce') return '#5BB87C';
  return '#A07BDC';
};

// Render Marquee
const renderMarquee = () => {
  const track = document.getElementById('marquee-track');
  const items = [...skills, ...skills].map((s) => `
    <span class="marquee-item"><span class="marquee-dot"></span> ${s}</span>
  `).join('');
  track.innerHTML = items;
};

// Render Projects
const renderProjects = (filter = 'All') => {
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';
  
  const filtered = filter === 'All' ? projects : projects.filter(p => p.industry === filter);
  
  filtered.forEach((project, idx) => {
    const delay = idx * 0.06;
    const card = document.createElement('div');
    card.className = 'reveal-box';
    card.style.transitionDelay = `${delay}s`;
    
    card.innerHTML = `
      <div class="card" onclick="window.open('${project.link}', '_blank')">
        <div class="card-top">
          <div class="card-icon-wrap" style="color: ${getIndustryColor(project.industry)}">
            <i data-lucide="${getIndustryIcon(project.industry)}" style="width: 18px; height: 18px;"></i>
          </div>
          <span class="card-type">${project.type}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.desc}</p>
        <div class="card-tags">
          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <button class="card-link">View Asset <i data-lucide="external-link" style="width: 13px; height: 13px;"></i></button>
      </div>
    `;
    grid.appendChild(card);
  });
  
  lucide.createIcons();
  setupScrollReveal(); // Re-trigger observers for newly added DOM elements
};

// Render Experience
const renderExperience = () => {
  const timeline = document.getElementById('timeline');
  experience.forEach((exp, i) => {
    const item = document.createElement('div');
    item.className = 'reveal-box';
    item.style.transitionDelay = `${i * 0.1}s`;
    
    item.innerHTML = `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-period">${exp.period}</div>
        <h3 class="tl-role">${exp.role}</h3>
        <p class="tl-company">${exp.company}</p>
        <ul class="tl-points">
          ${exp.points.map(pt => `
            <li class="tl-point">
              <i data-lucide="check-circle" class="tl-check" style="width: 13px; height: 13px;"></i>
              <span>${pt}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    timeline.appendChild(item);
  });
};

// Scroll Reveal Intersection Observer
const setupScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-box').forEach(el => observer.observe(el));
};

// Filter Buttons Setup
const setupFilters = () => {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all
      buttons.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      e.target.classList.add('active');
      // Render filtered
      renderProjects(e.target.dataset.filter);
    });
  });
};

// Nav Scroll Event
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderMarquee();
  renderExperience();
  renderProjects();
  setupFilters();
  setupScrollReveal();
  lucide.createIcons(); // Initialize all icons on first paint
});