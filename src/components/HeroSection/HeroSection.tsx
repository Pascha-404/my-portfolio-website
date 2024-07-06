'use client';

import HeroImg from '../../../public/patrick-hero-img.png';
import { iconArrow } from '../../../public/icons';

import { textMapFunction } from '@/utils/client';
import { static_sections } from '@/utils/server/fallbackContent';
import { IHeroSectionContent } from '@/ts/types';

import { CldImage } from 'next-cloudinary';
import Image from 'next/legacy/image';
import NavigationButton from '../NavigationButton';
import CalendlyButton from '../CalendlyButton';

import styles from './HeroSection.module.scss';
import { useLanguage } from '@/utils/client';

function HeroSection({
	staticContent,
}: {
	staticContent: IHeroSectionContent;
}): JSX.Element {
	const { currentLanguage } = useLanguage();
	const fallbackContent = static_sections.filter(
		section => section.section_name === 'heroSection'
	)[0];
	const headerText = textMapFunction({
		objectArray: staticContent.header || fallbackContent.header!,
		currentLanguage,
		stylingClass: '',
		styles,
	});
	const subHeaderText = textMapFunction({
		objectArray: staticContent.sub_header || fallbackContent.sub_header!,
		currentLanguage,
		stylingClass: 'sizeHighlight',
		styles,
	});
	const descriptionText =
		staticContent.description?.[currentLanguage] ||
		fallbackContent.description![currentLanguage];
	const fitText =
		staticContent.fit[currentLanguage] || fallbackContent.fit![currentLanguage];
	const navigationBtnText =
		staticContent.navigation_btn?.[currentLanguage] ||
		fallbackContent.navigation_btn![currentLanguage];
	const actionBtnText =
		staticContent.action_btn?.[currentLanguage] ||
		fallbackContent.action_btn![currentLanguage];
	const imageAltText =
		staticContent.image_alt[currentLanguage] ||
		fallbackContent.image_alt![currentLanguage];

	// renders local stored image as fallback content
	const heroImage = staticContent.heroImage_src ? (
		<CldImage
			src={staticContent.heroImage_src}
			alt={imageAltText}
			width={691}
			height={691}
			priority
		/>
	) : (
		<Image src={HeroImg} alt={imageAltText} priority />
	);
	const arrowAltText =
		staticContent.arrow_alt?.[currentLanguage] ||
		fallbackContent.arrow_alt![currentLanguage];

	return (
		<section className={styles.heroSection}>
			<div className={styles.heroFirstHalf}>
				<h1>
					{headerText} <span className={styles.colorHighlight}>Patrick</span>
				</h1>

				<h2>{subHeaderText}</h2>

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
			<div className={styles.heroSecondHalf}>{heroImage}</div>
		</section>
	);
}

export default HeroSection;
