'use client';
import { v4 as uuid } from 'uuid';
import defaultImg from '../../../public/projectCard-default-img.jpeg';
import { TechType } from '@/ts/types';

import Image from 'next/image';
import TechIcon from '../TechIcon';

import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
	readonly id: string;
	imgSrc?: string;
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
	return (
		<article className={styles.projectCard}>
			<div className={styles.cardFirstHalf}>
				<div className={styles.imgWrapper}>
					<Image src={img} alt='Project Preview' />
				</div>

				<div className={styles.cardDetails}>
					<p className={styles.weightHighlight}>Role:</p>
					<p>{props.role}</p>
					<p className={styles.weightHighlight}>Tasks:</p>
					<p>{props.task}</p>
					<p className={styles.weightHighlight}>Stack:</p>
					<p>{props.stack.join(', ')}</p>
				</div>

				<div className={styles.cardLive}>
					<div className={styles.techLogos}>
						{props.stack.map(tech => (
							<TechIcon key={`techIcon-${uuid()}`} technology={tech} />
						))}
					</div>

					{props.liveLink && <a href={props.liveLink}>visit live product</a>}
				</div>
			</div>

			<div className={styles.cardSecondHalf}>
				<h4>project: {props.name}</h4>
				<p>{props.description}</p>
				<a href={props.githubLink}>[github link]</a>
			</div>
		</article>
	);
}

export default ProjectCard;
