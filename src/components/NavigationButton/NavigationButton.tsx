"use client"

import Link from 'next/link';
import styles from './NavigationButton.module.scss';
import React from 'react';

interface NavigationButtonProps {
	style: 'button' | 'underlined' | 'normal';
	text: string;
	targetId: string; // section where view should go to
}

function NavigationButton({ style, text, targetId }: NavigationButtonProps): JSX.Element {
	function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		const targetElement = document.querySelector(`#${targetId}`);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.log('Section not here')
		}
	}

	switch (style) {
		case 'normal':
			return (
				<Link
					href='#'
					onClick={handleClick}
					className={`${styles.navigationButton} ${styles.normal}`}>
					{text}
				</Link>
			);

		case 'underlined':
			return (
				<Link
					href='#'
					onClick={handleClick}
					className={`${styles.navigationButton} ${styles.underlined}`}>
					{text}
				</Link>
			);

		case 'button':
			return (
				<Link
					href='#'
					onClick={handleClick}
					className={`${styles.navigationButton} ${styles.button}`}>
					{text}
				</Link>
			);

		default:
			throw new Error(`No case found for provided style: ${style}`);
	}
}

export default NavigationButton;
