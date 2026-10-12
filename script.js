// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// DATA
// ============================================================
const projects = [
  {
    "client": "HACEY Health",
    "title": "Grassroots Network Designs",
    "industry": "NGO",
    "type": "Social Media",
    "folder": "Social Media Designs",
    "desc": "Short advocacy lines for HACEY’s Inclusion for All Grassroots Network campaign, written to sit on the designs and make sense at a glance.",
    "link": "https://drive.google.com/open?id=1gE1-yANC_iCcPPK9jJcxzevWLi1jaOwo",
    "result": null,
    "tags": []
  },
  {
    "client": "CredPal",
    "title": "Brand Ad & Email Design Copy",
    "industry": "Fintech",
    "type": "Social Media",
    "folder": "Social Media Designs",
    "desc": "Email headers and ad creatives for CredPal. Copy with about two seconds to stop a thumb.",
    "link": "https://drive.google.com/open?id=1TGOjlaZ8S2KD5vB0wCRbBcVNVvN9XwKa",
    "result": null,
    "tags": []
  },
  {
    "client": "Enif AI",
    "title": "Visual Brand Copy",
    "industry": "Fintech",
    "type": "Social Media",
    "folder": "Social Media Designs",
    "desc": "A design-led ad series positioning Enif as the AI automation tool a busy team should start with.",
    "link": "https://drive.google.com/open?id=1E0P7yf8tGOf8IKl2nqcBy2iHke181f2q",
    "result": null,
    "tags": []
  },
  {
    "client": "Mikay Agency",
    "title": "Launch Content Calendar",
    "industry": "Retail & Agency",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "Mikay Agency’s market debut: the launch plan, plus every post, story and video script that went out with it.",
    "link": "https://drive.google.com/open?id=1usVo2R8hvmBsnjBUms01GiPMz6HnMa9S",
    "result": null,
    "tags": []
  },
  {
    "client": "Play Street",
    "title": "Social Media Copy",
    "industry": "Entertainment",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "Playful feed and story copy for an entertainment brand, with one voice whether the post is a joke or an announcement.",
    "link": "https://drive.google.com/open?id=19NaKilujijYfUwaoRMgFsgt1Vh-2WKSbsQTgW3CJte4",
    "result": null,
    "tags": []
  },
  {
    "client": "Bahija",
    "title": "Captions & Social Content",
    "industry": "Retail & Lifestyle",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "Captions written to match Bahija’s look, so the words and the pictures sound like the same brand.",
    "link": "https://drive.google.com/open?id=1cz0IcJwAXjhFEN4MtU40pkI5oc3lj_QReNj9fD1o8d8",
    "result": null,
    "tags": []
  },
  {
    "client": "Munchies After Dark",
    "title": "Social Copy Suite",
    "industry": "Food & FMCG",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "Captions, stories and motion-video scripts for a food brand, written to make people hungry after dark.",
    "link": "https://drive.google.com/open?id=1JZn1uHiTpRhlQ5TGwFWhm21XX47_G0ooVGP_3tZdRrY",
    "result": null,
    "tags": []
  },
  {
    "client": "Mikay",
    "title": "Multi-Format Social Content",
    "industry": "Retail & Agency",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "Feed posts, video scripts and stories for Mikay Agency’s clients across several industries, each in its own voice.",
    "link": "https://drive.google.com/open?id=15W8x5iiv06tHYdbyCjLUpR4woxDjyyd5vje3wt-UqiM",
    "result": null,
    "tags": []
  },
  {
    "client": "COMEF",
    "title": "Social Media Copy",
    "industry": "Interior Decor",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "A monthly calendar and story copy for COMEF, a premium interior decor brand. Copy that sells the feeling of a finished room.",
    "link": "https://drive.google.com/open?id=1-GzU9AmVfEG1N8jRfTJKH_DPZ0FWKN7dA_IeSz4tdxk",
    "result": null,
    "tags": []
  },
  {
    "client": "Eric Kayser",
    "title": "Newsletter & Social Copy",
    "industry": "Food & FMCG",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "Newsletters and social copy for the French bakery’s Nigerian branches, written so you can almost smell the bread.",
    "link": "https://drive.google.com/open?id=1iZiAXngZ_NKT5-ir6CB6ueWN-_D33v4PK0z9QOBYC8M",
    "result": null,
    "tags": []
  },
  {
    "client": "One & Only",
    "title": "April–May Content Calendar",
    "industry": "Retail & Lifestyle",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "Two months of posts with hooks and calls to action, planned and written for a lifestyle brand.",
    "link": "https://drive.google.com/open?id=1gCZMeIaXbODHfjKDJBri_WqZy1gYkAA4",
    "result": null,
    "tags": []
  },
  {
    "client": "Mikay",
    "title": "Copies & Brand Messaging",
    "industry": "Retail & Agency",
    "type": "Social Media",
    "folder": "Social Media Copy",
    "desc": "The messaging foundation for Mikay Agency: core lines and a post library the team could use in any format.",
    "link": "https://drive.google.com/open?id=1diKOLMj1ck1-sXpcp_Tx1dXfRT8lBjlXVjDksU0U9ok",
    "result": null,
    "tags": []
  },
  {
    "client": "Kobo Book Publishing",
    "title": "Sales Page",
    "industry": "Education & Publishing",
    "type": "Sales Copy",
    "folder": "Sales Copy",
    "desc": "A sales page built on research into what Kobo’s buyers want and fear before they pay.",
    "link": "https://drive.google.com/open?id=1e8b8qjgeWWK44HIbf7qPSAAJ5rZLCB-I__2yIVUS62Y",
    "result": null,
    "tags": []
  },
  {
    "client": "Course",
    "title": "Bridge the Gap System",
    "industry": "Education & Publishing",
    "type": "Sales Copy",
    "folder": "Sales Copy",
    "desc": "A course sales page that answers every objection in order, from “will this work for me?” to “why now?”",
    "link": "https://drive.google.com/open?id=1obYkH0DVXpqU-cFb054TTzXL9ZOmdH4L",
    "result": null,
    "tags": []
  },
  {
    "client": "Health programme",
    "title": "Weight Loss Program",
    "industry": "Health & Wellness",
    "type": "Sales Copy",
    "folder": "Sales Copy",
    "desc": "Sales copy for a weight-loss programme that starts with how the reader feels, then hands them a plan.",
    "link": "https://drive.google.com/open?id=1DRve7dVVTAQGnwYkINAWI0k82OfExSGM",
    "result": null,
    "tags": []
  },
  {
    "client": "CredPal",
    "title": "Investment & Savings Sales Page",
    "industry": "Fintech",
    "type": "Sales Copy",
    "folder": "Sales Copy",
    "desc": "CredPal’s investment and savings products in plain words, so a first-time saver trusts the page enough to start.",
    "link": "https://drive.google.com/open?id=13TtvXENh9BC81gRzzoCPbWTYmEpo4-1GNoKEmAG6I_g",
    "result": null,
    "tags": []
  },
  {
    "client": "CredPal",
    "title": "D.engage Email Content",
    "industry": "Fintech",
    "type": "Emails",
    "folder": "Emails",
    "desc": "Promotional, transactional and nurture emails for CredPal’s lifecycle programme on D.engage.",
    "link": "https://drive.google.com/open?id=15D4RbXQq5WD5IrhqxkKTXzbDUaLeqYRv",
    "result": null,
    "tags": []
  },
  {
    "client": "CredPal",
    "title": "Automated Email Sequences",
    "industry": "Fintech",
    "type": "Emails",
    "folder": "Emails",
    "desc": "Onboarding, activation and retention flows triggered by what each user does.",
    "link": "https://drive.google.com/open?id=1zSVAqmxHzaMGrxsNO-rAgMeIO2m7iPB7",
    "result": "Under 5% spam rate",
    "tags": [
      "Under 5% spam rate"
    ]
  },
  {
    "client": "CredPal",
    "title": "WhatsApp Repayment Broadcasts",
    "industry": "Fintech",
    "type": "Emails",
    "folder": "Emails",
    "desc": "Repayment reminders on WhatsApp: firm, clear and polite, so customers still open the next one.",
    "link": "https://drive.google.com/open?id=1ZLT5Su034_DpOVP6mXdF0xOa3q9-Fc3E",
    "result": null,
    "tags": []
  },
  {
    "client": "Onboarding",
    "title": "Welcome Email Sequence",
    "industry": "Fintech",
    "type": "Emails",
    "folder": "Emails",
    "desc": "A first-week welcome series with one job: get new users to take their first real action.",
    "link": "https://drive.google.com/open?id=10Zyhnr0_9jMzu4eXyBonMNSFwkfwi2ZA",
    "result": null,
    "tags": []
  },
  {
    "client": "CredPal",
    "title": "Invest, Save, Credit Marketing Copies",
    "industry": "Fintech",
    "type": "Other Copy",
    "folder": "Other Copy",
    "desc": "Marketing copy across CredPal’s three products: invest, save and credit.",
    "link": "https://drive.google.com/open?id=1mR2vv2RRkhtaMa9eegLVrwmmTFPL3Dn1",
    "result": null,
    "tags": []
  },
  {
    "client": "Layi",
    "title": "Influencer Marketing Script",
    "industry": "Entertainment",
    "type": "Other Copy",
    "folder": "Other Copy",
    "desc": "An influencer brief and script for a brand activation, written to sound like the influencer, not the brand.",
    "link": "https://drive.google.com/open?id=13_rkDcAczBWnDH7S6guJbSEicqoW23im",
    "result": null,
    "tags": []
  },
  {
    "client": "CredPal",
    "title": "Mixed Marketing Copies",
    "industry": "Fintech",
    "type": "Other Copy",
    "folder": "Other Copy",
    "desc": "Campaign copy and in-app messages across CredPal’s products.",
    "link": "https://drive.google.com/open?id=1Z6acZwOgIrckeOXWqLb9zXgoqmISMtv4",
    "result": null,
    "tags": []
  },
  {
    "client": "LinkedIn",
    "title": "Thought Leadership Article",
    "industry": "Professional",
    "type": "Other Copy",
    "folder": "Other Copy",
    "desc": "A long-form LinkedIn article that positions its author as the person to call on their subject.",
    "link": "https://drive.google.com/open?id=1kpSjVwIgESvwIiJWnsY6AZ0SH9K8_Km4",
    "result": null,
    "tags": []
  },
  {
    "client": "CredPal",
    "title": "Investment Product Copies",
    "industry": "Fintech",
    "type": "Other Copy",
    "folder": "Other Copy",
    "desc": "Copy for CredPal’s investment products that leads with what the customer gets, in words a non-banker understands.",
    "link": "https://drive.google.com/open?id=1I9-CqcZnrGeSsxsFkQ2s1sEVjZ3NZXCw",
    "result": null,
    "tags": []
  },
  {
    "client": "Customer education",
    "title": "Device Financing",
    "industry": "Fintech",
    "type": "Other Copy",
    "folder": "Other Copy",
    "desc": "Plain-English guides to device financing: how the options work and how to pick one.",
    "link": "https://drive.google.com/open?id=1F7mdfF3bmqow_jYrwhcprfS6HCpzJi1U",
    "result": null,
    "tags": []
  },
  {
    "client": "Enif AI",
    "title": "Full Website Copy",
    "industry": "Fintech",
    "type": "Landing Pages",
    "folder": "Web & Strategy",
    "desc": "The full Enif AI website: positioning, landing pages and every call to action.",
    "link": "https://drive.google.com/open?id=1iDwfaG3AYaYZlhJ_N5Y_62_2aV9QBnDZ",
    "result": null,
    "tags": []
  },
  {
    "client": "Vahlid",
    "title": "Social Media Strategy Calendar",
    "industry": "Fintech",
    "type": "Web & Strategy",
    "folder": "Web & Strategy",
    "desc": "The content strategy and editorial calendar behind Vahlid’s 80% sign-up growth.",
    "link": "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M",
    "result": "80% sign-up growth",
    "tags": [
      "80% sign-up growth"
    ]
  },
  {
    "client": "COMEF",
    "title": "Digital Brochure Copy",
    "industry": "Interior Decor",
    "type": "Web & Strategy",
    "folder": "Web & Strategy",
    "desc": "A digital brochure for COMEF’s business buyers, written to work with the design.",
    "link": "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M",
    "result": null,
    "tags": []
  },
  {
    "client": "Mikay Agency",
    "title": "Company Profile",
    "industry": "Retail & Agency",
    "type": "Web & Strategy",
    "folder": "Web & Strategy",
    "desc": "Mikay Agency’s credentials, positioning and services in one document a prospect can forward.",
    "link": "https://drive.google.com/drive/folders/11c13ZSaHKB2VAW0VbmE_O-1IS-hA-V7M",
    "result": null,
    "tags": []
  },
  {
    "client": "Peralta Defense",
    "title": "Armed Security Service Page",
    "industry": "Security Services",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Service, location, training and blog pages built around how people compare security providers.",
    "link": "https://www.peraltadefense.com/services/armed-security/",
    "result": "+900% organic conversions",
    "tags": [
      "+900% organic conversions"
    ]
  },
  {
    "client": "Cummins Logistics",
    "title": "Warehousing Page",
    "industry": "Logistics",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Page copy, metadata and structure for businesses searching for a warehousing and 3PL partner.",
    "link": "https://www.cumminslogistics.com/services/warehousing-solutions/",
    "result": "+366.7% organic conversions",
    "tags": [
      "+366.7% organic conversions"
    ]
  },
  {
    "client": "Wall Tent Shop",
    "title": "Site-wide Copy",
    "industry": "Outdoor Ecommerce",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Copy across the store, rewritten to win back lost keyword rankings and show up in AI search.",
    "link": "https://www.walltentshop.com/",
    "result": "+273% organic conversions",
    "tags": [
      "+273% organic conversions"
    ]
  },
  {
    "client": "Rescue Restoration",
    "title": "Water Restoration Page",
    "industry": "Property Restoration",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Service pages, location pages and a new restoration blog. Leads came in at under half the industry-average cost.",
    "link": "https://rescuega.com/services/water-restoration/",
    "result": "+250% organic conversions",
    "tags": [
      "+250% organic conversions"
    ]
  },
  {
    "client": "Lakeview Building Group",
    "title": "Lake Norman Builder Page",
    "industry": "Home Building",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Service pages matched to where buyers live, plus copy written for the way people ask AI tools about building a home.",
    "link": "https://www.lakeviewbuildinggroup.com/lake-norman-home-builder",
    "result": "+170% organic conversions MoM",
    "tags": [
      "+170% organic conversions MoM"
    ]
  },
  {
    "client": "Maxwell Locke & Ritter",
    "title": "Insights Blog",
    "industry": "Accounting & Advisory",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Keyword-led updates and blog posts reformatted with article schema for an accounting firm. Organic search now 85% of sessions.",
    "link": "https://www.mlrpc.com/insights/",
    "result": "Backlinks +1,247.7%",
    "tags": [
      "Backlinks +1,247.7%"
    ]
  },
  {
    "client": "FC Engineering",
    "title": "Services Pages",
    "industry": "Engineering",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Service pages for engineers searching for analog, RF, mixed-signal and mechanical design help. Alongside PPC.",
    "link": "https://engsrvcs.com/services/",
    "result": "+1,333.3% conversions in 4 months",
    "tags": [
      "+1,333.3% conversions in 4 months"
    ]
  },
  {
    "client": "Casa Teresa",
    "title": "Vacation Packages & Destination Pages",
    "industry": "Luxury Hospitality",
    "type": "SEO Copywriting",
    "folder": "SEO Content",
    "desc": "Experience, destination and planning pages, plus blog posts that send travellers to book direct.",
    "link": "https://casateresacr.com/luxury-vacation-packages/",
    "result": "+541% organic traffic",
    "tags": [
      "+541% organic traffic"
    ]
  },
  {
    "client": "Rescue Restoration",
    "title": "Water Damage Behind Walls",
    "industry": "Property Restoration",
    "type": "SEO Copywriting",
    "folder": "SEO Articles",
    "desc": "Published Sep 17, 2026. Question-led headings that walk a worried homeowner through the signs, the inspection and the detection methods.",
    "link": "https://rescuega.com/how-do-you-know-if-water-damage-has-spread-behind-walls/",
    "result": null,
    "tags": []
  },
  {
    "client": "Maxwell Locke & Ritter",
    "title": "Four Pillars of SaaS Quality of Earnings",
    "industry": "Accounting & Advisory",
    "type": "SEO Copywriting",
    "folder": "SEO Articles",
    "desc": "Published Oct 8, 2026. A thought-leadership article for investors and deal teams, with an FAQ.",
    "link": "https://www.mlrpc.com/insights/blog/the-four-pillars-of-saas-quality-of-earnings-what-investors-should-know/",
    "result": null,
    "tags": []
  },
  {
    "client": "Lakeview Building Group",
    "title": "8 Things to Know Before Building a Custom Home",
    "industry": "Home Building",
    "type": "SEO Copywriting",
    "folder": "SEO Articles",
    "desc": "For first-time custom-home buyers: budget, timeline, floor plans, storage and planning for later.",
    "link": "https://www.lakeviewbuildinggroup.com/blog/8-things-to-know-before-building-a-custom-home",
    "result": null,
    "tags": []
  },
  {
    "client": "Fathom Analytics",
    "title": "Landing Page",
    "industry": "Software",
    "type": "Landing Pages",
    "folder": "Landing Pages",
    "desc": "Landing page copy for Fathom, the privacy-first alternative to Google Analytics.",
    "link": "https://usefathom.com/",
    "result": null,
    "tags": []
  },
  {
    "client": "Buttondown",
    "title": "Landing Page",
    "industry": "Software",
    "type": "Landing Pages",
    "folder": "Landing Pages",
    "desc": "Landing page copy for Buttondown, the newsletter tool for writers and developers.",
    "link": "https://buttondown.com/",
    "result": null,
    "tags": []
  },
  {
    "client": "Basecamp",
    "title": "Landing Page",
    "industry": "Software",
    "type": "Landing Pages",
    "folder": "Landing Pages",
    "desc": "Landing page copy for Basecamp, the project-management tool from 37signals.",
    "link": "https://basecamp.com/",
    "result": null,
    "tags": []
  },
  {
    "client": "Ope Adedeji",
    "title": "Here and There Anthology Essays",
    "industry": "Literary & Editorial",
    "type": "Editing & Storytelling",
    "folder": "Editing & Storytelling",
    "desc": "Edited and proofread the anthology’s essays, keeping each writer’s voice while tightening every sentence.",
    "link": null,
    "result": null,
    "tags": []
  },
  {
    "client": "Ope Adedeji",
    "title": "Making of Gods",
    "industry": "Literary & Editorial",
    "type": "Editing & Storytelling",
    "folder": "Editing & Storytelling",
    "desc": "Edited and proofread the story she sent to the Miles Morland Foundation, keeping her voice and sharpening clarity and impact.",
    "link": null,
    "result": null,
    "tags": []
  },
  {
    "client": "Ope Adedeji",
    "title": "Book and Banter Newsletter",
    "industry": "Literary & Editorial",
    "type": "Editing & Storytelling",
    "folder": "Editing & Storytelling",
    "desc": "Research, proofreading and editorial checks across issues of her literary newsletter.",
    "link": null,
    "result": null,
    "tags": []
  },
  {
    "client": "HACEY Health",
    "title": "Public Health Stories",
    "industry": "Literary & Editorial",
    "type": "Editing & Storytelling",
    "folder": "Editing & Storytelling",
    "desc": "Short fiction that carries sexual and reproductive health and malaria messages to community readers through character and plot.",
    "link": null,
    "result": null,
    "tags": []
  }
];

