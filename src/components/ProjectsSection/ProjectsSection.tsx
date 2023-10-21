import ProjectCard from '../ProjectCard';
import styles from './ProjectsSection.module.scss';

function ProjectsSection(): JSX.Element {
	return (
		<section className={styles.projectsSection}>
			<h3>
				My <span className={styles.colorHighlight}>projects</span>
			</h3>
			<ProjectCard
				id='1'
				name='Test-Project'
				role='Full-Stack Developer'
				stack={['React', 'Next.js', 'Firebase', 'Node.js']}
				tasks={['Task', 'Task1', 'Task2']}
				description='A full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented user authentication, product listings, and cart functionality.'
				githubLink='https://github.com/Pascha-404/my-portfolio-website'
			/>
		</section>
	);
}

export default ProjectsSection;
