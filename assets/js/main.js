'use strict';

const schedule = [
  {
    time: '08:00',
    title: 'Registration of Participants',
    location: 'Level 3 Block A',
    start: '2025-11-01T08:00:00+08:00',
    end: '2025-11-01T09:00:00+08:00',
    category: 'Level 3 Block A',
    sessionId: 'S-REG'
  },
  {
    time: '08:30',
    title: 'Arrival of VIP Guests',
    location: 'Lobby & PG Lounge Level 3',
    start: '2025-11-01T08:30:00+08:00',
    end: '2025-11-01T09:00:00+08:00',
    category: 'Lobby & PG Lounge Level 3',
    summary: 'Welcome VIP guests at the Lobby & PG Lounge ahead of the opening ceremony.'
  },
  {
    time: '09:00',
    title: 'Opening Ceremony',
    location: 'Auditorium 1',
    start: '2025-11-01T09:00:00+08:00',
    end: '2025-11-01T09:05:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-OPEN'
  },
  {
    time: '09:05',
    title: 'National Anthem',
    location: 'Auditorium 1',
    start: '2025-11-01T09:05:00+08:00',
    end: '2025-11-01T09:10:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-ANTHEM'
  },
  {
    time: '09:10',
    title: 'Doa Recitation',
    location: 'Auditorium 1',
    start: '2025-11-01T09:10:00+08:00',
    end: '2025-11-01T09:15:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-DOA'
  },
  {
    time: '09:15',
    title: 'Opening Speech by YB Dato Seri DiRaja Dr. Zambry Abdul Kadir',
    location: 'Auditorium 1',
    start: '2025-11-01T09:15:00+08:00',
    end: '2025-11-01T09:25:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-SPEECH-YB'
  },
  {
    time: '09:25',
    title: 'Opening Speech by Datuk Parmjit Singh',
    location: 'Auditorium 1',
    start: '2025-11-01T09:25:00+08:00',
    end: '2025-11-01T09:35:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-SPEECH-PARMJIT'
  },
  {
    time: '09:35',
    title: 'Speech by IFoA President',
    location: 'Auditorium 1',
    start: '2025-11-01T09:35:00+08:00',
    end: '2025-11-01T09:45:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-SPEECH-IFOA'
  },
  {
    time: '09:45',
    title: 'Speech by ASM President',
    location: 'Auditorium 1',
    start: '2025-11-01T09:45:00+08:00',
    end: '2025-11-01T09:55:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-SPEECH-ASM'
  },
  {
    time: '09:55',
    title: 'Execution of Gimmick',
    location: 'Auditorium 1',
    start: '2025-11-01T09:55:00+08:00',
    end: '2025-11-01T10:05:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-GIMMICK'
  },
  {
    time: '10:05',
    title: 'Opening Ceremony Video',
    location: 'Auditorium 1',
    start: '2025-11-01T10:05:00+08:00',
    end: '2025-11-01T10:10:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-VIDEO'
  },
  {
    time: '10:10',
    title: 'Industry Contribution Award',
    location: 'Auditorium 1',
    start: '2025-11-01T10:10:00+08:00',
    end: '2025-11-01T10:20:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-AWARD'
  },
  {
    time: '10:20',
    title: 'Refreshment Break',
    location: 'Lobby & PG Lounge Level 3',
    start: '2025-11-01T10:20:00+08:00',
    end: '2025-11-01T10:50:00+08:00',
    category: 'Lobby & PG Lounge Level 3',
    sessionId: 'S-REFRESH'
  },
  {
    time: '10:50',
    title: 'C-Suite Panel: From Technical to Transformational – Actuaries as Business Leaders',
    location: 'Auditorium 1',
    start: '2025-11-01T10:50:00+08:00',
    end: '2025-11-01T11:20:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-CEO'
  },
  {
    time: '11:20',
    title: 'Panel Discussion: Sustainability by Design – Actuaries at the Crossroads of Risk and Responsibility',
    location: 'Auditorium 1',
    start: '2025-11-01T11:20:00+08:00',
    end: '2025-11-01T12:25:00+08:00',
    category: 'Auditorium 1',
    sessionId: 'S-PANEL'
  },
  {
    time: '12:30',
    title: 'Lunch',
    location: 'Cafeteria',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T13:30:00+08:00',
    category: 'Cafeteria',
    summary: 'Enjoy lunch service at the campus cafeteria before the afternoon programmes commence.'
  },
  {
    time: '12:30',
    title: 'Datathon: RiskStorm',
    location: 'Auditorium 5',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'Auditorium 5',
    sessionId: 'S-DATATHON'
  },
  {
    time: '12:30',
    title: "HR Talk on Do's and Don'ts & Grooming Session",
    location: 'Auditorium 4',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'Auditorium 4',
    sessionId: 'S-HR-TALK'
  },
  {
    time: '12:30',
    title: 'HR Interview Simulation',
    location: 'Level 4 Block B',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'Level 4 Block B',
    sessionId: 'S-HR-INTERVIEW'
  },
  {
    time: '12:30',
    title: 'Mentor Hot Seat',
    location: 'Atrium',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'Atrium',
    sessionId: 'S-MENTOR'
  },
  {
    time: '12:30',
    title: 'Career Fair',
    location: 'Atrium',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'Atrium',
    sessionId: 'S-CAREER-FAIR'
  },
  {
    time: '12:30',
    title: 'Poster Competition',
    location: 'Atrium',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'Atrium',
    sessionId: 'S-POSTER'
  },
  {
    time: '12:30',
    title: 'Campus Visit (APU Student Services)',
    location: 'APU Campus',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'APU Campus',
    sessionId: 'S-CAMPUS-VISIT'
  },
  {
    time: '12:30',
    title: 'Professional Photo Booth',
    location: 'Atrium',
    start: '2025-11-01T12:30:00+08:00',
    end: '2025-11-01T16:30:00+08:00',
    category: 'Atrium',
    sessionId: 'S-PHOTO'
  },
  {
    time: '16:30',
    title: 'TOA Presentation & Prize Giving Ceremony',
    location: 'Atrium',
    start: '2025-11-01T16:30:00+08:00',
    end: '2025-11-01T17:00:00+08:00',
    category: 'Atrium',
    sessionId: 'S-TOA'
  },
  {
    time: '17:00',
    title: 'Lucky Draw Session',
    location: 'Atrium',
    start: '2025-11-01T17:00:00+08:00',
    end: '2025-11-01T17:30:00+08:00',
    category: 'Atrium',
    sessionId: 'S-CLOSING'
  }
];

