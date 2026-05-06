// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// DATA
// ============================================================
const projects = [

  // ── SOCIAL MEDIA COPY ON DESIGNS ──────────────────────────
  {
    title: "HACEY Health — Grassroots Network Designs",
    industry: "NGO", type: "Social Media",
    folder: "Social Media Designs",
    desc: "Copy-on-design assets for the Inclusion for All Grassroots Network campaign — advocacy messaging built for impact and reach.",
    link: "https://drive.google.com/open?id=1gE1-yANC_iCcPPK9jJcxzevWLi1jaOwo",
    tags: ["Advocacy", "Design Copy", "NGO"]
  },
  {
    title: "CredPal — Brand Ad & Email Design Copy",
    industry: "Fintech", type: "Social Media",
    folder: "Social Media Designs",
    desc: "Visual copy assets spanning email headers and branded ad creatives — sharp, on-brand messaging baked directly into design.",
    link: "https://drive.google.com/open?id=1TGOjlaZ8S2KD5vB0wCRbBcVNVvN9XwKa",
    tags: ["Brand Copy", "Ad Design", "Fintech"]
  },
  {
    title: "Enif AI — Visual Brand Copy",
    industry: "Fintech", type: "Social Media",
    folder: "Social Media Designs",
    desc: "Punchy design-led copy positioning Enif as a must-use AI automation tool — 'Put your business on Enif' and 'Build right' creative series.",
    link: "https://drive.google.com/open?id=1E0P7yf8tGOf8IKl2nqcBy2iHke181f2q",
    tags: ["Brand Positioning", "Ad Copy", "AI"]
  },

  // ── SOCIAL MEDIA COPY ─────────────────────────────────────
  {
    title: "Mikay Agency — Launch Content Calendar",
    industry: "Retail & Agency", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Full launch strategy and social content execution — posts, stories, and video scripts for Mikay Agency's market debut.",
    link: "https://drive.google.com/open?id=1usVo2R8hvmBsnjBUms01GiPMz6HnMa9S",
    tags: ["Launch Strategy", "Content Calendar", "Agency"]
  },
  {
    title: "Play Street — Social Media Copy",
    industry: "Entertainment", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Social copy for an entertainment lifestyle brand — playful, voice-consistent copy across feed posts and stories.",
    link: "https://drive.google.com/open?id=19NaKilujijYfUwaoRMgFsgt1Vh-2WKSbsQTgW3CJte4",
    tags: ["Entertainment", "Brand Voice", "Social"]
  },
  {
    title: "Bahija — Captions & Social Content",
    industry: "Retail & Lifestyle", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Brand voice copy and captions for Bahija — consistent, aesthetic-forward content that connects with a lifestyle audience.",
    link: "https://drive.google.com/open?id=1cz0IcJwAXjhFEN4MtU40pkI5oc3lj_QReNj9fD1o8d8",
    tags: ["Lifestyle", "Captions", "Brand Voice"]
  },
  {
    title: "Munchies After Dark — Social Copy Suite",
    industry: "Food & FMCG", type: "Social Media",
    folder: "Social Media Copy",
    desc: "High-energy copy for a food brand's social presence — captions, stories, and motion video scripts that made the audience hungry.",
    link: "https://drive.google.com/open?id=1JZn1uHiTpRhlQ5TGwFWhm21XX47_G0ooVGP_3tZdRrY",
    tags: ["Food Brand", "Captions", "Video Scripts"]
  },
  {
    title: "Mikay — Multi-Format Social Content",
    industry: "Retail & Agency", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Comprehensive social content package spanning feed posts, video scripts, and stories across multiple client verticals.",
    link: "https://drive.google.com/open?id=15W8x5iiv06tHYdbyCjLUpR4woxDjyyd5vje3wt-UqiM",
    tags: ["Multi-format", "Social", "Campaigns"]
  },
  {
    title: "COMEF — Social Media Copy",
    industry: "Interior Decor", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Monthly social calendar and stories copy for a premium interior decor brand — aspirational, design-led storytelling.",
    link: "https://drive.google.com/open?id=1-GzU9AmVfEG1N8jRfTJKH_DPZ0FWKN7dA_IeSz4tdxk",
    tags: ["Interior Decor", "Calendar", "Stories"]
  },
  {
    title: "Eric Kayser — Newsletter & Social Copy",
    industry: "Food & FMCG", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Lifestyle newsletters and social copy for the iconic French bakery chain — brand loyalty copy that made readers crave a visit.",
    link: "https://drive.google.com/open?id=1iZiAXngZ_NKT5-ir6CB6ueWN-_D33v4PK0z9QOBYC8M",
    tags: ["Newsletter", "Lifestyle", "Brand Voice"]
  },
  {
    title: "One & Only — April–May Content Calendar",
    industry: "Retail & Lifestyle", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Two-month editorial content calendar with post copy, hooks, and CTAs tailored for a lifestyle-forward brand.",
    link: "https://drive.google.com/open?id=1gCZMeIaXbODHfjKDJBri_WqZy1gYkAA4",
    tags: ["Content Calendar", "Editorial", "Lifestyle"]
  },
  {
    title: "Mikay — Copies & Brand Messaging",
    industry: "Retail & Agency", type: "Social Media",
    folder: "Social Media Copy",
    desc: "Core brand messaging and post copy library for Mikay Agency — consistent, conversion-aware copy across all formats.",
    link: "https://drive.google.com/open?id=1diKOLMj1ck1-sXpcp_Tx1dXfRT8lBjlXVjDksU0U9ok",
    tags: ["Brand Messaging", "Copy Library", "Agency"]
  },

  // ── SALES COPY ────────────────────────────────────────────
  {
    title: "Kobo Book Publishing — Sales Page",
    industry: "Education & Publishing", type: "Sales Copy",
    folder: "Sales Copy",
    desc: "Benefit-led sales page built on deep customer avatar research — psychological hooks and a clear value ladder driving publishing signups.",
    link: "https://drive.google.com/open?id=1e8b8qjgeWWK44HIbf7qPSAAJ5rZLCB-I__2yIVUS62Y",
    tags: ["Direct Response", "Long-form", "Publishing"]
  },
  {
    title: "Bridge the Gap System — Sales Page",
    industry: "Education & Publishing", type: "Sales Copy",
    folder: "Sales Copy",
    desc: "Full sales page for a digital course or system — structured to handle objections, build trust, and close the sale elegantly.",
    link: "https://drive.google.com/open?id=1obYkH0DVXpqU-cFb054TTzXL9ZOmdH4L",
    tags: ["Sales Page", "Digital Product", "Funnel"]
  },
  {
    title: "Weight Loss Program — Sales Page",
    industry: "Health & Wellness", type: "Sales Copy",
    folder: "Sales Copy",
    desc: "Emotion-led sales copy for a health transformation offer — story-driven, empathy-first approach that converts the skeptical reader.",
    link: "https://drive.google.com/open?id=1DRve7dVVTAQGnwYkINAWI0k82OfExSGM",
    tags: ["Health", "Transformation", "Persuasion"]
  },
  {
    title: "CredPal — Investment & Savings Sales Page",
    industry: "Fintech", type: "Sales Copy",
    folder: "Sales Copy",
    desc: "Financial product sales page simplifying complex investment and savings offerings into compelling, trust-building copy.",
    link: "https://drive.google.com/open?id=13TtvXENh9BC81gRzzoCPbWTYmEpo4-1GNoKEmAG6I_g",
    tags: ["Fintech", "Financial Copy", "Conversion"]
  },

  // ── EMAILS ────────────────────────────────────────────────
  {
    title: "CredPal — D.engage Email Content",
    industry: "Fintech", type: "Emails",
    folder: "Emails",
    desc: "Full email campaign content written for D.engage lifecycle automation — promotional, transactional, and nurture sequences.",
    link: "https://drive.google.com/open?id=15D4RbXQq5WD5IrhqxkKTXzbDUaLeqYRv",
    tags: ["Lifecycle", "Campaign", "Automation"]
  },
  {
    title: "CredPal — Automated Email Sequences",
    industry: "Fintech", type: "Emails",
    folder: "Emails",
    desc: "Trigger-based automated email flows for onboarding, activation, and retention — sub-5% spam rate maintained consistently.",
    link: "https://drive.google.com/open?id=1zSVAqmxHzaMGrxsNO-rAgMeIO2m7iPB7",
    tags: ["Automation", "CRM", "Retention"]
  },
  {
    title: "CredPal — WhatsApp Repayment Broadcasts",
    industry: "Fintech", type: "Emails",
    folder: "Emails",
    desc: "High-converting repayment reminder broadcast scripts — striking the right balance between urgency, empathy, and brand voice.",
    link: "https://drive.google.com/open?id=1ZLT5Su034_DpOVP6mXdF0xOa3q9-Fc3E",
    tags: ["WhatsApp", "Broadcast", "Messaging"]
  },
  {
    title: "Welcome Email Sequence",
    industry: "Fintech", type: "Emails",
    folder: "Emails",
    desc: "Onboarding welcome email copy designed to drive first-week activation — warm, clear, and strategically structured for habit formation.",
    link: "https://drive.google.com/open?id=10Zyhnr0_9jMzu4eXyBonMNSFwkfwi2ZA",
    tags: ["Onboarding", "Welcome", "Activation"]
  },

  // ── OTHER COPY ────────────────────────────────────────────
  {
    title: "CredPal — Invest, Save, Credit Marketing Copies",
    industry: "Fintech", type: "Other Copy",
    folder: "Other Copy",
    desc: "Multi-product marketing copy covering CredPal's core pillars — investment, savings, and credit — each tailored for distinct audiences.",
    link: "https://drive.google.com/open?id=1mR2vv2RRkhtaMa9eegLVrwmmTFPL3Dn1",
    tags: ["Multi-product", "Marketing", "Fintech"]
  },
  {
    title: "Layi — Influencer Marketing Script",
    industry: "Entertainment", type: "Other Copy",
    folder: "Other Copy",
    desc: "Authentic influencer brief and script for a brand activation — natural, non-salesy language that lands with a real audience.",
    link: "https://drive.google.com/open?id=13_rkDcAczBWnDH7S6guJbSEicqoW23im",
    tags: ["Influencer", "Script", "Authentic Voice"]
  },
  {
    title: "CredPal — Mixed Marketing Copies",
    industry: "Fintech", type: "Other Copy",
    folder: "Other Copy",
    desc: "Versatile copy assets for product campaigns and in-app communications — agile copy built for rapid iteration and testing.",
    link: "https://drive.google.com/open?id=1Z6acZwOgIrckeOXWqLb9zXgoqmISMtv4",
    tags: ["Product Copy", "Campaigns", "Agile"]
  },
  {
    title: "LinkedIn Thought Leadership Article",
    industry: "Professional", type: "Other Copy",
    folder: "Other Copy",
    desc: "Long-form LinkedIn article positioning expertise and building authority — clear narrative arc, professional but approachable tone.",
    link: "https://drive.google.com/open?id=1kpSjVwIgESvwIiJWnsY6AZ0SH9K8_Km4",
    tags: ["Thought Leadership", "Long-form", "LinkedIn"]
  },
  {
    title: "CredPal — Investment Product Copies",
    industry: "Fintech", type: "Other Copy",
    folder: "Other Copy",
    desc: "Targeted copy for CredPal's investment product suite — demystifying finance through clear, benefit-first language.",
    link: "https://drive.google.com/open?id=1I9-CqcZnrGeSsxsFkQ2s1sEVjZ3NZXCw",
    tags: ["Investment", "Finance", "Education"]
  },
  {
    title: "Customer Education — Device Financing",
    industry: "Fintech", type: "Other Copy",
    folder: "Other Copy",
    desc: "Educational copy breaking down device financing options — simplifies a complex product into clear, jargon-free customer guidance.",
    link: "https://drive.google.com/open?id=1F7mdfF3bmqow_jYrwhcprfS6HCpzJi1U",
    tags: ["Customer Ed", "Fintech", "Clarity"]
  },

  // ── WEB & STRATEGY ────────────────────────────────────────
  {
    title: "Enif AI — Full Website Copy",
    industry: "Fintech", type: "Web & Strategy",
    folder: "Web & Strategy",
    desc: "End-to-end website copy for an AI automation platform — positioning, value propositions, landing pages, and CTAs all optimised for conversion.",
    link: "https://drive.google.com/open?id=1iDwfaG3AYaYZlhJ_N5Y_62_2aV9QBnDZ",
    tags: ["Website", "UX Copy", "AI Platform"]
  },
  {
    title: "Vahlid — Social Media Strategy Calendar",
    industry: "Fintech", type: "Web & Strategy",
    folder: "Web & Strategy",
    desc: "Full content strategy and editorial calendar that drove 80% signup growth — channel mix, content pillars, and post-level copy all included.",
    link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M",
    tags: ["Strategy", "Calendar", "Growth"]
  },
  {
    title: "COMEF — Digital Brochure Copy",
    industry: "Interior Decor", type: "Web & Strategy",
    folder: "Web & Strategy",
    desc: "Copy for a premium digital brochure — persuasive, design-aware writing that elevates brand perception and drives inquiries.",
    link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M",
    tags: ["Brochure", "Brand", "B2B"]
  },
  {
    title: "Mikay Agency — Company Profile",
    industry: "Retail & Agency", type: "Web & Strategy",
    folder: "Web & Strategy",
    desc: "Complete company profile document for Mikay Agency — credentials, positioning, and service offerings written to win clients on first read.",
    link: "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M",
    tags: ["Company Profile", "B2B", "Brand Story"]
  }
];

