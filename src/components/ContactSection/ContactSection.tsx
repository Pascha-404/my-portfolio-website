import styles from './ContactSection.module.scss';

function ContactSection(): JSX.Element {
	return (
		<section className={styles.contactSection}>
			<div className={styles.calendlyWrapper}></div>
		</section>
	);
}

export default ContactSection;
