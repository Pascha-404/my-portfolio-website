'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { INavbarContent } from '@/ts/types';
import { useLanguage } from '@/utils/client';

import Image from 'next/legacy/image';
import LanguageButton from '../LanguageButton';
import NavigationButton from '../NavigationButton';

import Logo from '#/personal-logo.svg';
import { iconMenu } from '#/icons';
import styles from './Navbar.module.scss';

const CalendlyButton = dynamic(() => import('../CalendlyButton'), { ssr: false });

function Navbar({ staticContent }: { staticContent: INavbarContent }): JSX.Element {
	const { currentLanguage } = useLanguage();
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);
	const aboutText = staticContent.about[currentLanguage] || 'about';
	const projectsText = staticContent.projects[currentLanguage] || 'projects';
	const contactText = staticContent.contact[currentLanguage] || 'contact';
	const actionBtnText = staticContent.action_btn?.[currentLanguage] || "Let's Talk?";
	const logoAltText = staticContent.logo_alt?.[currentLanguage] || 'Logo Alt';

	function handleClick() {
		setShowBurgerMenu(!showBurgerMenu);
	}

	return (
		<React.Fragment>
			{showBurgerMenu && <div className={styles.burgerShade} />}
			<nav id='navbar' className={styles.navbar}>
				<div className={styles.navbarHeader}>
					<a href='/'>
						<Image src={Logo} width={200} height={37} alt={logoAltText} priority />
					</a>{' '}
					<div className={styles.burgerIcon}>
						<Image src={iconMenu} alt='Menu Icon' onClick={handleClick}/>
					</div>
				</div>
				<div className={styles.navbarLinks}>
					<LanguageButton />
					<NavigationButton text={aboutText} style='normal' targetId='aboutSection' />
					<NavigationButton
						text={projectsText}
						style='normal'
						targetId='projectsSection'
					/>
					<NavigationButton text={contactText} style='normal' targetId='contactSection' />
					<CalendlyButton text={actionBtnText} />
				</div>

				{showBurgerMenu && (
					<div className={styles.burgerContainer}>
						<NavigationButton text={aboutText} style='normal' targetId='aboutSection' />
						<NavigationButton
							text={projectsText}
							style='normal'
							targetId='projectsSection'
						/>
						<NavigationButton
							text={contactText}
							style='normal'
							targetId='contactSection'
						/>
						<CalendlyButton text={actionBtnText} />
						<LanguageButton />
					</div>
				)}
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
