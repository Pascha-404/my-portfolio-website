const static_sections = [
	{
		section_name: 'navbar',
		about: {
			en: 'about',
			de: 'über mich',
		},
		projects: {
			en: 'projects',
			de: 'projekte',
		},
		contact: {
			en: 'contact',
			de: 'kontakt',
		},
		action_btn: {
			en: "let's talk?",
			de: 'Lass uns reden?',
		},
		logo_alt: {
			en: 'Patrick Pavliuchik typed in code syntax',
			de: 'Patrick Pavliuchik geschrieben in code syntax',
		},
	},
	{
		section_name: 'heroSection',
		header: [
			{
				text: {
					en: "Hi, I'm",
					de: 'Hi, ich bin',
				},
				highlight: false,
			},
		],
		sub_header: {
			en: 'software engineer, who loves CHALLENGES and QUIZES.',
			de: 'Softwareentwickler, welcher Herausforderungen und Rätsel liebt.',
		},
		description: {
			en: 'Are you looking for a passionate full stack developer with a love for creating meaningful digital experiences? Explore my portfolio to discover my journey through various projects and technologies.',
			de: 'Suchen Sie einen leidenschaftlichen Full-Stack-Entwickler mit einer Liebe für das Schaffen bedeutungsvoller digitaler Erlebnisse? Entdecken Sie mein Portfolio, um meine Reise durch verschiedene Projekte und Technologien zu entdecken.',
		},
		fit: {
			en: 'Maybe we could make a good fit?',
			de: 'Vielleicht passen wir ja zusammen?',
		},
		navigation_btn: {
			en: 'more about me, my experience and portfolio',
			de: 'mehr über mich, meine Erfahrungen und mein Portfolio',
		},
		action_btn: {
			en: 'book a call',
			de: 'Termin vereinbaren',
		},
		image_alt: {
			en: 'Front photo of Patrick Pavliuchik',
			de: 'Frontaufnahme von Patrick Pavliuchik',
		},
		arrow_alt: {
			en: 'Long arrow icon pointing downwards',
			de: 'Langer Pfeil der nach unten zeigt',
		},
	},
	{
		section_name: 'projectsSection',
		header: [
			{
				text: {
					en: 'My',
					de: 'Meine',
				},
				highlight: false,
			},
			{
				text: {
					en: 'projects',
					de: 'Projekte',
				},
				highlight: true,
			},
		],
		navigation_btn: {
			en: 'More about me and my experience',
			de: 'Mehr über mich und meine Erfahrungen',
		},
		arrow_alt: {
			en: 'Long arrow icon pointing downwards',
			de: 'Langer Pfeil der nach unten zeigt',
		},
	},
	{
		section_name: 'aboutSection',
		header: [
			{
				text: {
					en: 'About',
					de: 'Über',
				},
				highlight: false,
			},
			{
				text: {
					en: 'me',
					de: 'mich',
				},
				highlight: true,
			},
		],
		description: {
			en: "Hi there! I'm a passionate Fullstack Engineer with a knack for turning ideas into functional, user-friendly web applications. My journey in the tech world began with a strong curiosity for problem-solving and a love for crafting digital experiences. Now, I'm on the lookout for exciting junior positions in Berlin where I can contribute my skills and grow as a developer.",
			de: 'Hallo! Ich bin ein leidenschaftlicher Fullstack-Entwickler mit einem Talent dafür, Ideen in funktionale, benutzerfreundliche Webanwendungen umzusetzen. Meine Reise in der Technikwelt begann mit einer starken Neugier für das Lösen von Problemen und einer Liebe für das Gestalten digitaler Erlebnisse. Jetzt bin ich auf der Suche nach spannenden Einstiegspositionen in Berlin, wo ich meine Fähigkeiten einbringen und als Entwickler wachsen kann.',
		},
		skills: {
			header: [
				{
					text: {
						en: 'My skills',
						de: 'Meine Fähigkeiten',
					},
					highlight: false,
				},
			],
			frontend: {
				en: [
					{ data: 'Proficient in HTML, CSS, and JavaScript.' },
					{ data: 'Experience with modern frontend frameworks like React and Vue.js.' },
					{ data: 'Responsive design and mobile-first development.' },
				],
				de: [
					{ data: 'Beherrscht HTML, CSS und JavaScript.' },
					{ data: 'Erfahrung mit modernen Frontend-Frameworks wie React und Vue.js.' },
					{ data: 'Responsives Design und Mobile-First-Entwicklung.' },
				],
			},
			backend: {
				en: [
					{ data: 'Proficient in HTML, CSS, and JavaScript.' },
					{ data: 'Experience with modern frontend frameworks like React and Vue.js.' },
					{ data: 'Responsive design and mobile-first development.' },
				],
				de: [
					{ data: 'Beherrscht HTML, CSS und JavaScript.' },
					{ data: 'Erfahrung mit modernen Frontend-Frameworks wie React und Vue.js.' },
					{ data: 'Responsives Design und Mobile-First-Entwicklung.' },
				],
			},
		},
		experience: {
			header: [
				{
					text: {
						en: 'My',
						de: 'Meine',
					},
					highlight: false,
				},
				{
					text: {
						en: 'experience',
						de: 'Erfahrungen',
					},
					highlight: true,
				},
			],
			pdfLink: {
				en: 'Download my CV as PDF',
				de: 'Mein Lebenslauf als PDF',
			},
			companys: {
				en: [
					{
						company_name: 'BVG',
						company_role: 'Mechanic',
						time: '2020-2023',
						skills: [
							{ data: 'Proficient in HTML, CSS, and JavaScript.' },
							{
								data: 'Experience with modern frontend frameworks like React and Vue.js.',
							},
							{ data: 'Responsive design and mobile-first development.' },
						],
					},
				],
				de: [
					{
						company_name: 'BVG',
						company_role: 'KFZ-Mechatroniker',
						time: '2020-2023',
						skills: [
							{ data: 'Beherrscht HTML, CSS und JavaScript.' },
							{
								data: 'Erfahrung mit modernen Frontend-Frameworks wie React und Vue.js.',
							},
							{ data: 'Responsives Design und Mobile-First-Entwicklung.' },
						],
					},
				],
			},
		},
	},
	{
		section_name: 'contactSection',
		header: [
			{
				text: {
					en: "Let's",
					de: 'Lust auf ein',
				},
				highlight: false,
			},
			{
				text: {
					en: 'chat?',
					de: 'Gespräch?',
				},
				highlight: true,
			},
		],
		description: {
			en: "Whether you have a project in mind, want to discuss potential collaborations, or simply want to chat about design and technology, I'm here for it. Feel free to reach out by filling out the form below to book a call with me.",
			de: 'Ob Sie ein Projekt im Sinn haben, über mögliche Zusammenarbeiten diskutieren möchten oder einfach nur über Design und Technologie plaudern wollen, ich bin dafür da. Zögern Sie nicht, mich zu kontaktieren, indem Sie das untenstehende Formular ausfüllen, um einen Anruf mit mir zu vereinbaren.',
		},
		action_btn: {
			en: 'book a call',
			de: 'Termin vereinbaren',
		},
	},
	{
		section_name: 'footer',
		arrow_alt: {
			en: 'Long arrow icon pointing upwards',
			de: 'Langer Pfeil der nach oben zeigt',
		},
		logo_alt: {
			en: 'Patrick Pavliuchik typed in code syntax',
			de: 'Patrick Pavliuchik geschrieben in code syntax',
		},
		navigation_btn: {
			en: 'Up to the beginning',
			de: 'Zurück zum Anfang',
		},
		contacts: {
			en: 'Contacts',
			de: 'Kontakt',
		},
		sitemap: {
			projects: {
				en: 'Projects',
				de: 'Projekte',
			},
			about: {
				en: 'About Me',
				de: 'Über mich',
			},
			resume: {
				en: 'Resume',
				de: 'Lebenslauf',
			},
		},
		imprint: {
			en: 'Imprint',
			de: 'Impressum',
		},
		privacy: {
			en: 'Privacy Policy',
			de: 'Datenschutz',
		},
	},
];

const projects = [
	{
		_id: 3423,
		name: 'mueller',
		imgSrc: null,
		role: 'Full-Stack Developer',
		stack: ['React', 'SASS', 'AWS', 'Cloudinary'],
		tasks: [null],
		description: 'Some text',
		longDescription: 'Some long text',
		githubLink: null,
		liveLink: null,
		yearCreated: 2023,
		challenges: [{ data: 'Challenge text' }, { data: 'Challenge Text' }],
		approach: [
			{ header: 'Technology Stack', data: 'Technologys' },
			{ header: 'Frontend Development', data: 'What and why' },
		],
		results: [{ data: 'Result here' }, { data: 'Result here' }],
		technologie: [
			{ category: 'Frontend', detail: ['React', 'SASS'] },
			{ category: 'Backend', detail: ['AWS'] },
			{ category: 'Deployment', detail: ['Cloudinary', 'Strato'] },
		],
	},
];

export { static_sections };
