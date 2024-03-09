'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

import styles from './NavigationButton.module.scss';

interface NavigationButtonProps {
	style: 'button' | 'underlined' | 'normal' | 'normalSmall';
	text: string;
	targetId: string; // section where view should go to
}

function NavigationButton({ style, text, targetId }: NavigationButtonProps): JSX.Element {
	const router = useRouter();

	function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		const targetElement = document.querySelector(`#${targetId}`);

		// If targetElement exists (Route is '/') scroll to element
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		} else {
			// If element doesn't exists (Outside of Route '/') go to Route '/' and scroll to section
			router.push(`/#${targetId}`);
		}
	}

	switch (style) {
		case 'normal': // will be uppercased with yellow text
			return (
				<Link href='#' onClick={handleClick}>
					<button className={`${styles.navigationButton} ${styles.normal}`}>
						{text}
					</button>
				</Link>
			);
		case 'normalSmall': // will be capitalized with white text
			return (
				<Link href='#' onClick={handleClick}>
					<button className={`${styles.navigationButton} ${styles.normalSmall}`}>
						{text}
					</button>
				</Link>
			);

		case 'underlined': // will be upercased AND underlined with yellow text
			return (
				<Link href='#' onClick={handleClick}>
					<button className={`${styles.navigationButton} ${styles.underlined}`}>
						{text}
					</button>
				</Link>
			);
		default:
			throw new Error(`No case found for provided style: ${style}`);
	}
}

export default NavigationButton;
