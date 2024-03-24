'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

import styles from './NavigationButton.module.scss';

interface NavigationButtonProps {
	style: 'button' | 'underlined' | 'normal' | 'normalSmall';
	text: string;
	targetId?: string; // section where view should go to
	onClick?: () => void;
	href?: string;
}

function NavigationButton({
	style,
	text,
	targetId,
	onClick,
	href = '#',
}: NavigationButtonProps): JSX.Element {
	const router = useRouter();

	function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		/* If href is '#' it's a internal link, we prevent the default behaviour
		    of the anchor element and we scroll the page to the targetId */
		if (href === '#') {
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
		// If href is not '#' it's a external link and the default behaviour is allowed
	}

	switch (style) {
		case 'normal': // will be uppercased with yellow text (navbar)
			return (
				<Link href={href} onClick={handleClick} target={'_blank'}>
					<button
						className={`${styles.navigationButton} ${styles.normal}`}
						onClick={onClick}>
						{text}
					</button>
				</Link>
			);
		case 'normalSmall': // will be capitalized with white text (footer)
			return (
				<Link href={href} onClick={handleClick} target={'_blank'}>
					<button className={`${styles.navigationButton} ${styles.normalSmall}`}>
						{text}
					</button>
				</Link>
			);

		case 'underlined': // will be upercased AND underlined with yellow text
			return (
				<Link href={href} onClick={handleClick} target={'_blank'}>
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