const eventData = {
  metadata: {
    name: 'The Actuarial Summit 2025',
    tagline: 'Advancing Actuarial Excellence for a Sustainable Future',
    dates: 'Saturday, 1 November 2025 • 8:00 AM – 5:30 PM',
    timezone: 'Malaysia Time (MYT)',
    venue: 'Asia Pacific University of Technology & Innovation (APU) Campus',
    registrationUrl: 'https://forms.office.com/e/PQkpt7dnsL',
    livestreamUrl: 'https://www.instagram.com/theactuarialsummit2025',
    startDate: '2025-11-01T08:00:00+08:00'
  },
  quickFacts: [
    {
      label: 'Theme',
      value: 'Advancing Actuarial Excellence for a Sustainable Future'
    },
    {
      label: 'Date & Time',
      value: 'Saturday, 1 November 2025 • 8:00 AM – 5:30 PM'
    },
    {
      label: 'Venue',
      value: 'Asia Pacific University of Technology & Innovation (APU) Campus'
    },
    {
      label: 'Organised By',
      value: 'Asia Pacific University of Technology & Innovation (APU) & Institute and Faculty of Actuaries Student Ambassadors (IFoA SA)'
    },
    {
      label: 'Entrance Fee',
      value: 'Free admission for all participants'
    },
    {
      label: 'Target Participants',
      value: '500 participants'
    }
  ],
  mission: `The Actuarial Summit 2025, themed "Advancing Actuarial Excellence for a Sustainable Future," will bring together students, educators, and industry leaders to explore the critical role of actuaries in addressing climate change and advancing Environmental, Social, and Governance (ESG) principles. Through insightful discussions, interactive sessions, and networking opportunities, attendees will gain valuable perspectives on how actuarial expertise can drive sustainability, manage climate-related risks, and shape a resilient future.`,
  impact: [
    'Bridge the gap between students and professionals through panel discussions, career fairs, and HR Interview Simulation.',
    'Apply actuarial skills in real-world challenges through the Datathon Competition and Poster Competition.',
    'Gain industry insights via the HR Interview Simulation and Mentor Hot Seat.',
    'Connect with mentors, recruiters, and industry leaders for career opportunities.'
  ],
  organizers: [
    'Asia Pacific University of Technology & Innovation (APU)',
    'Institute and Faculty of Actuaries Student Ambassadors (IFoA SA)'
  ],
  links: {
    faq: null,
    codeOfConduct: null
  },
  sessions: [
    {
      id: 'S-REG',
      title: 'Registration of Participants',
      track: 'Level 3 Block A',
      start: '2025-11-01T08:00:00+08:00',
      end: '2025-11-01T09:00:00+08:00',
      room: 'Level 3, Block A',
      location: 'Registration counters at Block A (Level 3)',
      description: 'Check in for The Actuarial Summit 2025, collect lanyards, and receive the event guide from the usher team.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-OPEN',
      title: 'Opening Ceremony',
      track: 'Auditorium 1',
      start: '2025-11-01T09:00:00+08:00',
      end: '2025-11-01T09:05:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'The official welcome that ushers the community into a day of actuarial insight and collaboration.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-ANTHEM',
      title: 'National Anthem',
      track: 'Auditorium 1',
      start: '2025-11-01T09:05:00+08:00',
      end: '2025-11-01T09:10:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'The summit begins with the national anthem to honour the occasion and gather the community.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-DOA',
      title: 'Doa Recitation',
      track: 'Auditorium 1',
      start: '2025-11-01T09:10:00+08:00',
      end: '2025-11-01T09:15:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'A doa recitation sets an uplifting and reflective tone before the keynote addresses.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-SPEECH-YB',
      title: 'Opening Speech by YB Dato Seri DiRaja Dr. Zambry Abdul Kadir',
      track: 'Auditorium 1',
      start: '2025-11-01T09:15:00+08:00',
      end: '2025-11-01T09:25:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'YB Dato Seri DiRaja Dr. Zambry Abdul Kadir, Minister of Higher Education (Malaysia), opens the summit with a national perspective.',
      speakers: ['SP-YB'],
      resources: []
    },
    {
      id: 'S-SPEECH-PARMJIT',
      title: 'Opening Speech by Datuk Parmjit Singh',
      track: 'Auditorium 1',
      start: '2025-11-01T09:25:00+08:00',
      end: '2025-11-01T09:35:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'Datuk Parmjit Singh shares APU’s ambitions for actuarial excellence and collaboration.',
      speakers: ['SP-DATUK'],
      resources: []
    },
    {
      id: 'S-SPEECH-IFOA',
      title: 'Speech by IFoA President',
      track: 'Auditorium 1',
      start: '2025-11-01T09:35:00+08:00',
      end: '2025-11-01T09:45:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'The Institute and Faculty of Actuaries President addresses students and industry partners on the future of the profession.',
      speakers: ['SP-IFOA'],
      resources: []
    },
    {
      id: 'S-SPEECH-ASM',
      title: 'Speech by ASM President',
      track: 'Auditorium 1',
      start: '2025-11-01T09:45:00+08:00',
      end: '2025-11-01T09:55:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'The Actuarial Society of Malaysia (ASM) President highlights national initiatives supporting young actuaries.',
      speakers: ['SP-ASM'],
      resources: []
    },
    {
      id: 'S-GIMMICK',
      title: 'Execution of Gimmick',
      track: 'Auditorium 1',
      start: '2025-11-01T09:55:00+08:00',
      end: '2025-11-01T10:05:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'A ceremonial launch gimmick formally kicks off The Actuarial Summit 2025.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-VIDEO',
      title: 'Opening Ceremony Video',
      track: 'Auditorium 1',
      start: '2025-11-01T10:05:00+08:00',
      end: '2025-11-01T10:10:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'A highlight reel celebrates past actuarial milestones and sets the stage for the summit.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-AWARD',
      title: 'Industry Contribution Award',
      track: 'Auditorium 1',
      start: '2025-11-01T10:10:00+08:00',
      end: '2025-11-01T10:20:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'Recognising leaders who champion actuarial excellence and sustainability initiatives.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-REFRESH',
      title: 'Refreshment Break',
      track: 'Lobby & PG Lounge Level 3',
      start: '2025-11-01T10:20:00+08:00',
      end: '2025-11-01T10:50:00+08:00',
      room: 'Lobby & PG Lounge (Level 3)',
      location: 'Lobby & PG Lounge, Level 3',
      description: 'A mid-morning refreshment break for attendees and VIP guests at the Lobby & PG Lounge.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-CEO',
      title: 'C-Suite Panel: From Technical to Transformational – Actuaries as Business Leaders',
      track: 'Auditorium 1',
      start: '2025-11-01T10:50:00+08:00',
      end: '2025-11-01T11:20:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'Executive leaders discuss how actuarial perspectives evolve from technical mastery to strategic leadership and boardroom impact.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-PANEL',
      title: 'Panel Discussion: Sustainability by Design – Actuaries at the Crossroads of Risk and Responsibility',
      track: 'Auditorium 1',
      start: '2025-11-01T11:20:00+08:00',
      end: '2025-11-01T12:25:00+08:00',
      room: 'Auditorium 1 (Level 7)',
      location: 'Main Hall, Auditorium 1',
      description: 'Insurance professionals explore climate risk, ESG integration, and responsible innovation shaping the future of actuarial practice.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-DATATHON',
      title: 'Datathon: RiskStorm',
      track: 'Auditorium 5',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'Auditorium 5 (Level 3)',
      location: 'Competition Hall, Auditorium 5',
      description: 'Undergraduate teams apply actuarial modelling and data analytics to solve real-world insurance challenges.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-HR-TALK',
      title: "HR Talk on Do's and Don'ts & Grooming Session",
      track: 'Auditorium 4',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'Auditorium 4 (Level 3)',
      location: 'Auditorium 4, Level 3',
      description: "HR professionals outline workplace etiquette, interview preparation, and grooming essentials for interns and graduates.",
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-HR-INTERVIEW',
      title: 'HR Interview Simulation',
      track: 'Level 4 Block B',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'Level 4, Block B Classrooms',
      location: 'Interview Rooms, Level 4 Block B',
      description: 'One-on-one mock interviews with HR representatives and actuaries deliver personalised feedback on career readiness.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-MENTOR',
      title: 'Mentor Hot Seat',
      track: 'Atrium',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'Atrium (Level 3)',
      location: 'Mentor Stations, Atrium',
      description: 'Structured rotations connect students with working actuaries for rapid-fire advice and networking.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-CAREER-FAIR',
      title: 'Career Fair',
      track: 'Atrium',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'Atrium (Level 3)',
      location: 'Career Fair Booths, Atrium',
      description: 'Meet recruiters, explore internships and full-time opportunities, and discover actuarial career pathways.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-POSTER',
      title: 'Poster Competition',
      track: 'Atrium',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'Atrium (Level 3)',
      location: 'Poster Showcase, Atrium',
      description: 'Students present actuarial research posters to industry judges and peers for feedback and recognition.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-CAMPUS-VISIT',
      title: 'Campus Visit (APU Student Services)',
      track: 'APU Campus',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'APU Campus',
      location: 'Meet at Student Services Hub',
      description: 'Join APU Student Services for guided tours showcasing campus facilities and student life.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-PHOTO',
      title: 'Professional Photo Booth',
      track: 'Atrium',
      start: '2025-11-01T12:30:00+08:00',
      end: '2025-11-01T16:30:00+08:00',
      room: 'Atrium (Level 3)',
      location: 'Photo Booth Area, Atrium',
      description: 'Capture memories with professional and fun photo booth setups available throughout the afternoon.',
      speakers: [],
      resources: [],
      featured: true
    },
    {
      id: 'S-TOA',
      title: 'TOA Presentation & Prize Giving Ceremony',
      track: 'Atrium',
      start: '2025-11-01T16:30:00+08:00',
      end: '2025-11-01T17:00:00+08:00',
      room: 'Atrium (Level 3)',
      location: 'Main Stage, Atrium',
      description: 'Celebrate competition winners and recognise outstanding contributions during the evening presentation.',
      speakers: [],
      resources: []
    },
    {
      id: 'S-CLOSING',
      title: 'Lucky Draw Session',
      track: 'Atrium',
      start: '2025-11-01T17:00:00+08:00',
      end: '2025-11-01T17:30:00+08:00',
      room: 'Atrium (Level 3)',
      location: 'Main Stage, Atrium',
      description: 'Wrap up the summit with closing remarks and the Lucky Draw Session for attendees.',
      speakers: [],
      resources: []
    }
  ],
  speakers: {
    'SP-YB': {
      name: 'YB Dato Seri DiRaja Dr. Zambry Abdul Kadir',
      title: 'Minister of Higher Education (Malaysia)',
      organization: 'Ministry of Higher Education Malaysia',
      bio: '',
      socials: []
    },
    'SP-DATUK': {
      name: 'Datuk Parmjit Singh',
      title: 'Chief Executive Officer (CEO)',
      organization: 'Asia Pacific University of Technology & Innovation (APU)',
      bio: '',
      socials: []
    },
    'SP-IFOA': {
      name: 'IFoA President',
      title: '',
      organization: 'Institute and Faculty of Actuaries',
      bio: '',
      socials: []
    },
    'SP-ASM': {
      name: 'ASM President',
      title: '',
      organization: 'Actuarial Society of Malaysia',
      bio: '',
      socials: []
    }
  },
  venue: {
    maps: [
      {
        id: 'level3',
        label: 'Level 3',
        image: 'assets/maps/apu_level3.svg',
        alt: 'APU Campus Level 3 illustrated map showing Block A registration, lobby lounge, atrium, auditoriums 4 and 5, Level 4 Block B access, cafeteria, and campus visit hub.'
      },
      {
        id: 'level7',
        label: 'Level 7',
        image: 'assets/maps/apu_level7.svg',
        alt: 'APU Campus Level 7 illustrated map featuring Auditorium 1, the pre-function foyer, VIP holding room, backstage, and lift lobby.'
      }
    ],
    defaultMap: 'level3',
    pois: [
      {
        id: 'POI-REG',
        name: 'Level 3 Block A',
        type: 'support',
        floor: 'level3',
        coordinates: { x: 18, y: 72 },
        hours: 'Opens 8:00 AM',
        notes: 'Registration counters and welcome team located at Block A, Level 3 entrance.'
      },
      {
        id: 'POI-LOBBY',
        name: 'Lobby & PG Lounge Level 3',
        type: 'support',
        floor: 'level3',
        coordinates: { x: 42, y: 52 },
        hours: '10:20 AM Refreshment Break',
        notes: 'Arrival point for VIP guests and the mid-morning refreshment break hub.'
      },
      {
        id: 'POI-AUD1',
        name: 'Auditorium 1 (Level 7)',
        type: 'stage',
        floor: 'level7',
        coordinates: { x: 52, y: 45 },
        hours: '9:00 AM – 12:30 PM',
        notes: 'Opening ceremony, C-Suite Panel, and the sustainability panel discussion.'
      },
      {
        id: 'POI-AUD5',
        name: 'Auditorium 5',
        type: 'stage',
        floor: 'level3',
        coordinates: { x: 24, y: 42 },
        hours: '12:30 PM – 4:30 PM',
        notes: 'Competition hall for Datathon: RiskStorm finals.'
      },
      {
        id: 'POI-AUD4',
        name: 'Auditorium 4',
        type: 'stage',
        floor: 'level3',
        coordinates: { x: 36, y: 40 },
        hours: '12:30 PM – 4:30 PM',
        notes: "Venue for the HR Talk on Do's and Don'ts & Grooming Session."
      },
      {
        id: 'POI-ATRIUM',
        name: 'Atrium',
        type: 'support',
        floor: 'level3',
        coordinates: { x: 60, y: 32 },
        hours: '12:30 PM – 5:30 PM',
        notes: 'Hosts the Mentor Hot Seat, Career Fair, Poster Competition, photo booth, and evening ceremonies.'
      },
      {
        id: 'POI-CAFETERIA',
        name: 'Cafeteria',
        type: 'dining',
        floor: 'level3',
        coordinates: { x: 70, y: 74 },
        hours: 'Lunch service 12:30 PM',
        notes: 'Lunch and packed meals served for attendees and volunteers.'
      },
      {
        id: 'POI-BLOCKB',
        name: 'Level 4 Block B',
        type: 'support',
        floor: 'level3',
        coordinates: { x: 82, y: 60 },
        hours: '12:30 PM – 4:30 PM',
        notes: 'Mock interview suites for the HR Interview Simulation sessions.'
      },
      {
        id: 'POI-CAMPUS',
        name: 'APU Campus',
        type: 'support',
        floor: null,
        coordinates: { x: 50, y: 50 },
        hours: '12:30 PM – 4:30 PM',
        notes: 'Guided campus visit route with APU Student Services.'
      }
    ]
  },
  logistics: {
    travel: [
      'Registration begins at 8:00 AM at Level 3 Block A on the APU Campus.',
      'Opening ceremony and leadership sessions take place in Auditorium 1 (Level 7).',
      'Campus visit with APU Student Services departs from the Lobby & PG Lounge (Level 3) at 12:30 PM.'
    ],
    onsite: [
      'Refreshment break is served at the Lobby & PG Lounge Level 3 at 10:20 AM.',
      'Mentor Hot Seat, Career Fair, Poster Competition, and the photo booth fill the Atrium (Level 3) from 12:30 PM to 4:30 PM.',
      'HR Interview Simulation sessions run on Level 4 Block B with one-on-one feedback from 12:30 PM to 4:30 PM.'
    ],
    dining: [
      'Lunch is hosted at the cafeteria (Level 3) with service beginning at 12:30 PM.',
      'Packed lunch is prepared for 600 participants alongside refreshments for helpers and VIP guests.',
      'Mineral water and breakfast support are allocated for helpers, committees, and attendees throughout the day.'
    ],
    emergency: ''
  },
  community: {
    highlightIntro: 'Actuarial Day 2024, organized by the School of Mathematics, Actuarial & Quantitative Studies (SOMAQS), was successfully held with active participation from students and invited industry professionals.',
    highlights: [
      'Group Photo',
      'Appreciation Ceremony',
      'Actuarial Excellence Forum',
      'APU Actuarial Day Hackathon Winners'
    ],
    whyJoin: [
      'Connect with a community of aspiring actuaries by building meaningful peer networks across institutions.',
      'Engage with industry insights and real-world applications through curated sessions such as the Panel Discussion and Mentor Hot Seat.',
      'Develop leadership and communication skills by contributing as university representatives, volunteers, or competition participants.',
      'Be part of a purpose-driven student initiative designed to provide practical value through learning, dialogue, and collaboration.'
    ],
    volunteer: 'Volunteers assist with timekeeping and session transitions during the Mentor Hot Seat.',
    social: '',
    socialHtml: `
<strong>The Actuarial Summit 2025 – Registration NOW OPEN! 🌟</strong><br /><br />
The wait is finally over! 🎉 Join us at the annual Actuarial Summit where actuarial students, professionals, and future leaders
come together to shape a sustainable future 🌍✨<br /><br />
📅 Date: 1 November 2025 (Saturday)<br />
📍 Venue: Asia Pacific University, Kuala Lumpur<br />
💸 Entrance Fee: FREE – secure your spot today!<br /><br />
<strong>🔥 Event Highlights 🔥</strong><br />
🎯 Showcase & Finals<br />
✅ Datathon: RiskStorm<br />
✅ Poster Competition<br /><br />
🎓 Free Entrance Experiences<br />
✅ HR Do’s & Don’ts + Grooming Session<br />
✅ Mentor Hot Seat<br />
✅ C-Suite Panel: From Technical to Transformational – Actuaries as Business Leaders<br />
✅ Panel Discussion: Sustainability by Design – Actuaries at the Crossroads of Risk and Responsibility<br />
✅ Career Fair + HR Interview Simulation (Open to Public!)<br />
✅ Campus Visit (APU Student Services)<br />
✅ Professional Photo Booth<br />
✅ TOA Presentation & Prize Giving Ceremony<br />
✅ Lucky Draw Session<br /><br />
🔗 Secure your spot now!<br />
<a href="https://forms.office.com/e/PQkpt7dnsL" target="_blank" rel="noopener">https://forms.office.com/e/PQkpt7dnsL</a><br /><br />
Limited slots available! Register now via the QR code on the poster & don’t miss this transformative experience.<br /><br />
📍 <a href="https://maps.app.goo.gl/HQxGSTwfRuNsJGpa7?g_st=ipc" target="_blank" rel="noopener">Google Maps</a><br />
🚙 <a href="https://waze.com/ul/hw2836hpsm" target="_blank" rel="noopener">Waze</a><br /><br />
📱 Stay Updated<br />
Instagram: <a href="https://www.instagram.com/theactuarialsummit2025" target="_blank" rel="noopener">@theactuarialsummit2025</a><br />
LinkedIn: <a href="https://www.linkedin.com/in/the-actuarial-summit-597489371/" target="_blank" rel="noopener">The Actuarial Summit</a><br />
Email: <a href="mailto:theactuarialsummit@gmail.com">theactuarialsummit@gmail.com</a><br />
Beacons: <a href="https://beacons.ai/tacs25?__v=t1758436114774" target="_blank" rel="noopener">https://beacons.ai/tacs25?__v=t1758436114774</a><br /><br />
#TACS2025 #AdvancingActuarialExcellence #RegistrationOpen
    `
  },
  footer: {
    quickLinks: [
      { label: 'Landing', href: '#landing' },
      { label: 'About', href: '#about' },
      { label: 'Schedule & Map', href: '#schedule' },
      { label: 'Venue Logistics', href: '#logistics' },
      { label: 'Community & Legacy', href: '#community' }
    ],
    pageLinks: [
      { label: 'Featured Programmes', href: '#featured' },
      { label: 'Register Now', href: 'https://forms.office.com/e/PQkpt7dnsL' },
      { label: 'Venue Map', href: '#mapCanvas' },
      { label: 'Newsletter Signup', href: '#footerEmail' }
    ]
  },
  socialLinks: [
    {
      label: 'Instagram: @theactuarialsummit2025',
      icon: '📸',
      url: 'https://www.instagram.com/theactuarialsummit2025'
    },
    {
      label: 'LinkedIn: The Actuarial Summit 2025',
      icon: 'in',
      url: 'https://www.linkedin.com/in/the-actuarial-summit-597489371/'
    },
    {
      label: 'Email theactuarialsummit@gmail.com',
      icon: '✉️',
      url: 'mailto:theactuarialsummit@gmail.com'
    },
    {
      label: 'Beacons hub for TACS2025',
      icon: '🔗',
      url: 'https://beacons.ai/tacs25?__v=t1758436114774'
    },
    {
      label: 'Google Maps directions to APU Campus',
      icon: '📍',
      url: 'https://maps.app.goo.gl/HQxGSTwfRuNsJGpa7?g_st=ipc'
    },
    {
      label: 'Waze directions to APU Campus',
      icon: '🚙',
      url: 'https://waze.com/ul/hw2836hpsm'
    }
  ]
};

