'use strict';

const eventData = {
  metadata: {
    name: 'Elevate Tech Summit',
    tagline: 'Where emerging builders, operators, and dreamers co-create the future of inclusive innovation.',
    dates: 'September 12-14, 2024',
    timezone: 'PT',
    venue: 'Pier 27 Innovation Dock, San Francisco',
    registrationUrl: 'https://example.com/register',
    livestreamUrl: 'https://example.com/live',
    startDate: '2024-09-12T09:00:00-07:00',
    supportEmail: 'hello@elevatetechsummit.com',
    hotline: '+1 (415) 555-0125',
    whatsapp: '+1 (415) 555-0455',
    newsletter: 'https://example.com/newsletter'
  },
  quickFacts: [
    { label: 'Theme', value: 'Building Future-Ready Communities' },
    { label: 'Format', value: '3 days • 5 thematic tracks • 40+ sessions' },
    { label: 'Venue', value: 'Waterfront campus with hybrid livestream' },
    { label: 'Attendees', value: '1,500 founders, builders & policy leaders' }
  ],
  mission: `Elevate Tech Summit brings together technologists, civic innovators, and creators to explore
  equitable innovation. Over three days we share playbooks that help communities thrive in a climate-positive,
  AI-enabled future.`,
  impact: [
    '92% of attendees reported unlocking new partnerships in 2023',
    'Launchpad alumni have raised $240M+ in community-forward capital',
    'Carbon-neutral operations with reusable builds and local sourcing'
  ],
  organizers: [
    'Futurewave Collective',
    'City of San Francisco Innovation Office',
    'North Star Ventures',
    'Community Technology Alliance'
  ],
  links: {
    faq: 'https://example.com/faq',
    codeOfConduct: 'https://example.com/code-of-conduct'
  },
  sessions: [
    {
      id: 'S-101',
      title: 'Opening Keynote: Imagining an Equitable Tech Renaissance',
      track: 'Main Stage',
      start: '2024-09-12T09:00:00-07:00',
      end: '2024-09-12T10:15:00-07:00',
      room: 'Aurora Hall',
      location: 'Level 2 • Main Stage',
      description:
        'Kick off Elevate with a bold vision for an equitable tech ecosystem. Learn how community-led infrastructure and climate readiness can reshape the innovation economy.',
      speakers: ['SP-01'],
      resources: [{ label: 'Keynote Outline', url: 'https://example.com/resources/keynote' }],
      featured: true
    },
    {
      id: 'S-108',
      title: 'Designing for Care: Accessibility Sprints that Deliver',
      track: 'Product & Design',
      start: '2024-09-12T11:00:00-07:00',
      end: '2024-09-12T11:45:00-07:00',
      room: 'Studio B',
      location: 'Level 1 • Maker Wing',
      description:
        'A workshop-style session that walks through rapid accessibility audits, prototyping, and co-creation tactics with disabled communities.',
      speakers: ['SP-02', 'SP-03'],
      resources: [{ label: 'Sprint Checklist', url: 'https://example.com/resources/accessibility-sprint' }],
      featured: true
    },
    {
      id: 'S-114',
      title: 'Funding Climate-Positive Infrastructure',
      track: 'Capital & Policy',
      start: '2024-09-12T13:30:00-07:00',
      end: '2024-09-12T14:15:00-07:00',
      room: 'Pier View Theater',
      location: 'Level 3 • Horizon Theater',
      description:
        'Investors and policy makers unpack financing models for community microgrids, water resilience, and adaptive reuse.',
      speakers: ['SP-04', 'SP-05'],
      resources: [{ label: 'Policy Brief', url: 'https://example.com/resources/climate-policy' }],
      featured: true
    },
    {
      id: 'S-122',
      title: 'Responsible AI Sandboxes',
      track: 'AI & Data',
      start: '2024-09-12T15:00:00-07:00',
      end: '2024-09-12T15:50:00-07:00',
      room: 'Lab 3',
      location: 'Level 2 • Lighthouse Labs',
      description:
        'Hands-on demos that showcase transparent datasets, bias evaluation, and accountability playbooks for AI builders.',
      speakers: ['SP-06'],
      resources: [{ label: 'Sandbox Toolkit', url: 'https://example.com/resources/ai-toolkit' }],
      featured: true
    },
    {
      id: 'S-130',
      title: 'Community Pitch Showcase',
      track: 'Main Stage',
      start: '2024-09-12T17:00:00-07:00',
      end: '2024-09-12T18:15:00-07:00',
      room: 'Aurora Hall',
      location: 'Level 2 • Main Stage',
      description:
        'Ten founders present ventures accelerating community well-being across housing, transit, and health equity.',
      speakers: ['SP-07'],
      resources: [{ label: 'Pitch Deck Library', url: 'https://example.com/resources/pitch-decks' }]
    },
    {
      id: 'S-204',
      title: 'Circularity Lab: Reimagining Materials for Cities',
      track: 'Sustainability Lab',
      start: '2024-09-13T10:00:00-07:00',
      end: '2024-09-13T11:45:00-07:00',
      room: 'Materials Lab',
      location: 'Level 1 • Maker Wing',
      description:
        'Dive into rapid prototyping with regenerative materials and explore new city supply chains that eliminate waste.',
      speakers: ['SP-08', 'SP-09'],
      resources: []
    }
  ],
  speakers: {
    'SP-01': {
      name: 'Lina Ortega',
      title: 'Chief Innovation Officer',
      organization: 'City of San Francisco',
      bio: 'Leads city-wide digital inclusion initiatives and sustainability investments.',
      socials: [{ label: 'LinkedIn', url: 'https://linkedin.com/in/linaortega' }]
    },
    'SP-02': {
      name: 'Darian Kim',
      title: 'Head of Inclusive Design',
      organization: 'Northwind Labs',
      bio: 'Designs tools with cross-disability collaborators and global product squads.',
      socials: [{ label: 'Twitter', url: 'https://twitter.com/darianmakes' }]
    },
    'SP-03': {
      name: 'Nia Okafor',
      title: 'Accessibility Researcher',
      organization: 'Open Access Collective',
      bio: 'Brings participatory action research into corporate product development.',
      socials: [{ label: 'LinkedIn', url: 'https://linkedin.com/in/niaokafor' }]
    },
    'SP-04': {
      name: 'Zackary Chen',
      title: 'Partner',
      organization: 'Atlas Climate Capital',
      bio: 'Invests in climate-resilient infrastructure and community-owned assets.',
      socials: []
    },
    'SP-05': {
      name: 'Amara Lopez',
      title: 'Deputy Director',
      organization: 'Western Clean Grid Alliance',
      bio: 'Works on policy frameworks for microgrids and adaptive energy systems.',
      socials: []
    },
    'SP-06': {
      name: 'Suraj Patel',
      title: 'Responsible AI Fellow',
      organization: 'Civic Data Trust',
      bio: 'Builds open tooling and accountability measures for municipal AI deployments.',
      socials: []
    },
    'SP-07': {
      name: 'Community Pitch Finalists',
      title: 'Founders',
      organization: 'Various',
      bio: 'A cohort of founders delivering inclusive solutions across housing, health, and mobility.',
      socials: []
    },
    'SP-08': {
      name: 'Mira Das',
      title: 'Circularity Director',
      organization: 'Renew City Works',
      bio: 'Architect-turned-strategist shaping regenerative building ecosystems.',
      socials: []
    },
    'SP-09': {
      name: 'Jonah Reyes',
      title: 'Materials Scientist',
      organization: 'CoLab Future Materials',
      bio: 'Develops low-carbon composites for resilient waterfront development.',
      socials: []
    }
  },
  venue: {
    pois: [
      {
        id: 'POI-1',
        name: 'Aurora Hall',
        type: 'stage',
        coordinates: { x: 68, y: 42 },
        hours: '8:00 AM – 9:00 PM',
        notes: 'Main stage for keynotes and community showcase with full accessibility services.'
      },
      {
        id: 'POI-2',
        name: 'Maker Wing',
        type: 'workshop',
        coordinates: { x: 32, y: 58 },
        hours: '9:00 AM – 6:00 PM',
        notes: 'Hands-on labs, rapid prototyping stations, and accessibility testing lounge.'
      },
      {
        id: 'POI-3',
        name: 'Harbor Lounge',
        type: 'support',
        coordinates: { x: 45, y: 28 },
        hours: '10:00 AM – 7:00 PM',
        notes: 'Quiet lounge, prayer room, nursing pods, and well-being resources.'
      },
      {
        id: 'POI-4',
        name: 'Bayfront Food Hall',
        type: 'dining',
        coordinates: { x: 55, y: 70 },
        hours: '11:00 AM – 8:30 PM',
        notes: 'Local chefs, plant-forward menus, gluten-free and halal stations.'
      }
    ]
  },
  logistics: {
    travel: [
      'Pier 27 is accessible via MUNI F Market, Embarcadero BART, and protected bike lanes.',
      'On-site valet for adaptive vehicles and reserved rideshare drop-off on The Embarcadero.',
      'Complimentary water taxi shuttles depart Pier 1½ hourly for downtown hotels.'
    ],
    onsite: [
      'Registration opens daily at 8:00 AM with express QR code check-in.',
      'Wayfinding stewards and ASL interpreters stationed at every level.',
      'Wheelchair loaners, sensory kits, and portable chargers available at the Harbor Lounge.'
    ],
    dining: [
      'Chef collaborations spotlight regional farms, with vegan, halal, and allergen-friendly options.',
      'Partner hotels: Harborfront Suites, Skyline Residences, Solstice Boutique (preferred rates).',
      'Evening community dinners hosted across the Ferry Building culinary collective.'
    ],
    emergency: 'Emergency? Call on-site safety command at +1 (415) 555-0199 or dial 911. Security posts are located on each floor near stairwells.'
  },
  community: {
    events: [
      'Daily “Coffee with Builders” networking circles at 8:30 AM in Harbor Lounge.',
      'Evening waterfront meetups co-hosted with partner accelerators.',
      'Mentor office hours with visiting investors Friday from 2:00 PM in Studio B.'
    ],
    volunteer: 'Join our volunteer squad for 4-hour shifts supporting accessibility, stage management, and sustainability data capture.',
    social: 'Share your experience using #ElevateTechSummit and tag @ElevateSummit on Instagram, LinkedIn, and TikTok for live spotlights.'
  },
  sponsors: [
    { name: 'North Star Ventures', tier: 'Platinum', blurb: 'Investing in climate and community resilience.' },
    { name: 'Waveform Cloud', tier: 'Gold', blurb: 'Hybrid infrastructure with privacy-first controls.' },
    { name: 'Futuregrid Co-op', tier: 'Gold', blurb: 'Community-owned energy and broadband systems.' },
    { name: 'Brightline Mobility', tier: 'Silver', blurb: 'Autonomous EV shuttles advancing equitable access.' }
  ],
  contact: [
    { label: 'Email', value: 'hello@elevatetechsummit.com', href: 'mailto:hello@elevatetechsummit.com' },
    { label: 'Hotline', value: '+1 (415) 555-0125', href: 'tel:+14155550125' },
    { label: 'WhatsApp', value: '+1 (415) 555-0455', href: 'https://wa.me/14155550455' }
  ],
  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com/elevatesummit', icon: '📸' },
    { label: 'LinkedIn', url: 'https://linkedin.com/company/elevatesummit', icon: '💼' },
    { label: 'TikTok', url: 'https://tiktok.com/@elevatesummit', icon: '🎬' }
  ]
};