const industries = [
  {
    name: "Fintech & Digital Products",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    companies: [
      { name: "CredPal", domain: "credpal.com" },
      { name: "Enif AI", domain: "enif.ai" },
      { name: "Vahlid", domain: "vahlid.com" },
      { name: "Jikoo", domain: "jikoo.io" }
    ]
  },
  {
    name: "Retail, FMCG & Lifestyle",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    companies: [
      { name: "Jumia", domain: "jumia.com.ng" },
      { name: "Eric Kayser", domain: "eric-kayser.com" },
      { name: "Munchies After Dark", domain: null },
      { name: "Bahija", domain: null }
    ]
  },
  {
    name: "Interior Decor",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    companies: [
      { name: "COMEF", domain: null }
    ]
  },
  {
    name: "Corporate & Financial Services",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    companies: [
      { name: "Access Bank", domain: "accessbankplc.com" },
      { name: "Bovas Group", domain: "bovasgroup.com" },
      { name: "Dangote Foundation", domain: "dangote.com" }
    ]
  },
  {
    name: "NGO & International Development",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    companies: [
      { name: "HACEY Health", domain: "haceyhealth.org" },
      { name: "UNFPA", domain: "unfpa.org" },
      { name: "USAID", domain: "usaid.gov" },
      { name: "ActionAid", domain: "actionaid.org" },
      { name: "Amplify Change", domain: "amplifychange.org" },
      { name: "ACT Foundation", domain: "theactfoundation.org" },
      { name: "UN Trust Fund", domain: "untf.org" }
    ]
  },
  {
    name: "Education",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    companies: [
      { name: "Iconic University", domain: "iconicuniversity.edu.ng" }
    ]
  },
  {
    name: "Entertainment & Lifestyle",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    companies: [
      { name: "Play Street", domain: null }
    ]
  },
  {
    name: "Energy & Utilities",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    companies: [
      { name: "Bovas Group", domain: "bovasgroup.com" }
    ]
  }
];

