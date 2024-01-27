import { cache } from 'react';
import { TContent } from '@/ts/types';
import { connectToDatabase } from '.';
import { static_sections, projects } from './fallbackContent';

const getContent = cache(async (kind: TContent) => {
	const connection = await connectToDatabase();

	if (connection) {
		const { db } = connection;
		switch (kind) {
			case 'static_content': {
				const fetchedData = await db.collection('static_content').find({}).toArray();
				const transformedData = JSON.parse(JSON.stringify(fetchedData));
				return transformedData[0].static_sections;
			}
			case 'projects': {
				const fetchedData = await db.collection('projects').find({}).toArray();
				const transformedData = JSON.parse(JSON.stringify(fetchedData));
				return transformedData;
			}
			default:
				console.error(`No case for provided kind: ${kind}`);
		}
	}

	console.error('application uses fallback content');
	
	switch (kind) {
		case 'static_content':
			return static_sections;

		case 'projects':
			return projects;
	}
});

export { getContent };
