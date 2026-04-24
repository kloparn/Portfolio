export default {
	// Meta
	siteTitle: 'Adam Håkansson | Ingeniero de Software',
	siteDescription: 'Ingeniero de Software en Suecia. Desarrollo aplicaciones web con TypeScript, React, Svelte, Node.js y Google Cloud.',

	// Nav
	navHome: 'Inicio',
	navAbout: 'Sobre mí',
	navProjects: 'Proyectos',
	navContact: 'Contacto',

	// Home hero
	heroLabel: 'Ingeniero de Software',
	heroGreeting: 'Hola, soy',
	heroName: 'Adam',
	heroDescription: 'Construyo cosas para la web. Enfocado en crear software fiable y bien hecho que la gente disfrute usando.',
	heroCtaWork: 'Ver mi trabajo',
	heroCtaContact: 'Contactar',

	// Home skills
	skillsTitle: 'Con lo que trabajo',

	// Home featured
	featuredLabel: 'Destacados',
	featuredTitle: 'Proyectos recientes',
	featuredViewAll: 'Ver todos',
	featuredViewAllMobile: 'Ver todos los proyectos',
	featuredGithubError: 'La API de GitHub tiene problemas. Mostrando datos en caché.',

	// Home Echo
	echoLabel: 'Construyendo ahora',
	echoDescription: 'Un bot profesional de Discord que reemplaza 5+ bots separados con una plataforma de alto rendimiento. Moderación, tickets de soporte, sistemas de engagement, automatización y analíticas en un solo lugar.',
	echoSubtext: 'Trabajando en esto con un amigo cercano. Gratis para empezar, la configuración toma menos de 60 segundos.',
	echoCtaText: 'Échale un vistazo',

	// Home CTA
	ctaTitle: '¿Interesado en trabajar juntos?',
	ctaDescription: 'Siempre estoy abierto a discutir nuevos proyectos y oportunidades.',
	ctaButton: 'Hablemos',

	// About
	aboutTitle: 'Sobre mí | Adam Håkansson',
	aboutRole: 'Ingeniero de Software, Suecia',
	aboutBio1: 'Entré en la tecnología temprano. En 2014 empecé un programa de bachillerato en IT con enfoque en medios, donde me enganchó por primera vez construir cosas con código. De ahí fui a la Universidad de Jönköping en 2017 para estudiar Ingeniería Informática (Datautveckling och mobila plattformar), graduándome en 2020 con una',
	aboutThesisLink: 'tesis sobre el uso de K-Means y GMM clustering para detectar anomalías en datos de transporte público',
	aboutBio2: 'Desde entonces he estado entregando software profesionalmente. Hoy en día trabajo en todo el stack con TypeScript, React, Node.js y Google Cloud. Uso Linux como sistema diario y paso mucho tiempo en la terminal. Soy un Google Cloud Professional Cloud Architect certificado. La mayor parte de mi trabajo en la nube es a través de la consola y Terraform.',
	aboutBio3: 'Fuera del trabajo me gusta hacer proyectos personales, participar en Advent of Code cada diciembre, y estar al aire libre cuando el clima sueco lo permite.',
	aboutCertTitle: 'Google Cloud Professional Cloud Architect',
	aboutCertSub: 'Ver credencial',
	aboutSkillsTitle: 'Con lo que trabajo',
	aboutTimelineTitle: 'Cómo llegué aquí',
	aboutTimeline: [
		{ year: '2022 ~ Presente', title: 'Ingeniero de Software', description: 'Sistemas en producción, arquitectura cloud, desarrollo fullstack.' },
		{ year: '2020 ~ 2022', title: 'Desarrollador Junior', description: 'Primer trabajo real. Entregando código, rompiendo cosas, arreglándolas.' },
		{ year: '2017 ~ 2020', title: 'Universidad de Jönköping', description: 'Ingeniería Informática (Datautveckling och mobila plattformar). Tesis sobre clustering ML en datos de transporte público.' },
		{ year: '2014 ~ 2017', title: 'Bachillerato, IT & Medios', description: 'Donde todo empezó. Primer contacto con la programación y el desarrollo web.' }
	],

	// Projects
	projectsTitle: 'Proyectos | Adam Håkansson',
	projectsLabel: 'Portfolio',
	projectsHeading: 'Proyectos',
	projectsDescription: 'Una colección de cosas que he construido y a las que he contribuido. Se obtienen en vivo desde mi GitHub.',
	projectsGithubError: 'No se pudo conectar con GitHub ahora.',
	projectsGithubErrorCached: 'Mostrando resultados en caché.',
	projectsGithubErrorRetry: 'Inténtalo de nuevo en un momento.',
	projectsFilterAll: 'Todos',
	projectsSortLabel: 'Ordenar:',
	projectsSortRecent: 'Recientes',
	projectsSortStars: 'Estrellas',
	projectsSortAz: 'A\u2013Z',
	projectsEmpty: 'Ningún proyecto coincide con ese filtro.',
	projectsClearFilter: 'Limpiar filtro',

	// Contact
	contactTitle: 'Contacto | Adam Håkansson',
	contactLabel: 'Contacto',
	contactHeading: 'Trabajemos',
	contactHeadingHighlight: 'juntos',
	contactDescription: '¿Tienes una idea, un proyecto, o solo quieres saludar? Me encantaría saber de ti. Envíame un correo o encuéntrame en redes sociales.',
	contactEmailLabel: 'Envíame un correo',
	contactCopied: '¡Copiado al portapapeles!',
	contactGithubDesc: 'Mira mi código',
	contactLinkedinDesc: 'Conectemos',

	// Footer
	footerText: 'Adam Håkansson. Hecho con SvelteKit y sol.',
} as const;