let activeTrack = 'all';
let activeFloor = eventData.venue?.defaultMap ?? eventData.venue?.maps?.[0]?.id ?? null;
let activePoiId = null;
let countdownTimer;
const mapState = { scale: 1, translateX: 0, translateY: 0 };
let mapStage;
let featuredIndex = 0;
let featuredResizeHandler = null;
const MAP_MIN_SCALE = 1;
const MAP_MAX_SCALE = 3;
let zoomInButton = null;
let zoomOutButton = null;

const formatTimeRange = (startISO, endISO, includeDate = true) => {
  if (!startISO || !endISO) return '';
  const startDate = new Date(startISO);
  const endDate = new Date(endISO);
  const dayFormatter = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  });
  const startLabel = timeFormatter.format(startDate);
  const endLabel = timeFormatter.format(endDate);
  const timeRange = startLabel === endLabel ? startLabel : `${startLabel} – ${endLabel}`;
  return includeDate ? `${dayFormatter.format(startDate)} • ${timeRange}` : timeRange;
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
  const navActions = document.getElementById('navActions');

  heroTitle.textContent = metadata.name;
  heroTagline.textContent = metadata.tagline;
  eventDate.textContent = `${metadata.dates} • ${metadata.venue}`;

  if (metadata.registrationUrl) {
    heroRegister.href = metadata.registrationUrl;
    navRegister.href = metadata.registrationUrl;
  } else {
    heroRegister.classList.add('is-disabled');
    heroRegister.setAttribute('aria-disabled', 'true');
    heroRegister.removeAttribute('href');
    heroRegister.tabIndex = -1;
    navRegister.classList.add('is-disabled');
    navRegister.setAttribute('aria-disabled', 'true');
    navRegister.removeAttribute('href');
    navRegister.tabIndex = -1;
  }

  if (metadata.livestreamUrl) {
    heroWatch.href = metadata.livestreamUrl;
    heroWatch.target = '_blank';
    heroWatch.rel = 'noopener';
    navLivestream.href = metadata.livestreamUrl;
    navLivestream.target = '_blank';
    navLivestream.rel = 'noopener';
    navLivestream.classList.remove('is-disabled');
    navLivestream.removeAttribute('aria-disabled');
    navLivestream.removeAttribute('tabindex');
  } else {
    heroWatch.classList.add('is-disabled');
    heroWatch.setAttribute('aria-disabled', 'true');
    heroWatch.removeAttribute('href');
    heroWatch.removeAttribute('target');
    heroWatch.removeAttribute('rel');
    heroWatch.tabIndex = -1;
    navLivestream.classList.add('is-disabled');
    navLivestream.setAttribute('aria-disabled', 'true');
    navLivestream.removeAttribute('href');
    navLivestream.removeAttribute('target');
    navLivestream.removeAttribute('rel');
    navLivestream.setAttribute('tabindex', '-1');
  }

  if (!metadata.registrationUrl && !metadata.livestreamUrl && navActions) {
    navActions.classList.add('is-hidden');
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

const getSlidesPerView = () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    return 3;
  }
  if (window.matchMedia('(min-width: 640px)').matches) {
    return 2;
  }
  return 1;
};

