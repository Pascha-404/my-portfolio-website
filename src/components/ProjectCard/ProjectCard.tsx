import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
	id: string;
	imgSrc: string;
	name: string;
	role: string;
	stack: string[];
	tasks: string[];
	description: string;
	githubLink: string;
	liveLink?: string;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
	return <div className={styles.projectCard}></div>;
}

export default ProjectCard;
