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
			<div className={styles.myExperience}></div>
			<div className={styles.letsChat}></div>
		</section>
	);
}

export default AboutSection;
