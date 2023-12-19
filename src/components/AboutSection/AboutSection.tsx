'use client';

import { v4 as uuid } from 'uuid';

import DataListCard from '../DataListCard';
import DownloadButton from '../DownloadButton';

import { IAboutSectionContent } from '@/ts/types';
import { useLanguage } from '@/utils/client';
import { textMapFunction } from '@/utils/client';

import styles from './AboutSection.module.scss';

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
	const descriptionText = staticContent.description?.[currentLanguage];
	const skillsHeaderText = textMapFunction({
		objectArray: staticContent.skills.header!,
		currentLanguage,
		stylingClass: '',
		styles,
	});
	const experienceHeaderText = textMapFunction({
		objectArray: staticContent.experience.header!,
		currentLanguage,
		stylingClass: 'colorHighlight',
		styles,
	});
	const downloadButtonText = staticContent.experience.pdfLink[currentLanguage];

	return (
		<section id='aboutSection' className={styles.aboutSection}>
			<div className={styles.aboutMe}>
				<h5>{headerText}</h5>

				<p>{descriptionText}</p>

				<div className={styles.dataWrapper}>
					<p>{skillsHeaderText}:</p>

					<div className={styles.dataCardWrapper}>
						<DataListCard
							type='home_skill'
							header='frontend'
							data={staticContent.skills.frontend[currentLanguage]}
						/>
						
						<DataListCard
							type='home_skill'
							header='backend'
							data={staticContent.skills.backend[currentLanguage]}
						/>
					</div>
				</div>
			</div>

			<div className={styles.myExperience}>
				<h5>{experienceHeaderText}</h5>

				<div className={styles.dataWrapper}>
					<DownloadButton text={`[${downloadButtonText}]`} id='resume' />

					<div className={styles.dataCardWrapper}>
						{staticContent.experience.companys[currentLanguage].map(company => {
							return (
								<DataListCard
									key={`AboutSection-Company-${uuid()}`}
									type='home_experience'
									header={company.company_name}
									role={company.company_role}
									timeRange={company.time}
									data={company.skills}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