const renderFeaturedSessions = () => {
  const track = document.getElementById('featuredCarouselTrack');
  const prev = document.getElementById('featuredPrev');
  const next = document.getElementById('featuredNext');
  const dots = document.getElementById('featuredDots');
  const carousel = document.getElementById('featuredCarousel');

  if (!track || !prev || !next || !dots || !carousel) return;

  track.onpointerdown = null;
  track.onpointermove = null;
  track.onpointerup = null;
  track.onpointercancel = null;
  track.onlostpointercapture = null;
  const slides = eventData.sessions
    .filter((session) => session.featured)
    .sort((a, b) => new Date(a.start) - new Date(b.start));

  track.innerHTML = '';
  dots.innerHTML = '';
  featuredIndex = 0;

  if (!slides.length) {
    carousel.classList.add('is-empty');
    const empty = document.createElement('p');
    empty.className = 'carousel-empty';
    empty.textContent = 'Featured programmes will be announced soon.';
    track.appendChild(empty);
    prev.disabled = true;
    next.disabled = true;
    if (featuredResizeHandler) {
      window.removeEventListener('resize', featuredResizeHandler);
      featuredResizeHandler = null;
    }
    return;
  }

  carousel.classList.remove('is-empty');

  slides.forEach((session, index) => {
    const slide = document.createElement('article');
    slide.className = 'carousel-slide';
    slide.innerHTML = `
      <span class="tag">${session.track}</span>
      <h3>${session.title}</h3>
      <p>${session.description}</p>
      <div class="meta">${formatTimeRange(session.start, session.end, false)} • ${session.location}</div>
    `;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.dataset.index = index.toString();
    dot.setAttribute('aria-label', `Go to ${session.title}`);
    dots.appendChild(dot);
  });

  let swipePointerId = null;
  let swipeStartX = 0;
  let swipeDeltaX = 0;

  const releaseSwipe = () => {
    if (swipePointerId !== null && typeof track.hasPointerCapture === 'function' && track.hasPointerCapture(swipePointerId)) {
      track.releasePointerCapture(swipePointerId);
    }
    swipePointerId = null;
    swipeDeltaX = 0;
  };

  const sync = () => {
    const slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    if (featuredIndex > maxIndex) {
      featuredIndex = maxIndex;
    }
    track.style.setProperty('--slides-per-view', slidesPerView);
    const firstSlide = track.querySelector('.carousel-slide');
    let offset = 0;
    if (firstSlide) {
      const style = getComputedStyle(track);
      const gapValue =
        style.columnGap && style.columnGap !== 'normal'
          ? parseFloat(style.columnGap)
          : style.gap && style.gap !== 'normal'
          ? parseFloat(style.gap)
          : 0;
      const slideWidth = firstSlide.getBoundingClientRect().width;
      offset = featuredIndex * (slideWidth + gapValue);
    }
    track.style.transform = `translateX(-${offset}px)`;
    prev.disabled = featuredIndex === 0;
    next.disabled = featuredIndex >= maxIndex;
    Array.from(dots.children).forEach((dot, idx) => {
      const isActive = idx === featuredIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  prev.onclick = () => {
    featuredIndex = Math.max(featuredIndex - 1, 0);
    sync();
  };

  next.onclick = () => {
    const slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    featuredIndex = Math.min(featuredIndex + 1, maxIndex);
    sync();
  };

  dots.onclick = (event) => {
    const button = event.target.closest('.carousel-dot');
    if (!button) return;
    const slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, slides.length - slidesPerView);
    featuredIndex = Math.min(Number(button.dataset.index), maxIndex);
    sync();
  };

  const handleSwipeStart = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (swipePointerId !== null) return;
    swipePointerId = event.pointerId;
    swipeStartX = event.clientX;
    swipeDeltaX = 0;
    if (typeof track.setPointerCapture === 'function') {
      track.setPointerCapture(event.pointerId);
    }
  };

  const handleSwipeMove = (event) => {
    if (event.pointerId !== swipePointerId) return;
    swipeDeltaX = event.clientX - swipeStartX;
  };

  const handleSwipeEnd = (event) => {
    if (event.pointerId !== swipePointerId) return;
    const delta = swipeDeltaX;
    releaseSwipe();
    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        next.click();
      } else {
        prev.click();
      }
    }
  };

  track.onpointerdown = handleSwipeStart;
  track.onpointermove = handleSwipeMove;
  track.onpointerup = handleSwipeEnd;
  track.onpointercancel = handleSwipeEnd;
  track.onlostpointercapture = () => {
    swipePointerId = null;
    swipeDeltaX = 0;
  };

  if (featuredResizeHandler) {
    window.removeEventListener('resize', featuredResizeHandler);
  }
  featuredResizeHandler = sync;
  window.addEventListener('resize', featuredResizeHandler);

  sync();
};