const industries = [
  {
    "name": "Fintech & digital products",
    "description": "Apps people trust with their money.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/></svg>",
    "companies": [
      {
        "name": "CredPal",
        "domain": "credpal.com"
      },
      {
        "name": "Enif AI",
        "domain": "enif.ai"
      },
      {
        "name": "Vahlid",
        "domain": "vahlid.com"
      },
      {
        "name": "Jikoo",
        "domain": "jikoo.io"
      }
    ]
  },
  {
    "name": "Retail, FMCG & lifestyle",
    "description": "Products people buy with their eyes first.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></svg>",
    "companies": [
      {
        "name": "Jumia",
        "domain": "jumia.com.ng"
      },
      {
        "name": "Eric Kayser",
        "domain": "eric-kayser.com"
      },
      {
        "name": "Munchies After Dark",
        "domain": null
      },
      {
        "name": "Bahija",
        "domain": null
      }
    ]
  },
  {
    "name": "Interior decor",
    "description": "Rooms sold before anyone walks in.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/></svg>",
    "companies": [
      {
        "name": "COMEF",
        "domain": null
      }
    ]
  },
  {
    "name": "Corporate & financial services",
    "description": "High-stakes documents, like Access Bank’s 2019 Sustainability Report.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\"/><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"16\"/><line x1=\"10\" y1=\"14\" x2=\"14\" y2=\"14\"/></svg>",
    "companies": [
      {
        "name": "Access Bank",
        "domain": "accessbankplc.com"
      },
      {
        "name": "Bovas Group",
        "domain": "bovasgroup.com"
      },
      {
        "name": "Dangote Foundation",
        "domain": "dangote.com"
      }
    ]
  },
  {
    "name": "NGO & international development",
    "description": "Stories made with communities, for donors who check.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg>",
    "companies": [
      {
        "name": "HACEY Health",
        "domain": "haceyhealth.org"
      },
      {
        "name": "UNFPA",
        "domain": "unfpa.org"
      },
      {
        "name": "USAID",
        "domain": "usaid.gov"
      },
      {
        "name": "ActionAid",
        "domain": "actionaid.org"
      },
      {
        "name": "Amplify Change",
        "domain": "amplifychange.org"
      },
      {
        "name": "ACT Foundation",
        "domain": "theactfoundation.org"
      },
      {
        "name": "UN Trust Fund",
        "domain": "untf.org"
      }
    ]
  },
  {
    "name": "Education",
    "description": "Helping students and parents choose.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></svg>",
    "companies": [
      {
        "name": "Iconic University",
        "domain": "iconicuniversity.edu.ng"
      }
    ]
  },
  {
    "name": "Entertainment & lifestyle",
    "description": "Fun copy that still gets people through the door.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/></svg>",
    "companies": [
      {
        "name": "Play Street",
        "domain": null
      }
    ]
  },
  {
    "name": "Energy & utilities",
    "description": "Everyday energy, explained plainly.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "companies": [
      {
        "name": "Bovas Group",
        "domain": "bovasgroup.com"
      }
    ]
  },
  {
    "name": "Literary & editorial",
    "description": "Essays, fiction and newsletters for an award-winning writer.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></svg>",
    "companies": [
      {
        "name": "Ope Adedeji",
        "domain": null
      },
      {
        "name": "Here and There",
        "domain": null
      },
      {
        "name": "Book and Banter",
        "domain": null
      }
    ]
  },
  {
    "name": "SEO clients: local, B2B & ecommerce",
    "description": "US and international businesses that need the phone to ring.",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/></svg>",
    "companies": [
      {
        "name": "Peralta Defense",
        "domain": "peraltadefense.com"
      },
      {
        "name": "Cummins Logistics",
        "domain": "cumminslogistics.com"
      },
      {
        "name": "Wall Tent Shop",
        "domain": "walltentshop.com"
      },
      {
        "name": "Rescue Restoration",
        "domain": "rescuega.com"
      },
      {
        "name": "Lakeview Building Group",
        "domain": "lakeviewbuildinggroup.com"
      },
      {
        "name": "Maxwell Locke & Ritter",
        "domain": "mlrpc.com"
      },
      {
        "name": "FC Engineering",
        "domain": "engsrvcs.com"
      },
      {
        "name": "Casa Teresa",
        "domain": "casateresacr.com"
      }
    ]
  }
];

