import { getStaticContent } from '@/utils';

import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

import styles from './page.module.scss';
import { IHeroSectionContent, IStaticContent, IAboutSectionContent } from '@/ts/types';

async function Home() {
	const staticContent = await getStaticContent();
	const heroContent: IHeroSectionContent = staticContent.find(
		(obj: IHeroSectionContent) => obj.section_name === 'heroSection'
	);
	const projectsContent: IStaticContent = staticContent.find(
		(obj: IStaticContent) => obj.section_name === 'projectsSection'
	);
	const aboutContent: IAboutSectionContent = staticContent.find(
		(obj: IAboutSectionContent) => obj.section_name === 'aboutSection'
	);
	const contactContent: IStaticContent = staticContent.find(
		(obj: IStaticContent) => obj.section_name === 'contactSection'
	);

	return (
		<main className={styles.main}>
			<HeroSection staticContent={heroContent} />
			<ProjectsSection staticContent={projectsContent} />
			<AboutSection staticContent={aboutContent} />
			<ContactSection staticContent={contactContent} />
		</main>
	);
}

export default Home;
