'use client';

import Image from 'next/legacy/image';
import SectionTransition from '../SectionTransition';
import ProjectCard from '../ProjectCard';
import NavigationButton from '../NavigationButton';

import { iconArrow } from '#/icons';
import fallbackContent from './fallbackContent';

import { IProjectData, IStaticContent } from '@/ts/types';
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
		<SectionTransition>
			<section id='projectsSection' className={styles.projectsSection}>
				<h3>{headerText}</h3>
				{projects.map(project => {
					return (
						<ProjectCard
							key={project._id}
							id={project._id}
							imgSrc={project.imgSrc}
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
				<NavigationButton
					text={navButtonText}
					targetId='aboutSection'
					style='underlined'
				/>
				<div className={styles.imgWrapper}>
					<Image src={iconArrow} alt={arrowAltText} />
				</div>
			</section>
		</SectionTransition>
	);
}

export default ProjectsSection;
