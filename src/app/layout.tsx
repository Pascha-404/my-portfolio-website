import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import '../sass/main.scss';
import { getStaticContent } from '@/utils/server';
import { INavbarContent } from '@/ts/types';
import { LanguageProvider } from '@/utils/client';

export const metadata: Metadata = {
	title: 'Patrick Pavliuchik',
	description:
		"Welcome to the online portfolio of Patrick Pavliuchik, a passionate Full-Stack Developer specializing in React and Next.js. Explore a showcase of my web development projects, demonstrating creativity, innovation, and a commitment to crafting seamless, user-friendly experiences. Let's connect and collaborate on your next digital journey.",
};

async function RootLayout({ children }: { children: React.ReactNode }) {
	const staticContent = await getStaticContent();
	const navbarContent: INavbarContent = staticContent.find(
		(obj: INavbarContent) => obj.section_name === 'navbar'
	);

	return (
		<html lang='en'>
			<body id='root'>
				<LanguageProvider>
					<Navbar staticContent={navbarContent} />
					{children}
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	);
}

export default RootLayout;
