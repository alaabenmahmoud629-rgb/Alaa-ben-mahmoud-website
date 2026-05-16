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
  CalendarCheck,
  Award,
  Languages,
  Quote,
  Plane,
  Users,
  Globe2,
} from "lucide-react";

const profilePhotoUrl = "/alaa-profile.png";
const linkedInUrl = "https://www.linkedin.com/in/ben-mahmoud-alla-eddine";
const email = "alaabenmahmoud629@gmail.com";
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
    text: "Digital workflows, CMS/CRM/email/social stack, SOPs, governance frameworks and KPI dashboards.",
  },
  {
    company: "Musk de Djerba",
    role: "Launch Lead — Luxury Guesthouse",
    period: "12 months — 2023",
    text: "Led the launch and full digital communication strategy, growing online visibility and guest satisfaction.",
  },
  {
    company: "BoostCom",
    role: "CEO & Founder",
    period: "2020 — 2024",
    text: "Founded a hospitality-focused marketing agency, delivering 100+ campaigns for 50+ clients.",
  },
];

const collaborations = [
  { name: "BoostCom", logo: "/boostcom-logo.png", link: "https://www.instagram.com/boostcom.tn/" },
  { name: "Musk de Djerba", logo: "/musk-de-djerba-logo.png", link: "https://www.instagram.com/muskdedjerba/" },
  { name: "Wallah We Can", logo: "/wallah-we-can-logo.png", link: "https://www.instagram.com/wallah_we_can/" },
  { name: "Indigo Properties", logo: "/indigo-properties-logo.png", link: "https://www.instagram.com/indigo_properties/" },
  { name: "La Demeure Sidi Bou Saïd", logo: "/personal-mark.png", link: "https://www.instagram.com/la_demeure_sidi_bou_said/" },
];

const boostcomClients = [
  { name: "G Client", logo: "/client-g.png" },
  { name: "Le Parking du Lac", logo: "/client-parking-du-lac.png" },
  { name: "FTUSA", logo: "/client-ftusa.png" },
  { name: "Tunisie Esthétique", logo: "/client-tunisie-esthetique.png" },
  { name: "Haval", logo: "/client-haval.png" },
];

const internationalExperiences = [
  {
    title: "Exchange Semester in World Heritage Studies",
    place: "BTU Cottbus-Senftenberg — Germany",
    period: "April — September 2025",
    image: "/germany-exchange.png",
    text: "International academic experience focused on heritage, culture, sustainability and territorial perspectives.",
  },
  {
    title: "Political Campaign Management Training",
    place: "Leadership Institute — Washington, DC",
    period: "April — May 2023",
    image: "/washington-training.png",
    text: "Training in campaign strategy, digital marketing, fundraising, media relations and grassroots organizing.",
  },
];

const recommendations = [
  {
    name: "Lotfi Hamadi",
    role: "Founder of #WallahWeCan",
    quote: "Un pro de la com qui a compris la différence entre efficacité et efficience.",
  },
  {
    name: "Wassim Ben Ammar",
    role: "UI/UX Designer, Motion & Graphic Designer",
    quote: "Ala combine brillamment son esprit entrepreneurial avec ses études pour offrir des stratégies innovantes.",
  },
  {
    name: "Tarek Soussi",
    role: "CEO-Manager chez Oeil Des Cyclopes",
    quote: "Nous recommandons vivement Alaa pour son expertise en communication digitale.",
  },
  {
    name: "Bilel Amdouni",
    role: "Digital Marketing & Transformation Consultant",
    quote: "Il s'est distingué par son professionnalisme, sa curiosité intellectuelle et sa volonté de monter en compétences.",
  },
];

