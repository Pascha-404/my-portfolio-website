import { iconArrowUp } from '../../../public/icons';
import personalLogo from '../../../public/personal-logo.svg';

import Image from 'next/image';
import NavigationButton from '../NavigationButton';

import styles from './Footer.module.scss';

function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles.upLinkWrapper}>
				<NavigationButton
					text='up to the beginning'
					style='underlined'
					targetId='navbar'
				/>
			</div>

			<div className={styles.middleContent}>
				<Image src={iconArrowUp} alt='Yellow arrow pointing upwards' />

				<div className={styles.contactWrapper}>
					<h6>contacts</h6>
					<div>
						<p>Patrick Pavliuchik,</p>
						<a href='tel:04917782934'>+49 17782934</a>
						<a href='mailto:patrick@pavliuchik.com'>patrick@pavliuchik.com</a>
					</div>
				</div>

				<div className={styles.sitemap}>
					<h6>sitemap</h6>
					<div>
						<NavigationButton text='projects' targetId='projectsSection' style='normalSmall'/>
						<NavigationButton text='about me' targetId='aboutSection' style='normalSmall'/>
						<NavigationButton text='resume' targetId='resume' style='normalSmall'/>
					</div>
				</div>
			</div>

			<div className={styles.bottomContent}>
				<div className={styles.logoWrapper}>
					<a href="/">
						<Image src={personalLogo} alt='Patrick Pavliuchik typed in code syntax' />
					</a>
					<p>&copy;</p>
				</div>

				<div className={styles.legal}>
					<a href='/'>Impressum</a>
					<a href='/'>Privacy Policy</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
