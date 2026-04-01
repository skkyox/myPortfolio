import Head from 'next/head';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import {
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaArrowLeft,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { SiShopify, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiSupabase, SiPrisma, SiOpenai } from 'react-icons/si';

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

export default function Realisations() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const containerRef = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const profile = {
    name: "Theo Le Sommier",
    email: "theo@deweto-agency.com",
    linkedin: "https://www.linkedin.com/in/th%C3%A9o-le-sommier-39a8ba116/",
  };

  const projects = [
    {
      id: 'plots-terrasse',
      name: 'Plots & Terrasse',
      subtitle: t.realisations.projects.plotsTerrasse.subtitle,
      description: t.realisations.projects.plotsTerrasse.description,
      image: '/realisations/plots-et-terrasse.png',
      tech: [
        { name: 'Shopify', icon: <SiShopify /> },
        { name: 'Hydrogen', icon: <SiReact /> },
        { name: 'React', icon: <SiReact /> },
      ],
      color: '#f97316',
      year: '2026',
      type: t.realisations.projects.plotsTerrasse.type,
      url: 'https://plotsetterrasse.fr/',
    },
    {
      id: 'bullehit-vape',
      name: 'BulleHit Vape',
      subtitle: t.realisations.projects.bullehitVape.subtitle,
      description: t.realisations.projects.bullehitVape.description,
      image: '/realisations/bullehitvape.png',
      tech: [
        { name: 'Shopify', icon: <SiShopify /> },
        { name: 'Hydrogen', icon: <SiReact /> },
        { name: 'React', icon: <SiReact /> },
      ],
      color: '#a855f7',
      year: '2026',
      type: t.realisations.projects.bullehitVape.type,
      url: 'https://bullehit-vape.fr/',
    },
    {
      id: 'deweto-agency',
      name: 'Deweto Agency',
      subtitle: t.realisations.projects.dewetoAgency.subtitle,
      description: t.realisations.projects.dewetoAgency.description,
      image: '/realisations/deweto-agency.png',
      tech: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        { name: 'Framer Motion', icon: <SiFramer /> },
      ],
      color: '#06b6d4',
      year: '2026',
      type: t.realisations.projects.dewetoAgency.type,
      url: 'https://deweto-agency.com/',
    },
    {
      id: 'tokima',
      name: 'Tokima',
      subtitle: t.realisations.projects.tokima.subtitle,
      description: t.realisations.projects.tokima.description,
      image: '/realisations/tokima.png',
      tech: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'Prisma', icon: <SiPrisma /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
      color: '#b5856d',
      year: '2026',
      type: t.realisations.projects.tokima.type,
    },
    {
      id: 'callmemaybe',
      name: 'CallMeMaybe',
      subtitle: t.realisations.projects.callMeMaybe.subtitle,
      description: t.realisations.projects.callMeMaybe.description,
      image: '/realisations/callmemaybe.png',
      tech: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
      color: '#f59e0b',
      year: '2026',
      type: t.realisations.projects.callMeMaybe.type,
      url: 'https://call-me-maybe-beta.vercel.app/',
    },
    {
      id: 'leadscraper',
      name: 'LeadScraper Pro',
      subtitle: t.realisations.projects.leadScraper.subtitle,
      description: t.realisations.projects.leadScraper.description,
      image: '/realisations/leadscraper.png',
      tech: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
      color: '#4f46e5',
      year: '2026',
      type: t.realisations.projects.leadScraper.type,
    },
    {
      id: 'boostmyclass',
      name: 'BoostMyClass',
      subtitle: t.realisations.projects.boostMyClass.subtitle,
      description: t.realisations.projects.boostMyClass.description,
      image: '/realisations/boostmyclass.png',
      tech: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'Prisma', icon: <SiPrisma /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
      color: '#c026d3',
      year: '2026',
      type: t.realisations.projects.boostMyClass.type,
    },
  ];

  const navLinks = [
    { href: "/", label: t.realisations.nav.home },
    { href: "#projets", label: t.realisations.nav.projects },
    { href: "#contact", label: t.realisations.nav.contact },
  ];

  return (
    <div ref={containerRef} className="grain">
      <Head>
        <title>{`${t.realisations.title2} — ${profile.name}`}</title>
        <meta name="description" content={t.realisations.description} />
      </Head>

      {/* ═══ NAVIGATION ═══ */}
      <nav className={`nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-sm tracking-widest text-primary hidden sm:block">THEO</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
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
          <a key={link.label} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <LanguageSwitcher />
      </div>

      {/* ═══ HERO ═══ */}
      <section className="mesh-gradient min-h-[60vh] flex items-center relative pt-20">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>

        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="reveal">
            <a href="/" className="inline-flex items-center gap-2 text-primary text-sm font-display font-semibold tracking-wider uppercase mb-8 hover:gap-3 transition-all duration-300">
              <FaArrowLeft className="text-xs" />
              <span>{t.realisations.backToPortfolio}</span>
            </a>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="section-heading mb-4">
              <span className="heading-accent">04</span>
              <p className="hero-subtitle text-primary text-xs mb-3 tracking-[0.2em]">{t.realisations.subtitle}</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white" style={{ lineHeight: '0.95', letterSpacing: '-0.03em' }}>
                {t.realisations.title1}<br />
                <span className="text-primary">{t.realisations.title2}</span>
              </h1>
            </div>
          </div>

          <p className="reveal reveal-delay-2 text-zinc-400 text-base leading-relaxed max-w-lg mt-8">
            {t.realisations.description}
          </p>

          {/* Stats */}
          <div className="reveal reveal-delay-3 flex gap-10 mt-10">
            <div>
              <div className="stat-number">7</div>
              <div className="stat-label">{t.realisations.projectsCount}</div>
            </div>
            <div>
              <div className="stat-number">2</div>
              <div className="stat-label">{t.realisations.ecommerce}</div>
            </div>
            <div>
              <div className="stat-number">4</div>
              <div className="stat-label">{t.realisations.saas}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projets" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-32">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`reveal reveal-delay-1 project-showcase ${idx % 2 !== 0 ? 'project-showcase--reversed' : ''}`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project number */}
                <div className="project-showcase__number" style={{ color: project.color }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className={`project-showcase__grid ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Screenshot */}
                  <div className="project-showcase__image-wrap">
                    <div
                      className="project-showcase__image-frame block"
                      style={{ '--project-color': project.color }}
                    >
                      {/* Browser chrome */}
                      <div className="project-showcase__browser-bar">
                        <div className="project-showcase__browser-dots">
                          <span style={{ background: '#ff5f57' }}></span>
                          <span style={{ background: '#febc2e' }}></span>
                          <span style={{ background: '#28c840' }}></span>
                        </div>
                        <div className="project-showcase__browser-url">
                          <span>{project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : project.name}</span>
                        </div>
                      </div>
                      <div className="project-showcase__screenshot">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {/* Glow effect */}
                      <div
                        className="project-showcase__glow"
                        style={{ background: `radial-gradient(ellipse at center, ${project.color}20, transparent 70%)` }}
                      ></div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="project-showcase__info">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-display font-semibold tracking-[0.15em] uppercase" style={{ color: project.color }}>
                        {project.type}
                      </span>
                      <span className="w-8 h-px" style={{ background: project.color, opacity: 0.4 }}></span>
                      <span className="text-xs text-zinc-500 font-display font-semibold">{project.year}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2" style={{ lineHeight: 1.1 }}>
                      {project.name}
                    </h2>
                    <p className="text-zinc-500 text-sm font-display font-medium mb-6">{project.subtitle}</p>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-8">
                      <p className="text-xs font-display font-semibold tracking-[0.15em] uppercase text-zinc-500 mb-3">{t.realisations.technologies}</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <div
                            key={i}
                            className="project-tech-pill"
                            style={{ '--pill-color': project.color }}
                          >
                            <span className="text-base" style={{ color: project.color }}>{tech.icon}</span>
                            <span className="text-sm font-medium text-zinc-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visit link */}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex"
                        style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)` }}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>{t.realisations.visitSite}</span>
                        <FaArrowRight className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal cta-card">
            <div className="cta-card__inner">
              <div className="text-center">
                <p className="hero-subtitle text-primary text-xs mb-4 tracking-[0.2em]">{t.realisations.ctaSubtitle}</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  {t.realisations.ctaTitle1}<br />
                  <span className="text-primary">{t.realisations.ctaTitle2}</span>
                </h2>
                <p className="text-zinc-400 max-w-md mx-auto leading-relaxed mb-10">
                  {t.realisations.ctaDescription}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href={`mailto:${profile.email}`} className="btn-primary">
                    <FaEnvelope />
                    <span>{t.realisations.contactMe}</span>
                    <FaArrowRight className="text-xs" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer id="contact" className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="gradient-line mb-8"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} {profile.name}</p>
            <p className="font-display tracking-[0.2em] uppercase">{t.realisations.footer} &bull; Lyon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