const serviceCopy = {
  "SEO Copywriting": [
    "Found, then chosen",
    "SEO strategy and copy that gets the call as well as the click.",
    "Ranking puts you in front of the buyer. The page decides whether they pick up the phone. I start with the strategy: keyword and competitor research, the gaps your rivals have missed, and a plan for which pages to build and what each one should rank for. Then I write service pages, location pages and articles in the words your buyers use, with a reason to contact you before they hit the back button.",
    "Peralta Defense, +900% organic conversions. FC Engineering, +1,333.3% conversions in four months. Wall Tent Shop, +56.4% transactions in six months."
  ],
  "Sales Copy": [
    "Read, then bought",
    "Sales pages for people who are interested but not yet convinced.",
    "Your visitor wants what you sell. Doubt is what stops them. Will it work for me? Is this person real? What if I lose my money? A good sales page answers each one before they ask. I research what buyers fear, then write the page in their words, from the headline to the last line above the button.",
    "CredPal investment and savings page · Kobo Book Publishing · a course and a weight-loss programme."
  ],
  "Emails": [
    "Opened, then used",
    "Emails that move people from sign-up to active user.",
    "Most sign-ups never come back after day one. Onboarding, activation, repayment and win-back messages are where that changes. For CredPal I wrote full lifecycle flows on D.engage, plus SMS, push and WhatsApp broadcasts, and kept the spam rate under 5% so the emails kept landing in the inbox.",
    "Under 5% spam rate across CredPal’s automated flows."
  ],
  "Social Media": [
    "Seen, then DM’d",
    "Captions that turn “how much?” into “send account number.”",
    "Likes don’t pay rent. I write feed posts, stories, video scripts and month-long calendars for food, fashion, decor and entertainment brands. Each one sounds like your brand, and each one gives your follower one clear next step.",
    "Munchies After Dark · Eric Kayser · Bahija · COMEF · Play Street · One & Only · Mikay Agency."
  ],
  "Landing Pages": [
    "Clicked, then converted",
    "Landing pages and websites that tell a visitor what to do next.",
    "A visitor gives your page a few seconds. In that time they need to know what you sell, who it’s for and why it beats the other tab they have open. I research the buyer and your competitors first, then write the headline, every section and every button so the page answers those three questions in order.",
    "The full Enif AI website · landing pages for Fathom, Buttondown and Basecamp."
  ],
  "Editing & Storytelling": [
    "Edited, then told",
    "Editing and storytelling that keeps your voice and sharpens every line.",
    "For years I have edited essays, fiction and a literary newsletter for Ope Adedeji, whose fiction has appeared in McSweeney’s Quarterly. That work trained me to read every sentence the way a reader does and cut what they don’t need. I bring the same eye to your copy, and the same feel for character and tension to the brand, founder and impact stories I write.",
    "Ope Adedeji’s Here and There anthology · her Miles Morland Foundation story · the Book and Banter newsletter · public health fiction for HACEY."
  ],
  "Web & Strategy": [
    "Planned, then built",
    "Content strategy with a reason behind every post and page.",
    "Before the first post or page there’s a question: who is this for, and what should they do next? I answer it with a content strategy: who you’re talking to, the pillars you own, which channels carry them and how often you show up. Then I write the calendars, company profiles and brochures that put it to work.",
    "The content strategy behind Vahlid’s 80% sign-up growth."
  ],
  "Other Copy": [
    "Said, then done",
    "Scripts, app copy, articles and the jobs that don’t fit a box.",
    "Influencer scripts. Device-financing explainers. LinkedIn articles for founders. In-app messages. If people have to read it, hear it or tap it, I write it so they understand it on the first go.",
    "The Layi influencer script · CredPal in-app copy · a device-financing education series."
  ]
};

