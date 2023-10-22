import { iconArrow } from '../../../public/icons';

import Image from 'next/image';
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
				stack={['React', 'Next.js', 'AWS', 'Node.js']}
				tasks={['Task', 'Task1', 'Task2']}
				liveLink='/'
				description='A full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented user authentication, product listings, and cart functionality.'
				githubLink='https://github.com/Pascha-404/my-portfolio-website'
			/>
			<ProjectCard
				id='2'
				name='Test-Project'
				role='Full-Stack Developer'
				stack={['React', 'Next.js', 'AWS', 'Node.js']}
				tasks={['Task', 'Task1', 'Task2']}
				liveLink='/'
				description='A full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented user authentication, product listings, and cart functionality.'
				githubLink='https://github.com/Pascha-404/my-portfolio-website'
			/>
			<ProjectCard
				id='3'
				name='Test-Project'
				role='Full-Stack Developer'
				stack={['React', 'Next.js', 'AWS', 'Node.js']}
				tasks={['Task', 'Task1', 'Task2']}
				liveLink='/'
				description='A full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented user authentication, product listings, and cart functionality.'
				githubLink='https://github.com/Pascha-404/my-portfolio-website'
			/>

			<a className={styles.aboutLink} href='/'>
				more about me and my experience
			</a>

			<div className={styles.imgWrapper}>
				<Image src={iconArrow} alt='Yellow arrow pointing downwards' />
			</div>
		</section>
	);
}

export default ProjectsSection;
