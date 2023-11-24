import dynamic from 'next/dynamic';
import Logo from '../../../public/personal-logo.svg';
import { INavbarContent } from '@/ts/types';

import Image from 'next/image';
import LanguageButton from '../LanguageButton';
import NavigationButton from '../NavigationButton';

import styles from './Navbar.module.scss';

const CalendlyButton = dynamic(() => import('../CalendlyButton'), { ssr: false });

function Navbar({ staticContent }: { staticContent: INavbarContent }): JSX.Element {
	const currentLanguage = 'en';
	const aboutText = staticContent.about[currentLanguage] || 'about';
	const projectsText = staticContent.projects[currentLanguage] || 'projects';
	const contactText = staticContent.contact[currentLanguage] || 'contact';
	const actionBtnText = staticContent.action_btn?.[currentLanguage] || "Let's Talk?";
	const logoAltText = staticContent.logo_alt?.[currentLanguage] || 'Logo Alt';

	return (
		<nav id='navbar' className={styles.navbar}>
			<div>
				<a href='/'>
					<Image src={Logo} width={200} height={37} alt={logoAltText} priority />
				</a>
			</div>

			<div className={styles.navbarLinks}>
				<LanguageButton currentLanguage='eng' />
				<NavigationButton text={aboutText} style='normal' targetId='aboutSection' />
				<NavigationButton text={projectsText} style='normal' targetId='projectsSection' />
				<NavigationButton text={contactText} style='normal' targetId='contactSection' />
				<CalendlyButton text={actionBtnText} />
			</div>
		</nav>
	);
}

export default Navbar;