const skills = ["Sales pages", "Landing pages", "Storytelling", "Creative writing", "Editing and proofreading", "SEO strategy", "SEO pages that bring calls", "Content strategy", "Lifecycle emails", "App and UX copy", "Instagram and TikTok captions", "Video and radio scripts", "Brand voice guides", "Impact stories for NGOs", "Content calendars", "Ad copy"];

// ============================================================
// LOGO FETCHING
// ============================================================
// Verified client assets and their source URLs are recorded in assets/logos/sources.json.
const clientLogos = {
  "walltentshop.com": "assets/logos/walltentshop.com.png",
  "lakeviewbuildinggroup.com": "assets/logos/lakeviewbuildinggroup.com.png",
  "mlrpc.com": "assets/logos/mlrpc.com.png",
  "engsrvcs.com": "assets/logos/engsrvcs.com.svg",
  "casateresacr.com": "assets/logos/casateresacr.com.png",
  "enif.ai": "assets/logos/enif.ai.png",
  "iconicuniversity.edu.ng": "assets/logos/iconicuniversity.edu.ng.png",
  "bovasgroup.com": "assets/logos/bovasgroup.com.png",
  "peraltadefense.com": "assets/logos/peraltadefense.com.png",
  "cumminslogistics.com": "assets/logos/cumminslogistics.com.png",
  "rescuega.com": "assets/logos/rescuega.com.png",
  "credpal.com": "assets/logos/credpal.com.png",
  "usefathom.com": "assets/logos/usefathom.com.png",
  "buttondown.com": "assets/logos/buttondown.com.png"
};

