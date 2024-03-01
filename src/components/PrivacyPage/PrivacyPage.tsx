'use client';

import content from './privacyContent';
import { useLanguage } from '@/utils/client';
import styles from './PrivacyPage.module.scss';

function PrivacyPage() {
	const { currentLanguage } = useLanguage();
	return <main className={styles.main}>{content[currentLanguage]}</main>;
}

export default PrivacyPage;
