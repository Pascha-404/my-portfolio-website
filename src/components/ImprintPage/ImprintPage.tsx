import styles from './ImprintPage.module.scss';

function ImprintPage() {
	return (
		<main className={styles.main}>
			<h1>Impressum</h1>

			<p>
				Patrick Pavliuchik
				<br />
				K&ouml;rtingstr. 61c
				<br />
				12107 Berlin
			</p>

			<h2>Kontakt</h2>
			<p>
				Telefon: +49 (0) 17794184354
				<br />
				E-Mail: patrick@pavliuchik.com
			</p>
		</main>
	);
}

export default ImprintPage;
