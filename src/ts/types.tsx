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

interface ITranslations {
	en: string;
	de: string;
}

interface IHighlight extends ITranslations {
	highlight: ITranslations;
}

interface IStaticContent {
	section_name: string;
	description?: ITranslations;
	header?: ITranslations | IHighlight;
	sub_header?: ITranslations;
	action_btn?: ITranslations;
	navigation_btn?: ITranslations;
	logo_alt?: ITranslations;
}

interface INavbarContent extends IStaticContent{
	about: ITranslations;
	projects: ITranslations;
	contact: ITranslations;
}

interface IHeroSectionContent extends IStaticContent {
	fit: ITranslations;
	image_alt: ITranslations;
}

export type { TechType, INavbarContent, IHeroSectionContent };
