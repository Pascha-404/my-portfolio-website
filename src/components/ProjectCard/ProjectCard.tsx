'use client';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import defaultImg from '../../../public/projectCard-default-img.jpeg';
import { TechType } from '@/ts/types';

import Image from "next/legacy/image";
import TechIcon from '../TechIcon';

import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
	readonly id: string;
	imgSrc?: string | null;
	name: string;
	role: string;
	stack: TechType[];
	task: string;
	description: string;
	githubLink: string;
	liveLink?: string;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
	const img = props.imgSrc || defaultImg;
	const { id, role, task, stack, name, description, liveLink, githubLink } = props;

	return (
		<article className={styles.projectCard}>
			<div className={styles.cardFirstHalf}>
				<div className={styles.imgWrapper}>
					<Link href={`/project/${id}`}>
						<Image
							src={img}
							width='455'
							height='172'
							objectFit='cover'
							alt='Project Preview'
						/>
					</Link>
				</div>

				<div className={styles.cardDetails}>
					<p className={styles.weightHighlight}>Role:</p>
					<p>{role}</p>
					<p className={styles.weightHighlight}>Tasks:</p>
					<p>{task}</p>
					<p className={styles.weightHighlight}>Stack:</p>
					<p>{stack.join(', ')}</p>
				</div>

				<div className={styles.cardLive}>
					<div className={styles.techLogos}>
						{stack.map(tech => (
							<TechIcon key={`techIcon-${uuid()}`} technology={tech} />
						))}
					</div>

					{liveLink && <a href={liveLink}>visit live product</a>}
				</div>
			</div>

			<div className={styles.cardSecondHalf}>
				<Link href={`/project/${id}`}>
					<h4>project: {name}</h4>
				</Link>
				<p>{description}</p>
				<Link href={githubLink}>[github link]</Link>
			</div>
		</article>
	);
}

export default ProjectCard;
