import Image from 'next/legacy/image'

import { iconError } from '#/icons';

import styles from './not-found.module.scss';

function NotFound() {
	return (
		<section className={styles.notFound}>
            <Image src={iconError} className={styles.errorImg} priority alt='Error Icon'/>
			<h2>Ooops...</h2>

		</section>
	);
}

export default NotFound;
