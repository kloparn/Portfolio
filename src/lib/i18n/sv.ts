export default {
	// Meta
	siteTitle: 'Adam Håkansson | Mjukvaruingenjör',
	siteDescription: 'Mjukvaruingenjör baserad i Sverige. Bygger webbapplikationer med TypeScript, React, Svelte, Node.js och Google Cloud.',

	// Nav
	navHome: 'Hem',
	navAbout: 'Om mig',
	navProjects: 'Projekt',
	navContact: 'Kontakt',

	// Home hero
	heroLabel: 'Mjukvaruingenjör',
	heroGreeting: 'Hej, jag är',
	heroName: 'Adam',
	heroDescription: 'Jag bygger saker för webben. Fokuserad på att skapa pålitlig, välbyggd mjukvara som folk faktiskt gillar att använda.',
	heroCtaWork: 'Se mitt arbete',
	heroCtaContact: 'Hör av dig',

	// Home skills
	skillsTitle: 'Vad jag jobbar med',

	// Home featured
	featuredLabel: 'Utvalda',
	featuredTitle: 'Senaste projekt',
	featuredViewAll: 'Visa alla',
	featuredViewAllMobile: 'Visa alla projekt',
	featuredGithubError: 'GitHub API har problem just nu. Visar cachad data.',

	// Home Echo
	echoLabel: 'Bygger just nu',
	echoDescription: 'En professionell Discord-bot som ersätter 5+ separata bottar med en högpresterande plattform. Moderering, supportärenden, engagemangssystem, automatisering och analys på ett ställe.',
	echoSubtext: 'Jobbar på detta med en nära vän. Gratis att börja, setup tar under 60 sekunder.',
	echoCtaText: 'Kolla in det',

	// Home CTA
	ctaTitle: 'Intresserad av att jobba ihop?',
	ctaDescription: 'Jag är alltid öppen för att diskutera nya projekt och möjligheter.',
	ctaButton: 'Snackas',

	// About
	aboutTitle: 'Om mig | Adam Håkansson',
	aboutRole: 'Mjukvaruingenjör, Sverige',
	aboutBio1: 'Jag kom in på tech tidigt. 2014 började jag gymnasiet med inriktning IT och media, där jag först blev fast i att bygga saker med kod. Därifrån gick jag till Jönköpings högskola 2017 för att studera Datautveckling och mobila plattformar, och tog examen 2020 med en',
	aboutThesisLink: 'uppsats om att använda K-Means och GMM-klustring för att hitta anomalier i kollektivtrafikdata',
	aboutBio2: 'Sedan dess har jag levererat mjukvara professionellt. Numera jobbar jag över hela stacken med TypeScript, React, Node.js och Google Cloud. Jag kör Linux som daglig drivrutin och spenderar mycket tid i terminalen. Jag är certifierad Google Cloud Professional Cloud Architect. Det mesta av mitt molnarbete går genom konsolen och Terraform.',
	aboutBio3: 'Utanför jobbet gillar jag att pyssla med sidoprojekt, köra Advent of Code varje december, och vara utomhus när det svenska vädret tillåter det.',
	aboutCertTitle: 'Google Cloud Professional Cloud Architect',
	aboutCertSub: 'Visa certifiering',
	aboutSkillsTitle: 'Vad jag jobbar med',
	aboutTimelineTitle: 'Hur jag kom hit',
	aboutTimeline: [
		{ year: '2022 ~ Nu', title: 'Mjukvaruingenjör', description: 'Produktionssystem, molnarkitektur, fullstackutveckling.' },
		{ year: '2020 ~ 2022', title: 'Juniorutvecklare', description: 'Första riktiga jobbet. Leverera kod, göra misstag, fixa dem.' },
		{ year: '2017 ~ 2020', title: 'Jönköpings högskola', description: 'Datautveckling och mobila plattformar. Uppsats om ML-klustring i kollektivtrafikdata.' },
		{ year: '2014 ~ 2017', title: 'Gymnasiet, IT & Media', description: 'Där allt började. Första kontakten med programmering och webbutveckling.' }
	],

	// Projects
	projectsTitle: 'Projekt | Adam Håkansson',
	projectsLabel: 'Portfolio',
	projectsHeading: 'Projekt',
	projectsDescription: 'En samling saker jag byggt och bidragit till. Dessa hämtas live från mitt GitHub.',
	projectsGithubError: 'Kunde inte nå GitHub just nu.',
	projectsGithubErrorCached: 'Visar cachade resultat.',
	projectsGithubErrorRetry: 'Försök igen om en stund.',
	projectsFilterAll: 'Alla',
	projectsSortLabel: 'Sortera:',
	projectsSortRecent: 'Senaste',
	projectsSortStars: 'Stjärnor',
	projectsSortAz: 'A\u2013Ö',
	projectsEmpty: 'Inga projekt matchar det filtret.',
	projectsClearFilter: 'Rensa filter',

	// Contact
	contactTitle: 'Kontakt | Adam Håkansson',
	contactLabel: 'Kontakt',
	contactHeading: 'Låt oss jobba',
	contactHeadingHighlight: 'ihop',
	contactDescription: 'Har du en idé, ett projekt, eller vill bara säga hej? Hör gärna av dig. Skicka ett mejl eller hitta mig på sociala medier.',
	contactEmailLabel: 'Mejla mig',
	contactCopied: 'Kopierat till urklipp!',
	contactGithubDesc: 'Kolla in min kod',
	contactLinkedinDesc: 'Låt oss koppla ihop',

	// Footer
	footerText: 'Adam Håkansson. Byggd med SvelteKit & solsken.',
} as const;
