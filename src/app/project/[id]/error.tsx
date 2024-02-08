'use client'; // Error components must be Client Components

import ErrorSection from '@/components/ErrorSection';

function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return <ErrorSection reset={reset} />;
}

export default Error;
