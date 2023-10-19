import styles from './ContactButton.module.scss';

interface ContactButtonProps {
	text: string;
}

function ContactButton({ text }: ContactButtonProps): JSX.Element {
	return <button className={styles.contactButton}>text</button>;
}

export default ContactButton;
