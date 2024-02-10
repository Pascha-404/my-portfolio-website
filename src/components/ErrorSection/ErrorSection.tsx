'use client';

import React from 'react';
import Image from 'next/legacy/image';

import { iconFolder } from '#/icons';

import { useLanguage } from '@/utils/client';

import styles from './ErrorSection.module.scss';

function ErrorSection({ reset }: { reset: () => void }) {
	const { currentLanguage } = useLanguage();
	return (
		<section className={styles.error}>
			<Image src={iconFolder} priority alt='Error Icon' />
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

export default ErrorSection;