const experience = [
  { company: "4th Leap Consultancy", role: "Client Services & Content Strategist", points: ["Built bespoke content strategies mapping pillars, editorial calendars, and channel mix to business growth goals.", "Defined brand voice guidelines for Iconic University, Bovas Group, and Play Street."] },
  { company: "Mikay Agency", role: "Copywriter", points: ["Campaign copy and brand messaging across food, fashion, and real estate brands.", "Supervised full content pipeline — photography briefs, graphic direction, quality control."] },
  { company: "CredPal & Enif", role: "Marketing Communications Officer", points: ["60% growth in signups and engagement. Sub-5% spam rate across all lifecycle campaigns.", "Wrote all UX/product copy for app and website, plus ad copy across Meta, Instagram, LinkedIn & Google."] },
  { company: "Coalition Technologies", role: "SEO Copywriter", points: ["Long & short-form SEO content across tech, health, finance and e-commerce niches.", "Full on-page optimisation: meta, H1s, alt text, anchor text, internal linking."] },
  { company: "Vahlid", role: "Digital Marketing Specialist & Copywriter", points: ["Rewrote all website and UX app copy from scratch. 80% increase in signups.", "Radio jingles, TV ad scripts, plus paid social on Meta, LinkedIn, and Google."] }
];

const skills = ['Direct Response', 'SEO Copywriting', 'Email Automation', 'UX & Product Copy', 'Brand Storytelling', 'Content Strategy', 'Ad & Social Copy', 'Video Scriptwriting', 'Lifecycle Emails', 'Conversion Copy'];

