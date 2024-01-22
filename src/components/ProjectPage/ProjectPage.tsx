'use client';

import Image from 'next/image';
import styles from './ProjectPage.module.scss';
import defaultImage from '../../../public/projectCard-default-img.jpeg';
import DataListCard from '@/components/DataListCard';
import { IProjectData } from '@/ts/types';
import { useLanguage } from '@/utils/client';

interface ProjectPageProps {
	projectData: IProjectData;
}

function ProjectPage({ projectData }: ProjectPageProps): JSX.Element {
	const { currentLanguage } = useLanguage();
	const { name, imgSrc, githubLink, liveLink, yearCreated } = projectData;
	const { role, longDescription, challenges, approach, results, technology } =
		projectData[currentLanguage];
	
	return (
		<main className={styles.main}>
			<h1>
				<span className={styles.uppercase}>project:</span>{' '}
				<span className={styles.colorHighlight}>{name}</span>
			</h1>
			<div className={styles.roleDateWrapper}>
				<p>{role}</p>
				<p>{yearCreated}</p>
			</div>

			{imgSrc ? (
				<Image
					src={imgSrc}
					alt='Project Screenshot'
					priority
					className={styles.projectImage}
				/>
			) : (
				<Image
					src={defaultImage}
					alt='Default image showing two phones'
					priority
					className={styles.projectImage}
				/>
			)}

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
	);
}

export default ProjectPage;