const renderAbout = () => {
  document.getElementById('mission').textContent = eventData.mission;

  const impactList = document.getElementById('impact');
  impactList.innerHTML = '';
  eventData.impact.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    impactList.appendChild(li);
  });

  const organizersList = document.getElementById('organizers');
  organizersList.innerHTML = '';
  eventData.organizers.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    organizersList.appendChild(li);
  });

  const faqLink = document.getElementById('faqLink');
  const codeOfConduct = document.getElementById('codeOfConduct');

  if (faqLink) {
    if (eventData.links.faq) {
      faqLink.href = eventData.links.faq;
      faqLink.removeAttribute('aria-disabled');
    } else {
      faqLink.removeAttribute('href');
      faqLink.textContent = 'FAQ (coming soon)';
      faqLink.setAttribute('aria-disabled', 'true');
    }
  }

  if (codeOfConduct) {
    if (eventData.links.codeOfConduct) {
      codeOfConduct.href = eventData.links.codeOfConduct;
      codeOfConduct.removeAttribute('aria-disabled');
    } else {
      codeOfConduct.removeAttribute('href');
      codeOfConduct.textContent = 'Code of Conduct (coming soon)';
      codeOfConduct.setAttribute('aria-disabled', 'true');
    }
  }
};

const renderFilters = () => {
  const filters = document.getElementById('scheduleFilters');
  if (!filters) return;
  filters.innerHTML = '';
  const trackSet = new Set(schedule.map((entry) => entry.category).filter(Boolean));
  const tracks = ['all', 'ongoing', ...trackSet];

  tracks.forEach((track) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-button';
    button.textContent =
      track === 'all' ? 'All Sessions' : track === 'ongoing' ? 'Ongoing Now' : track;
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
  if (!container) return;
  container.innerHTML = '';

  const now = new Date();

  const entries = schedule
    .slice()
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .filter((entry) => {
      if (activeTrack === 'all') return true;
      if (activeTrack === 'ongoing') {
        if (!entry.start || !entry.end) return false;
        const start = new Date(entry.start);
        const end = new Date(entry.end);
        return now >= start && now <= end;
      }
      return entry.category === activeTrack;
    });

  entries.forEach((entry) => {
    const session = entry.sessionId
      ? eventData.sessions.find((item) => item.id === entry.sessionId)
      : null;
    const card = document.createElement('article');
    card.className = 'session-card';
    const hasSession = Boolean(session);
    const isOngoing = entry.start && entry.end ? now >= new Date(entry.start) && now <= new Date(entry.end) : false;

    if (isOngoing) {
      card.classList.add('is-ongoing');
    }

    const timeRange = entry.start && entry.end ? formatTimeRange(entry.start, entry.end, false) : entry.time;
    const showRange = timeRange !== entry.time;
    const summary = entry.summary ?? session?.description ?? '';
    const trackLabel = session?.track ?? entry.category ?? '';

    if (hasSession) {
      card.dataset.sessionId = session.id;
      card.tabIndex = 0;
    } else {
      card.dataset.sessionId = '';
      card.tabIndex = 0;
      card.classList.add('is-static');
    }

    card.innerHTML = `
      <div class="session-card__time">
        <span class="session-card__start">${entry.time}</span>
        ${showRange ? `<span class="session-card__range">${timeRange}</span>` : ''}
      </div>
      <h3>${entry.title}</h3>
      <p class="session-card__location">${entry.location}${trackLabel && trackLabel !== entry.location ? ` • ${trackLabel}` : ''}</p>
      ${summary ? `<p class="session-card__summary">${summary}</p>` : ''}
      ${hasSession ? '<span class="sr-only">Activate to view full session details</span>' : ''}
    `;

    container.appendChild(card);
  });

  if (!entries.length) {
    const emptyState = document.createElement('p');
    emptyState.textContent = 'No sessions match this filter at the moment.';
    container.appendChild(emptyState);
  }
};

const getFloorData = () => {
  const { venue } = eventData;
  if (!venue?.maps?.length) return null;
  return venue.maps.find((map) => map.id === activeFloor) ?? venue.maps[0];
};

const updateFloorButtons = () => {
  const toggle = document.getElementById('mapFloorToggle');
  if (!toggle) return;
  Array.from(toggle.querySelectorAll('button')).forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.floor === activeFloor ? 'true' : 'false');
  });
};

