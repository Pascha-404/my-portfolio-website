import { getStaticContent } from '@/utils';

import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

import styles from './page.module.scss';

	
async function Home() {
	const staticContent = await getStaticContent()

	return (
		<main className={styles.main}>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}

export default Home;