'use client';

import HeroImg from '../../../public/patrick-hero-img.png';
import { iconArrow } from '../../../public/icons';

import fallbackContent from './fallbackContent';
import { IHeroSectionContent } from '@/ts/types';

import Image from 'next/image';
import NavigationButton from '../NavigationButton';
import CalendlyButton from '../CalendlyButton';

import styles from './HeroSection.module.scss';
import { useLanguage } from '@/utils/LanguageContext';

function HeroSection({
	staticContent,
}: {
	staticContent: IHeroSectionContent;
}): JSX.Element {
	const { currentLanguage } = useLanguage();
	const headerText = staticContent.header?.[currentLanguage] || fallbackContent.header;
	const subHeaderText =
		staticContent.sub_header?.[currentLanguage] || fallbackContent.sub_header;
	const descriptionText =
		staticContent.description?.[currentLanguage] || fallbackContent.description;
	const fitText = staticContent.fit[currentLanguage] || fallbackContent.fit;
	const navigationBtnText =
		staticContent.navigation_btn?.[currentLanguage] || fallbackContent.navigation_btn;
	const actionBtnText =
		staticContent.action_btn?.[currentLanguage] || fallbackContent.action_btn;
	const imageAltText =
		staticContent.image_alt[currentLanguage] || fallbackContent.image_alt;
	const arrowAltText =
		staticContent.arrow_alt[currentLanguage] || fallbackContent.arrow_alt;

	return (
		<section className={styles.heroSection}>
			<div className={styles.heroFirstHalf}>
				<h1>
					{headerText} <span className={styles.colorHighlight}>Patrick</span>
				</h1>

				<h2>
					{subHeaderText}
					<span className={styles.sizeHighlight}>quizes.</span>
				</h2>

				<p>{descriptionText}</p>

				<p>{fitText}</p>

				<div className={styles.links}>
					<NavigationButton
						text={navigationBtnText}
						style='underlined'
						targetId='projectsSection'
					/>
					<CalendlyButton text={actionBtnText} />
				</div>

				<Image src={iconArrow} alt={arrowAltText} />
			</div>
			<div className={styles.heroSecondHalf}>
				<Image src={HeroImg} alt={imageAltText} priority />
			</div>
		</section>
	);
}

export default HeroSection;
