'use client';

import React, { useRef } from 'react';

import styles from './DownloadButton.module.scss';
import { useLanguage } from '@/utils/client';

interface DownloadButtonProps {
	text: string;
	id: string;
}

function DownloadButton({ text, id }: DownloadButtonProps) {
	const downloadRef = useRef<HTMLAnchorElement | null>(null);
	const { currentLanguage } = useLanguage();
	
	const handleDownload = () => {
	
		const fileUrl = `./assets/CV-Pavliuchik-${currentLanguage}.pdf`;

		if (downloadRef.current) {
			downloadRef.current.href = fileUrl;
		}
	};

	return (
		<a
			ref={downloadRef}
			id={id}
			className={styles.downloadButton}
			href='#'
			download
			onClick={handleDownload}>
			{text}
		</a>
	);
}

export default DownloadButton;
