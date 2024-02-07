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
	| 'Cloudinary'
	| 'Material UI'
	| 'Firebase';

type TContent = 'projects' | 'static_content';

type TLanguage = 'en' | 'de'

interface ITranslations {
	en: string;
	de: string;
}

interface ITextSegment {
	text: ITranslations;
	highlight: boolean;
}

interface IDataListData {
	header?: string;
	data: string;
}

interface ICompanyData {
	company_name: string;
	company_role: string;
	time: string;
	skills: IDataListData[];
}

interface IProjectTechnology {
	category: string;
	detail: string[];
}

interface IProjectLocale {
	role: string;
	task: string;
	description: string;
	longDescription: string;
	challenges: IDataListData[];
	approach: IDataListData[];
	results: IDataListData[];
	technology: IProjectTechnology[];
}

interface IProjectData {
	_id: string;
	name: string;
	imgSrc: string | null;
	stack: TechType[];
	githubLink: string;
	liveLink: string | null;
	yearCreated: number;
	en: IProjectLocale;
	de: IProjectLocale;
}

interface IStaticContent {
	section_name: string;
	description?: ITranslations;
	header?: ITextSegment[];
	sub_header?: ITranslations;
	action_btn?: ITranslations;
	navigation_btn?: ITranslations;
	logo_alt?: ITranslations;
	arrow_alt?: ITranslations;
}

interface INavbarContent extends IStaticContent {
	about: ITranslations;
	projects: ITranslations;
	contact: ITranslations;
}

interface IHeroSectionContent extends IStaticContent {
	fit: ITranslations;
	image_alt: ITranslations;
}

interface IAboutSectionContent extends IStaticContent {
	skills: {
		header: ITextSegment[];
		frontend: { en: IDataListData[]; de: IDataListData[] };
		backend: { en: IDataListData[]; de: IDataListData[] };
	};
	experience: {
		header: ITextSegment[];
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
	TContent,
	TLanguage,
	ITextSegment,
	IProjectData,
	INavbarContent,
	IHeroSectionContent,
	IAboutSectionContent,
	IFooterContent,
	IStaticContent,
	IDataListData,
};