let activeTrack = 'all';
let countdownTimer;

const formatTimeRange = (startISO, endISO) => {
  const startDate = new Date(startISO);
  const endDate = new Date(endISO);
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  });
  const dayFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  return `${dayFormatter.format(startDate)} · ${formatter.format(startDate)} – ${formatter.format(endDate)}`;
};

const renderHero = () => {
  const { metadata } = eventData;
  const heroTitle = document.getElementById('heroTitle');
  const heroTagline = document.getElementById('heroTagline');
  const eventDate = document.getElementById('eventDate');
  const heroRegister = document.getElementById('heroRegister');
  const heroWatch = document.getElementById('heroWatch');
  const navRegister = document.getElementById('navRegister');
  const navLivestream = document.getElementById('navLivestream');

  heroTitle.textContent = metadata.name;
  heroTagline.textContent = metadata.tagline;
  eventDate.textContent = `${metadata.dates} • ${metadata.venue}`;

  if (metadata.registrationUrl) {
    heroRegister.href = metadata.registrationUrl;
    navRegister.href = metadata.registrationUrl;
  }

  if (metadata.livestreamUrl) {
    heroWatch.href = metadata.livestreamUrl;
    navLivestream.addEventListener('click', () => {
      window.open(metadata.livestreamUrl, '_blank');
    });
  } else {
    heroWatch.classList.add('is-disabled');
    heroWatch.setAttribute('aria-disabled', 'true');
  }
};

