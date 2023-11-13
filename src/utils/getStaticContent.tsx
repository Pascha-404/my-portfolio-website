import { cache } from 'react';
import { connectToDatabase } from '.';

const revalidate: number = 3600;

const getStaticContent = cache(async () => {
    const connection = await connectToDatabase();
    
    if (!connection) {
        throw new Error('Failed to connect to the database!')
    }
    const { db } = connection;
	const fetchedData = await db.collection('static_content').find({}).toArray();
	const transformedData = JSON.parse(JSON.stringify(fetchedData));
	return transformedData[0].static_sections;
});

export { revalidate, getStaticContent };
