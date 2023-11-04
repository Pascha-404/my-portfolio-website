import React, { useRef } from 'react';

import styles from './DownloadButton.module.scss';

function DownloadButton(text: string) {
	const downloadRef = useRef<HTMLAnchorElement | null>(null);

	const handleDownload = () => {
		const fileUrl = './personal-logo.svg';

		if (downloadRef.current) {
			downloadRef.current.href = fileUrl;
			downloadRef.current.click();
		}
	};

	return (
		<a
			ref={downloadRef}
			className={styles.downloadButton}
			href='#'
			download
			onClick={handleDownload}>
			{text}
		</a>
	);
}

export default DownloadButton;
