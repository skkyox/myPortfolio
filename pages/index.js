import Head from 'next/head';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaReact,
  FaVuejs,
  FaGamepad,
  FaChess,
  FaFire,
  FaArrowRight,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { SiExpo, SiAdobe, SiNextdotjs } from 'react-icons/si';

// ─── Scroll reveal hook ───
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = ref.current;
    if (el) {
      const reveals = el.querySelectorAll('.reveal');
      reveals.forEach((r) => observer.observe(r));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ─── Active section hook ───
function useActiveSection(sectionIds) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useReveal();
  const sectionIds = ['hero', 'skills', 'experience', 'education', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const profile = {
    name: "Théo Le Sommier",
    title: "Développeur Web & Mobile",
    location: "Lyon, 69007",
    phone: "07-86-45-16-43",
    email: "theo@deweto-agency.com",
    bio: "Développeur de 27 ans expert dans l'écosystème JavaScript. Fort de 6 ans d'expérience, je conçois des applications mobiles et web ultra-performantes grâce à React Native et Next.js. Passionné par l'innovation, j'intègre désormais l'Intelligence Artificielle au cœur de mes projets pour repousser les limites de l'expérience utilisateur.",
    linkedin: "https://www.linkedin.com/in/th%C3%A9o-le-sommier-39a8ba116/",
  };

  const skills = [
    { name: "React & React Native", icon: <FaReact />, color: "#61dafb" },
    { name: "VueJS & NuxtJS", icon: <FaVuejs />, color: "#42b883" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "Design (Adobe XD)", icon: <SiAdobe />, color: "#ff61f6" },
    { name: "Mobile (Expo)", icon: <SiExpo />, color: "#f0f0f0" },
  ];

  const experiences = [
    {
      role: "Développeur Freelance",
      company: "DEWETO Agency",
      period: "Juin 2024 — Aujourd'hui",
      tech: ["Hydrogen", "Shopify", "Next.js", "React Native", "SaaS"],
      desc: "Activité freelance variée : création de deux sites e-commerce avec Hydrogen et Shopify, développement de plusieurs sites vitrines, et conception de SaaS dans le cadre de projets personnels.",
    },
    {
      role: "Développeur React Native",
      company: "SuperConnectr",
      period: "Sept. 2021 — Juin 2024",
      tech: ["React Native", "Expo", "RNPaper", "SendBird"],
      desc: "Développement et optimisation d'une application mobile de mise en relation. Implémentation de fonctionnalités critiques et intégration d'un système de messaging temps réel avec SendBird.",
    },
    {
      role: "Développeur Fullstack Freelance",
      company: "Deweto Agency",
      period: "Fév. 2020 — Sept. 2021",
      tech: ["WordPress", "PrestaShop", "Dev From Scratch"],
      desc: "Conception et déploiement de sites e-commerce et vitrines commerciales. Configuration de catalogues produits, systèmes de paiement et optimisation de taux de conversion.",
    },
    {
      role: "Développeur Web (Alternance)",
      company: "NoShow / Park4night / Izypay",
      period: "2018 — 2020",
      tech: ["VueJS", "Laravel", "PHP", "jQuery", "Symfony"],
      desc: "Parcours d'alternances enrichissant chez trois startups innovantes. Développement d'interfaces utilisateur dynamiques avec VueJS, architecture backend robuste avec Laravel et Symfony.",
    },
  ];

  const education = [
    { degree: "Mastère Expert en Stratégie Digitale", school: "Digital Campus, Lyon", year: "2018—2020", color: "#a855f7" },
    { degree: "Bachelor Concepteur Réalisateur Web", school: "Sciences U, Lyon", year: "2017—2018", color: "#3b82f6" },
    { degree: "BTS Système Numérique", school: "Lycée Saint Michel, Annecy", year: "2017", color: "#22c55e" },
  ];

  const languages = [
    { name: "Français", level: "Natif", flag: "🇫🇷" },
    { name: "Anglais", level: "Courant", flag: "🇬🇧" },
    { name: "Espagnol", level: "Intermédiaire", flag: "🇪🇸" },
  ];

  const hobbies = [
    { name: "Handball", desc: "Sport collectif & passion compétitive", icon: <FaFire />, color: "#f97316" },
    { name: "E-sport", desc: "Compétition gaming & stratégie", icon: <FaGamepad />, color: "#a855f7" },
    { name: "Échecs", desc: "Stratégie & réflexion analytique", icon: <FaChess />, color: "#3b82f6" },
  ];

  const navLinks = [
    { id: "skills", label: "Stack" },
    { id: "experience", label: "Expérience" },
    { id: "education", label: "Formation" },
    { id: "realisations", label: "Réalisations", href: "/realisations" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div ref={containerRef} className="grain">
      <Head>
        <title>{`${profile.name} — ${profile.title}`}</title>
        <meta name="description" content={`Portfolio de ${profile.name}, ${profile.title} basé à Lyon.`} />
      </Head>

      {/* ═══ NAVIGATION ═══ */}
      <nav className={`nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-sm tracking-widest text-primary hidden sm:block">THÉO</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href || `#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-zinc-400 hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={closeMenu} className="absolute top-6 right-6 text-2xl text-zinc-400 hover:text-primary">
          <FaTimes />
        </button>
        {navLinks.map((link) => (
          <a key={link.id} href={link.href || `#${link.id}`} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="mesh-gradient min-h-screen flex items-center relative pt-20">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-0 w-full">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
            {/* Left content */}
            <div className="order-2 md:order-1">
              <div className="reveal">
                <p className="hero-subtitle text-primary text-xs mb-6 tracking-[0.2em]">Portfolio 2024</p>
              </div>

              <h1 className="reveal reveal-delay-1 hero-title text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
                {profile.name.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {i === 0 ? word : <span className="text-primary">{word}</span>}
                    {i === 0 ? ' ' : ''}
                  </span>
                ))}
              </h1>

              <p className="reveal reveal-delay-2 hero-subtitle text-zinc-500 text-xs mb-8">
                {profile.title}
              </p>

              <p className="reveal reveal-delay-3 text-zinc-400 text-base leading-relaxed max-w-lg mb-10">
                {profile.bio}
              </p>

              {/* Stats row */}
              <div className="reveal reveal-delay-3 flex gap-10 mb-10">
                <div>
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Ans d'XP</div>
                </div>
                <div>
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projets</div>
                </div>
                <div>
                  <div className="stat-number">3</div>
                  <div className="stat-label">Startups</div>
                </div>
              </div>

              {/* CTA */}
              <div className="reveal reveal-delay-4 flex flex-wrap gap-4">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <FaEnvelope />
                  <span>Me Contacter</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Contact info */}
              <div className="reveal reveal-delay-5 flex flex-wrap gap-6 mt-10 text-xs text-zinc-500">
                <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary/50" /> {profile.location}</span>
                <span className="flex items-center gap-2"><FaEnvelope className="text-primary/50" /> {profile.email}</span>
                <span className="flex items-center gap-2"><FaPhone className="text-primary/50" /> {profile.phone}</span>
              </div>
            </div>

            {/* Right - Profile photo */}
            <div className="order-1 md:order-2 flex justify-center reveal">
              <div className="profile-ring">
                <img
                  src="/profile.jpg"
                  alt={profile.name}
                  className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs">
          <span className="font-display tracking-widest uppercase text-[10px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent animate-pulse-slow"></div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal mb-16">
            <div className="section-heading">
              <span className="heading-accent">01</span>
              <p className="hero-subtitle text-primary text-xs mb-3 tracking-[0.2em]">Compétences</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Stack Technique</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {skills.map((skill, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx + 1} skill-card`}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="font-display font-semibold text-sm text-zinc-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal mb-16">
            <div className="section-heading">
              <span className="heading-accent">02</span>
              <p className="hero-subtitle text-primary text-xs mb-3 tracking-[0.2em]">Parcours</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Expérience</h2>
            </div>
          </div>

          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`reveal reveal-delay-${Math.min(idx + 1, 3)} timeline-item`}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                      <span className="text-primary text-sm font-semibold">{exp.company}</span>
                    </div>
                    <span className="text-xs text-zinc-500 font-display font-semibold tracking-wider shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION & INTERESTS ═══ */}
      <section id="education" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Formation */}
            <div>
              <div className="reveal mb-10">
                <div className="section-heading">
                  <span className="heading-accent">03</span>
                  <p className="hero-subtitle text-primary text-xs mb-3 tracking-[0.2em]">Études</p>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Formation</h2>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`reveal reveal-delay-${idx + 1} edu-card`}
                    style={{ '--accent-color': edu.color }}
                  >
                    <h4 className="font-display font-bold text-white text-sm mb-1">{edu.degree}</h4>
                    <p className="text-zinc-500 text-xs mb-1">{edu.school}</p>
                    <span className="text-xs font-semibold" style={{ color: edu.color }}>{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Intérêts & Langues */}
            <div>
              <div className="reveal mb-10">
                <div className="section-heading">
                  <span className="heading-accent">&</span>
                  <p className="hero-subtitle text-primary text-xs mb-3 tracking-[0.2em]">Personnel</p>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Langues & Intérêts</h2>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h4 className="reveal font-display font-semibold text-xs tracking-[0.15em] uppercase text-zinc-500 mb-4">Langues</h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className={`reveal reveal-delay-${idx + 1} glass rounded-full px-5 py-2.5 flex items-center gap-2.5 hover:border-primary/20 transition-all duration-300`}>
                      <span className="text-lg">{lang.flag}</span>
                      <div>
                        <span className="font-display font-semibold text-sm text-white">{lang.name}</span>
                        <span className="text-zinc-500 text-xs ml-2">{lang.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <h4 className="reveal font-display font-semibold text-xs tracking-[0.15em] uppercase text-zinc-500 mb-4">Passions</h4>
                <div className="space-y-3">
                  {hobbies.map((hobby, idx) => (
                    <div key={idx} className={`reveal reveal-delay-${idx + 1} interest-pill`}>
                      <span className="text-lg" style={{ color: hobby.color }}>{hobby.icon}</span>
                      <div>
                        <p className="font-display font-semibold text-sm text-white">{hobby.name}</p>
                        <p className="text-xs text-zinc-500">{hobby.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT / FOOTER ═══ */}
      <footer id="contact" className="py-24 md:py-32 relative mesh-gradient">
        <div className="blob blob-1" style={{ opacity: 0.08 }}></div>
        <div className="blob blob-2" style={{ opacity: 0.06 }}></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="reveal text-center mb-12">
            <p className="hero-subtitle text-primary text-xs mb-4 tracking-[0.2em]">Contact</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Prêt à lancer<br />
              <span className="text-primary">un projet ?</span>
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
              Disponible en freelance ou CDI sur Lyon et ses environs. Parlons de vos idées et concrétisons votre vision ensemble.
            </p>
          </div>

          <div className="reveal reveal-delay-1 flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <FaEnvelope />
              <span>{profile.email}</span>
              <FaArrowRight className="text-xs" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="gradient-line mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} {profile.name}</p>
            <p className="font-display tracking-[0.2em] uppercase">Développeur Web & Mobile &bull; Lyon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
