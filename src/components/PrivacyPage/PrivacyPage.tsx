'use client';

import PageTransition from '../PageTransition';
import { useLanguage } from '@/utils/client';

import content from './privacyContent';

import styles from './PrivacyPage.module.scss';

function PrivacyPage() {
	const { currentLanguage } = useLanguage();
	return (
		<PageTransition>
			<main className={styles.main}>{content[currentLanguage]}</main>
		</PageTransition>
	);
}

export default PrivacyPage;
