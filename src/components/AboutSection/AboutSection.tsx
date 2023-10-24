import styles from './AboutSection.module.scss';

function AboutSection(): JSX.Element {
	return (
		<section className={styles.aboutSection}>
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

				<div className={styles.skills}>
					<p>my skills:</p>

					<div className={styles.skillsContainer}>
						<h6>frontend</h6>

						<ul className={styles.skillsList}>
							<li>Proficient in HTML, CSS, and JavaScript.</li>
							<li>Experience with modern frontend frameworks like React and Vue.js.</li>
							<li>Responsive design and mobile-first development.</li>
						</ul>
					</div>

					<div className={styles.skillsContainer}>
						<h6>backend</h6>

						<ul className={styles.skillsList}>
							<li>Proficient in HTML, CSS, and JavaScript.</li>
							<li>Experience with modern frontend frameworks like React and Vue.js.</li>
							<li>Responsive design and mobile-first development.</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.myExperience}>
				<h5>
					My <span className={styles.colorHighlight}>experience</span>
				</h5>

				<div className={styles.experienceContainer}>
					<a href='/'>download my cv in pdf</a>

					<div className={styles.experienceContainer}>
						<div>
							<div>
								<h6>company name</h6>
								<h6>role</h6>
							</div>
							<p>2020-2023</p>
						</div>

						<ul className={styles.experienceList}>
							<li>Proficient in HTML, CSS, and JavaScript.</li>
							<li>Experience with modern frontend frameworks like React and Vue.js.</li>
							<li>Responsive design and mobile-first development.</li>
						</ul>
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
