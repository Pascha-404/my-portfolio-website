import styles from './ProjectCard.module.scss';
import defaultImg from '../../../public/projectCard-default-img.png'

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
	const img = props.imgSrc || defaultImg
	return <div className={styles.projectCard}></div>;
}

export default ProjectCard;
