# Event Website Information Architecture & UI Planning

## 1. Draft Sitemap
- **Landing**
  - Hero banner with event highlights and primary CTA
  - Countdown timer and quick facts (date, venue, registration link)
  - Featured sessions preview carousel
  - Sponsor highlights strip
  - Testimonials or past event highlights
  - Newsletter signup
- **About**
  - Event mission and history
  - Organizing team and partners
  - Impact metrics / press mentions
  - FAQs snippet linking to full FAQ
- **Schedule & Map**
  - Filterable agenda timeline (day, track, room)
  - Map overview with venue zones and points-of-interest (POIs)
  - Embedded session blocks linking to detail overlays
  - Accessibility and transport tips
- **Session Detail Overlays** (modal or slide-in panel)
  - Session title, time, duration, and location
  - Speaker profiles with links to bios
  - Session description and learning outcomes
  - Related resources (slides, recordings)
  - Add-to-calendar and share buttons
- **Venue Logistics**
  - Travel instructions (public transit, parking, ride-share)
  - On-site services (registration desk, accessibility services, Wi-Fi)
  - Dining options and partner hotels
  - Emergency contacts and policies
- **Community**
  - Networking opportunities (meetups, lounges)
  - Code of conduct
  - Volunteer information
  - Social media wall and hashtags
  - Post-event community resources

## 2. Navigation States & Persistent Footer
- **Desktop (≥ 1024px) Sticky Navigation**
  - Horizontal nav with logo left, primary links (Landing, About, Schedule, Logistics, Community)
  - Secondary actions on the right (Register CTA button, language toggle, search icon)
  - Sticky behavior after hero section, shrinks logo and reduces padding for compact view
  - Scrollspy highlights active section, with subtle underline animation
- **Mobile (< 1024px) Hamburger Navigation**
  - Top bar with logo and hamburger icon
  - Full-screen overlay menu on tap with primary links stacked and prominent Register CTA
  - Support quick filters for schedule (Day/Track) directly accessible within menu
  - Close button and dimmed background for focus
- **Persistent Footer (All Viewports)**
  - Upper band: quick links (Schedule, Venue Map, Code of Conduct, FAQ)
  - Middle band: contact methods (email, hotline, WhatsApp), emergency info, accessibility statement
  - Lower band: social icons, newsletter signup, copyright
  - Include sponsor logo strip optionally above footer on landing page

## 3. Data Requirements
- **Event Metadata**
  - Event name, tagline, dates (start/end), timezone, venue name/address
  - Registration links, livestream link, on-site guidelines
  - Theme descriptions and key messages
- **Session Blocks**
  - Unique session ID, title, start/end times, track, room/location ID
  - Short description, extended abstract, prerequisites
  - Associated speakers (IDs), resources (URLs), capacity/registration status
- **Venue Points-of-Interest (POIs)**
  - Location ID, name, type (stage, lounge, restroom, dining, accessibility service)
  - Coordinates (map x/y or lat/long), floor level, operating hours
  - Descriptive notes (e.g., “Wheelchair-accessible entrance”) and media (images/icons)
- **Speaker Profiles**
  - Speaker ID, full name, title/role, organization
  - Biography, headshot URL, contact/social links
  - Sessions associated, availability for office hours or meetups
- **Sponsor Highlights**
  - Sponsor ID, name, tier (platinum/gold/etc.), logo URL
  - Description, booth location (if applicable), links to offers/resources
  - Sponsorship activation details (session ownership, lounge presence)

## 4. Responsive Breakpoints
- **Cards (session previews, speaker cards, sponsor tiles)**
  - ≥ 1200px: 4-column grid (card width ~280px)
  - 992–1199px: 3-column grid
  - 768–991px: 2-column grid with increased vertical spacing
  - < 768px: single-column stack with horizontal scroll option for featured cards
- **Timeline (Schedule view)**
  - ≥ 1200px: Horizontal multi-track timeline with simultaneous tracks visible
  - 992–1199px: Condensed horizontal timeline with collapsible tracks
  - 768–991px: Vertical timeline by day, track filter pill bar at top
  - < 768px: Accordion list per session, sticky day selector
- **Map Component**
  - ≥ 1200px: Map + details split view (map 60%, details panel 40%)
  - 992–1199px: Map full width with collapsible POI list overlay
  - 768–991px: Map in 3:4 aspect ratio with bottom sheet for POI details
  - < 768px: Map 1:1 thumbnail with full-screen modal expansion and swipeable POI cards

## 5. Implementation Roadmap & Next Steps
- **Phase 1 – Content & Information Architecture Finalization (Week 1)**
  - Validate sitemap with stakeholders; confirm page priorities and naming conventions.
  - Inventory existing content/assets; identify gaps (speaker bios, sponsor assets, accessibility copy).
  - Define CMS collections (events, sessions, speakers, sponsors, venue POIs) with field-level ownership.
- **Phase 2 – Visual Design & Prototyping (Weeks 2–3)**
  - Produce responsive wireframes for key breakpoints (desktop ≥ 1200px, tablet 768–1199px, mobile < 768px).
  - Prototype navigation behaviors (sticky nav transitions, hamburger animation, map modal) for usability testing.
  - Establish design tokens (colors, typography, spacing, elevation) and component states (hover, focus, disabled).
- **Phase 3 – Development & Integration (Weeks 3–5)**
  - Build reusable components: hero, session card, timeline, POI map, speaker modal, footer bands.
  - Implement CMS/API integration for session data, POIs, sponsors, and speaker profiles; support timezone-aware scheduling.
  - Configure analytics (page views, CTA clicks, registration conversions) and error logging.
- **Phase 4 – QA, Accessibility, and Launch Prep (Week 6)**
  - Conduct cross-browser/device testing at defined breakpoints; verify keyboard navigation and screen-reader support.
  - Validate map interactions (POI filtering, modal details) and ensure performance budgets (LCP < 2.5s, TTI < 5s).
  - Prepare launch checklist: SEO metadata, sitemap.xml generation, 301 redirects if migrating from prior site.

### Cross-Team Dependencies
- **Content**: Final copy for key sections, session abstracts, speaker bios/headshots, sponsor assets, venue imagery.
- **Marketing**: Registration CTA messaging, campaign tracking parameters, newsletter integration details.
- **Operations**: Up-to-date logistics (transport, accessibility services), emergency contacts, on-site policies.
- **Vendors**: Map provider API keys, livestream platform embedding guidelines, ticketing integration requirements.

### Outstanding Questions
1. What CMS or data source will power the schedule and speaker content (e.g., Contentful, Airtable, bespoke admin)?
2. Are there multilingual requirements that impact navigation labels and content structure?
3. Should the site support post-event content (recordings, recaps) within the same sitemap or via archived pages?
4. What level of personalization is expected (e.g., logged-in attendee agenda, sponsor targeting)?

