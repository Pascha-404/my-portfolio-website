import CalendlyButton from '../CalendlyButton';

import { IStaticContent } from '@/ts/types';

import styles from './ContactSection.module.scss';

function ContactSection({
	staticContent,
}: {
	staticContent: IStaticContent;
}): JSX.Element {
	return (
		<section id='contactSection' className={styles.contactSection}>
			<h5>
				Let's <span className={styles.colorHighlight}>chat?</span>
			</h5>

			<p>
				Whether you have a project in mind, want to discuss potential collaborations, or
				simply want to chat about design and technology, I'm here for it. Feel free to
				reach out by filling out the form below to book a call with me.
			</p>

			<div className={styles.calendlyWrapper}>
				<CalendlyButton text='Book a call' />
			</div>
		</section>
	);
}

export default ContactSection;