const clampMapTransform = () => {
  const mapCanvas = document.getElementById('mapCanvas');
  if (!mapCanvas) return;
  const rect = mapCanvas.getBoundingClientRect();
  const maxX = ((mapState.scale - 1) * rect.width) / 2;
  const maxY = ((mapState.scale - 1) * rect.height) / 2;
  if (maxX <= 0) {
    mapState.translateX = 0;
  } else {
    mapState.translateX = Math.min(Math.max(mapState.translateX, -maxX), maxX);
  }
  if (maxY <= 0) {
    mapState.translateY = 0;
  } else {
    mapState.translateY = Math.min(Math.max(mapState.translateY, -maxY), maxY);
  }
};

const updateZoomControlsState = () => {
  if (!zoomInButton || !zoomOutButton) return;
  zoomInButton.disabled = mapState.scale >= MAP_MAX_SCALE - 0.01;
  zoomOutButton.disabled = mapState.scale <= MAP_MIN_SCALE + 0.01;
};

const applyMapTransform = () => {
  if (!mapStage) return;
  clampMapTransform();
  mapStage.style.transform = `translate(${mapState.translateX}px, ${mapState.translateY}px) scale(${mapState.scale})`;
  updateZoomControlsState();
};

const resetMapTransform = () => {
  mapState.scale = 1;
  mapState.translateX = 0;
  mapState.translateY = 0;
  applyMapTransform();
};

