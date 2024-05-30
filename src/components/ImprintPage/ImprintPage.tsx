'use client';

import PageTransition from '../PageTransition';

import { useLanguage } from '@/utils/client';
import styles from './ImprintPage.module.scss';

function ImprintPage() {
	const { currentLanguage } = useLanguage();
	return (
		<PageTransition>
			<main className={styles.main}>
				<h1>{currentLanguage === 'de' ? 'Impressum' : 'Imprint'}</h1>
				<p>
					Patrick Pavliuchik
					<br />
					K&ouml;rtingstr. 61c
					<br />
					12107 Berlin
				</p>
				<h2>{currentLanguage === 'de' ? 'Kontakt' : 'Contact'}</h2>
				<p>
					{currentLanguage === 'de' ? 'Telefon' : 'Phone'}: +49 (0) 15679 396206
					<br />
					E-Mail: patrick@pavliuchik.com
				</p>
			</main>
		</PageTransition>
	);
}

export default ImprintPage;
