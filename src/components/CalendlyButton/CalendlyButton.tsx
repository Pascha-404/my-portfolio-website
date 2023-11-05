'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

import styles from './CalendlyButton.module.scss';

function CalendlyButton(): JSX.Element {
	const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		if (typeof window !== undefined) {
			setRootElement(document.getElementById('root'));
		}
	});
	return (
		<PopupButton
			className={styles.calendlyButton}
			url='https://calendly.com/p-pavliuchik/meeting'
			rootElement={rootElement}
			text='Click here to schedule!'
		/>
	);
}

export default CalendlyButton;
