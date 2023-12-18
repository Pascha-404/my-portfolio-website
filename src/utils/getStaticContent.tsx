import { cache } from 'react';
import { connectToDatabase } from '.';
import { static_sections } from './fallbackContent';

const revalidate: number = 3600;

const getStaticContent = cache(async () => {
	const connection = await connectToDatabase();

	if (connection) {
		const { db } = connection;
		const fetchedData = await db.collection('static_content').find({}).toArray();
		const transformedData = JSON.parse(JSON.stringify(fetchedData));

		return transformedData[0].static_sections;
	}

	console.error('application uses fallback content');

	return static_sections;
});

export { revalidate, getStaticContent };
