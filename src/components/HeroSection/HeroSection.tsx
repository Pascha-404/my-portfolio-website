import HeroImg from '../../../public/patrick-hero-img.png';
import { iconArrow } from '../../../public/icons';

import { IHeroSectionContent } from '@/ts/types';

import Image from 'next/image';
import NavigationButton from '../NavigationButton';
import CalendlyButton from '../CalendlyButton';

import styles from './HeroSection.module.scss';

function HeroSection({
	staticContent,
}: {
	staticContent: IHeroSectionContent;
}): JSX.Element {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroFirstHalf}>
				<h1>
					Hi, I'm <span className={styles.colorHighlight}>Patrick</span>
				</h1>

				<h2>
					software engineer, who loves{' '}
					<span className={styles.sizeHighlight}>challenges</span> and{' '}
					<span className={styles.sizeHighlight}>quizes.</span>
				</h2>

				<p>
					Are you looking for a passionate full stack developer with a love for creating
					meaningful digital experiences? Explore my portfolio to discover my journey
					through various projects and technologies.
				</p>

				<p>Maybe we could make a good fit?</p>

				<div className={styles.links}>
					<NavigationButton
						text='more about me, my experience and portfolio'
						style='underlined'
						targetId='projectsSection'
					/>
					<CalendlyButton text='book a call' />
				</div>

				<Image src={iconArrow} alt='Long arrow icon pointing downwards' />
			</div>
			<div className={styles.heroSecondHalf}>
				<Image src={HeroImg} alt='Front photo of Patrick Pavliuchik' priority />
			</div>
		</section>
	);
}

export default HeroSection;
