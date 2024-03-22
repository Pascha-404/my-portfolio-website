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
		sub_header: [
			{
				text: {
					en: 'Aspiring software developer with a great',
					de: 'Angehender Softwareentwickler mit einer großen',
				},
				highlight: false,
			},
			{
				text: {
					en: 'passion ',
					de: 'Leidenschaft ',
				},
				highlight: true,
			},
			{
				text: {
					en: 'for solving problems through',
					de: 'für das Lösen von Problemen durch',
				},
				highlight: false,
			},
			{
				text: {
					en: 'code.',
					de: 'Code.',
				},
				highlight: true,
			},
		],
		description: {
			en: 'Are you looking for a motivated full-stack developer ready to grow through practical experience and create meaningful digital solutions? In my portfolio, you will find insights into my past projects and how I continuously strive to expand my skills to address real-world problems with innovative technologies.',
			de: 'Sie sind auf der Suche nach einem motivierten Full-Stack-Entwickler, der bereit ist, durch praktische Erfahrung zu wachsen und bedeutungsvolle digitale Lösungen zu schaffen? In meinem Portfolio finden Sie einen Einblick in meine bisherigen Projekte und wie ich stetig daran arbeite, meine Fähigkeiten zu erweitern, um realen Problemen mit innovativen Technologien zu begegnen.',
		},
		fit: {
			en: 'Maybe we could make a good fit?',
			de: 'Lassen Sie uns herausfinden, ob wir zusammen passen?',
		},
		navigation_btn: {
			en: 'more about my portfolio',
			de: 'mehr über mein Portfolio',
		},
		action_btn: {
			en: 'book a call',
			de: 'Kennenlerngespräch',
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
			en: "Hello! I'm a passionate full-stack developer specialized in turning ideas into functional and user-friendly web applications. My enthusiasm for the tech world has been sparked by my strong curiosity and love for problem-solving as well as designing digital experiences. While I'm particularly interested in entry-level positions in Berlin to demonstrate my skills on-site, I'm also open to remote opportunities that allow me to contribute my dedication and skills from anywhere and continue to grow.",
			de: 'Hallo! Ich bin ein leidenschaftlicher Fullstack-Entwickler, der sich darauf spezialisiert hat, Ideen in funktionale und benutzerfreundliche Webanwendungen zu verwandeln. Meine Begeisterung für die Technikwelt wurde durch meine starke Neugier und Liebe zum Problemlösen sowie zum Gestalten digitaler Erlebnisse geweckt. Während ich besonders an Einstiegspositionen in Berlin interessiert bin, um dort vor Ort mein Können unter Beweis zu stellen, bin ich auch offen für Remote-Möglichkeiten, die es mir erlauben, mein Engagement und meine Fähigkeiten von überall aus einzubringen und weiter zu wachsen.',
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
					{
						data: 'Experienced in developing with React, including the use of modern features like Hooks and the Context API for efficient state management.',
					},
					{
						data: 'Professional application of SASS for stylish and maintainable CSS structures.',
					},
					{
						data: 'Effective use of Git and GitHub for version control and collaborative projects.',
					},
					{
						data: 'Implementation of accessible websites by using alt attributes for images and keyboard navigation.',
					},
					{
						data: 'Utilizing Google Lighthouse for performance optimization, prioritizing image loading, and fundamental knowledge in performance improvement strategies.',
					},
				],
				de: [
					{
						data: 'Erfahrung in der Entwicklung mit React, einschließlich der Nutzung moderner Features wie Hooks und Context API für effizientes State-Management.',
					},
					{
						data: 'Professionelle Anwendung von SASS für stilvolle und wartbare CSS-Strukturen.',
					},
					{
						data: 'Effektive Nutzung von Git und GitHub zur Versionskontrolle und Zusammenarbeit in Projekten.',
					},
					{
						data: 'Umsetzung von barrierefreien Webseiten durch die Verwendung von alt-Attributen für Bilder und Tastaturnavigation.',
					},
					{
						data: 'Einsatz von Google Lighthouse für Performance-Optimierung, Priorisierung des Ladens von Bildern und grundlegende Kenntnisse in Performance-Verbesserungsstrategien.',
					},
				],
			},
			backend: {
				en: [
					{
						data: 'Specialized in Node.js for server-side development, with experience in Express and Next.js for robust backend solutions.',
					},
					{
						data: 'Extensive knowledge in working with NoSQL databases, including MongoDB, MongoDB Atlas, Firebase Firestore, and Firebase Realtime Database.',
					},
					{
						data: 'Experienced in developing RESTful APIs, including implementing a CMS with CRUD operations to manage records in local databases.',
					},
					{
						data: 'Proficient in authentication techniques and security practices, including the use of OAuth, Firebase Authentication, and the security middleware Helmet.',
					},
					{
						data: 'Skilled in using Firebase for a variety of backend services such as databases, authentication, and Cloud Functions.',
					},
					{
						data: 'Hands-on experience with the command-line, Linux systems, as well as deploying and configuring web servers like Nginx and Apache on Ubuntu and using virtual machines.',
					},
				],
				de: [
					{
						data: 'Spezialisiert auf Node.js für serverseitige Entwicklung, mit Erfahrungen in Express und Next.js für robuste Backend-Lösungen.',
					},
					{
						data: 'Umfassende Kenntnisse in der Arbeit mit NoSQL-Datenbanken, einschließlich MongoDB, MongoDB Atlas, Firebase Firestore und Firebase Realtime Database.',
					},
					{
						data: 'Erfahrung in der Entwicklung von RESTful APIs, einschließlich der Implementierung eines CMS mit CRUD-Operationen zur Verwaltung von Datensätzen in lokalen Datenbanken.',
					},
					{
						data: 'Kenntnisse in Authentifizierungstechniken und Sicherheitspraktiken, einschließlich der Verwendung von OAuth, Firebase Authentifizierung und der Sicherheitsmiddleware Helmet.',
					},
					{
						data: 'Erfahrener Einsatz von Firebase für eine Vielzahl von Backend-Services wie Datenbanken, Authentifizierung und Cloud Functions.',
					},
					{
						data: 'Praktische Erfahrung mit der Command-Line, Linux-Systemen, sowie dem Einsatz und der Konfiguration von Webservern wie Nginx und Apache auf Ubuntu und der Verwendung virtueller Maschinen.',
					},
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
						company_name: 'Berliner Verkehrsbetriebe',
						company_role: 'Automotive Mechatronics Technician',
						time: '2020-Today',
						skills: [
							{
								data: 'Specialized in vehicle electrical systems with an emphasis on identifying, troubleshooting, and executing complex repairs. Proficient in generating and refining repair documentation tailored to specific vehicle models by leveraging a diverse array of diagnostic tools and software.',
							},
							{
								data: 'Demonstrated expertise in fault diagnosis employing a methodical approach, including the interpretation of measurement data, consulting repair manuals and circuit diagrams, and devising various solution strategies for intricate systems and components.',
							},
							{
								data: 'Independently managed a majority of tasks with the ability to collaborate effectively with team members and superiors on multifaceted challenges, shared knowledge with apprentices and interns, and actively participated in diagnostic and repair activities to enhance personal skill set.',
							},
							{
								data: 'Adapted swiftly to emerging vehicle technologies and diagnostic instruments through practical experience and continuous professional development, including self-directed study of technical manuals to augment comprehension of diverse vehicle systems.',
							},
							{
								data: 'Committed to maintaining high standards of precision and quality across all assignments, conducted thorough final inspections, and meticulously documented diagnostic findings to support transparency and uphold quality assurance standards.',
							},
						],
					},
				],
				de: [
					{
						company_name: 'Berliner Verkehrsbetriebe',
						company_role: 'KFZ-Mechatroniker',
						time: '2020-Heute',
						skills: [
							{
								data: 'Spezialisiert auf Fahrzeugelektriksysteme mit Schwerpunkt auf Identifizierung, Fehlersuche und Durchführung komplexer Reparaturen. Kompetent in der Erstellung und Verfeinerung von Reparaturdokumentationen, angepasst an spezifische Fahrzeugmodelle, unter Verwendung einer vielfältigen Auswahl an Diagnosetools und Software.',
							},
							{
								data: 'Nachgewiesene Expertise in der Fehlerdiagnose mit einem methodischen Ansatz, einschließlich der Interpretation von Messdaten, Konsultation von Reparaturhandbüchern und Schaltplänen sowie der Entwicklung verschiedener Lösungsstrategien für komplexe Systeme und Komponenten.',
							},
							{
								data: 'Selbstständige Bewältigung der meisten Aufgaben mit der Fähigkeit, effektiv mit Teammitgliedern und Vorgesetzten bei komplexen Herausforderungen zusammenzuarbeiten, Wissen mit Auszubildenden und Praktikanten geteilt und aktiv an Diagnose- und Reparaturaktivitäten teilgenommen, um das persönliche Können zu erweitern.',
							},
							{
								data: 'Schnelle Anpassung an neue Fahrzeugtechnologien und Diagnoseinstrumente durch praktische Erfahrungen und kontinuierliche berufliche Weiterbildung, einschließlich eigenständigem Studium von technischen Handbüchern, um das Verständnis verschiedener Fahrzeugsysteme zu vertiefen.',
							},
							{
								data: 'Engagement für die Aufrechterhaltung hoher Präzisions- und Qualitätsstandards bei allen Aufgaben, Durchführung gründlicher Abschlussinspektionen und akribische Dokumentation von Diagnoseergebnissen zur Förderung der Transparenz und Einhaltung von Qualitätsstandards.',
							},
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
			en: 'Looking to bolster your development team? I bring a passion for technology and a commitment to continuous improvement. For an initial introduction or to discuss potential employment opportunities, you can contact me via email, phone, or Calendly. Let’s explore how we can work together.',
			de: 'Suchen Sie Verstärkung für Ihr Entwicklungsteam? Ich bringe Leidenschaft für Technologie und die Bereitschaft, mich ständig weiterzuentwickeln, mit. Für ein erstes Kennenlernen oder um über potenzielle Anstellungen zu sprechen, erreichen Sie mich via E-Mail, Telefon oder Calendly. Lassen Sie uns gemeinsam herausfinden, wie wir zusammenarbeiten können.',
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
		_id: '658ef4b9f0e9b6a1ddc52e1d',
		name: 'Baufachbetrieb Müller',
		imgSrc:
			'https://res.cloudinary.com/drpmdiapv/image/upload/v1703765625/patrick.pavliuchik.com/mueller-screen_rlpg13.png',
		stack: ['React', 'SASS', 'Firebase', 'Cloudinary'],
		githubLink: 'https://github.com/Pascha-404/business-mueller',
		liveLink: 'https://www.fliesenleger-mueller.de/',
		yearCreated: 2023,
		en: {
			role: 'Full-stack Developer',
			task: 'Develop a user-friendly, one-page application for a local business to replace their outdated webpage',
			description:
				'This project involved creating a new web presence for Baufachbetrieb Müller, focusing on user experience and functionality. The main feature was a form that sends information to the business and simultaneously forwards a copy to the user.',
			longDescription:
				"The project required a complete overhaul of the existing web presence. The application was designed to be simple yet effective, ensuring ease of navigation for users. Key features included a contact form, business information display, and integration of the business's branding elements.",
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
				{ category: 'Frontend', detail: ['React', 'SASS', 'reCaptcha'] },
				{ category: 'Backend', detail: ['Firebase Functions', 'Firebase Firestore'] },
				{ category: 'Deployment', detail: ['Cloudinary', 'Strato'] },
			],
		},
		de: {
			role: 'Full-Stack-Entwickler',
			task: 'Entwicklung einer benutzerfreundlichen, einseitigen Anwendung für ein lokales Unternehmen, um deren veraltete Webseite zu ersetzen',
			description:
				'Dieses Projekt umfasste die Erstellung einer neuen Webpräsenz für Baufachbetrieb Müller, mit Fokus auf Benutzererfahrung und Funktionalität. Das Hauptmerkmal war ein Formular, das Informationen an das Unternehmen sendet und gleichzeitig eine Kopie an den Benutzer weiterleitet.',
			longDescription:
				'Das Projekt erforderte eine vollständige Überarbeitung der bestehenden Webpräsenz. Die Anwendung wurde einfach, aber effektiv gestaltet, um eine leichte Navigation für die Benutzer zu gewährleisten. Zu den Hauptmerkmalen gehörten ein Kontaktformular, die Anzeige von Geschäftsinformationen und die Integration von Branding-Elementen des Unternehmens.',
			challenges: [
				{
					data: 'Gestaltung einer benutzerfreundlichen und optisch ansprechenden Schnittstelle, anpassbar an verschiedene Bildschirmgrößen.',
				},
				{
					data: 'Implementierung einer Backend-Lösung für das Formular zur sicheren Verarbeitung und Übermittlung von Daten sowohl an das Unternehmen als auch an den Benutzer.',
				},
			],
			approach: [
				{
					header: 'Technologie-Stack',
					data: 'Durchführung einer gründlichen Analyse der Anforderungen des Kunden und der Einschränkungen ihrer bestehenden Webseite.',
				},
				{
					header: 'Frontend-Entwicklung',
					data: 'Entwurf eines responsiven Layouts mit React und SASS, um die Kompatibilität über verschiedene Geräte hinweg zu gewährleisten.',
				},
				{
					header: 'Backend-Entwicklung',
					data: 'Entwicklung eines sicheren Backends mit Firebase Functions für E-Mail-Auslöser und Firestore für das Datenbankmanagement.',
				},
				{
					header: 'Testen und Qualitätssicherung',
					data: 'Implementierung von client-basiertem reCaptcha für zusätzliche Sicherheit.',
				},
			],
			results: [
				{
					data: 'Lieferung einer hochfunktionalen, responsiv und ästhetisch ansprechenden Webanwendung.',
				},
				{
					data: 'Steigerung der Benutzerbindung und Zufriedenheit durch eine intuitive Schnittstelle und schnelle Ladezeiten.',
				},
				{
					data: 'Verbesserung der Online-Präsenz des Kunden, was zu besserer Geschäftssichtbarkeit und potenziellem Kundenwachstum führte.',
				},
			],
			technology: [
				{ category: 'Frontend', detail: ['React', 'SASS', 'reCaptcha'] },
				{ category: 'Backend', detail: ['Firebase Functions', 'Firebase Firestore'] },
				{ category: 'Bereitstellung', detail: ['Cloudinary', 'Strato'] },
			],
		},
	},
	{
		_id: '658ef4bbf0e9b6a1ddc52e1e',
		name: 'Goksenia Portfolio',
		imgSrc: null,
		stack: [
			'HTML',
			'CSS',
			'JavaScript',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Cloudinary',
		],
		githubLink: 'https://github.com/Pascha-404/goksenia-portfolio-homepage',
		liveLink: 'https://patrick.pavliuchik.com/goksenia',
		yearCreated: 2021,
		en: {
			role: 'Full-Stack Developer',
			task: 'Create a portfolio website for Kseniia Pavliuchik, a UI/UX Designer, that showcases her skills and projects in an intuitive and engaging way.',
			description:
				'This project was about developing a digital portfolio for Kseniia Pavliuchik, highlighting her expertise in UI/UX design. The website featured a main page with her professional profile and a separate section for detailed case studies.',
			longDescription:
				"The project's focus was on demonstrating Kseniia's talents in UI/UX design through a platform that was visually appealing and user-friendly. A critical aspect was the custom CMS development, enabling efficient management of portfolio content.",
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
		de: {
			role: 'Full-Stack-Entwickler',
			task: 'Erstellen einer Portfolio-Website für Kseniia Pavliuchik, eine UI/UX-Designerin, die ihre Fähigkeiten und Projekte auf intuitive und ansprechende Weise präsentiert.',
			description:
				'Dieses Projekt umfasste die Entwicklung eines digitalen Portfolios für Kseniia Pavliuchik, mit dem Schwerpunkt auf UI/UX-Design. Die Website bot eine Hauptseite mit ihrem beruflichen Profil und einen separaten Bereich für detaillierte Fallstudien.',
			longDescription:
				"Der Fokus des Projekts lag darauf, Kseniia's Talent im UI/UX-Design durch eine Plattform, die sowohl visuell ansprechend als auch benutzerfreundlich ist, zu demonstrieren. Ein wesentlicher Aspekt war die Entwicklung eines benutzerdefinierten CMS, das eine effiziente Verwaltung des Portfolioinhalts ermöglichte.",
			challenges: [
				{
					data: 'Erstellung eines responsiven Designs für verschiedene Bildschirmgrößen, um flüssige Übergänge und eine angenehme Benutzererfahrung zu gewährleisten.',
				},
				{
					data: 'Entwicklung eines benutzerdefinierten CMS mit vollständigen CRUD-Operationen und Funktionen zum Verwalten von Projekten auf der Hauptseite, entwickelt mit JavaScript.',
				},
				{
					data: 'Integration eines Systems zur Verwaltung von Datei-Uploads und Inhaltsaktualisierungen über das CMS.',
				},
			],
			approach: [
				{
					header: 'Frontend-Entwicklung',
					data: 'Entwicklung des Frontends mit HTML, CSS und JavaScript, mit Schwerpunkt auf Responsivität für verschiedene Geräte.',
				},
				{
					header: 'Backend-Entwicklung',
					data: 'Einsatz von Node.js und Express.js, mit Fokus auf Sicherheitsverbesserungen mit sanitize-html und helmet. Implementierung der Benutzerauthentifizierung mit Passport und Auswahl von MongoDB zur Speicherung von Projekt- und Benutzerdaten.',
				},
				{
					header: 'Bereitstellung',
					data: 'Bereitstellung der Anwendung auf einem DigitalOcean-Server, Verwendung eines Reverse-Nginx-Proxys für zuverlässige Konnektivität.',
				},
			],
			results: [
				{
					data: 'Erfolgreiche Bereitstellung einer funktionalen und responsiv Portfolio-Website mit integriertem benutzerdefinierten CMS.',
				},
				{
					data: "Das CMS ermöglichte eine effektive Präsentation und Aktualisierung von Kseniia's Arbeit, was ihre professionelle Online-Präsenz verbesserte.",
				},
				{
					data: 'Die Website wurde für ihr benutzerfreundliches Design und ihre effizientes CMS gut aufgenommen.',
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
				{ category: 'Bereitstellung', detail: ['DigitalOcean', 'Nginx'] },
			],
		},
	},

	{
		_id: '658ef4bbf0e9b6a1ddc52e1f',
		name: 'WebChatApp',
		imgSrc: null,
		stack: ['React', 'CSS', 'Material UI', 'Firebase'],
		githubLink: 'https://github.com/Pascha-404/webChatApp',
		liveLink: 'https://patrick.pavliuchik.com/webchatapp',
		yearCreated: 2021,
		en: {
			role: 'Full-Stack Developer',
			task: 'Develop a fully functional web chat application with a range of familiar chat features.',
			description:
				'This project was focused on creating a comprehensive chat application incorporating key functionalities of modern chat platforms. Initially envisioned as an extensive project, it was later refined to an MVP to showcase crucial functionalities in a more manageable scope.',
			longDescription:
				"The WebChatApp was conceived as a platform to demonstrate my capabilities in developing a full-fledged chat application. However, recognizing the project's demands, I reevaluated and streamlined it to focus on core features. This included a robust registration system, an engaging chat interface with emoticons, and functionalities to manage contacts and groups.",
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
					data: 'The application, while not responsive, effectively highlights my skill in developing functionality-focused web applications.',
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
		de: {
			role: 'Full-Stack-Entwickler',
			task: 'Entwicklung einer voll funktionsfähigen Web-Chat-Anwendung mit einer Reihe vertrauter Chat-Funktionen.',
			description:
				'Dieses Projekt konzentrierte sich auf die Erstellung einer umfassenden Chat-Anwendung, die wichtige Funktionen moderner Chat-Plattformen integriert. Ursprünglich als umfangreiches Projekt konzipiert, wurde es später zu einem MVP verfeinert, um entscheidende Funktionen in einem handhabbaren Rahmen zu zeigen.',
			longDescription:
				'Die WebChatApp wurde als Plattform konzipiert, um meine Fähigkeiten in der Entwicklung einer umfassenden Chat-Anwendung zu demonstrieren. Die Anforderungen des Projekts wurden jedoch neu bewertet und auf Kernfunktionen konzentriert. Dies umfasste ein robustes Registrierungssystem, eine ansprechende Chat-Schnittstelle mit Emoticons und Funktionen zum Verwalten von Kontakten und Gruppen.',
			challenges: [
				{
					data: 'Schnelle Gestaltung eines ansprechenden Front-Ends für größere Bildschirme mit einem CSS-Framework.',
				},
				{
					data: 'Integration verschiedener Authentifizierungsmethoden, einschließlich GitHub und Google, mit Firebase Authentication.',
				},
				{
					data: 'Entwicklung einer Echtzeit-Chat-Funktionalität unter Verwendung der Firebase Realtime Database API.',
				},
			],
			approach: [
				{
					header: 'Frontend-Entwicklung',
					data: 'Verwendung von React zusammen mit Material UI und CSS, um eine benutzerfreundliche Oberfläche für große Bildschirme zu erstellen.',
				},
				{
					header: 'Backend-Entwicklung',
					data: 'Entwicklung des Backends mit Firebase, mit besonderem Schwerpunkt auf der Implementierung verschiedener Authentifizierungsoptionen. Wichtige Funktionen wie Chat-Funktionalität wurden mit der Firebase Realtime Database ermöglicht, um Echtzeit-Kommunikationsfähigkeiten zu gewährleisten.',
				},
			],
			results: [
				{
					data: 'Erfolgreicher Aufbau eines funktionalen MVP, das wesentliche Merkmale einer Chat-Anwendung zeigt.',
				},
				{
					data: 'Demonstration meiner Fähigkeit, Firebase sowohl für Authentifizierung als auch für Echtzeit-Datenverwaltung zu nutzen.',
				},
				{
					data: 'Die Anwendung, obwohl nicht responsiv, hebt meine Fähigkeit hervor, funktionalitätsorientierte Webanwendungen zu entwickeln.',
				},
			],
			technology: [
				{ category: 'Frontend', detail: ['React', 'Material UI', 'CSS'] },
				{
					category: 'Backend',
					detail: ['Firebase Authentication', 'Firebase Realtime Database'],
				},
				{ category: 'Bereitstellung', detail: ['Firebase'] },
			],
		},
	},
	{
		_id: '658ef4bbf0e9b6a1ddc52e20',
		name: 'Mood Booster',
		imgSrc:
			'https://res.cloudinary.com/drpmdiapv/image/upload/v1703419049/patrick.pavliuchik.com/moodBooster-overview_r1mdz8.png',
		stack: ['HTML', 'CSS'],
		githubLink: 'https://github.com/id-TechTeam/Mood-Booster/tree/master',
		liveLink: 'https://devpost.com/software/mood-booster-r0seax',
		yearCreated: 2020,
		en: {
			role: 'Frontend Developer',
			task: 'Implement the design of a digital journal in HTML and CSS for a Hackathon project focused on mental health.',
			description:
				"The project, developed for a Hackathon with the theme of 'Mental Health,' aimed to create an MVP of a digital journal. The journal was designed to help users uplift their mood through various mediums like visuals, poems, dad jokes, and music.",
			longDescription:
				"Mood Booster was conceived as a digital aid for mental wellbeing, offering personalized mood enhancement options. My involvement began just two weeks after I started learning web development, presenting both a challenge and an opportunity for rapid growth. My primary responsibility was to bring the UI/UX designer's vision to life through HTML and CSS, ensuring the application was both functional and visually appealing.",
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
		de: {
			role: 'Frontend-Entwickler',
			task: 'Design Implementierung eines digitalen Tagebuchs in HTML und CSS für ein Hackathon-Projekt, das sich auf psychische Gesundheit konzentriert.',
			description:
				"Das Projekt, entwickelt für einen Hackathon zum Thema 'Psychische Gesundheit', zielte darauf ab, ein MVP eines digitalen Tagebuchs zu erstellen. Das Tagebuch wurde entworfen, um den Benutzern zu helfen, ihre Stimmung durch verschiedene Medien wie Bilder, Gedichte, Vaterwitze und Musik zu verbessern.",
			longDescription:
				'Mood Booster wurde als digitale Hilfe für das mentale Wohlbefinden konzipiert und bot Optionen zur Stimmungsverbesserung. Meine Beteiligung begann nur zwei Wochen, nachdem ich mit der Webentwicklung begonnen hatte, was sowohl eine Herausforderung als auch eine Gelegenheit für schnelles Wachstum darstellte. Meine Hauptaufgabe war es, die Vision det UI/UX-Designerin durch HTML und CSS zum Leben zu erwecken und sicherzustellen, dass die Anwendung sowohl funktional als auch optisch ansprechend war.',
			challenges: [
				{
					data: 'Schnelle Einarbeitung in die Frontendentwicklung und effektive Implementierung eines vorgegebenen Designs.',
				},
				{
					data: 'Effiziente Zusammenarbeit innerhalb eines vielfältigen Teams von vier Mitgliedern, einschließlich einer weiteren Frontend-Entwicklerin, einer UI/UX-Designerin und eines Backend-Entwicklers.',
				},
				{
					data: 'Teilnahme an einem Online-Hackathon, der nicht nur Entwicklung, sondern auch die Vorbereitung einer überzeugenden Projektpräsentation beinhaltete.',
				},
			],
			approach: [
				{
					header: 'Frontend-Entwicklung',
					data: 'Einstieg in die Frontend-Entwicklung, Schwerpunkt auf der Strukturierung von HTML und Styling mit CSS, um ein responsiv und ansprechendes Design zu erreichen.',
				},
				{
					header: 'Teamzusammenarbeit',
					data: 'Enge Zusammenarbeit mit dem Team, Beitrag zum Entwicklungsprozess und Gewährleistung einer nahtlosen Integration von Frontend- und Backend-Elementen.',
				},
				{
					header: 'Projektpräsentation',
					data: 'Erstellung eines Produktvideos mit Voiceover, um die Anwendung während der Hackathon-Präsentation effektiv vorzustellen.',
				},
			],
			results: [
				{
					data: 'Erfolgreiche Implementierung eines responsive Designs, ein großer persönlicher Erfolg nur zwei Wochen nach Beginn meiner Webentwicklungslaufbahn.',
				},
				{
					data: 'Die Anwendung verfügte über eine Tagebuchfunktion und eine Vielzahl von Stimmungsverbesserungsoptionen, was das Potenzial digitaler Tools zur Unterstützung der psychischen Gesundheit demonstrierte.',
				},
				{
					data: 'Das Projekt wurde beim Hackathon gut angenommen und zeigte die Effektivität unserer Teamarbeit und die Relevanz der Anwendung für das Thema.',
				},
			],
			technology: [
				{ category: 'Frontend', detail: ['HTML', 'CSS', 'JavaScript'] },
				{ category: 'Backend', detail: ['Node.js', 'Mongoose', 'Express', 'Passport'] },
				{ category: 'Bereitstellung', detail: ['Heroku'] },
			],
		},
	},
];

export { static_sections, projects };
