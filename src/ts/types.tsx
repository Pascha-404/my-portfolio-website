type TechType =
	| 'React'
	| 'Next.js'
	| 'Express.js'
	| 'Node.js'
	| 'JavaScript'
	| 'SASS'
	| 'HTML'
	| 'CSS'
	| 'AWS'
	| 'MongoDB'
	| 'Cloudinary';

interface ITranslationsArray {
	en: string[];
	de: string[];
}

interface ITranslations {
	en: string;
	de: string;
}

interface ITextSegment {
	text: ITranslations;
	highlight: boolean;
}

interface ICompanyData {
	company_name: string;
	company_role: string;
	time: string;
	skills: string[];
}

interface IStaticContent {
	section_name: string;
	description?: ITranslations;
	header?: ITextSegment[];
	sub_header?: ITranslations;
	action_btn?: ITranslations;
	navigation_btn?: ITranslations;
	logo_alt?: ITranslations;
}

interface INavbarContent extends IStaticContent {
	about: ITranslations;
	projects: ITranslations;
	contact: ITranslations;
}

interface IHeroSectionContent extends IStaticContent {
	fit: ITranslations;
	image_alt: ITranslations;
	arrow_alt: ITranslations;
}

interface IAboutSectionContent extends IStaticContent {
	skills: {
		header: ITranslations;
		frontend: ITranslationsArray;
		backend: ITranslationsArray;
	};
	experience: {
		header: ITextSegment;
		pdfLink: ITranslations;
		companys: {
			en: ICompanyData[];
			de: ICompanyData[];
		};
	};
}

interface IFooterContent extends IStaticContent {
	contacts: ITranslations;
	sitemap: { projects: ITranslations; about: ITranslations; resume: ITranslations };
	imprint: ITranslations;
	privacy: ITranslations;
}

export type {
	TechType,
	INavbarContent,
	IHeroSectionContent,
	IProjectsSectionContent,
	IAboutSectionContent,
	IFooterContent,
	IStaticContent,
};
