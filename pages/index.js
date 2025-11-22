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
  FaMobileAlt 
} from 'react-icons/fa';
import { SiExpo, SiLaravel, SiAdobe, SiMysql } from 'react-icons/si';

export default function Portfolio() {
  
  // Données extraites du CV
  const profile = {
    name: "Théo Le Sommier",
    title: "Développeur Web et Mobile",
    location: "Lyon, 69007",
    phone: "07-86-45-16-43",
    email: "lesommier-theo@gmail.com",
    bio: "Développeur Fullstack de 26 ans passionné par la création d'applications performantes. Fort de 6 ans d'expérience, je maîtrise l'écosystème React (Web & Native) ainsi que les frameworks PHP robustes comme Symfony.",
  };

  const skills = [
    { name: "React & React Native", icon: <FaReact className="text-blue-400" /> },
    { name: "VueJs & NuxtJS", icon: <FaVuejs className="text-green-500" /> },
    { name: "PHP & Symfony", icon: <FaSymfony className="text-black" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
    { name: "Design (Adobe XD)", icon: <SiAdobe className="text-pink-600" /> },
    { name: "Mobile (Expo)", icon: <SiExpo className="text-gray-800" /> },
  ];

  // Expériences basées sur le CV
  const experiences = [
    {
      role: "Développeur Mobile",
      company: "SuperConnectr",
      period: "Sept. 2021 - Juin 2024",
      tech: "React Native, Expo, RNPaper, SendBird",
      desc: "Création de nouvelles fonctionnalités, intégration de chat, suivi et maintenance de l'application."
    },
    {
      role: "Développeur Fullstack Freelance",
      company: "Deweto Agency",
      period: "Fév. 2020 - Sept. 2021",
      tech: "WordPress, PrestaShop, Dev From Scratch",
      desc: "Création de sites internet (e-commerce/vitrine), publications sponsorisées et suivi client."
    },
    {
      role: "Développeur Web (Alternance)",
      company: "NoShow / Park4night / Izypay",
      period: "2018 - 2020",
      tech: "VueJS, Laravel, PHP, Jquery, Symfony",
      desc: "Série d'alternances formatrices : développement d'interfaces, maquettage AdobeXD, intégration Stripe et maintenance."
    }
  ];

  // Formation
  const education = [
    { degree: "Mastère Expert en Stratégie Digitale", school: "Digital Campus, Lyon", year: "2018-2020" },
    { degree: "Bachelor Concepteur Réalisateur Web", school: "Sciences U, Lyon", year: "2017-2018" },
    { degree: "BTS Système Numérique", school: "Lycée Saint Michel, Annecy", year: "2017" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>{`${profile.name} - ${profile.title}`}</title>
        <meta name="description" content={`Portfolio de ${profile.name}, ${profile.title} à Lyon.`} />
      </Head>

      {/* --- HERO SECTION --- */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img src="/profile.jpg" alt={profile.name} className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover shadow-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Portfolio</h2>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">{profile.name}</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">{profile.title}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-2"><FaMapMarkerAlt /> {profile.location}</span>
                <span className="flex items-center gap-2"><FaEnvelope /> {profile.email}</span>
                <span className="flex items-center gap-2"><FaPhone /> {profile.phone}</span>
              </div>

              <p className="text-lg text-gray-700 max-w-2xl leading-relaxed mb-8">
                {profile.bio}
              </p>

              <div className="flex gap-4">
                <a href={`mailto:${profile.email}`} className="bg-primary hover:opacity-90 text-secondary px-6 py-3 rounded-lg font-medium transition">
                  Me Contacter
                </a>
                <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium transition">
                  Télécharger CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SKILLS SECTION --- */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Stack Technique</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <span className="font-medium text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-10 text-gray-900">Expériences Professionnelles</h3>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                    <span className="text-primary font-medium">{exp.company}</span>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.split(', ').map((t, i) => (
                    <span key={i} className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Formation */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Formation</h3>
            <div className="space-y-6 border-l-2 border-primary/30 pl-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                  <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.school}</p>
                  <span className="text-sm text-gray-400">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Intérêts & Langues */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Intérêts & Langues</h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="mb-6">
                <h4 className="font-bold text-gray-700 mb-2">Langues</h4>
                <p className="text-gray-600">Français (Natif) • Anglais • Espagnol</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-2">Loisirs</h4>
                <div className="flex flex-wrap gap-3">
                  {["Handball", "E-sport", "Échecs"].map((hobby, i) => (
                    <span key={i} className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-600">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Prêt à lancer un projet ?</h2>
          <p className="text-gray-400 mb-8">Disponible en freelance ou CDI sur Lyon et ses environs.</p>
          <a href={`mailto:${profile.email}`} className="inline-block bg-primary hover:opacity-90 text-secondary font-bold py-3 px-8 rounded-full transition">
            {profile.email}
          </a>
          <p className="mt-8 text-sm text-gray-600">© {new Date().getFullYear()} Théo Le Sommier. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}