'use client';

import CalendlyButton from '../CalendlyButton';

import { IStaticContent } from '@/ts/types';
import { textMapFunction } from '@/utils/client';
import { useLanguage } from '@/utils/client';

import styles from './ContactSection.module.scss';

function ContactSection({
	staticContent,
}: {
	staticContent: IStaticContent;
}): JSX.Element {
	const { currentLanguage } = useLanguage();
	const headerText = textMapFunction({
		objectArray: staticContent.header!,
		currentLanguage,
		stylingClass: 'colorHighlight',
		styles,
	});
	const descriptionText = staticContent.description![currentLanguage];
	const actionBtnText = staticContent.action_btn![currentLanguage];
	return (
		<section id='contactSection' className={styles.contactSection}>
			<h5>{headerText}</h5>

			<p>{descriptionText}</p>

			<div className={styles.calendlyWrapper}>
				<CalendlyButton text={actionBtnText} />
			</div>
		</section>
	);
}

export default ContactSection;