const impact = [
  { number: "100+", label: "Digital campaigns delivered" },
  { number: "50+", label: "Clients supported" },
  { number: "+25K", label: "Instagram audience growth" },
  { number: "1M+", label: "Social interactions generated" },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#111827]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#D8C39F_0%,transparent_32%),linear-gradient(135deg,#F8F4EC_0%,#EDF4F7_42%,#D9E7EF_100%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 md:px-8">
          <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/65 px-5 py-3 shadow-sm backdrop-blur-xl">
            <a href="#top" className="text-sm font-black tracking-[0.32em] text-[#143A5A]">
              BEN MAHMOUD ALAA
            </a>

            <div className="hidden items-center gap-7 text-sm font-medium text-[#526071] lg:flex">
              <a href="#about">Profile</a>
              <a href="#experience">Experience</a>
              <a href="#international">International</a>
              <a href="#recommendations">Recommendations</a>
              <a href="#contact">Contact</a>
            </div>

            <a href={`mailto:${email}`} className="rounded-full bg-[#143A5A] px-5 py-2.5 text-sm font-semibold text-white shadow-md">
              Contact
            </a>
          </nav>

          <div id="top" className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/70 px-4 py-2 text-sm font-medium text-[#7A6339] shadow-sm">
                <Sparkles size={16} /> Hospitality • Tourism • Marketing • Communications
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                Alaa Ben Mahmoud
              </h1>

              <p className="mt-5 max-w-2xl text-xl font-semibold text-[#143A5A] md:text-2xl">
                M2 Student in Hospitality & Tourism Management at IHEC Carthage.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#4B5563] md:text-lg">
                Young entrepreneur passionate about innovation, communication and customer experience. Experienced in guesthouse management, digital marketing and event organization.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/75 px-4 py-2 text-sm font-semibold text-[#143A5A] shadow-sm">
                  <CalendarCheck size={16} /> Graduation expected July 2026
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/75 px-4 py-2 text-sm font-semibold text-[#143A5A] shadow-sm">
                  <Award size={16} /> Available from August 2026
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-[#143A5A] px-6 py-3 font-semibold text-white shadow-lg">
                  Explore my work <ArrowRight size={18} />
                </a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/75 px-6 py-3 font-semibold text-[#143A5A] shadow-sm">
                  LinkedIn profile
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="relative rounded-[2.5rem] border border-white/80 bg-white/70 p-4 shadow-2xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#143A5A] p-7 text-white">
                  <div className="mx-auto aspect-[9/16] h-[520px] max-h-[75vh] w-full max-w-[330px] overflow-hidden rounded-[2rem] border-[6px] border-white/85 bg-white/15 shadow-2xl">
                    <img src={profilePhotoUrl} alt="Portrait of Alaa Ben Mahmoud" className="h-full w-full object-cover" />
                  </div>

                  <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.32em] text-[#E7D8BB]">
                    Personal Portfolio
                  </p>

                  <h2 className="mx-auto mt-4 max-w-sm text-center text-3xl font-black leading-tight">
                    Marketing profile for hospitality, tourism & brand image
                  </h2>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {impact.map((item) => (
                      <div key={item.label} className="rounded-3xl border border-white/15 bg-white/10 p-4">
                        <p className="text-2xl font-black">{item.number}</p>
                        <p className="mt-1 text-xs leading-5 text-white/75">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Profile</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              Independent, creative and results-driven.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-8 shadow-sm">
            <p className="text-lg leading-8 text-[#4B5563]">
              I combine hospitality management, communication strategy and hands-on field experience to help brands improve visibility, guest acquisition, customer loyalty and brand consistency.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Professional experiences</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Selected work journey</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item) => (
            <article key={item.company} className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white">
                <Briefcase size={22} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A6D3B]">{item.period}</p>
              <h3 className="mt-3 text-2xl font-black">{item.company}</h3>
              <p className="mt-2 font-semibold text-[#143A5A]">{item.role}</p>
              <p className="mt-4 leading-7 text-[#5B6472]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Collaborations</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Brands and initiatives I contributed to
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {collaborations.map((item) => (
            <a key={item.name} href={item.link} target="_blank" rel="noreferrer" className="flex min-h-36 flex-col items-center justify-center rounded-[2rem] border border-[#E3D5BF] bg-white/80 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={item.logo} alt={`${item.name} logo`} className="max-h-20 max-w-full object-contain" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#5B6472]">{item.name}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">BoostCom Clients</p>
          <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#111827]">
            Clients I managed through BoostCom
          </h3>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#E3D5BF] bg-white/70 py-6 shadow-sm">
          <style>{`
            @keyframes clients-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .clients-track {
              animation: clients-scroll 26s linear infinite;
            }
            .clients-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="clients-track flex w-max items-center gap-6 px-6">
            {[...boostcomClients, ...boostcomClients].map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex h-28 w-44 shrink-0 items-center justify-center rounded-2xl border border-[#E3D5BF] bg-white p-5 shadow-sm">
                <img src={client.logo} alt={`${client.name} logo`} className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="international" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">International experiences</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Learning across cultures and contexts
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {internationalExperiences.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[2rem] border border-[#E3D5BF] bg-white/80 shadow-sm">
              <div className="relative h-72 bg-[#D8C39F]/30">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#143A5A] to-[#C3A36C] text-white">
                  <Plane size={44} />
                </div>
                <img src={item.image} alt={item.title} className="relative h-full w-full object-cover" />
              </div>
              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A6D3B]">{item.period}</p>
                <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                <p className="mt-2 font-semibold text-[#143A5A]">{item.place}</p>
                <p className="mt-4 leading-7 text-[#5B6472]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-7 shadow-sm lg:col-span-2">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white">
              <GraduationCap size={24} />
            </div>

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Academic background</p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-black">Master Management in Hospitality and Tourism</h3>
                <p className="mt-1 text-[#5B6472]">IHEC Carthage, 2024 — Present</p>
              </div>
              <div>
                <h3 className="text-xl font-black">Bachelor’s Degree in Management</h3>
                <p className="mt-1 text-[#5B6472]">Esprit School of Business, 2021 — 2024</p>
              </div>
              <div>
                <h3 className="text-xl font-black">Exchange Semester — World Heritage Studies</h3>
                <p className="mt-1 text-[#5B6472]">BTU Cottbus-Senftenberg, April — September 2025</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#143A5A] p-7 text-white shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Languages size={24} />
            </div>

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D8C39F]">Languages</p>

            <div className="mt-6 space-y-4">
              {[
                ["French", "C1"],
                ["English", "B2"],
                ["Arabic", "Native"],
              ].map(([language, level]) => (
                <div key={language} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                  <span>{language}</span>
                  <strong>{level}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-[2rem] border border-[#E3D5BF] bg-white/75 p-7 shadow-sm">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white">
            <Globe2 size={24} />
          </div>

          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Skills</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Canva",
              "Basic graphic design",
              "Microsoft Office",
              "ClickUp",
              "Customer service",
              "Stakeholder communication",
              "Planning & scheduling",
              "Ownership & accountability",
            ].map((skill) => (
              <div key={skill} className="rounded-full border border-[#E3D5BF] bg-[#F8F4EC] px-4 py-2 text-sm font-semibold text-[#4B5563]">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-[2.5rem] border border-[#E3D5BF] bg-white/75 p-8 shadow-sm md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Volunteer experiences</p>
              <h2 className="text-3xl font-black tracking-[-0.03em]">Community, leadership and impact</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Rotary Family", "Community service, humanitarian projects, fundraising and partner outreach."],
              ["TEDx Sidi Bou Said", "Speaker sourcing, audience engagement, registration, stage flow and media support."],
              ["Libertad Club — IHEC", "Campus initiatives, corporate engagement, workshops and awareness campaigns."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] bg-[#F8F4EC] p-6">
                <h3 className="text-xl font-black text-[#143A5A]">{title}</h3>
                <p className="mt-3 leading-7 text-[#5B6472]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recommendations" className="overflow-hidden py-20">
        <style>{`
          @keyframes recommendation-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .recommendation-track {
            animation: recommendation-scroll 48s linear infinite;
          }
          .recommendation-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8A6D3B]">Recommendations</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
              What people say about working with me
            </h2>
          </div>
        </div>

        <div className="recommendation-track flex w-max gap-5 px-5 md:px-8">
          {[...recommendations, ...recommendations].map((item, index) => (
            <article key={`${item.name}-${index}`} className="w-[330px] shrink-0 rounded-[2rem] border border-[#E3D5BF] bg-white/80 p-7 shadow-sm md:w-[520px]">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#143A5A] text-white">
                  <Quote size={22} />
                </div>
                <div className="flex gap-1 text-[#C3A36C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="text-base leading-7 text-[#4B5563]">“{item.quote}”</p>

              <div className="mt-6 border-t border-[#E3D5BF] pt-5">
                <h3 className="font-black">{item.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#143A5A]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#111827] shadow-2xl">
          <div className="grid gap-10 p-8 text-white md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D8C39F]">Contact</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
                Let’s connect and build meaningful projects.
              </h2>
            </div>

            <div className="space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white">
                <Mail size={20} /> {email}
              </a>

              <a href="tel:+21698606395" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white">
                <Phone size={20} /> {phone}
              </a>

              <a href={linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white">
                <Linkedin size={20} /> LinkedIn profile
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/70">
                <MapPin size={20} /> Tunisia
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 pb-10 text-center text-sm text-[#6B7280] md:px-8">
        © 2026 Ben Mahmoud Alaa. Personal portfolio.
      </footer>
    </main>
  );
}
