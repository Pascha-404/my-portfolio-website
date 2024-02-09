'use client'; // Error components must be Client Components

import ErrorSection from '@/components/ErrorSection';
import { LanguageProvider } from '@/utils/client';

function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<main>
					<LanguageProvider>
						<ErrorSection reset={reset} />;
					</LanguageProvider>
				</main>
			</body>
		</html>
	);
}

export default GlobalError;
