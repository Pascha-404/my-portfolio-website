'use client';

import DataListCard from '../DataListCard';
import DownloadButton from '../DownloadButton';

import { IAboutSectionContent } from '@/ts/types';
import { useLanguage } from '@/utils/LanguageContext';

import styles from './AboutSection.module.scss';
import textMapFunction  from '@/utils/textMapFunction';

function AboutSection({
	staticContent,
}: {
	staticContent: IAboutSectionContent;
}): JSX.Element {
	const { currentLanguage } = useLanguage();
	const headerText = textMapFunction({
		objectArray: staticContent.header!,
		currentLanguage,
		stylingClass: 'colorHighlight',
		styles,
	});
	return (
		<section id='aboutSection' className={styles.aboutSection}>
			<div className={styles.aboutMe}>
				<h5>
					{headerText}
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
					<DownloadButton text={'[download my cv as pdf]'} id='resume' />

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

			<div className={styles.letsChat}></div>
		</section>
	);
}

export default AboutSection;