// ============================================================
// LOGO FETCHING
// ============================================================
const logoCache = {};

function getLogoUrl(domain) {
  if (!domain) return null;
  // Use DuckDuckGo's icon service as primary, Clearbit as backup
  return `https://logo.clearbit.com/${domain}`;
}

function getFaviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function createLogoElement(company) {
  if (!company.domain) {
    const fallback = document.createElement('div');
    fallback.className = 'company-logo-fallback';
    fallback.textContent = getInitials(company.name);
    return fallback;
  }

  const img = document.createElement('img');
  img.className = 'company-logo-img';
  img.alt = company.name;

  // Try Clearbit first
  img.src = getLogoUrl(company.domain);
  img.onerror = function() {
    // Fallback to Google favicon
    this.src = getFaviconUrl(company.domain);
    this.onerror = function() {
      // Final fallback: initials
      const fallback = document.createElement('div');
      fallback.className = 'company-logo-fallback';
      fallback.textContent = getInitials(company.name);
      this.parentNode && this.parentNode.replaceChild(fallback, this);
    };
  };

  return img;
}

// ============================================================
// INDUSTRY CARD COLORS (per sector)
// ============================================================
const industryColors = {
  0: '#C9A84C', // fintech gold
  1: '#E8553A', // retail coral
  2: '#7BB87A', // interior green
  3: '#5B87B8', // corporate blue
  4: '#A07BDC', // ngo purple
  5: '#58B8A8', // education teal
  6: '#E8A03A', // entertainment amber
  7: '#E85A5A', // energy red
};