function getInitials(name) {
  return name.split(/\s+/).filter(word => /[a-z0-9]/i.test(word)).map(word => word[0]).join('').slice(0, 2).toUpperCase();
}

function getProjectCompany(project) {
  const hostname = project.link ? new URL(project.link).hostname.replace(/^www\./, '') : '';
  const titleBrand = project.client || (project.title.includes(' — ') ? project.title.split(' — ')[0] : '');
  const companies = industries.flatMap(industry => industry.companies);
  return companies.find(company => company.domain === hostname)
    || companies.find(company => titleBrand === company.name || titleBrand.startsWith(company.name + ' '))
    || { name: titleBrand || project.industry, domain: hostname && hostname !== 'drive.google.com' ? hostname : null };
}

function createLogoElement(company) {
  const mark = document.createElement('span');
  mark.className = 'company-logo-mark';
  mark.setAttribute('aria-hidden', 'true');
  const fallback = document.createElement('span');
  fallback.className = 'company-logo-fallback';
  fallback.textContent = getInitials(company.name);
  mark.appendChild(fallback);

  const source = clientLogos[company.domain];
  if (!source) return mark;

  const img = document.createElement('img');
  img.className = 'company-logo-img';
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.onload = () => {
    fallback.hidden = true;
    mark.classList.add('logo-loaded');
  };
  img.onerror = () => {
    img.hidden = true;
    fallback.hidden = false;
    mark.classList.remove('logo-loaded');
  };
  mark.appendChild(img);
  img.src = source;
  return mark;
}