const renderQuickFacts = () => {
  const list = document.getElementById('quickFacts');
  list.innerHTML = '';
  eventData.quickFacts.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
    list.appendChild(li);
  });
};

const renderFeaturedSessions = () => {
  const container = document.getElementById('featuredSessions');
  container.innerHTML = '';
  eventData.sessions
    .filter((session) => session.featured)
    .slice(0, 4)
    .forEach((session) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <span class="tag">${session.track}</span>
        <h3>${session.title}</h3>
        <p>${session.description}</p>
        <div class="meta">${formatTimeRange(session.start, session.end)} · ${session.location}</div>
      `;
      container.appendChild(card);
    });
};

const renderSponsors = () => {
  const strip = document.getElementById('sponsorStrip');
  strip.innerHTML = '';
  eventData.sponsors.forEach((sponsor) => {
    const tile = document.createElement('div');
    tile.className = 'sponsor-tile';
    tile.innerHTML = `
      <div class="sponsor-tier">${sponsor.tier}</div>
      <strong>${sponsor.name}</strong>
      <p>${sponsor.blurb}</p>
    `;
    strip.appendChild(tile);
  });
};

const renderAbout = () => {
  document.getElementById('mission').textContent = eventData.mission;

  const impactList = document.getElementById('impact');
  eventData.impact.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    impactList.appendChild(li);
  });

  const organizersList = document.getElementById('organizers');
  eventData.organizers.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    organizersList.appendChild(li);
  });

  const faqLink = document.getElementById('faqLink');
  const codeOfConduct = document.getElementById('codeOfConduct');
  faqLink.href = eventData.links.faq;
  codeOfConduct.href = eventData.links.codeOfConduct;
};

const renderFilters = () => {
  const filters = document.getElementById('scheduleFilters');
  filters.innerHTML = '';
  const tracks = ['all', ...new Set(eventData.sessions.map((session) => session.track))];

  tracks.forEach((track) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-button';
    button.textContent = track === 'all' ? 'All Tracks' : track;
    button.setAttribute('role', 'tab');
    button.dataset.track = track;
    button.setAttribute('aria-selected', track === activeTrack ? 'true' : 'false');
    button.addEventListener('click', () => {
      activeTrack = track;
      Array.from(filters.querySelectorAll('.filter-button')).forEach((btn) =>
        btn.setAttribute('aria-selected', btn.dataset.track === activeTrack ? 'true' : 'false')
      );
      renderSchedule();
    });
    filters.appendChild(button);
  });
};

const renderSchedule = () => {
  const container = document.getElementById('scheduleList');
  container.innerHTML = '';

  const sessions = [...eventData.sessions]
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .filter((session) => (activeTrack === 'all' ? true : session.track === activeTrack));

  sessions.forEach((session) => {
    const card = document.createElement('article');
    card.className = 'session-card';
    card.tabIndex = 0;
    card.dataset.sessionId = session.id;
    card.innerHTML = `
      <div class="session-track">${session.track}</div>
      <h3>${session.title}</h3>
      <p class="session-time">${formatTimeRange(session.start, session.end)}</p>
      <p>${session.description}</p>
      <div class="meta">${session.room} · ${session.location}</div>
      <span class="sr-only">Activate to view full session details</span>
    `;
    container.appendChild(card);
  });

  if (!sessions.length) {
    const emptyState = document.createElement('p');
    emptyState.textContent = 'No sessions match this track yet. Check back soon!';
    container.appendChild(emptyState);
  }
};

const renderMap = () => {
  const mapCanvas = document.getElementById('mapCanvas');
  mapCanvas.innerHTML = '';
  eventData.venue.pois.forEach((poi) => {
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.className = `map-marker map-marker--${poi.type}`;
    marker.style.left = `${poi.coordinates.x}%`;
    marker.style.top = `${poi.coordinates.y}%`;
    marker.dataset.poiId = poi.id;
    marker.setAttribute('aria-label', poi.name);
    mapCanvas.appendChild(marker);
  });
};

const renderPOIs = () => {
  const list = document.getElementById('poiList');
  list.innerHTML = '';
  eventData.venue.pois.forEach((poi, index) => {
    const item = document.createElement('li');
    item.textContent = `${poi.name} • ${poi.hours}`;
    item.dataset.poiId = poi.id;
    item.setAttribute('role', 'button');
    item.tabIndex = 0;
    if (index === 0) {
      item.setAttribute('aria-selected', 'true');
      updatePoiDetail(poi.id);
    }
    list.appendChild(item);
  });
};

const updatePoiDetail = (poiId) => {
  const detailContainer = document.getElementById('poiDetail');
  const poi = eventData.venue.pois.find((item) => item.id === poiId);
  if (!poi) return;
  detailContainer.innerHTML = `
    <h4>${poi.name}</h4>
    <p>${poi.notes}</p>
  `;

  const items = document.querySelectorAll('#poiList li');
  items.forEach((item) => {
    item.setAttribute('aria-selected', item.dataset.poiId === poiId ? 'true' : 'false');
  });

  const markers = document.querySelectorAll('.map-marker');
  markers.forEach((marker) => {
    if (marker.dataset.poiId === poiId) {
      marker.classList.add('is-active');
    } else {
      marker.classList.remove('is-active');
    }
  });
};

const renderLogistics = () => {
  const travel = document.getElementById('travel');
  const onsite = document.getElementById('onsite');
  const dining = document.getElementById('dining');
  const emergency = document.getElementById('emergency');

  [
    { list: travel, items: eventData.logistics.travel },
    { list: onsite, items: eventData.logistics.onsite },
    { list: dining, items: eventData.logistics.dining }
  ].forEach(({ list, items }) => {
    list.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  });

  emergency.textContent = eventData.logistics.emergency;
};

const renderCommunity = () => {
  const eventsList = document.getElementById('communityEvents');
  const volunteer = document.getElementById('volunteer');
  const social = document.getElementById('social');

  eventsList.innerHTML = '';
  eventData.community.events.forEach((event) => {
    const li = document.createElement('li');
    li.textContent = event;
    eventsList.appendChild(li);
  });

  volunteer.textContent = eventData.community.volunteer;
  social.textContent = eventData.community.social;
};

const renderFooter = () => {
  const contactList = document.getElementById('contactMethods');
  const socialLinks = document.getElementById('socialLinks');
  const copyright = document.getElementById('footerCopyright');

  contactList.innerHTML = '';
  eventData.contact.forEach((method) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = method.href;
    link.textContent = `${method.label}: ${method.value}`;
    li.appendChild(link);
    contactList.appendChild(li);
  });

  socialLinks.innerHTML = '';
  eventData.socialLinks.forEach((social) => {
    const link = document.createElement('a');
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = 'social-link';
    link.setAttribute('aria-label', social.label);
    link.textContent = social.icon;
    socialLinks.appendChild(link);
  });

  const year = new Date().getFullYear();
  copyright.textContent = `© ${year} ${eventData.metadata.name}. All rights reserved.`;
};

const initNewsletterForms = () => {
  const forms = document.querySelectorAll('.newsletter-form, .footer-newsletter');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) return;
      const email = input.value.trim();
      if (email) {
        form.reset();
        const existingFeedback = form.querySelector('.form-feedback');
        if (existingFeedback) existingFeedback.remove();
        const feedback = document.createElement('span');
        feedback.className = 'form-feedback';
        feedback.textContent = 'Thanks! Check your inbox soon.';
        form.appendChild(feedback);
        setTimeout(() => {
          feedback.remove();
        }, 4000);
      }
    });
  });
};

const initNav = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primaryNav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });
};

const initScheduleInteractions = () => {
  const schedule = document.getElementById('scheduleList');
  const overlay = document.getElementById('sessionOverlay');
  const closeOverlay = document.getElementById('closeOverlay');

  const openOverlay = (sessionId) => {
    const session = eventData.sessions.find((item) => item.id === sessionId);
    if (!session) return;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('overlayTitle').textContent = session.title;
    document.getElementById('overlayTrack').textContent = session.track;
    document.getElementById('overlayTime').textContent = formatTimeRange(session.start, session.end);
    document.getElementById('overlayLocation').textContent = `${session.room} · ${session.location}`;
    document.getElementById('overlayDescription').textContent = session.description;

    const speakerList = document.getElementById('overlaySpeakers');
    speakerList.innerHTML = '';
    session.speakers.forEach((id) => {
      const speaker = eventData.speakers[id];
      if (!speaker) return;
      const li = document.createElement('li');
      li.innerHTML = `<strong>${speaker.name}</strong><br /><span>${speaker.title}, ${speaker.organization}</span>`;
      speakerList.appendChild(li);
    });

    const resourceList = document.getElementById('overlayResources');
    resourceList.innerHTML = '';
    if (session.resources.length) {
      session.resources.forEach((resource) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${resource.url}" target="_blank" rel="noopener">${resource.label}</a>`;
        resourceList.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Resources will be added closer to the event.';
      resourceList.appendChild(li);
    }
  };

  const close = () => {
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  schedule.addEventListener('click', (event) => {
    const card = event.target.closest('.session-card');
    if (card) {
      openOverlay(card.dataset.sessionId);
    }
  });

  schedule.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const card = event.target.closest('.session-card');
      if (card) {
        event.preventDefault();
        openOverlay(card.dataset.sessionId);
      }
    }
  });

  closeOverlay.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target.classList.contains('session-overlay__backdrop')) {
      close();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.getAttribute('aria-hidden') === 'false') {
      close();
    }
  });
};

