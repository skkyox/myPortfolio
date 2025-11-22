import Head from 'next/head';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaReact, 
  FaPhp, 
  FaSymfony, 
  FaVuejs, 
  FaMobileAlt,
  FaGamepad,
  FaChess,
  FaFire,
  FaFranceLand,
  FaGlobe,
  FaStar

} from 'react-icons/fa';
import { SiExpo, SiLaravel, SiAdobe, SiMysql, SiNextdotjs } from 'react-icons/si';

export default function Portfolio() {
  
  // Données extraites du CV
  const profile = {
    name: "Théo Le Sommier",
    title: "Développeur Web et Mobile",
    location: "Lyon, 69007",
    phone: "07-86-45-16-43",
    email: "lesommier.theo@gmail.com",
    bio: "Développeur de 27 ans expert dans l'écosystème JavaScript. Fort de 6 ans d'expérience, je conçois des applications mobiles et web ultra-performantes grâce à React Native et Next.js. Passionné par l'innovation, j'intègre désormais l'Intelligence Artificielle au cœur de mes projets pour repousser les limites de l'expérience utilisateur.",
  };

  const skills = [
    { name: "React & React Native", icon: <FaReact className="text-blue-400" /> },
    { name: "VueJs & NuxtJS", icon: <FaVuejs className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white-500" /> },
    { name: "Design (Adobe XD)", icon: <SiAdobe className="text-pink-600" /> },
    { name: "Mobile (Expo)", icon: <SiExpo className="text-gray-800" /> },
  ];

  // Expériences basées sur le CV
  const experiences = [
    {
      role: "Fondateur - Yoxu",
      company: "Projet Personnel",
      period: "Juin 2024 - Aujourd'hui",
      tech: "React Native, Expo, Firebase, UI/UX Design",
      desc: "Développement d'une plateforme mobile innovante pour l'organisation de dîners privés entre hôtes. Gestion complète du projet : conception UX/UI, architecture technique, développement backend et déploiement. Application facilitant la mise en relation et la logistique événementielle."
    },
    {
      role: "Développeur Freelance - Plot et Terrasse",
      company: "Freelance",
      period: "2024",
      tech: "PrestaShop, PHP, MySQL, Customization",
      desc: "Création et intégration d'une boutique e-commerce PrestaShop complète pour Plot et Terrasse. Développement du catalogue produits, système de paiement sécurisé, gestion des stocks, et optimisation SEO. Design responsive et ergonomie centrée sur l'expérience client pour maximiser les conversions."
    },
    {
      role: "Développeur Mobile Senior",
      company: "SuperConnectr",
      period: "Sept. 2021 - Juin 2024",
      tech: "React Native, Expo, RNPaper, SendBird",
      desc: "Développement et optimisation d'une application mobile de mise en relation. Implémentation de nouvelles fonctionnalités critiques, intégration d'un système de messaging temps réel avec SendBird pour améliorer l'engagement utilisateur. Maintenance continue et optimisation des performances de l'application en production."
    },
    {
      role: "Développeur Fullstack Freelance",
      company: "Deweto Agency",
      period: "Fév. 2020 - Sept. 2021",
      tech: "WordPress, PrestaShop, Dev From Scratch",
      desc: "Conception et déploiement de sites e-commerce et vitrines commerciales pour clients variés. Expertise PrestaShop avec configuration de catalogues produits, systèmes de paiement et optimisation de taux de conversion. Gestion client et support post-production garantissant la satisfaction et la performance des projets."
    },
    {
      role: "Développeur Web (Alternance)",
      company: "NoShow / Park4night / Izypay",
      period: "2018 - 2020",
      tech: "VueJS, Laravel, PHP, Jquery, Symfony",
      desc: "Parcours d'alternances enrichissant chez trois startups innovantes. Développement d'interfaces utilisateur dynamiques avec VueJS, architecture backend robuste avec Laravel et Symfony. Intégration de paiements Stripe, design UI/UX avec Adobe XD, et contribution à des projets real-world à forte charge utilisateur."
    }
  ];

  // Formation
  const education = [
    { degree: "Mastère Expert en Stratégie Digitale", school: "Digital Campus, Lyon", year: "2018-2020" },
    { degree: "Bachelor Concepteur Réalisateur Web", school: "Sciences U, Lyon", year: "2017-2018" },
    { degree: "BTS Système Numérique", school: "Lycée Saint Michel, Annecy", year: "2017" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>{`${profile.name} - ${profile.title}`}</title>
        <meta name="description" content={`Portfolio de ${profile.name}, ${profile.title} à Lyon.`} />
      </Head>

      {/* --- HERO SECTION --- */}
      <header className="bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img src="/profile.jpg" alt={profile.name} className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover shadow-lg border-4 border-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Portfolio</h2>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">{profile.name}</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">{profile.title}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-2"><FaMapMarkerAlt /> {profile.location}</span>
                <span className="flex items-center gap-2"><FaEnvelope /> {profile.email}</span>
                <span className="flex items-center gap-2"><FaPhone /> {profile.phone}</span>
              </div>

              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
                {profile.bio}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${profile.email}`} className="bg-primary hover:opacity-90 text-secondary px-6 py-3 rounded-lg font-medium transition">
                  Me Contacter
                </a>
                <a href="https://www.linkedin.com/in/th%C3%A9o-le-sommier-39a8ba116/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SKILLS SECTION --- */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8 text-white">Stack Technique</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center h-32 p-4 bg-gray-700 rounded-xl hover:shadow-md hover:bg-gray-600 transition">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <span className="font-medium text-sm text-center text-gray-200 line-clamp-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-10 text-white">Expériences Professionnelles</h3>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl hover:border-primary transition duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="text-primary font-medium">{exp.company}</span>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.split(', ').map((t, i) => (
                    <span key={i} className="text-xs font-semibold text-gray-200 bg-gray-700 px-2 py-1 rounded border border-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & INTERESTS --- */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Formation */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Formation</h3>
            <div className="space-y-6 border-l-2 border-primary/30 pl-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-gray-800"></div>
                  <h4 className="font-bold text-white">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.school}</p>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Intérêts & Langues */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Intérêts & Langues</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Langues</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/50 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-blue-500">🇫🇷</div>
                      <div>
                        <p className="font-bold text-white">Français</p>
                        <p className="text-sm text-gray-400">Natif • Maîtrise complète</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/50 rounded-lg p-4 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🇬🇧</div>
                      <div>
                        <p className="font-bold text-white">Anglais</p>
                        <p className="text-sm text-gray-400">Courant • Communication professionnelle</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/50 rounded-lg p-4 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20 transition duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🇪🇸</div>
                      <div>
                        <p className="font-bold text-white">Espagnol</p>
                        <p className="text-sm text-gray-400">Intermédiaire • Conversationnel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Loisirs & Passions</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/50 rounded-lg p-4 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FaFire className="text-2xl text-orange-500" />
                      <div>
                        <p className="font-bold text-white">Handball</p>
                        <p className="text-sm text-gray-400">Sport collectif & passion compétitive</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-lg p-4 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FaGamepad className="text-2xl text-purple-500" />
                      <div>
                        <p className="font-bold text-white">E-sport</p>
                        <p className="text-sm text-gray-400">Compétition gaming & stratégie</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/50 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FaChess className="text-2xl text-blue-500" />
                      <div>
                        <p className="font-bold text-white">Échecs</p>
                        <p className="text-sm text-gray-400">Stratégie & réflexion analytique</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Prêt à lancer un projet ?</h2>
          <p className="text-gray-400 mb-8">Disponible en freelance ou CDI sur Lyon et ses environs.</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href={`mailto:${profile.email}`} className="inline-block bg-primary hover:opacity-90 text-secondary font-bold py-3 px-8 rounded-full transition">
              {profile.email}
            </a>
            <a href="https://www.linkedin.com/in/th%C3%A9o-le-sommier-39a8ba116/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition">
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-600">© {new Date().getFullYear()} Théo Le Sommier. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}