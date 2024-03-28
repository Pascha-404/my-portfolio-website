'use client';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { usePathname } from 'next/navigation';

import NavigationButton from '../NavigationButton';

import { IFooterContent } from '@/ts/types';
import { useLanguage } from '@/utils/client';

import { iconArrowUp } from '../../../public/icons';
import personalLogo from '../../../public/personal-logo.svg';

import styles from './Footer.module.scss';

function Footer({ staticContent }: { staticContent: IFooterContent }): JSX.Element {
	const { currentLanguage } = useLanguage();
	const pathname = usePathname();
	const navBtnText = staticContent.navigation_btn![currentLanguage];
	const arrowAltText = staticContent.arrow_alt![currentLanguage];
	const contactsText = staticContent.contacts[currentLanguage];
	const projectsText = staticContent.sitemap.projects[currentLanguage];
	const aboutText = staticContent.sitemap.about[currentLanguage];
	const resumeText = staticContent.sitemap.resume[currentLanguage];
	const privacyPolicyText = staticContent.privacy[currentLanguage];
	const imprintText = staticContent.imprint[currentLanguage];
	const logoAltText = staticContent.logo_alt![currentLanguage];

	return (
		<footer className={styles.footer}>
			{pathname !== '/imprint' && (
				<div className={styles.upLinkWrapper}>
					<NavigationButton
						text={navBtnText}
						style='underlined'
						targetId='topScrollContainer'
					/>
				</div>
			)}

			<div className={styles.middleContent}>
				<Image src={iconArrowUp} alt={arrowAltText} />

				<div className={styles.middleSeparator}>
					<div className={styles.contactWrapper}>
						<h6>{contactsText}</h6>
						<div>
							<p>Patrick Pavliuchik,</p>
							<a href='tel:04917782934'>+49 17782934</a>
							<a href='mailto:patrick@pavliuchik.com'>patrick@pavliuchik.com</a>
						</div>
					</div>
					<div className={styles.sitemap}>
						<h6>sitemap</h6>
						<div>
							<NavigationButton
								text={projectsText}
								targetId='projectsSection'
								style='normalSmall'
							/>
							<NavigationButton
								text={aboutText}
								targetId='aboutSection'
								style='normalSmall'
							/>
							<NavigationButton text={resumeText} targetId='resume' style='normalSmall' />
							<NavigationButton
								text='LinkedIn'
								style='normalSmall'
								href='https://www.linkedin.com/in/patrick-pavliuchik-b481b9200/'
							/>
							<NavigationButton
								text='GitHub'
								style='normalSmall'
								href='https://github.com/Pascha-404'
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.bottomContent}>
				<div className={styles.logoWrapper}>
					<a href='/'>
						<Image src={personalLogo} alt={logoAltText} />
					</a>
					<p>&copy;</p>
				</div>

				<div className={styles.legal}>
					<Link href='/imprint'>{imprintText}</Link>
					<Link href='/privacy-policy'>{privacyPolicyText}</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
