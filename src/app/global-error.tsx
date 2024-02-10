'use client'; // Error components must be Client Components

import { CSSProperties } from 'react';
import ErrorSection from '@/components/ErrorSection';
import { LanguageProvider } from '@/utils/client';

function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const styles: { [key: string]: CSSProperties } = {
		main: {
			width: '100vw',
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
	};

	return (
		<html>
			<body id='root'>
				<main style={styles.main}>
					<LanguageProvider>
						<ErrorSection reset={reset} />
					</LanguageProvider>
				</main>
			</body>
		</html>
	);
}

export default GlobalError;
