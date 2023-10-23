import { iconArrowUp } from '../../../public/icons';
import personalLogo from '../../../public/personal-logo.svg';

import Image from 'next/image';

import styles from './Footer.module.scss';

function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<a className={styles.upLink} href='/'>
				up to the beginning
			</a>
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
						<a href='/'>Projects</a>
						<a href='/'>About me</a>
						<a href='/'>Resume</a>
					</div>
				</div>
			</div>

			<div className={styles.bottomContent}>
				<div className={styles.logoWrapper}>
					<Image src={personalLogo} alt='Patrick Pavliuchik typed in code syntax' />
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
