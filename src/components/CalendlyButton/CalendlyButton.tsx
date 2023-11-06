'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

import styles from './CalendlyButton.module.scss';

interface CalendlyButtonProps {
	text: string;
}

function CalendlyButton({ text }: CalendlyButtonProps): JSX.Element | null {
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
	) : null;
}

export default CalendlyButton;
