import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';

import '../sass/main.scss';

export const metadata: Metadata = {
	title: 'Patrick Pavliuchik',
	description:
		"Welcome to the online portfolio of Patrick Pavliuchik, a passionate Full-Stack Developer specializing in React and Next.js. Explore a showcase of my web development projects, demonstrating creativity, innovation, and a commitment to crafting seamless, user-friendly experiences. Let's connect and collaborate on your next digital journey.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
