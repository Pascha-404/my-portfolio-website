import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/utils/client';

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

	return (
		<button onClick={handleClick} className={styles.languageButton}>
			<AnimatePresence mode='wait'>
				{currentLanguage === 'en' ? (
					<motion.p
						className={styles.languageEN}
						key={`language-${currentLanguage}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0.2 }}
						transition={{ duration: 0.2 }}>
						<span className={styles.highlight}>EN</span>/DE
					</motion.p>
				) : (
					<motion.p
						className={styles.languageDE}
						key={`language-${currentLanguage}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0.2 }}
						transition={{ duration: 0.2 }}>
						EN/<span className={styles.highlight}>DE</span>
					</motion.p>
				)}
			</AnimatePresence>
		</button>
	);
}

export default LanguageButton;
