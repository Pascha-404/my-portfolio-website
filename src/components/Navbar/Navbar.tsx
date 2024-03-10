'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/legacy/image';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

import { INavbarContent } from '@/ts/types';
import { useLanguage } from '@/utils/client';

import LanguageButton from '../LanguageButton';
import NavigationButton from '../NavigationButton';

import Logo from '#/personal-logo.svg';
import { iconMenu, iconMenuX } from '#/icons';
import styles from './Navbar.module.scss';

const CalendlyButton = dynamic(() => import('../CalendlyButton'), { ssr: false });

function Navbar({ staticContent }: { staticContent: INavbarContent }): JSX.Element {
	const { currentLanguage } = useLanguage();
	const { scrollYProgress } = useScroll();
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);
	const aboutText = staticContent.about[currentLanguage] || 'about';
	const projectsText = staticContent.projects[currentLanguage] || 'projects';
	const contactText = staticContent.contact[currentLanguage] || 'contact';
	const actionBtnText = staticContent.action_btn?.[currentLanguage] || "Let's Talk?";
	const logoAltText = staticContent.logo_alt?.[currentLanguage] || 'Logo Alt';

	function handleClick() {
		setShowBurgerMenu(!showBurgerMenu);
	}

	// Shared animation values for burgerContainer and burgerShade
	const burgerAnimation = {
		animation: {
			scale: [0.8, 0.8, 1],
			y: [-1000, 0, 0],
		},
		transition: { duration: 0.5, ease: 'easeIn', times: [0, 0.5, 1] },
		exit: { scale: [1, 0.8, 0.8], y: [0, 0, -1000] },
	};

	return (
		<React.Fragment>
			<AnimatePresence mode='wait'>
				{showBurgerMenu && (
					<motion.div
						id='burgerShade'
						key={`burgerShade-${showBurgerMenu}`}
						className={styles.burgerShade}
						animate={burgerAnimation.animation}
						transition={burgerAnimation.transition}
						exit={burgerAnimation.exit}
					/>
				)}
			</AnimatePresence>

			<motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />

			<nav id='navbar' className={styles.navbar}>
				<div className={styles.navbarHeader}>
					<a href='/'>
						<Image src={Logo} width={200} height={37} alt={logoAltText} priority />
					</a>{' '}
					<AnimatePresence mode='wait'>
						{!showBurgerMenu ? (
							<motion.div
								className={styles.burgerIcon}
								key={'burgerIcon'}
								exit={{ rotate: 180 }}
								transition={{ duration: 0.5 }}>
								<Image src={iconMenu} alt='Menu Icon' onClick={handleClick} />
							</motion.div>
						) : (
							<motion.div
								key={'burgerIcon-X'}
								className={styles.burgerIcon}
								exit={{ rotate: 180 }}
								transition={{ duration: 0.5 }}>
								<Image src={iconMenuX} alt='Menu Icon' onClick={handleClick} />
							</motion.div>
						)}
					</AnimatePresence>
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

				<AnimatePresence mode='wait'>
					{showBurgerMenu && (
						<motion.div
							key={`burgerContainer-${showBurgerMenu}`}
							className={styles.burgerContainer}
							animate={burgerAnimation.animation}
							transition={burgerAnimation.transition}
							exit={burgerAnimation.exit}>
							<NavigationButton
								text={aboutText}
								style='normal'
								targetId='aboutSection'
								onClick={handleClick}
							/>
							<NavigationButton
								text={projectsText}
								style='normal'
								targetId='projectsSection'
								onClick={handleClick}
							/>
							<NavigationButton
								text={contactText}
								style='normal'
								targetId='contactSection'
								onClick={handleClick}
							/>
							<CalendlyButton text={actionBtnText} />
							<LanguageButton />
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
