import React from "react";
import {
  Mail,
  Linkedin,
  Phone,
  ArrowRight,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
  Sparkles,
  Globe2,
  CalendarCheck,
  Users,
  Award,
  Languages,
  Quote,
  Plane,
} from "lucide-react";

const profilePhotoUrl = "/alaa-profile.jpg";
const linkedInUrl = "https://www.linkedin.com/in/ben-mahmoud-alla-eddine";
const email = "alaabenmahmoud620_9@gmail.com";
const phone = "+216 98 606 395";

const experiences = [
  {
    company: "La Demeure Sidi Bou Said",
    role: "Management Intern — Hospitality & Tourism",
    period: "January 2026 — Present",
    text: "Client prospecting, customer journey support, online and offline marketing, branding and guest experience enhancement.",
  },
  {
    company: "Wallah We Can",
    role: "Digital Communications & Tools Lead — NGO",
    period: "Sep 2024 — Mar 2025",
    text: "Digital workflows, CMS/CRM/email/social stack, SOPs, governance frameworks and KPI dashboards for consistent measurable impact.",
  },
  {
    company: "Musk de Djerba",
    role: "Launch Lead — Luxury Guesthouse",
    period: "12 months — 2023",
    text: "Led the launch and full digital communication strategy, growing online visibility and strengthening guest satisfaction.",
  },
  {
    company: "BoostCom",
    role: "CEO & Founder",
    period: "2020 — 2024",
    text: "Founded a hospitality-focused marketing agency, delivering 100+ campaigns for 50+ clients in Tunisia and abroad.",
  },
];

const internationalExperiences = [
  {
    place: "BTU Cottbus-Senftenberg — Germany",
    title: "Exchange Semester in World Heritage Studies",
    period: "April — September 2025",
    text: "International academic experience focused on heritage, culture, sustainability and territorial perspectives.",
    image: "/germany-exchange.png",
  },
  {
    place: "Leadership Institute — Washington, DC",
    title: "Political Campaign Management Training",
    period: "April — May 2023",
    text: "Professional development program covering campaign strategy, digital marketing, fundraising, media relations and grassroots organizing.",
    image: "/washington-training.png",
  },
];

const collaborations = [
  {
    name: "BoostCom",
    logo: "/boostcom-logo.png",
    link: "https://www.instagram.com/boostcom.tn/",
  },
  {
    name: "Musk de Djerba",
    logo: "/musk-de-djerba-logo.png",
    link: "https://www.instagram.com/muskdedjerba/",
  },
  {
    name: "Wallah We Can",
    logo: "/wallah-we-can-logo.png",
    link: "https://www.instagram.com/wallahwecan/",
  },
  {
    name: "Indigo Properties",
    logo: "/indigo-properties-logo.png",
    link: "https://www.instagram.com/indigoproperties.tn/",
  },
  {
    name: "La Demeure Sidi Bou Saïd",
    logo: "/personal-mark.png",
    link: "https://www.instagram.com/lademeuresidibousaid/",
  },
];

const impact = [
  { number: "100+", label: "Digital campaigns delivered" },
  { number: "50+", label: "Clients supported" },
  { number: "+25K", label: "Instagram audience growth" },
  { number: "1M+", label: "Social interactions generated" },
];

