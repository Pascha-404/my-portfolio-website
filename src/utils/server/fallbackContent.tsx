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
		_id: null,
		name: 'Baufachbetrieb Müller',
		imgSrc: null,
		role: 'Full-stack Developer',
		stack: ['React', 'SASS', 'AWS', 'Cloudinary'],
		task: 'Develop a user-friendly, one-page application for a local business to replace their outdated webpage',
		description:
			'This project involved creating a new web presence for Baufachbetrieb Müller, focusing on user experience and functionality. The main feature was a form that sends information to the business and simultaneously forwards a copy to the user.',
		longDescription:
			"The project required a complete overhaul of the existing web presence. The application was designed to be simple yet effective, ensuring ease of navigation for users. Key features included a contact form, business information display, and integration of the business's branding elements.",
		githubLink: null,
		liveLink: null,
		yearCreated: 2023,
		challenges: [
			{
				data: 'Designing a user-friendly and visually appealing interface adaptable to various display sizes.',
			},
			{
				data: 'Implementing a backend solution for the form to process and send data securely to both the business and the user.',
			},
		],
		approach: [
			{
				header: 'Technology Stack',
				data: "Conducted a thorough analysis of the client's requirements and the limitations of their existing website.",
			},
			{
				header: 'Frontend Development',
				data: 'Designed a responsive layout using React and SASS, ensuring compatibility across different devices.',
			},
			{
				header: 'Backend Development',
				data: 'Developed a secure backend using Firebase Functions for email triggers and Firestore for database management.',
			},
			{
				header: 'Testing and Quality Assurance',
				data: 'Implemented client-based reCaptcha for added security.',
			},
		],
		results: [
			{
				data: 'Delivered a highly functional, responsive, and aesthetically pleasing web application.',
			},
			{
				data: 'Enhanced user engagement and satisfaction through an intuitive interface and quick loading times.',
			},
			{
				data: "Improved client's online presence, leading to better business visibility and potential customer growth.",
			},
		],
		technology: [
			{ category: 'Frontend', detail: ['React', 'SASS'] },
			{ category: 'Backend', detail: ['Firebase', 'Functions', 'Firestore'] },
			{ category: 'Deployment', detail: ['AWS', 'Cloudinary', 'Strato'] },
		],
	},
	{
		_id: null,
		name: 'Goksenia Portfolio',
		imgSrc: null,
		role: 'Full-Stack Developer',
		stack: [
			'HTML',
			'CSS',
			'JavaScript',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Cloudinary',
		],
		task: 'Create a portfolio website for Kseniia Pavliuchik, a UI/UX Designer, that showcases her skills and projects in an intuitive and engaging way.',
		description:
			'This project was about developing a digital portfolio for Kseniia Pavliuchik, highlighting her expertise in UI/UX design. The website featured a main page with her professional profile and a separate section for detailed case studies.',
		longDescription:
			"The project's focus was on demonstrating Kseniia's talents in UI/UX design through a platform that was visually appealing and user-friendly. A critical aspect was the custom CMS development, enabling efficient management of portfolio content.",
		githubLink: null,
		liveLink: null,
		yearCreated: 2021,
		challenges: [
			{
				data: 'Creating a responsive design for various screen sizes, ensuring fluid transitions and a pleasant user experience.',
			},
			{
				data: 'Developing a custom CMS with complete CRUD operations and features for managing projects on the main page, built with JavaScript.',
			},
			{
				data: 'Integrating a system for managing file uploads and content updates through the CMS.',
			},
		],
		approach: [
			{
				header: 'Frontend Development',
				data: 'Designed the frontend using HTML, CSS, and JavaScript, prioritizing responsiveness to adapt to different devices.',
			},
			{
				header: 'Backend Development',
				data: 'Utilized Node.js and Express.js, focusing on security enhancements with sanitize-html and helmet. Implemented user authentication with Passport and chose MongoDB for storing project and user data.',
			},
			{
				header: 'Deployment',
				data: 'Deployed the application on a DigitalOcean server, using a reverse Nginx proxy for reliable connectivity.',
			},
		],
		results: [
			{
				data: 'Successfully delivered a functional and responsive portfolio website with an integrated custom CMS.',
			},
			{
				data: "The CMS allowed for effective showcasing and updating of Kseniia's work, enhancing her professional online presence.",
			},
			{
				data: 'The website was well-received for its user-friendly design and efficient content management capabilities.',
			},
		],
		technology: [
			{ category: 'Frontend', detail: ['HTML', 'CSS', 'JavaScript'] },
			{
				category: 'Backend',
				detail: [
					'Node.js',
					'Express.js',
					'sanitize-html',
					'helmet',
					'Passport',
					'MongoDB',
				],
			},
			{ category: 'Deployment', detail: ['DigitalOcean', 'Nginx'] },
		],
	},
	{
		_id: null,
		name: 'WebChatApp',
		imgSrc: null,
		role: 'Full-Stack Developer',
		stack: ['React', 'CSS', 'Material UI', 'AWS'],
		task: 'Develop a fully functional web chat application with a range of familiar chat features.',
		description:
			'This project was focused on creating a comprehensive chat application incorporating key functionalities of modern chat platforms. Initially envisioned as an extensive project, it was later refined to an MVP to showcase crucial functionalities in a more manageable scope.',
		longDescription:
			"The WebChatApp was conceived as a platform to demonstrate my capabilities in developing a full-fledged chat application. However, recognizing the project's demands, I reevaluated and streamlined it to focus on core features. This included a robust registration system, an engaging chat interface with emoticons, and functionalities to manage contacts and groups.",
		githubLink: null,
		liveLink: null,
		yearCreated: 2021,
		challenges: [
			{
				data: 'Rapidly designing an appealing front-end for larger screens using a CSS framework.',
			},
			{
				data: 'Integrating diverse authentication methods, including GitHub and Google, using Firebase Authentication.',
			},
			{
				data: 'Developing real-time chat functionality leveraging Firebase Realtime Database API.',
			},
		],
		approach: [
			{
				header: 'Frontend Development',
				data: 'Employed React along with Material UI and CSS to create a user-friendly interface tailored for large screens.',
			},
			{
				header: 'Backend Development',
				data: 'Developed the backend using Firebase, with a focus on diverse authentication options and real-time communication capabilities with Firebase Realtime Database.',
			},
		],
		results: [
			{
				data: 'Successfully built a functional MVP of the WebChatApp, showcasing essential features of a chat application.',
			},
			{
				data: 'Demonstrated proficiency in utilizing Firebase for both authentication and real-time data handling.',
			},
			{
				data: "Effectively highlighted skill in developing functionality-focused web applications, even though it's not responsive for smaller screens.",
			},
		],
		technology: [
			{ category: 'Frontend', detail: ['React', 'Material UI', 'CSS'] },
			{
				category: 'Backend',
				detail: ['Firebase Authentication', 'Firebase Realtime Database'],
			},
			{ category: 'Deployment', detail: ['Firebase'] },
		],
	},
	{
		_id: null,
		name: 'Mood Booster',
		imgSrc:
			'https://res.cloudinary.com/drpmdiapv/image/upload/v1703419049/patrick.pavliuchik.com/moodBooster-overview_r1mdz8.png',
		role: 'Frontend Developer',
		stack: ['HTML', 'CSS'],
		task: 'Implement the design of a digital journal in HTML and CSS for a Hackathon project focused on mental health.',
		description:
			"The project, developed for a Hackathon with the theme of 'Mental Health,' aimed to create an MVP of a digital journal. The journal was designed to help users uplift their mood through various mediums like visuals, poems, dad jokes, and music.",
		longDescription:
			"Mood Booster was conceived as a digital aid for mental wellbeing, offering personalized mood enhancement options. My involvement began just two weeks after I started learning web development, presenting both a challenge and an opportunity for rapid growth. My primary responsibility was to bring the UI/UX designer's vision to life through HTML and CSS, ensuring the application was both functional and visually appealing.",
		githubLink: 'https://github.com/id-TechTeam/Mood-Booster/tree/master',
		liveLink: 'https://devpost.com/software/mood-booster-r0seax',
		yearCreated: 2020,
		challenges: [
			{
				data: 'Rapidly acclimating to frontend development and effectively implementing a given design.',
			},
			{
				data: 'Collaborating efficiently within a diverse team of four members, including another frontend developer, a UI/UX designer, and a backend developer.',
			},
			{
				data: 'Participating in an online Hackathon, which involved not only development but also the preparation of a compelling project presentation.',
			},
		],
		approach: [
			{
				header: 'Frontend Development',
				data: 'Dived headfirst into frontend development, focusing on structuring HTML and styling with CSS to achieve a responsive and engaging design.',
			},
			{
				header: 'Team Collaboration',
				data: 'Worked closely with the team, contributing to the development process and ensuring seamless integration of frontend and backend elements.',
			},
			{
				header: 'Project Presentation',
				data: 'Created a product video with a voiceover to effectively showcase the application during the Hackathon presentation.',
			},
		],
		results: [
			{
				data: 'Successfully implemented a responsive design, marking a significant personal achievement only two weeks into my web development journey.',
			},
			{
				data: 'The application featured a journal function and a variety of mood-boosting options, demonstrating the potential of digital tools in supporting mental health.',
			},
			{
				data: "The project was well-received at the Hackathon, highlighting the effectiveness of our teamwork and the application's relevance to the theme.",
			},
		],
		technology: [
			{ category: 'Frontend', detail: ['HTML', 'CSS', 'JavaScript'] },
			{ category: 'Backend', detail: ['Node.js', 'Mongoose', 'Express', 'Passport'] },
			{ category: 'Deployment', detail: ['Heroku'] },
		],
	},
];

/* Original idea for structure */
// {
// 		_id: null,
// 		name: 'mueller',
// 		imgSrc: null,
// 		role: 'Full-Stack Developer',
// 		stack: ['React', 'SASS', 'AWS', 'Cloudinary'],
// 		task: 'Create a web presence for local business',
// 		description: 'Some text',
// 		longDescription: 'Some long text',
// 		githubLink: null,
// 		liveLink: null,
// 		yearCreated: 2023,
// 		challenges: [{ data: 'Challenge text' }, { data: 'Challenge Text' }],
// 		approach: [
// 			{ header: 'Technology Stack', data: 'Technologys' },
// 			{ header: 'Frontend Development', data: 'What and why' },
// 		],
// 		results: [{ data: 'Result here' }, { data: 'Result here' }],
// 		technologie: [
// 			{ category: 'Frontend', detail: ['React', 'SASS'] },
// 			{ category: 'Backend', detail: ['AWS'] },
// 			{ category: 'Deployment', detail: ['Cloudinary', 'Strato'] },
// 		],
// 	}

export { static_sections, projects };