const initPoiInteractions = () => {
  const list = document.getElementById('poiList');
  const mapCanvas = document.getElementById('mapCanvas');

  list.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if (!item) return;
    updatePoiDetail(item.dataset.poiId);
  });

  list.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const item = event.target.closest('li');
      if (!item) return;
      event.preventDefault();
      updatePoiDetail(item.dataset.poiId);
    }
  });

  mapCanvas.addEventListener('click', (event) => {
    const marker = event.target.closest('.map-marker');
    if (!marker) return;
    updatePoiDetail(marker.dataset.poiId);
  });
};

const initCountdown = () => {
  const countdownElement = document.getElementById('countdown');
  const startDate = new Date(eventData.metadata.startDate).getTime();

  const update = () => {
    const now = Date.now();
    const distance = startDate - now;
    if (distance <= 0) {
      countdownElement.querySelectorAll('[data-unit]').forEach((element) => {
        element.textContent = '00';
      });
      clearInterval(countdownTimer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    const values = { days, hours, minutes, seconds };
    Object.entries(values).forEach(([unit, value]) => {
      const element = countdownElement.querySelector(`[data-unit="${unit}"]`);
      if (element) {
        element.textContent = String(value).padStart(2, '0');
      }
    });
  };

  update();
  countdownTimer = setInterval(update, 1000);
};

const init = () => {
  renderHero();
  renderQuickFacts();
  renderFeaturedSessions();
  renderSponsors();
  renderAbout();
  renderFilters();
  renderSchedule();
  renderMap();
  renderPOIs();
  renderLogistics();
  renderCommunity();
  renderFooter();
  initNewsletterForms();
  initNav();
  initScheduleInteractions();
  initPoiInteractions();
  initCountdown();
};

document.addEventListener('DOMContentLoaded', init);
