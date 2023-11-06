import dynamic from 'next/dynamic';

import styles from './ContactSection.module.scss';

// Lazy loads the component
const CalendlyButton = dynamic(() => import('../CalendlyButton'), { ssr: false });

function ContactSection(): JSX.Element {
	return (
		<section id='contactSection' className={styles.contactSection}>
			<div className={styles.calendlyWrapper}>
				<CalendlyButton text='Book a call'/>
			</div>
		</section>
	);
}

export default ContactSection;
