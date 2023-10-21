'use client';
import styles from './ProjectCard.module.scss';
import defaultImg from '../../../public/projectCard-default-img.jpeg';
import { iconReact } from '../../../public/icons';
import Image from 'next/image';

interface ProjectCardProps {
	readonly id: string;
	imgSrc?: string;
	name: string;
	role: string;
	stack: string[];
	tasks: string[];
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
					<p>{props.tasks.join(', ')}</p>
					<p className={styles.weightHighlight}>Stack:</p>
					<p>{props.stack.join(', ')}</p>
				</div>

				<div className={styles.cardLive}>
					<div className={styles.techLogos}>
						{props.stack.map((tech, idx) => (
							<Image key={idx} src={iconReact} alt='tech icon' />
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
