'use client';

import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

import {
	IHeroSectionContent,
	IStaticContent,
	IAboutSectionContent,
	IProjectData,
} from '@/ts/types';

import styles from './HomePage.module.scss';

function HomePage({
	staticContent,
}: {
	staticContent: {
		heroContent: IHeroSectionContent;
		projectsContent: IStaticContent;
		projectsData: IProjectData[];
		aboutContent: IAboutSectionContent;
		contactContent: IStaticContent;
	};
}) {
	const { heroContent, projectsData, aboutContent, contactContent, projectsContent } =
		staticContent;
	return (
		<PageTransition>
			<main className={styles.main}>
				<HeroSection staticContent={heroContent} />
				<ProjectsSection staticContent={projectsContent} projects={projectsData} />
				<AboutSection staticContent={aboutContent} />
				<ContactSection staticContent={contactContent} />
			</main>
		</PageTransition>
	);
}

export default HomePage;
