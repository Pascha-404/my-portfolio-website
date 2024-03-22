import type { Metadata, Viewport } from 'next';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { IFooterContent, INavbarContent } from '@/ts/types';
import { getContent } from '@/utils/server';
import { LanguageProvider } from '@/utils/client';

import './fonts.css';
import '../sass/main.scss';

export const metadata: Metadata = {
	generator: 'Next.js',
	applicationName: "Patrick Pavliuchik's Portfolio",
	title: 'Patrick Pavliuchik - Web Developer',
	description:
		"Patrick Pavliuchik's portfolio: Specializing in React & Next.js, focused on creating innovative, user-friendly web solutions. Open for entry-level opportunities.",
	keywords: [
		'Software Developer Germany',
		'Web Developer EU',
		'Tech Industry Skills Portfolio',
		'JavaScript Developer',
		'React Developer',
		'Node.js Developer',
		'HTML5 CSS3 Expert',
		'Agile Development Specialist',
		'Responsive Web Design',
		'Full-Stack Developer',
		'Frontend Developer',
		'Backend Developer',
		'Creative Tech Solutions',
		'IT Professional Europe',
		'Hire Tech Talent Germany',
		'Contact Software Engineer',
		'Book Appointment Developer',
	],
	authors: [{ name: 'Patrick Pavliuchik' }],
	creator: 'Patrick Pavliuchik',
	publisher: 'Patrick Pavliuchik',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	category: 'Web Development',
	twitter: {
		card: 'summary_large_image',
		title: 'Patrick Pavliuchik - Web Developer',
		description:
			"Patrick Pavliuchik's portfolio: Specializing in React & Next.js, focused on creating innovative, user-friendly web solutions. Open for entry-level opportunities.",
		images: [
			'https://res.cloudinary.com/drpmdiapv/image/upload/v1711129072/patrick.pavliuchik.com/thumbnail-social_e8obyr.png',
		], // Must be an absolute URL
	},
	openGraph: {
		title: 'Patrick Pavliuchik - Web Developer',
		description: "Patrick Pavliuchik's Portfolio",
		url: 'https://patrick.pavliuchik.com/',
		siteName: "Patrick Pavliuchik's Portfolio",
		images: [
			{
				url: 'https://res.cloudinary.com/drpmdiapv/image/upload/v1711129072/patrick.pavliuchik.com/thumbnail-social_e8obyr.png', // Must be an absolute URL
				width: 800,
				height: 600,
				alt: 'Website Thumbnail',
			},
			{
				url: 'https://res.cloudinary.com/drpmdiapv/image/upload/v1711129072/patrick.pavliuchik.com/thumbnail-social_e8obyr.png', // Must be an absolute URL
				width: 1800,
				height: 1600,
				alt: 'Website Thumbnail',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

async function RootLayout({ children }: { children: React.ReactNode }) {
	const staticContent = await getContent('static_content');
	const projectContent = await getContent('projects');
	const navbarContent: INavbarContent = staticContent.find(
		(obj: INavbarContent) => obj.section_name === 'navbar'
	);
	const footerContent: IFooterContent = staticContent.find(
		(obj: IFooterContent) => obj.section_name === 'footer'
	);

	return (
		<html id='html' lang='en'>
			<body id='root'>
				<LanguageProvider>
					<div id='topScrollContainer' />
					<Navbar staticContent={navbarContent} />
					{children}
					<Footer staticContent={footerContent} />
				</LanguageProvider>
			</body>
		</html>
	);
}

export default RootLayout;
