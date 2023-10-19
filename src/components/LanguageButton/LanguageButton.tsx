import styles from './LanguageButton.module.scss';

interface LanguageButtonProps {
	currentLanguage: 'eng' | 'de';
}

function LanguageButton({ currentLanguage }: LanguageButtonProps): JSX.Element {
	const text =
		currentLanguage === 'eng' ? (
			<p>
				<span className={styles.highlight}>ENG</span>/DE
			</p>
		) : (
			<p>
				ENG/<span className={styles.highlight}>DE</span>
			</p>
		);

	return <button className={styles.languageButton}>{text}</button>;
}

export default LanguageButton;