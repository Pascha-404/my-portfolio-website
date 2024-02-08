'use client'; // Error components must be Client Components

import { useLanguage } from '@/utils/client';
import Image from 'next/image';

import styles from './error.module.scss';
import { iconFolder } from '#/icons';

function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { currentLanguage } = useLanguage();

	return (
		<section className={styles.error}>
			<Image src={iconFolder} priority alt='Error Icon'/>
			<h2>
				{currentLanguage === 'en'
					? 'Something went wrong...'
					: 'Irgendwas stimmt nicht...'}
			</h2>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}>
				{currentLanguage === 'en' ? 'Try again' : 'Nochmal versuchen'}
			</button>
		</section>
	);
}

export default Error;
