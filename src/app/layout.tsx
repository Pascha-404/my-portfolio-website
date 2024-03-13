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
	applicationName: 'Patrick Pavliuchik Portfolio',
	title: 'Patrick Pavliuchik',
	description:
		"Welcome to the online portfolio of Patrick Pavliuchik, a passionate Full-Stack Developer specializing in React and Next.js. Explore a showcase of my web development projects, demonstrating creativity, innovation, and a commitment to crafting seamless, user-friendly experiences. Let's connect and collaborate on your next digital journey.",
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