// ============================================================
// RENDER INDUSTRIES
// ============================================================
function renderIndustries() {
  const grid = document.getElementById('industries-grid');
  const countEl = document.getElementById('industries-count');
  countEl.textContent = industries.length;
  grid.innerHTML = '';

  industries.forEach(ind => {
    const card = document.createElement('div');
    card.className = 'industry-card';
    const companiesHtml = ind.companies.map(c => {
      return `<div class="company-logo-pill" data-domain="${c.domain || ''}" data-name="${c.name}">
        <div class="company-logo-slot"></div>
        <span class="company-logo-name">${c.name}</span>
      </div>`;
    }).join('');

    card.innerHTML = `
      <div class="industry-card-header">
        <div class="industry-icon-wrap">
          ${ind.icon}
        </div>
        <div>
          <div class="industry-card-name">${ind.name}</div>
          <div class="industry-card-count">${ind.companies.length} partner${ind.companies.length > 1 ? 's' : ''}</div>
        </div>
      </div>
      <p class="industry-description">${ind.description}</p>
      <div class="company-logos">${companiesHtml}</div>
    `;

    grid.appendChild(card);

    // Load logos after DOM insertion
    card.querySelectorAll('.company-logo-pill').forEach(pill => {
      const slot = pill.querySelector('.company-logo-slot');
      const domain = pill.dataset.domain;
      const name = pill.dataset.name;
      const logoEl = createLogoElement({ name, domain: domain || null });
      slot.replaceWith(logoEl);
    });
  });

}

// ============================================================
// RENDER TICKER
// ============================================================
function renderTicker() {
  const track = document.getElementById('ticker-track');
  const items = skills.map(s =>
    `<span class="ticker-item"><span class="ticker-dot"></span>${s}</span>`
  ).join('');
  track.innerHTML = `<div class="ticker-group">${items}</div><div class="ticker-group" aria-hidden="true">${items}</div>`;
  const toggle = document.getElementById('ticker-toggle');
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const paused = toggle.getAttribute('aria-pressed') !== 'true';
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume motion' : 'Pause motion';
    track.classList.toggle('is-paused', paused);
  });
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

const arrowSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

// Covers use portfolio metadata, rather than invented screenshots or results.
const projectThemes = {
  'SEO Copywriting': ['sage', 'SEARCH & DISCOVERY'],
  'Sales Copy': ['clay', 'WORDS THAT SELL'],
  'Emails': ['lavender', 'IN THE INBOX'],
  'Social Media': ['peach', 'IN THE CONVERSATION'],
  'Landing Pages': ['blue', 'LANDING PAGES & WEBSITES'],
  'Web & Strategy': ['strategy', 'THE BIGGER PICTURE'],
  'Editing & Storytelling': ['rose', 'EDITED, THEN TOLD'],
  'Other Copy': ['sand', 'A DISTINCTIVE VOICE']
};
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
let filterAnimation;
let filterRevision = 0;
const runningAnimations = new Set();
const revealedElements = new WeakSet();
const queuedElements = new WeakSet();

// Independent translate/scale properties preserve the card's existing rotation and hover transform.
const entranceFrames = {
  rise: [{ opacity: 0, translate: '0 26px' }, { opacity: 1, translate: '0 0' }],
  left: [{ opacity: 0, translate: '-22px 0' }, { opacity: 1, translate: '0 0' }],
  right: [{ opacity: 0, translate: '22px 0' }, { opacity: 1, translate: '0 0' }],
  scale: [{ opacity: 0, translate: '0 16px', scale: '.97' }, { opacity: 1, translate: '0 0', scale: '1' }],
  soft: [{ opacity: 0, translate: '0 10px' }, { opacity: 1, translate: '0 0' }],
  fade: [{ opacity: 0 }, { opacity: 1 }]
};

function playMotion(element, frames, options) {
  if (motionPreference.matches || !element?.animate) return null;
  const animation = element.animate(frames, options);
  runningAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => runningAnimations.delete(animation));
  return animation;
}

motionPreference.addEventListener('change', event => {
  if (event.matches) runningAnimations.forEach(animation => animation.cancel());
});

function revealElements(elements, { variant = 'rise', stagger = 65, duration = 750 } = {}) {
  if (!revealObserver && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        revealObserver.unobserve(element);
        queuedElements.delete(element);
        if (revealedElements.has(element)) return;
        revealedElements.add(element);
        // Keyboard navigation should never land on content fading out to begin an entrance.
        if (document.activeElement && element.contains(document.activeElement)) return;
        playMotion(element, entranceFrames[element.dataset.revealVariant] || entranceFrames.rise, {
          duration: Number(element.dataset.revealDuration),
          delay: Number(element.dataset.revealDelay),
          easing: 'cubic-bezier(.16,1,.3,1)',
          fill: 'backwards'
        });
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -16px 0px' });
  }
  elements.forEach((element, index) => {
    if (element.hidden || revealedElements.has(element) || queuedElements.has(element)) return;
    element.dataset.revealVariant = variant;
    element.dataset.revealDuration = duration;
    element.dataset.revealDelay = (index % 4) * stagger;
    if (revealObserver) {
      queuedElements.add(element);
      revealObserver.observe(element);
    }
  });
}

