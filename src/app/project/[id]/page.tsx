import { getContent } from '@/utils/server';
import ProjectPage from '@/components/ProjectPage';
import { IProjectData } from '@/ts/types';

interface ProjectParams {
	params: { id: string };
}

async function Project({ params }: ProjectParams) {
	const projectsData = await getContent('projects');
	const filteredData = projectsData.filter(
		(project: IProjectData) => project._id === params.id
	);
	return <ProjectPage projectData={filteredData[0]} />;
}

export default Project;
