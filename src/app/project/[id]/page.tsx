import Image from 'next/image';
import styles from './page.module.scss';
import defaultImage from '../../../../public/projectCard-default-img.jpeg';
import DataListCard from '@/components/DataListCard';

interface ProjectParams {
	params: { id: string };
}

function Project({ params }: ProjectParams): JSX.Element {
	return (
		<main className={styles.main}>
			<h1>
				<span className={styles.uppercase}>project:</span>{' '}
				<span className={styles.colorHighlight}>xy</span>
			</h1>
			<div className={styles.roleDateWrapper}>
				<p>role</p>
				<p>date</p>
			</div>

			<Image src={defaultImage} alt='Default image showing two phones' priority className={styles.projectImage} />
			
			<div className={styles.overviewWrapper}>
				<h2 className={styles.uppercase}>project overview</h2>
				<p>
					I undertook the development of a fullstack web application for a client in the
					healthcare industry. The goal was to create a robust and user-friendly platform
					that allowed healthcare providers to manage patient data securely and
					efficiently. This case study outlines the key aspects of this project.
				</p>
			</div>

			<div className={styles.challengesWrapper}>
				<DataListCard
					type='project_bulletList'
					header='challenges'
					data={[
						{
							data: 'Security and Compliance: Healthcare data must be handled with utmost care due to privacy regulations. Ensuring data security and compliance with HIPAA standards was a primary challenge.',
						},
						{
							data: 'Complex Data Structure: The application needed to handle a complex database structure that included patient records, medical history, appointment scheduling, and billing information.',
						},
						{
							data: 'User-Friendly Interface: It was crucial to design an intuitive user interface for healthcare professionals who may not be tech-savvy, ensuring easy navigation and data input.',
						},
					]}
				/>
			</div>

			<div className={styles.approachWrapper}>
				<DataListCard
					type='project_highlightList'
					header='approach'
					data={[
						{
							header: 'Technology Stack',
							data: 'I chose a technology stack that included React for the frontend and Node.js for the backend, ensuring a modern and scalable architecture.',
						},
						{
							header: 'User Authentication',
							data: 'Implemented secure user authentication with JWT tokens to protect patient data and meet HIPAA compliance requirements.',
						},
						{
							header: 'Database Design',
							data: 'Designed a relational database schema to efficiently store and retrieve patient information, while maintaining data integrity.',
						},
						{
							header: 'Frontend Development',
							data: 'Created a responsive and user-friendly frontend using React, incorporating features like patient record management, appointment scheduling, and billing.',
						},
						{
							header: 'Backend Development',
							data: 'Developed the backend using Node.js and Express, implementing RESTful APIs for data retrieval and manipulation.',
						},
						{
							header: 'Testing and Quality Assurance',
							data: "Conducted thorough testing, including unit tests and end-to-end testing, to ensure the application's reliability and security.",
						},
					]}
				/>
			</div>
			
			<div className={styles.resultsWrapper}>
				<DataListCard
					type='project_bulletList'
					header='results'
					data={[
						{
							data: 'Security Compliance: The application successfully met HIPAA compliance standards, ensuring patient data security.',
						},
						{
							data: 'Efficient Data Management: Healthcare providers reported a significant improvement in managing patient data, resulting in time and cost savings.',
						},
						{
							data: 'Positive User Feedback: Users praised the user-friendly interface, which led to higher user adoption rates.',
						},
					]}
				/>
			</div>

			<div className={styles.technologysWrapper}>
				<h2 className={styles.uppercase}>technologies used</h2>
				<div>
					<p>Frontend: React, Redux</p>
					<p>Backend: Node.js, Express</p>
					<p>Database: PostgreSQL</p>
					<p>User Authentication: JWT</p>
					<p>RESTful API Design</p>
					<p>Testing: Jest, Supertest</p>
					<p>Deployment: Docker, AWS</p>
				</div>
			</div>
		</main>
	);
}

export default Project;
