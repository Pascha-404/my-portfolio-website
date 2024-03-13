import HomePage from '@/components/HomePage';

import { IHeroSectionContent, IStaticContent, IAboutSectionContent } from '@/ts/types';

import { getContent } from '@/utils/server';

export const metadata = { robots: 'index, follow' };

async function Home() {
	const staticContent = await getContent('static_content');
	const projectsData = await getContent('projects');
	const heroContent: IHeroSectionContent = staticContent.find(
		(obj: IHeroSectionContent) => obj.section_name === 'heroSection'
	);
	const projectsContent: IStaticContent = staticContent.find(
		(obj: IStaticContent) => obj.section_name === 'projectsSection'
	);
	const aboutContent: IAboutSectionContent = staticContent.find(
		(obj: IAboutSectionContent) => obj.section_name === 'aboutSection'
	);
	const contactContent: IStaticContent = staticContent.find(
		(obj: IStaticContent) => obj.section_name === 'contactSection'
	);

	return (
		<HomePage
			staticContent={{
				heroContent,
				projectsContent,
				projectsData,
				aboutContent,
				contactContent,
			}}
		/>
	);
}

export default Home;
