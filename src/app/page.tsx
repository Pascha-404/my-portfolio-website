import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';

import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.main}>
			<HeroSection />
			<ProjectsSection />
		</main>
	);
}