function setupSectionMotion() {
  const groups = [
    // Hero, process note, results and services.
    ['.nav-logo, .nav-links, .nav-availability, .hamburger', { variant: 'fade', stagger: 60, duration: 500 }],
    ['.hero-location, .hero-h1, .hero-lede p, .hero-actions', { stagger: 75, duration: 850 }],
    ['.research-card', { variant: 'scale', duration: 1000 }],
    ['.hero-stats .stat-item', { variant: 'scale', stagger: 90 }],
    ['.proof-note', { variant: 'fade' }],
    ['.ticker-bar', { variant: 'soft', duration: 600 }],
    // Research, editing, reading list and the six audience cards.
    ['.copy-heading .section-meta, .copy-heading .section-title', { stagger: 90 }],
    ['.copy-intro p', { variant: 'left', stagger: 55 }],
    ['.copy-steps > div', { variant: 'right', stagger: 80 }],
    ['.copy-books', { variant: 'scale' }],
    ['.copy-stats > span', { stagger: 80 }],
    ['.audience-grid > article', { stagger: 90, duration: 850 }],
    // Portfolio cards register separately when filtering or loading more.
    ['#portfolio .section-meta, #portfolio .section-title, #portfolio .section-intro, .portfolio-kicker', { stagger: 65 }],
    ['.filter-wrapper', { variant: 'soft' }],
    ['.more-projects, .work-note', { variant: 'fade' }],
    // Client roster, contact details and footer.
    ['.clients-section .section-meta, .clients-section .section-title, .clients-section .section-intro, .industry-group-count', { stagger: 65 }],
    ['.industry-card', { stagger: 70 }],
    ['.contact-content > .section-meta, .contact-title, .contact-sub p', { stagger: 75 }],
    ['.contact-link-pill', { variant: 'soft', stagger: 70 }],
    ['.contact-actions', { variant: 'scale' }],
    ['.footer > span', { variant: 'fade', stagger: 100 }]
  ];
  groups.forEach(([selector, options]) => revealElements(document.querySelectorAll(selector), options));
  document.addEventListener('focusin', event => {
    runningAnimations.forEach(animation => {
      const target = animation.effect?.target;
      if (target?.contains(event.target)) animation.cancel();
    });
  });
}

// Delegated interactions also work on freshly filtered project cards.
let resetInteractivePointer = () => {};

function setupPlayfulInteractions() {
  const pointerPreference = window.matchMedia('(hover: hover) and (pointer: fine)');
  const surfaceSelector = '.card, .research-card, .audience-grid > article';
  const buttonSelector = '.btn-primary, .btn-ghost, .social-btn';
  let active = null;
  let frame = null;
  let point = null;

  function reset() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    if (active) {
      active.element.classList.remove('is-pointer-active', 'is-magnetic');
      ['--tilt-x', '--tilt-y', '--pointer-x', '--pointer-y', '--pull-x', '--pull-y'].forEach(property => active.element.style.removeProperty(property));
    }
    active = null;
  }
  resetInteractivePointer = reset;

  function updatePointer(event) {
    if (!pointerPreference.matches || motionPreference.matches || event.pointerType === 'touch') return;
    const element = event.target.closest?.(`${surfaceSelector}, ${buttonSelector}`);
    if (!element) { reset(); return; }
    if (active?.element !== element) {
      reset();
      active = { element, rect: element.getBoundingClientRect(), magnetic: element.matches(buttonSelector) };
    }
    point = { x: event.clientX, y: event.clientY };
    if (frame !== null) return;
    frame = requestAnimationFrame(() => {
      frame = null;
      if (!active) return;
      const { element, rect, magnetic } = active;
      if (!rect.width || !rect.height) return;
      const x = Math.max(0, Math.min(1, (point.x - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (point.y - rect.top) / rect.height));
      if (magnetic) {
        element.style.setProperty('--pull-x', `${(x - .5) * 10}px`);
        element.style.setProperty('--pull-y', `${(y - .5) * 8}px`);
        element.classList.add('is-magnetic');
      } else {
        const strength = element.matches('.audience-grid > article') ? 2 : 6;
        element.style.setProperty('--tilt-x', `${(.5 - y) * strength}deg`);
        element.style.setProperty('--tilt-y', `${(x - .5) * strength}deg`);
        element.style.setProperty('--pointer-x', `${x * 100}%`);
        element.style.setProperty('--pointer-y', `${y * 100}%`);
        element.classList.add('is-pointer-active');
      }
    });
  }
  document.addEventListener('pointerover', updatePointer, { passive: true });
  document.addEventListener('pointermove', updatePointer, { passive: true });
  document.addEventListener('pointerout', event => {
    if (active && !active.element.contains(event.relatedTarget)) reset();
  });
  document.addEventListener('pointercancel', reset);
  window.addEventListener('blur', reset);
  window.addEventListener('scroll', reset, { passive: true });
  window.addEventListener('resize', reset, { passive: true });
  pointerPreference.addEventListener('change', reset);
  motionPreference.addEventListener('change', reset);
  document.addEventListener('focusin', reset);

  document.addEventListener('click', event => {
    if (motionPreference.matches) return;
    const button = event.target.closest?.(`${buttonSelector}, .filter-btn`);
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.className = 'click-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${(event.detail ? event.clientX - rect.left : rect.width / 2) - size / 2}px`;
    ripple.style.top = `${(event.detail ? event.clientY - rect.top : rect.height / 2) - size / 2}px`;
    button.appendChild(ripple);
    const animation = playMotion(ripple, [
      { transform: 'scale(0)', opacity: .3 },
      { transform: 'scale(1)', opacity: 0 }
    ], { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' });
    if (animation) animation.finished.catch(() => {}).finally(() => ripple.remove());
    else ripple.remove();
  });

  // Wrap words without replacing copy, italic emphasis, spaces, or accessible text.
  document.querySelectorAll('.hero-h1, .section-title, .contact-title').forEach(heading => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    let index = 0;
    textNodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(word => {
        if (!word.trim()) { fragment.appendChild(document.createTextNode(word)); return; }
        const span = document.createElement('span');
        span.className = 'hover-word';
        span.style.setProperty('--word-delay', `${(index++ % 8) * 35}ms`);
        span.textContent = word;
        fragment.appendChild(span);
      });
      node.replaceWith(fragment);
    });
  });
}

