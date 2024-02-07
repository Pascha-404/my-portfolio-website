'use client';

import { TLanguage } from '@/ts/types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type TLanguageContext = {
	currentLanguage: TLanguage;
	setCurrentLanguage: (language: TLanguage) => void;
};

interface LanguageProviderProps {
	children: ReactNode;
}

const LanguageContext = createContext<TLanguageContext>({
	currentLanguage: 'en',
	setCurrentLanguage: () => {},
});

function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}

function LanguageProvider({ children }: LanguageProviderProps) {
	const [currentLanguage, setCurrentLanguage] = useState<TLanguage>('en');
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		// Perform this operation only on the client side
		const storedLanguage = localStorage.getItem(
			'patrick.pavliuchik.language'
		) as TLanguage | null;
		if (storedLanguage) {
			setCurrentLanguage(storedLanguage);
		}
		setLoaded(true);
	}, []);

	useEffect(() => {
		// Only persist to localStorage after initial load to prevent hydration mismatch
		if (loaded) {
			localStorage.setItem('patrick.pavliuchik.language', currentLanguage);
		}
	}, [currentLanguage, loaded]);

	// Render children only after verifying the language to prevent hydration issues
	return (
		<LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
			{loaded ? children : null}
		</LanguageContext.Provider>
	);
}

export { useLanguage, LanguageProvider };
