import HeroImg from '../../../public/patrick-hero-img.png';
import ArrowIcon from '../../../public/icon-arrow.svg';

import Image from 'next/image';
import ContactButton from '../ContactButton';

import styles from './HeroSection.module.scss';

function HeroSection(): JSX.Element {
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
					<a href=''>more about me, my experience and portfolio</a>
					<ContactButton text='book a call' />
				</div>

				<Image src={ArrowIcon} alt='Long arrow icon pointing downwards' />
			</div>
			<div className={styles.heroSecondHalf}>
				<Image src={HeroImg} alt='Front photo of Patrick Pavliuchik' />
			</div>
		</section>
	);
}

export default HeroSection;
