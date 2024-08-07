'use client';

import Image from 'next/legacy/image';
import { CldImage } from 'next-cloudinary';
import PageTransition from '../PageTransition';
import DataListCard from '@/components/DataListCard';

import defaultImage from '#/projectCard-default-img.jpeg';
import { IProjectData } from '@/ts/types';
import { useLanguage } from '@/utils/client';

import styles from './ProjectPage.module.scss';
import NavigationButton from '../NavigationButton';

interface ProjectPageProps {
	projectData: IProjectData;
}

function ProjectPage({ projectData }: ProjectPageProps): JSX.Element {
	const { currentLanguage } = useLanguage();
	const { name, imgSrc, githubLink, liveLink, yearCreated } = projectData;
	const { role, longDescription, challenges, approach, results, technology } =
		projectData[currentLanguage];

	return (
		<PageTransition>
			<main className={styles.main}>
				<h1>
					<span className={styles.uppercase}>project:</span>{' '}
					<span className={styles.colorHighlight}>{name}</span>
				</h1>
				<div className={styles.roleDateWrapper}>
					<p>{role}</p>
					<p>{yearCreated}</p>
				</div>

				<div className={styles.projectImageWrapper}>
					{imgSrc ? (
						<CldImage
							src={imgSrc}
							width='1250'
							height='600'
							alt='Project Screenshot'
							priority
						/>
					) : (
						<Image
							src={defaultImage}
							alt='Default image showing two phones'
							priority
							objectFit='cover'
						/>
					)}
				</div>

				<div className={styles.linksWrapper}>
					<NavigationButton
						href={githubLink}
						style='uppercaseFatBlue'
						text='[github link]'
					/>
					{liveLink && (
						<NavigationButton href={liveLink} style='uppercaseFatBlue' text='Live link' />
					)}
				</div>

				<div className={styles.overviewWrapper}>
					<h2 className={styles.uppercase}>project overview</h2>
					<p>{longDescription}</p>
				</div>

				<div className={styles.challengesWrapper}>
					<DataListCard type='project_bulletList' header='challenges' data={challenges} />
				</div>

				<div className={styles.approachWrapper}>
					<DataListCard type='project_highlightList' header='approach' data={approach} />
				</div>

				<div className={styles.resultsWrapper}>
					<DataListCard type='project_bulletList' header='results' data={results} />
				</div>

				<div className={styles.technologysWrapper}>
					<h2 className={styles.uppercase}>technologies used</h2>
					<div>
						{technology.map((kind, idx) => (
							<p key={`project-technology-${idx}`}>
								{kind.category}: {kind.detail.join(', ')}
							</p>
						))}
					</div>
				</div>
			</main>
		</PageTransition>
	);
}

export default ProjectPage;
