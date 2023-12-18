'use client';

import { iconArrow } from '../../../public/icons';

import Image from 'next/image';
import ProjectCard from '../ProjectCard';

import { IStaticContent } from '@/ts/types';
import fallbackContent from './fallbackContent';
import { textMapFunction } from '@/utils/client';
import { useLanguage } from '@/utils/client';

import styles from './ProjectsSection.module.scss';

function ProjectsSection({
	staticContent,
}: {
	staticContent: IStaticContent;
}): JSX.Element {
	const { currentLanguage } = useLanguage();
	const headerText = textMapFunction({
		objectArray: staticContent.header || fallbackContent.header,
		currentLanguage,
		stylingClass: 'colorHighlight',
		styles,
	});
	const navButtonText =
		staticContent.navigation_btn?.[currentLanguage] ||
		fallbackContent.navigation_btn[currentLanguage];
	const arrowAltText =
		staticContent.arrow_alt?.[currentLanguage] ||
		fallbackContent.arrow_alt[currentLanguage];
	return (
		<section id='projectsSection' className={styles.projectsSection}>
			<h3>{headerText}</h3>
			<ProjectCard
				id='1'
				name='Test-Project'
				role='Full-Stack Developer'
				stack={['React', 'Next.js', 'AWS', 'Node.js']}
				tasks={['Task', 'Task1', 'Task2']}
				liveLink='/'
				description='A full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented user authentication, product listings, and cart functionality.'
				githubLink='https://github.com/Pascha-404/my-portfolio-website'
			/>
			<ProjectCard
				id='2'
				name='Test-Project'
				role='Full-Stack Developer'
				stack={['React', 'Next.js', 'AWS', 'Node.js']}
				tasks={['Task', 'Task1', 'Task2']}
				liveLink='/'
				description='A full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented user authentication, product listings, and cart functionality.'
				githubLink='https://github.com/Pascha-404/my-portfolio-website'
			/>
			<ProjectCard
				id='3'
				name='Test-Project'
				role='Full-Stack Developer'
				stack={['React', 'Next.js', 'AWS', 'Node.js']}
				tasks={['Task', 'Task1', 'Task2']}
				liveLink='/'
				description='A full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented user authentication, product listings, and cart functionality.'
				githubLink='https://github.com/Pascha-404/my-portfolio-website'
			/>

			<a className={styles.aboutLink} href='/'>
				{navButtonText}
			</a>

			<div className={styles.imgWrapper}>
				<Image src={iconArrow} alt={arrowAltText} />
			</div>
		</section>
	);
}

export default ProjectsSection;
