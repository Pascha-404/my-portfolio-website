'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

import styles from './CalendlyButton.module.scss';

interface CalendlyButtonProps {
	text: string;
}

function CalendlyButton({ text }: CalendlyButtonProps): JSX.Element {
	const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		if (typeof window !== undefined) {
			setRootElement(document.getElementById('root'));
		}
	});

	return rootElement ? (
		<PopupButton
			className={styles.calendlyButton}
			url='https://calendly.com/p-pavliuchik/meeting'
			rootElement={rootElement}
			text={text}
		/>
	) : (
		// return dummy button with styling to show on render till PopupButton appears
		<button className={styles.calendlyButton}>{text}</button>
	);
}

export default CalendlyButton;
