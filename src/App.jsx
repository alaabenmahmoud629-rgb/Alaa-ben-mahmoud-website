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

const profilePhotoUrl = "/alaa-profile.jpg";
const linkedInUrl = "https://www.linkedin.com/in/ben-mahmoud-alla-eddine";
const email = "alaabenmahmoud629@gmail.com";
const phone = "+216 98 606 395";

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
    link: "https://www.instagram.com/wallah_we_can/",
  },
  {
    name: "Indigo Properties",
    logo: "/indigo-properties-logo.png",
    link: "https://www.instagram.com/indigo_properties/",
  },
  {
    name: "La Demeure Sidi Bou Saïd",
    logo: "/personal-mark.png",
    link: "https://www.instagram.com/la_demeure_sidi_bou_said/",
  },
];

const boostcomClients = [
  { name: "G Client", logo: "/client-g.png" },
  { name: "Le Parking du Lac", logo: "/client-parking-du-lac.png" },
  { name: "FTUSA", logo: "/client-ftusa.png" },
  { name: "Tunisie Esthétique", logo: "/client-tunisie-esthetique.png" },
  { name: "Haval", logo: "/client-haval.png" },
];

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
    text: "Professional development program covering campaign strategy, digital marketing, fundraising and media relations.",
  },
];

const recommendations = [
  {
    name: "Lotfi Hamadi",
    role: "Founder of #WallahWeCan",
    quote:
      "Un pro de la com qui a compris la différence entre efficacité et efficience. Il a toujours répondu à nos demandes à temps et avec de la qualité.",
  },
  {
    name: "Wassim Ben Ammar",
    role: "UI/UX Designer, Motion & Graphic Designer, Software Engineer",
    quote:
      "Ala combine brillamment son esprit entrepreneurial avec ses études pour offrir des stratégies de communication innovantes et percutantes.",
  },
  {
    name: "Tarek Soussi",
    role: "CEO-Manager chez Oeil Des Cyclopes",
    quote:
      "Nous recommandons vivement Alaa pour son expertise en communication digitale et sa maîtrise exemplaire des réseaux sociaux.",
  },
  {
    name: "Bilel Amdouni",
    role: "Digital Marketing & Transformation Consultant",
    quote:
      "Alaa s'est distingué par son professionnalisme, sa curiosité intellectuelle et sa volonté permanente de monter en compétences.",
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

            <a
              href={`mailto:${email}`}
              className="rounded-full bg-[#143A5A] px-5 py-2.5 text-sm font-semibold text-white shadow-md"
            >
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
                Young entrepreneur passionate about innovation, communication and customer experience. Experienced in guesthouse management, digital marketing and event organization, I lead projects that strengthen brand image, customer satisfaction and measurable visibility.
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
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5BD90] bg-white/75 px-6 py-3 font-semibold text-[#143A5A] shadow-sm"
                >
                  LinkedIn profile
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[420px]">
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
