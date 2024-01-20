'use client';

import { iconArrow } from '../../../public/icons';

import Image from 'next/image';
import ProjectCard from '../ProjectCard';

import { IProjectData, IStaticContent } from '@/ts/types';
import fallbackContent from './fallbackContent';
import { textMapFunction } from '@/utils/client';
import { useLanguage } from '@/utils/client';

import styles from './ProjectsSection.module.scss';

function ProjectsSection({
	staticContent,
	projects,
}: {
	staticContent: IStaticContent;
	projects: IProjectData[];
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

			{projects.map(project => {
				return (
					<ProjectCard
						key={project._id}
						id={project._id}
						name={project.name}
						role={project[currentLanguage].role}
						stack={project.stack}
						task={project[currentLanguage].task}
						liveLink={project.liveLink ? project.liveLink : undefined}
						description={project[currentLanguage].description}
						githubLink={project.githubLink}
					/>
				);
			})}

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
