export const marqueeItems = [
  "Mohali, India to London and New York",
  "10 to 15 seat pilot teams",
  "No upfront fees, no deposits",
  "UK and US shift cover",
];

export const sectors = [
  { badge: "TL", label: "Telecom", style: "solid" as const },
  { badge: "EC", label: "E-commerce", style: "forest" as const },
  { badge: "S", label: "SaaS", style: "outline" as const },
  { badge: "+", label: "Healthcare and RCM", style: "outlineForest" as const },
  { badge: "OM", label: "Order management", style: "lime" as const },
];

export const services = [
  {
    num: "01",
    title: "Inbound and outbound voice",
    body: "Named agents on your queue, your script and your tone of voice. Call recordings and daily volume reports come as standard.",
  },
  {
    num: "02",
    title: "Helpdesk and technical support",
    body: "Tier one and tier two on your ticketing system. We work inside your tool, not a black box of our own.",
  },
  {
    num: "03",
    title: "Back office and data processing",
    body: "Data entry, form processing, order management and reconciliation. Accuracy sampled daily and published to you.",
  },
  {
    num: "04",
    title: "Medical billing and RCM",
    body: "Claims, coding support, denials and follow up. HIPAA aligned process, restricted floor access, signed BAAs.",
  },
  {
    num: "05",
    title: "Dedicated team scaling",
    body: "Start at ten to fifteen seats with a team lead. Add seats in blocks as volume grows, with two weeks notice.",
  },
];

export const steps = [
  {
    num: "STEP 01",
    title: "Discovery and scope",
    body: "We walk your queue, volumes and tooling, then write a scope with seat count, hours and the metrics we will be held to.",
    image: "/images/step-discovery.jpg",
    alt: "Account manager reviewing a client queue on screen",
    offset: "0px",
  },
  {
    num: "STEP 02",
    title: "Pilot team live in 30 days",
    body: "Ten to fifteen seats, a dedicated lead, trained on your process. No upfront fee and no deposit to get there.",
    image: "/images/step-pilot.jpg",
    alt: "Pilot team in training on the operations floor",
    offset: "clamp(0px, 3vw, 40px)",
  },
  {
    num: "STEP 03",
    title: "Scale on reported numbers",
    body: "You get a weekly pack: volumes, answer times, SLA, quality scores and roster. Seats grow when the pack says they should.",
    image: "/images/step-scale.jpg",
    alt: "Team lead presenting weekly performance numbers",
    offset: "clamp(0px, 6vw, 80px)",
  },
];

export const metrics = [
  {
    value: "21s",
    label: "Median voice answer time, rolling 30 days.",
    tone: "lime" as const,
    lift: false,
  },
  {
    value: "98.4%",
    label: "Ticket SLA attainment across helpdesk accounts.",
    tone: "light" as const,
    lift: true,
  },
  {
    value: "30",
    label: "Days from signed pilot to live contacts.",
    tone: "ghost" as const,
    lift: false,
  },
  {
    value: "11",
    label: "Accounts running UK and US shift cover.",
    tone: "ink" as const,
    lift: true,
  },
];

export const faqs = [
  {
    q: "Where does our data actually sit?",
    a: "Inside your systems. Agents work in your CRM and ticketing tools over a controlled connection, so records stay on your side.",
  },
  {
    q: "How do you handle UK GDPR?",
    a: "We sign a data processing agreement, restrict floor access, block removable media and log every system session. Audit reports are available quarterly.",
  },
  {
    q: "Can you cover our shift pattern?",
    a: "Yes. We run UK and US shifts from Mohali, including weekends. Overnight cover is staffed by a rota, not a skeleton crew.",
  },
  {
    q: "What are the pilot terms?",
    a: "No upfront fee and no security deposit. You pay monthly for the pilot seats and can end it with thirty days notice.",
  },
  {
    q: "What if the team is not good enough?",
    a: "You tell us in week two, not month six, because you see the numbers weekly. We replace agents at our cost, not yours.",
  },
  {
    q: "Who manages the team day to day?",
    a: "A dedicated team lead employed by us, plus one named account contact. You are never routed through a shared support inbox.",
  },
];

export const complaints = [
  {
    text: "Nobody could tell us who was on shift last Tuesday.",
    tone: "ink" as const,
    inset: false,
  },
  {
    text: "Reporting arrived monthly, as a screenshot, and never matched our own numbers.",
    tone: "light" as const,
    inset: true,
  },
  {
    text: "Every escalation went to the same one person, and then he left.",
    tone: "forest" as const,
    inset: false,
  },
];