const recommendations = [
  {
    name: "Lotfi Hamadi",
    role: "Founder of #WallahWeCan, senior consultant & sustainable development speaker",
    quote: "Un pro de la com qui a compris la différence entre efficacité et efficience. Il a toujours répondu à nos demandes à temps et avec de la qualité.",
  },
  {
    name: "Wassim Ben Ammar",
    role: "Auto Entrepreneur, UI/UX Designer, Motion & Graphic Designer, Software Engineer",
    quote: "C'est avec grand enthousiasme que je recommande Ala Ben Mahmoud, fondateur de l'agence de communication BoostCom. Ala combine brillamment son esprit entrepreneurial avec ses études pour offrir des stratégies de communication innovantes et percutantes. Sa vision stratégique et sa capacité à mettre en œuvre des campagnes créatives démontrent une maturité professionnelle et une compréhension du marché bien au-delà de ses années. Son engagement, son leadership et sa capacité à concilier avec succès responsabilités académiques et professionnelles font d'Ala un véritable atout pour toute initiative ou projet. Sa passion pour l'excellence et son éthique de travail sont contagieuses, faisant de lui une source d'inspiration pour son équipe et ses pairs. Je suis convaincu que Ala continuera à réaliser de grandes choses et à apporter une contribution précieuse où qu'il aille.",
  },
  {
    name: "Tarek Soussi",
    role: "CEO-Manager chez Oeil Des Cyclopes",
    quote: "Nous recommandons vivement Alaa Ben Mahmoud pour son expertise en communication digitale et sa maîtrise exemplaire des réseaux sociaux. Sa capacité à développer des stratégies innovantes, à optimiser la présence en ligne et à engager efficacement les audiences a considérablement renforcé la visibilité de nos projets. Grâce à son professionnalisme et à sa créativité, Alaa a su transformer nos objectifs de communication en véritables succès.",
  },
  {
    name: "Bilel Amdouni",
    role: "Senior Incubator Program Officer, Digital Marketing & Transformation Consultant",
    quote: "J’ai eu le plaisir d’accompagner Alaa en tant que mentor, et dès le départ, il s'est distingué par son professionnalisme, sa curiosité intellectuelle et sa volonté permanente de monter en compétences. Son évolution est remarquable : son engagement dans son poste actuel et sa contribution active à l’écosystème entrepreneurial témoignent d’un profil solide, engagé et prometteur. Alaa est un véritable atout pour toute organisation. Félicitations et plein succès pour la suite de son parcours.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#111827]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#D8C39F_0%,transparent_32%),linear-gradient(135deg,#F8F4EC_0%,#EDF4F7_42%,#D9E7EF_100%)]" />
        <div className="absolute right-[-8rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#143A5A]/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#C7A76C]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 md:px-8">
          <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/65 px-5 py-3 shadow-sm backdrop-blur-xl">
            <a href="#top" className="text-sm font-black tracking-[0.32em] text-[#143A5A]">BEN MAHMOUD ALAA</a>
            <div className="hidden items-center gap-7 text-sm font-medium text-[#526071] lg:flex">
              <a href="#about" className="hover:text-[#143A5A]">Profile</a>
              <a href="#experience" className="hover:text-[#143A5A]">Experience</a>
              <a href="#international" className="hover:text-[#143A5A]">International</a>
              <a href="#recommendations" className="hover:text-[#143A5A]">Recommendations</a>
              <a href="#contact" className="hover:text-[#143A5A]">Contact</a>
            </div>
            <a href={`mailto:${email}`} className="rounded-full bg-[#143A5A] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0F2B42]">Contact</a>
          </nav>

          <div id="top" className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/70 px-4 py-2 text-sm font-medium text-[#7A6339] shadow-sm backdrop-blur">
                <Sparkles size={16} /> Hospitality • Tourism • Marketing • Communications
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#111827] md:text-7xl lg:text-8xl">Alaa Ben Mahmoud</h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold text-[#143A5A] md:text-2xl">M2 Student in Hospitality & Tourism Management at IHEC Carthage.</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#4B5563] md:text-lg">
                Young entrepreneur passionate about innovation, communication and customer experience. Experienced in guesthouse management, digital marketing and event organization, I lead projects that strengthen brand image, customer satisfaction and measurable visibility.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/75 px-4 py-2 text-sm font-semibold text-[#143A5A] shadow-sm"><CalendarCheck size={16} /> Graduation expected July 2026</div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/75 px-4 py-2 text-sm font-semibold text-[#143A5A] shadow-sm"><Award size={16} /> Available from August 2026</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-[#143A5A] px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0F2B42]">Explore my work <ArrowRight size={18} /></a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/75 px-6 py-3 font-semibold text-[#143A5A] shadow-sm transition hover:-translate-y-0.5 hover:bg-white">LinkedIn profile</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
              <div className="absolute -left-6 top-8 hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur md:block"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8A6D3B]">Impact</p><p className="mt-1 text-2xl font-black text-[#143A5A]">100+ Campaigns</p></div>
              <div className="absolute -right-3 bottom-10 hidden rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur md:block"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8A6D3B]">Reach</p><p className="mt-1 text-2xl font-black text-[#143A5A]">1M+ Interactions</p></div>
              <div className="relative rounded-[2.5rem] border border-white/80 bg-white/70 p-4 shadow-2xl backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#143A5A] p-7 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#5FA8D3_0%,transparent_40%),linear-gradient(160deg,#143A5A_0%,#274D70_55%,#C3A36C_120%)]" />
                  <div className="relative">
                    <div className="mx-auto h-[360px] overflow-hidden rounded-[1.7rem] border-[6px] border-white/85 bg-white/15 shadow-2xl">
                      <img src={profilePhotoUrl} alt="Portrait of Alaa Ben Mahmoud" className="h-full w-full object-cover" />
                    </div>
                    <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.32em] text-[#E7D8BB]">Personal Portfolio</p>
                    <h2 className="mx-auto mt-4 max-w-sm text-center text-3xl font-black leading-tight tracking-[-0.03em]">Marketing profile for hospitality, tourism & brand image</h2>
                    <div className="mt-7 grid grid-cols-2 gap-3">
                <a
  key={item.name}
  href={item.link}
  target="_blank"
  rel="noreferrer"
  className="flex min-h-36 flex-col items-center justify-center rounded-[2rem] border border-[#E3D5BF] bg-white/80 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
  <img
    src={item.logo}
    alt={`${item.name} logo`}
    className="max-h-20 max-w-full object-contain"
  />
  <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#5B6472]">
    {item.name}
  </p>
</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Profile</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[#111827] md:text-5xl">Independent, creative and results-driven.</h2></div>
          <div className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-8 shadow-sm"><p className="text-lg leading-8 text-[#4B5563]">I combine hospitality management, communication strategy and hands-on field experience to help brands improve visibility, guest acquisition, customer loyalty and brand consistency.</p><p className="mt-5 text-lg leading-8 text-[#4B5563]">My work is focused on meaningful storytelling, practical execution and measurable results across hospitality, tourism, communications and experience-led projects.</p></div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Professional experiences</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Selected work journey</h2></div>
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item) => (<article key={item.company} className="group rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white transition group-hover:scale-105"><Briefcase size={22} /></div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A6D3B]">{item.period}</p><h3 className="mt-3 text-2xl font-black text-[#111827]">{item.company}</h3><p className="mt-2 font-semibold text-[#143A5A]">{item.role}</p><p className="mt-4 leading-7 text-[#5B6472]">{item.text}</p></article>))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Collaborations</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Brands and initiatives I contributed to</h2></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{collaborations.map((item) => (<div key={item.name} className="flex min-h-36 flex-col items-center justify-center rounded-[2rem] border border-[#E3D5BF] bg-white/80 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={item.logo} alt={`${item.name} logo`} className="max-h-20 max-w-full object-contain" /><p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#5B6472]">{item.name}</p></div>))}</div>
      </section>

      <section id="international" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">International experiences</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Learning across cultures and contexts</h2></div>
        <div className="grid gap-6 md:grid-cols-2">{internationalExperiences.map((item) => (<article key={item.title} className="overflow-hidden rounded-[2rem] border border-[#E3D5BF] bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-72 bg-[#D8C39F]/30"><div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#143A5A] to-[#C3A36C] text-white"><Plane size={44} /></div><img src={item.image} alt={item.title} className="relative h-full w-full object-cover" /></div><div className="p-7"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A6D3B]">{item.period}</p><h3 className="mt-3 text-2xl font-black text-[#111827]">{item.title}</h3><p className="mt-2 font-semibold text-[#143A5A]">{item.place}</p><p className="mt-4 leading-7 text-[#5B6472]">{item.text}</p></div></article>))}</div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-7 shadow-sm lg:col-span-2"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white"><GraduationCap size={24} /></div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Academic background</p><div className="mt-6 space-y-6"><div><h3 className="text-xl font-black text-[#111827]">Master Management in Hospitality and Tourism</h3><p className="mt-1 text-[#5B6472]">IHEC Carthage, 2024 — Present</p></div><div><h3 className="text-xl font-black text-[#111827]">Bachelor’s Degree in Management</h3><p className="mt-1 text-[#5B6472]">Esprit School of Business, 2021 — 2024</p></div><div><h3 className="text-xl font-black text-[#111827]">Exchange Semester — World Heritage Studies</h3><p className="mt-1 text-[#5B6472]">BTU Cottbus-Senftenberg, April — September 2025</p></div></div></div>
          <div className="rounded-[2rem] bg-[#143A5A] p-7 text-white shadow-xl"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Languages size={24} /></div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#D8C39F]">Languages</p><div className="mt-6 space-y-4">{[["French", "C1"], ["English", "B2"], ["Arabic", "Native"], ["Italian", "A2"]].map(([language, level]) => (<div key={language} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3"><span>{language}</span><strong>{level}</strong></div>))}</div></div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-7 shadow-sm"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white"><Globe2 size={24} /></div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Professional development</p><h3 className="mt-4 text-2xl font-black">Political Campaign Management</h3><p className="mt-2 font-semibold text-[#143A5A]">Leadership Institute — Washington, DC</p><p className="mt-4 leading-7 text-[#5B6472]">Intensive training in campaign strategy, voter targeting, GOTV operations, fundraising, digital marketing, media relations, grassroots organizing and compliance best practices.</p></div>
          <div className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-7 shadow-sm"><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Skills</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Canva", "Basic graphic design", "Presentation design", "Microsoft Office", "ClickUp", "Trello", "Customer service", "Stakeholder communication", "Planning & scheduling", "Ownership & accountability"].map((skill) => (<div key={skill} className="rounded-full border border-[#E3D5BF] bg-[#F8F4EC] px-4 py-2 text-sm font-semibold text-[#4B5563]">{skill}</div>))}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-[2.5rem] border border-[#E3D5BF] bg-white/75 p-8 shadow-sm md:p-10"><div className="mb-8 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white"><Users size={24} /></div><div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Volunteer experiences</p><h2 className="text-3xl font-black tracking-[-0.03em]">Community, leadership and impact</h2></div></div><div className="grid gap-5 md:grid-cols-3">{[["Rotary Family", "Interact Tunis César → Rotaract Tunis César → Rotary Sidi Bou Said. Community service, humanitarian projects, fundraising and partner outreach."], ["TEDx Sidi Bou Said", "Speaker sourcing, audience engagement, registration, stage flow and media support."], ["Libertad Club — IHEC", "Campus initiatives, corporate engagement, workshops and awareness campaigns."]].map(([title, text]) => (<div key={title} className="rounded-[1.75rem] bg-[#F8F4EC] p-6"><h3 className="text-xl font-black text-[#143A5A]">{title}</h3><p className="mt-3 leading-7 text-[#5B6472]">{text}</p></div>))}</div></div>
      </section>

      <section id="recommendations" className="overflow-hidden py-20">
        <style>{`@keyframes recommendation-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } } .recommendation-track { animation: recommendation-scroll 48s linear infinite; } .recommendation-track:hover { animation-play-state: paused; }`}</style>
        <div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Recommendations</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">What people say about working with me</h2></div><p className="max-w-lg text-[#5B6472]">LinkedIn recommendations displayed in a smooth scrolling section. Hover to pause.</p></div></div>
        <div className="relative"><div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#F6F1E8] to-transparent" /><div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F6F1E8] to-transparent" /><div className="recommendation-track flex w-max gap-5 px-5 md:px-8">{[...recommendations, ...recommendations].map((item, index) => (<article key={`${item.name}-${index}`} className="w-[330px] shrink-0 rounded-[2rem] border border-[#E3D5BF] bg-white/80 p-7 shadow-sm backdrop-blur md:w-[520px]"><div className="mb-5 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white"><Quote size={22} /></div><div className="flex gap-1 text-[#C3A36C]">{[1, 2, 3, 4, 5].map((star) => (<Star key={star} size={15} fill="currentColor" />))}</div></div><p className="max-h-[220px] overflow-hidden text-base leading-7 text-[#4B5563]">“{item.quote}”</p><div className="mt-6 border-t border-[#E3D5BF] pt-5"><h3 className="font-black text-[#111827]">{item.name}</h3><p className="mt-1 text-sm font-semibold text-[#143A5A]">{item.role}</p></div></article>))}</div></div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#111827] shadow-2xl"><div className="grid gap-10 p-8 text-white md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-[#D8C39F]">Contact</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">Let’s connect and build meaningful projects.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">Open to hospitality, tourism, communications, marketing, partnerships and customer-experience opportunities.</p></div><div className="space-y-3"><a href={`mailto:${email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white transition hover:bg-white/15"><Mail size={20} /> {email}</a><a href="tel:+21698606395" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white transition hover:bg-white/15"><Phone size={20} /> {phone}</a><a href={linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white transition hover:bg-white/15"><Linkedin size={20} /> LinkedIn profile</a><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/70"><MapPin size={20} /> Tunisia</div></div></div></div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 pb-10 text-center text-sm text-[#6B7280] md:px-8">© 2026 Ben Mahmoud Alaa. Personal portfolio.</footer>
    </main>
  );
}