// ============================================================
// RENDER INDUSTRIES
// ============================================================
function renderIndustries() {
  const grid = document.getElementById('industries-grid');
  const countEl = document.getElementById('industries-count');
  countEl.textContent = industries.length;
  grid.innerHTML = '';

  industries.forEach((ind, i) => {
    const card = document.createElement('div');
    card.className = 'industry-card';
    card.style.transitionDelay = `${i * 0.07}s`;

    const color = industryColors[i] || '#C9A84C';
    const companiesHtml = ind.companies.map(c => {
      return `<div class="company-logo-pill" data-domain="${c.domain || ''}" data-name="${c.name}">
        <div class="company-logo-slot"></div>
        <span class="company-logo-name">${c.name}</span>
      </div>`;
    }).join('');

    card.innerHTML = `
      <div class="industry-card-header">
        <div class="industry-icon-wrap" style="color:${color};background:${color}18;border-color:${color}30">
          ${ind.icon}
        </div>
        <div>
          <div class="industry-card-name">${ind.name}</div>
          <div class="industry-card-count">${ind.companies.length} partner${ind.companies.length > 1 ? 's' : ''}</div>
        </div>
      </div>
      <div class="company-logos">${companiesHtml}</div>
    `;

    grid.appendChild(card);

    // Load logos after DOM insertion
    card.querySelectorAll('.company-logo-pill').forEach((pill, ci) => {
      const slot = pill.querySelector('.company-logo-slot');
      const domain = pill.dataset.domain;
      const name = pill.dataset.name;
      const logoEl = createLogoElement({ name, domain: domain || null });
      slot.replaceWith(logoEl);
    });
  });

  // Trigger reveal observer for industry cards
  setupObserver(document.querySelectorAll('.industry-card'));
}

