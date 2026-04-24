export default {
	// Meta
	siteTitle: 'Adam Hakansson | Software Engineer',
	siteDescription: 'Software Engineer based in Sweden. Building web applications with TypeScript, React, Svelte, Node.js, and Google Cloud.',

	// Nav
	navHome: 'Home',
	navAbout: 'About',
	navProjects: 'Projects',
	navContact: 'Contact',

	// Home hero
	heroLabel: 'Software Engineer',
	heroGreeting: "Hej, I'm",
	heroName: 'Adam',
	heroDescription: 'I build things for the web. Focused on crafting reliable, well-engineered software that people actually enjoy using.',
	heroCtaWork: 'See my work',
	heroCtaContact: 'Get in touch',

	// Home skills
	skillsTitle: 'What I work with',

	// Home featured
	featuredLabel: 'Featured',
	featuredTitle: 'Recent projects',
	featuredViewAll: 'View all',
	featuredViewAllMobile: 'View all projects',
	featuredGithubError: 'GitHub API is having a moment. Showing cached data.',

	// Home Echo
	echoLabel: 'Currently building',
	echoDescription: 'A professional Discord bot that replaces 5+ separate bots with one high-performance platform. Moderation, support ticketing, engagement systems, automation, and analytics all in one place.',
	echoSubtext: 'Working on this with a close friend. Free to start, setup takes under 60 seconds.',
	echoCtaText: 'Check it out',

	// Home CTA
	ctaTitle: 'Interested in working together?',
	ctaDescription: "I'm always open to discussing new projects and opportunities.",
	ctaButton: "Let's talk",

	// About
	aboutTitle: 'About | Adam Hakansson',
	aboutRole: 'Software Engineer, Sweden',
	aboutBio1: "I got into tech early. In 2014 I started a high school program in IT with a focus on media, which is where I first got hooked on building things with code. From there I went to Jonkoping University in 2017 to study Computer Engineering (Datautveckling och mobila plattformar), graduating in 2020 with a",
	aboutThesisLink: 'thesis on using K-Means and GMM clustering to detect anomalies in public transit data',
	aboutBio2: "Since then I've been shipping software professionally. These days I work across the full stack with TypeScript, React, Node.js, and Google Cloud. I run Linux as my daily driver and spend a lot of time in the terminal. I'm a certified Google Cloud Professional Cloud Architect. Most of my cloud work is through the console and Terraform.",
	aboutBio3: 'Outside of work I like tinkering with side projects, doing Advent of Code each December, and being outdoors when the Swedish weather allows it.',
	aboutCertTitle: 'Google Cloud Professional Cloud Architect',
	aboutCertSub: 'View credential',
	aboutSkillsTitle: 'What I work with',
	aboutTimelineTitle: 'How I got here',
	aboutTimeline: [
		{ year: '2022 ~ Present', title: 'Software Engineer', description: 'Production systems, cloud architecture, fullstack development.' },
		{ year: '2020 ~ 2022', title: 'Junior Developer', description: 'First real job. Shipping code, breaking things, fixing them.' },
		{ year: '2017 ~ 2020', title: 'Jonkoping University', description: 'Computer Engineering (Datautveckling och mobila plattformar). Thesis on ML clustering in public transit data.' },
		{ year: '2014 ~ 2017', title: 'High School, IT & Media', description: 'Where it all started. First exposure to programming and web development.' }
	],

	// Projects
	projectsTitle: 'Projects | Adam Hakansson',
	projectsLabel: 'Portfolio',
	projectsHeading: 'Projects',
	projectsDescription: "A collection of things I've built and contributed to. These are pulled live from my GitHub.",
	projectsGithubError: "Couldn't reach GitHub right now.",
	projectsGithubErrorCached: 'Showing cached results.',
	projectsGithubErrorRetry: 'Try again in a bit.',
	projectsFilterAll: 'All',
	projectsSortLabel: 'Sort:',
	projectsSortRecent: 'Recent',
	projectsSortStars: 'Stars',
	projectsSortAz: 'A\u2013Z',
	projectsEmpty: 'No projects match that filter.',
	projectsClearFilter: 'Clear filter',

	// Contact
	contactTitle: 'Contact | Adam Hakansson',
	contactLabel: 'Contact',
	contactHeading: "Let's work",
	contactHeadingHighlight: 'together',
	contactDescription: "Have an idea, a project, or just want to say hello? I'd love to hear from you. Drop me an email or find me on socials.",
	contactEmailLabel: 'Email me',
	contactCopied: 'Copied to clipboard!',
	contactGithubDesc: 'Check out my code',
	contactLinkedinDesc: "Let's connect",

	// Footer
	footerText: 'Adam Hakansson. Built with SvelteKit & sunshine.',
} as const;
