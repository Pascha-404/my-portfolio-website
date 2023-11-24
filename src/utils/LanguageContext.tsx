import React, { createContext, useContext, useState, ReactNode } from 'react';

type TLanguageContext = {
	currentLanguage: 'en' | 'de';
	setCurrentLanguage: (language: 'en' | 'de') => void;
};

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

interface LanguageProviderProps {
	children: ReactNode;
}

function LanguageProvider({ children }: LanguageProviderProps) {
	const [currentLanguage, setCurrentLanguage] = useState<'en' | 'de'>('en');

	return (
		<LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export { useLanguage, LanguageProvider };
