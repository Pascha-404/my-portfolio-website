import { useLanguage } from '@/utils/LanguageContext';
import styles from './LanguageButton.module.scss';

function LanguageButton(): JSX.Element {
	const { currentLanguage, setCurrentLanguage } = useLanguage();

	function handleClick(): void {
		switch (currentLanguage) {
			case 'de':
				setCurrentLanguage('en');
				break;
			case 'en':
				setCurrentLanguage('de');
				break;
			default:
				setCurrentLanguage('en');
		}
	}

	const text =
		currentLanguage === 'en' ? (
			<p>
				<span className={styles.highlight}>EN</span>/DE
			</p>
		) : (
			<p>
				EN/<span className={styles.highlight}>DE</span>
			</p>
		);

	return (
		<button onClick={handleClick} className={styles.languageButton}>
			{text}
		</button>
	);
}

export default LanguageButton;
