import { createContext, useContext, useState, ReactNode, Provider } from 'react';

interface ContextInterface {
	language: string;
	setLanguage: (language: string) => void;
	content: {};
	setContent: (content: {}) => void;
}

const StaticContentContext = createContext<ContextInterface | undefined>(undefined);

function useStaticContent() {
	const context = useContext(StaticContentContext);
	if (context === undefined) {
		throw new Error('useStaticContent must be used within a StaticContentProvider');
	}
	return context;
}

interface ProviderProps {
	children: ReactNode;
}

function StaticContentProvider({ children }: ProviderProps) {
	const [language, setLanguage] = useState<string>('en');
	const [content, setContent] = useState({});

	const value = { language, setLanguage, content, setContent };

	return (
		<StaticContentContext.Provider value={value}>
			{children}
		</StaticContentContext.Provider>
	);
}

export { useStaticContent, StaticContentProvider };