const setMapScale = (scale, origin = null) => {
  const mapCanvas = document.getElementById('mapCanvas');
  if (!mapStage || !mapCanvas) return;
  const clampedScale = Math.min(Math.max(scale, MAP_MIN_SCALE), MAP_MAX_SCALE);
  if (origin) {
    const rect = mapCanvas.getBoundingClientRect();
    const originX = origin.x - (rect.left + rect.width / 2);
    const originY = origin.y - (rect.top + rect.height / 2);
    if (mapState.scale !== 0) {
      const scaleRatio = clampedScale / mapState.scale;
      mapState.translateX -= originX * (scaleRatio - 1);
      mapState.translateY -= originY * (scaleRatio - 1);
    }
  }
  mapState.scale = clampedScale;
  applyMapTransform();
};

const updateMapScale = (delta, origin = null) => {
  setMapScale(mapState.scale + delta, origin);
};

const setActiveFloor = (floorId, poiId = null) => {
  if (!floorId || floorId === activeFloor) return;
  activeFloor = floorId;
  activePoiId = poiId;
  renderMap();
  renderPOIs();
  updateFloorButtons();
};

const renderMapControls = () => {
  const toggle = document.getElementById('mapFloorToggle');
  if (!toggle) return;
  toggle.innerHTML = '';
  const floors = eventData.venue?.maps ?? [];
  if (!floors.length) return;
  if (!activeFloor || !floors.some((floor) => floor.id === activeFloor)) {
    activeFloor = floors[0].id;
  }
  toggle.hidden = floors.length <= 1;
  floors.forEach((floor) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'map-floor-button';
    button.dataset.floor = floor.id;
    button.textContent = floor.label;
    button.setAttribute('aria-pressed', floor.id === activeFloor ? 'true' : 'false');
    button.addEventListener('click', () => setActiveFloor(floor.id));
    toggle.appendChild(button);
  });
  updateFloorButtons();
};

const renderMap = () => {
  const mapCanvas = document.getElementById('mapCanvas');
  if (!mapCanvas) return;
  mapCanvas.innerHTML = '';
  zoomInButton = null;
  zoomOutButton = null;
  const floor = getFloorData();
  if (!floor) return;
  mapCanvas.setAttribute('aria-label', floor.alt);
  mapCanvas.dataset.floor = floor.id;

  const stage = document.createElement('div');
  stage.className = 'map-stage';
  stage.dataset.floor = floor.id;

  const mapImage = document.createElement('img');
  mapImage.className = 'map-image';
  mapImage.src = floor.image;
  mapImage.alt = floor.alt;
  stage.appendChild(mapImage);

  eventData.venue.pois
    .filter((poi) => !poi.floor || poi.floor === floor.id)
    .forEach((poi) => {
      const marker = document.createElement('button');
      marker.type = 'button';
      marker.className = `map-marker map-marker--${poi.type} hover-scale`;
      marker.style.left = `${poi.coordinates.x}%`;
      marker.style.top = `${poi.coordinates.y}%`;
      marker.dataset.poiId = poi.id;
      marker.dataset.floor = poi.floor ?? '';
      marker.setAttribute('aria-label', poi.name);
      stage.appendChild(marker);
    });

  mapCanvas.appendChild(stage);
  mapStage = stage;

  const zoomControls = document.createElement('div');
  zoomControls.className = 'map-zoom-controls';

  const zoomIn = document.createElement('button');
  zoomIn.type = 'button';
  zoomIn.className = 'map-zoom-button';
  zoomIn.setAttribute('aria-label', 'Zoom in on venue map');
  zoomIn.textContent = '+';

  const zoomOut = document.createElement('button');
  zoomOut.type = 'button';
  zoomOut.className = 'map-zoom-button';
  zoomOut.setAttribute('aria-label', 'Zoom out of venue map');
  zoomOut.textContent = '−';

  const getCanvasCenter = () => {
    const rect = mapCanvas.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  };

  zoomIn.addEventListener('click', () => {
    updateMapScale(0.25, getCanvasCenter());
  });

  zoomOut.addEventListener('click', () => {
    updateMapScale(-0.25, getCanvasCenter());
  });

  zoomControls.appendChild(zoomIn);
  zoomControls.appendChild(zoomOut);
  mapCanvas.appendChild(zoomControls);

  zoomInButton = zoomIn;
  zoomOutButton = zoomOut;

  resetMapTransform();
};

const renderPOIs = () => {
  const list = document.getElementById('poiList');
  const detailContainer = document.getElementById('poiDetail');
  if (!list || !detailContainer) return;
  list.innerHTML = '';
  detailContainer.innerHTML = '';

  const floor = getFloorData();
  const pois = eventData.venue.pois.filter((poi) => {
    if (!poi.floor) return true;
    return floor ? poi.floor === floor.id : false;
  });

  if (!pois.length) {
    const item = document.createElement('li');
    item.textContent = 'Venue markers will be published soon.';
    list.appendChild(item);
    return;
  }

  if (!activePoiId || !pois.some((poi) => poi.id === activePoiId)) {
    activePoiId = pois[0].id;
  }

  pois.forEach((poi) => {
    const item = document.createElement('li');
    const label = poi.hours ? `${poi.name} • ${poi.hours}` : poi.name;
    item.textContent = label;
    item.dataset.poiId = poi.id;
    item.setAttribute('role', 'button');
    item.tabIndex = 0;
    item.setAttribute('aria-selected', poi.id === activePoiId ? 'true' : 'false');
    list.appendChild(item);
  });

  if (activePoiId) {
    updatePoiDetail(activePoiId, false);
  }
};