// ============================================================
// RENDER TICKER
// ============================================================
function renderTicker() {
  const track = document.getElementById('ticker-track');
  const items = [...skills, ...skills].map(s =>
    `<span class="ticker-item"><span class="ticker-dot"></span>${s}</span>`
  ).join('');
  track.innerHTML = items;
}

// ============================================================
// RENDER PROJECTS
// ============================================================
const industryIconMap = {
  'Fintech':              { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`, color: '#C9A84C' },
  'NGO':                  { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`, color: '#A07BDC' },
  'Interior Decor':       { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`, color: '#7BB87A' },
  'Food & FMCG':          { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`, color: '#E8553A' },
  'Retail & Agency':      { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`, color: '#E8A03A' },
  'Retail & Lifestyle':   { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`, color: '#E8553A' },
  'Entertainment':        { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="5 3 19 12 5 21 5 3"/></svg>`, color: '#58B8D8' },
  'Education & Publishing': { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`, color: '#58B8A8' },
  'Health & Wellness':    { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`, color: '#7BB87A' },
  'Professional':         { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`, color: '#5B87B8' },
};

// Folder labels → subtle badge color
const folderColors = {
  'Social Media Designs': '#C9A84C',
  'Social Media Copy':    '#E8A03A',
  'Sales Copy':           '#E8553A',
  'Emails':               '#7BB87A',
  'Other Copy':           '#5B87B8',
  'Web & Strategy':       '#A07BDC',
};

const arrowSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

function renderProjects(filter = 'All') {
  const grid = document.getElementById('project-grid');
  const countEl = document.getElementById('filter-count');
  grid.innerHTML = '';

  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);
  countEl.textContent = `${filtered.length} project${filtered.length !== 1 ? 's' : ''}`;

  filtered.forEach((p, i) => {
    const meta = industryIconMap[p.industry] || { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>`, color: '#C9A84C' };
    const folderColor = folderColors[p.folder] || '#C9A84C';

    const wrap = document.createElement('div');
    wrap.className = 'project-card-wrap reveal-box';
    wrap.style.transitionDelay = `${i * 0.04}s`;

    wrap.innerHTML = `
      <div class="card" onclick="window.open('${p.link}', '_blank')">
        <div class="card-head">
          <div class="card-icon" style="color:${meta.color};">${meta.icon}</div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;">
            <span class="card-badge">${p.type}</span>
            <span class="card-folder" style="--fc:${folderColor};">${p.folder}</span>
          </div>
        </div>
        <div class="card-industry-label">${p.industry}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-action">
          <span class="card-action-btn">View Asset ${arrowSvg}</span>
          <div class="card-arrow">${arrowSvg}</div>
        </div>
      </div>
    `;
    grid.appendChild(wrap);
  });

  setupObserver(document.querySelectorAll('.project-card-wrap.reveal-box:not(.visible)'));
}

// ============================================================
// RENDER EXPERIENCE
// ============================================================
function renderExperience() {
  const timeline = document.getElementById('timeline');
  experience.forEach((exp, i) => {
    const item = document.createElement('div');
    item.className = 'reveal-box';
    item.style.transitionDelay = `${i * 0.1}s`;

    item.innerHTML = `
      <div class="tl-item">
        <div class="tl-marker">
          <span class="tl-num">0${i+1}</span>
          <div class="tl-dot"></div>
        </div>
        <h3 class="tl-role">${exp.role}</h3>
        <p class="tl-company">${exp.company}</p>
        <ul class="tl-points">
          ${exp.points.map(pt => `
            <li class="tl-point">
              <svg class="tl-check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${pt}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    timeline.appendChild(item);
  });
}

// ============================================================
// INTERSECTION OBSERVER
// ============================================================
function setupObserver(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(el => observer.observe(el));
}

function setupGlobalReveal() {
  setupObserver(document.querySelectorAll('.reveal-box'));
}

// ============================================================
// FILTER SETUP
// ============================================================
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderProjects(e.target.dataset.filter);
    });
  });
}

// ============================================================
// NAV SCROLL
// ============================================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ============================================================
// MOBILE HAMBURGER
// ============================================================
function setupHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  renderExperience();
  renderProjects();
  renderIndustries();
  setupFilters();
  setupGlobalReveal();
  setupHamburger();
});