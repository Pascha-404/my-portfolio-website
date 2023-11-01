import DataListCard from '../DataListCard';
import styles from './AboutSection.module.scss';

function AboutSection(): JSX.Element {
	return (
		<section id='aboutSection' className={styles.aboutSection}>
			<div className={styles.aboutMe}>
				<h5>
					About <span className={styles.colorHighlight}>me</span>
				</h5>

				<p>
					Hi there! I'm a passionate Fullstack Engineer with a knack for turning ideas
					into functional, user-friendly web applications. My journey in the tech world
					began with a strong curiosity for problem-solving and a love for crafting
					digital experiences. Now, I'm on the lookout for exciting junior positions in
					Berlin where I can contribute my skills and grow as a developer.
				</p>

				<div className={styles.dataWrapper}>
					<p>my skills:</p>

					<div className={styles.dataCardWrapper}>
						<DataListCard
							type='home_skill'
							header='frontend'
							data={[
								{ data: 'Proficient in HTML, CSS, and JavaScript.' },
								{
									data: 'Experience with modern frontend frameworks like React and Vue.js.',
								},
								{ data: 'Responsive design and mobile-first development.' },
							]}
						/>
						<DataListCard
							type='home_skill'
							header='backend'
							data={[
								{ data: 'Proficient in HTML, CSS, and JavaScript.' },
								{
									data: 'Experience with modern frontend frameworks like React and Vue.js.',
								},
								{ data: 'Responsive design and mobile-first development.' },
							]}
						/>
					</div>
				</div>
			</div>

			<div className={styles.myExperience}>
				<h5>
					My <span className={styles.colorHighlight}>experience</span>
				</h5>

				<div className={styles.dataWrapper}>
					<a href='/' className={styles.cvDownload}>
						[download my cv in pdf]
					</a>

					<div className={styles.dataCardWrapper}>
						<DataListCard
							type='home_experience'
							header='company name'
							role='role'
							timeRange='2020-2023'
							data={[
								{ data: 'Proficient in HTML, CSS, and JavaScript.' },
								{
									data: 'Experience with modern frontend frameworks like React and Vue.js.',
								},
								{ data: 'Responsive design and mobile-first development.' },
							]}
						/>
						<DataListCard
							type='home_experience'
							header='company name'
							role='role'
							timeRange='2020-2023'
							data={[
								{ data: 'Proficient in HTML, CSS, and JavaScript.' },
								{
									data: 'Experience with modern frontend frameworks like React and Vue.js.',
								},
								{ data: 'Responsive design and mobile-first development.' },
							]}
						/>
					</div>
				</div>
			</div>

			<div className={styles.letsChat}>
				<h5>
					Let's <span className={styles.colorHighlight}>chat?</span>
				</h5>
				<p>
					Whether you have a project in mind, want to discuss potential collaborations, or
					simply want to chat about design and technology, I'm here for it. Feel free to
					reach out by filling out the form below to book a call with me.
				</p>
			</div>
		</section>
	);
}

export default AboutSection;