const updatePoiDetail = (poiId, allowFloorSwitch = true) => {
  const detailContainer = document.getElementById('poiDetail');
  if (!detailContainer) return;
  const poi = eventData.venue.pois.find((item) => item.id === poiId);
  if (!poi) return;

  if (allowFloorSwitch && poi.floor && poi.floor !== activeFloor) {
    setActiveFloor(poi.floor, poi.id);
    return;
  }

  activePoiId = poi.id;
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

const initMapInteractions = () => {
  const mapCanvas = document.getElementById('mapCanvas');
  if (!mapCanvas) return;
  const pointers = new Map();
  let isPanning = false;
  let panPointerId = null;
  let originX = 0;
  let originY = 0;
  let initialDistance = 0;
  let initialScale = mapState.scale;

  const updatePanReference = (pointer) => {
    originX = pointer.x - mapState.translateX;
    originY = pointer.y - mapState.translateY;
  };

  mapCanvas.addEventListener('pointerdown', (event) => {
    if (!mapStage || event.target.closest('.map-marker')) return;
    mapCanvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 1) {
      isPanning = true;
      panPointerId = event.pointerId;
      updatePanReference({ x: event.clientX, y: event.clientY });
    } else if (pointers.size === 2) {
      isPanning = false;
      panPointerId = null;
      const values = Array.from(pointers.values());
      initialDistance = Math.hypot(values[0].x - values[1].x, values[0].y - values[1].y);
      initialScale = mapState.scale;
    }
  });

  mapCanvas.addEventListener('pointermove', (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size >= 2) {
      const values = Array.from(pointers.values());
      const distance = Math.hypot(values[0].x - values[1].x, values[0].y - values[1].y);
      if (initialDistance) {
        const scaleFactor = distance / initialDistance;
        const targetScale = initialScale * scaleFactor;
        const center = {
          x: (values[0].x + values[1].x) / 2,
          y: (values[0].y + values[1].y) / 2
        };
        setMapScale(targetScale, center);
      }
    } else if (isPanning && panPointerId === event.pointerId) {
      mapState.translateX = event.clientX - originX;
      mapState.translateY = event.clientY - originY;
      applyMapTransform();
    }
  });

  const endPointer = (event) => {
    if (!pointers.has(event.pointerId)) return;
    if (typeof mapCanvas.hasPointerCapture === 'function' && mapCanvas.hasPointerCapture(event.pointerId)) {
      mapCanvas.releasePointerCapture(event.pointerId);
    }
    pointers.delete(event.pointerId);

    if (pointers.size === 0) {
      isPanning = false;
      panPointerId = null;
      initialDistance = 0;
    } else if (pointers.size === 1) {
      const [id, position] = pointers.entries().next().value;
      panPointerId = id;
      isPanning = true;
      updatePanReference(position);
      initialDistance = 0;
    }
  };

  mapCanvas.addEventListener('pointerup', endPointer);
  mapCanvas.addEventListener('pointerleave', endPointer);
  mapCanvas.addEventListener('pointercancel', endPointer);

  mapCanvas.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? -0.2 : 0.2;
      updateMapScale(direction, { x: event.clientX, y: event.clientY });
    },
    { passive: false }
  );
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

  if (eventData.logistics.emergency) {
    emergency.textContent = eventData.logistics.emergency;
    emergency.hidden = false;
  } else {
    emergency.textContent = '';
    emergency.hidden = true;
  }
};

const renderCommunity = () => {
  const highlightIntro = document.getElementById('highlightIntro');
  const pastHighlights = document.getElementById('pastHighlights');
  const whyJoin = document.getElementById('whyJoin');
  const volunteer = document.getElementById('volunteer');
  const announcement = document.getElementById('communityAnnouncement');

  highlightIntro.textContent = eventData.community.highlightIntro;

  pastHighlights.innerHTML = '';
  eventData.community.highlights.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    pastHighlights.appendChild(li);
  });

  whyJoin.innerHTML = '';
  eventData.community.whyJoin.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    whyJoin.appendChild(li);
  });

  volunteer.textContent = eventData.community.volunteer;

  if (announcement) {
    if (eventData.community.socialHtml) {
      const socialHtml = eventData.community.socialHtml.trim().replace(/\n\s+/g, '\n');
      announcement.innerHTML = socialHtml;
      announcement.hidden = false;
    } else if (eventData.community.social) {
      announcement.textContent = eventData.community.social;
      announcement.hidden = false;
    } else {
      announcement.innerHTML = '';
      announcement.hidden = true;
    }
  }
};

const renderFooter = () => {
  const quickList = document.getElementById('footerQuickLinks');
  const pageList = document.getElementById('footerPageLinks');
  const socialList = document.getElementById('footerSocialLinks');
  const copyright = document.getElementById('footerCopyright');

  if (quickList) {
    quickList.innerHTML = '';
    const quickLinks = eventData.footer?.quickLinks ?? [];
    quickLinks.forEach((item) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      li.appendChild(link);
      quickList.appendChild(li);
    });
  }

  if (pageList) {
    pageList.innerHTML = '';
    const pageLinks = eventData.footer?.pageLinks ?? [];
    pageLinks.forEach((item) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      if (item.href.startsWith('http')) {
        link.target = '_blank';
        link.rel = 'noopener';
      }
      li.appendChild(link);
      pageList.appendChild(li);
    });
  }

  if (socialList) {
    socialList.innerHTML = '';
    eventData.socialLinks.forEach((social) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = social.url;
      if (social.url.startsWith('http')) {
        link.target = '_blank';
        link.rel = 'noopener';
      }
      link.title = social.label;
      link.innerHTML = `
        <span class="footer-social__icon" aria-hidden="true">${social.icon}</span>
        <span class="footer-social__label">${social.label}</span>
      `;
      li.appendChild(link);
      socialList.appendChild(li);
    });
  }

  const year = new Date().getFullYear();
  if (copyright) {
    copyright.textContent = `© ${year} ${eventData.metadata.name}. All rights reserved.`;
  }
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
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const openNav = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('is-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        closeNav();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023 && nav.classList.contains('is-open')) {
      closeNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav();
      toggle.focus();
    }
  });
};

const initScheduleInteractions = () => {
  const schedule = document.getElementById('scheduleList');
  const overlay = document.getElementById('sessionOverlay');
  const closeOverlay = document.getElementById('closeOverlay');
  if (!schedule || !overlay || !closeOverlay) return;

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
    const speakerSection = document.querySelector('.overlay-speakers');
    speakerList.innerHTML = '';
    if (session.speakers.length) {
      session.speakers.forEach((id) => {
        const speaker = eventData.speakers[id];
        if (!speaker) return;
        const li = document.createElement('li');
        li.innerHTML = `<strong>${speaker.name}</strong><br /><span>${[speaker.title, speaker.organization]
          .filter(Boolean)
          .join(', ')}</span>`;
        speakerList.appendChild(li);
      });
      speakerSection.hidden = false;
    } else {
      speakerSection.hidden = true;
    }

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
    if (!card) return;
    const sessionId = card.dataset.sessionId;
    if (!sessionId) return;
    openOverlay(sessionId);
  });

  schedule.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const card = event.target.closest('.session-card');
      if (!card) return;
      const sessionId = card.dataset.sessionId;
      if (!sessionId) return;
      event.preventDefault();
      openOverlay(sessionId);
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

  if (list) {
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
  }

  if (mapCanvas) {
    mapCanvas.addEventListener('click', (event) => {
      const marker = event.target.closest('.map-marker');
      if (!marker) return;
      updatePoiDetail(marker.dataset.poiId);
    });
  }
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
  renderAbout();
  renderFilters();
  renderSchedule();
  renderMapControls();
  renderMap();
  renderPOIs();
  renderLogistics();
  renderCommunity();
  renderFooter();
  initNewsletterForms();
  initNav();
  initScheduleInteractions();
  initPoiInteractions();
  initMapInteractions();
  initCountdown();
};

document.addEventListener('DOMContentLoaded', init);