async function transitionProjects(filter) {
  const revision = ++filterRevision;
  filterAnimation?.cancel();
  const grid = document.getElementById('project-grid');
  grid.setAttribute('aria-busy', 'true');
  filterAnimation = playMotion(grid, [
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(8px)' }
  ], { duration: 140, easing: 'ease-out', fill: 'forwards' });
  if (filterAnimation) await filterAnimation.finished.catch(() => {});
  if (revision !== filterRevision) return;
  filterAnimation?.cancel();
  renderProjects(filter);
  grid.setAttribute('aria-busy', 'false');
}

function renderProjects(filter = 'All') {
  const grid = document.getElementById('project-grid');
  const countEl = document.getElementById('filter-count');
  resetInteractivePointer();
  grid.querySelectorAll('.project-card-wrap').forEach(card => revealObserver?.unobserve(card));
  grid.innerHTML = '';

  const tabOrder = ['SEO Copywriting', 'Landing Pages', 'Sales Copy', 'Emails', 'Social Media', 'Other Copy', 'Editing & Storytelling', 'Web & Strategy'];
  const filtered = filter === 'All'
    ? [...projects].sort((a, b) => tabOrder.indexOf(a.type) - tabOrder.indexOf(b.type))
    : projects.filter(p => p.type === filter);
  countEl.textContent = `${filtered.length} project${filtered.length !== 1 ? 's' : ''}`;

  filtered.forEach((p, i) => {
    const meta = industryIconMap[p.industry] || { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>`, color: '#C9A84C' };

    const [theme] = projectThemes[p.type] || projectThemes['Other Copy'];
    const coverLabel = serviceCopy[p.type][0];
    const company = getProjectCompany(p);
    const result = p.result;
    const cardTag = p.link ? 'a' : 'article';
    const cardAttributes = p.link ? `href="${p.link}" target="_blank" rel="noopener noreferrer"` : 'tabindex="-1"';
    const wrap = document.createElement('div');
    wrap.className = 'project-card-wrap';
    wrap.dataset.theme = theme;
    wrap.hidden = filter === 'All' && i >= 9;

    wrap.innerHTML = `
      <${cardTag} class="card" ${cardAttributes}>
        <div class="project-cover" aria-hidden="true">
          <div class="cover-topline"><span>${coverLabel}</span><span>${String(i + 1).padStart(2, '0')}</span></div>
          <div class="cover-orbit"></div>
          <div class="cover-paper">
            <span class="paper-brand"><span class="project-logo-slot"></span><span class="paper-eyebrow">${p.folder}</span></span>
            <span class="paper-title">${p.title}</span>
            <span class="paper-rule"></span>
            <span class="paper-footer">Researched first, written second. <span>↗</span></span>
          </div>
          ${result ? `<span class="cover-result">${result}</span>` : ''}
        </div>
        <div class="card-body">
        <div class="card-head">
          <div class="card-icon" aria-hidden="true">${meta.icon}</div>
          <div class="card-meta">
            <span class="card-badge">${p.type}</span>
            <span class="card-folder">${p.folder}</span>
          </div>
        </div>
        <div class="card-industry-label">${p.client}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        ${result ? `<div class="card-tags"><span class="tag">${result}</span></div>` : ''}
        ${p.link ? `<div class="card-action">
          <span class="card-action-btn">Read the work ${arrowSvg}</span>
          <div class="card-arrow">${arrowSvg}</div>
        </div>` : ''}
        </div>
      </${cardTag}>
    `;
    wrap.querySelector('.project-logo-slot').replaceWith(createLogoElement(company));
    grid.appendChild(wrap);
  });

  updateShowMore();
  renderService(filter);
  revealElements([...grid.children]);
}

function renderService(filter) {
  const panel = document.getElementById('service');
  const copy = serviceCopy[filter];
  panel.hidden = !copy;
  if (!copy) return;
  ['s-label', 's-head', 's-body', 's-proof'].forEach((id, index) => {
    document.getElementById(id).textContent = index === 3 ? `Proof: ${copy[index]}` : copy[index];
  });
  playMotion(panel, entranceFrames.soft, { duration: 500, easing: 'cubic-bezier(.16,1,.3,1)' });
}

function updateShowMore() {
  const remaining = document.querySelectorAll('#project-grid > [hidden]').length;
  const button = document.getElementById('show-more');
  button.hidden = remaining === 0;
  button.textContent = `Show more projects (${remaining} remaining)`;
}

function setupShowMore() {
  document.getElementById('show-more').addEventListener('click', () => {
    const next = [...document.querySelectorAll('#project-grid > [hidden]')].slice(0, 9);
    next.forEach(card => { card.hidden = false; });
    revealElements(next);
    next[0]?.querySelector('.card').focus();
    updateShowMore();
  });
}

// ============================================================
// FILTER SETUP
// ============================================================
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      transitionProjects(btn.dataset.filter);
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

  function setMenuOpen(open) {
    btn.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.inert = !open;
  }

  btn.addEventListener('click', () => setMenuOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      btn.focus();
    }
  });
  window.matchMedia('(min-width: 1001px)').addEventListener('change', event => {
    if (event.matches) setMenuOpen(false);
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-project-count]').forEach(count => { count.textContent = projects.length; });
  renderTicker();
  renderProjects();
  renderIndustries();
  setupFilters();
  setupShowMore();
  setupHamburger();
  setupSectionMotion();
  setupPlayfulInteractions();
});
