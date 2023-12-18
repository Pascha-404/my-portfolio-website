import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedClient: MongoClient | undefined;
let cachedDb: Db | undefined;

// Connect to MongoDB Atlas Database
async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb };
	}
	try {
		const client = new MongoClient(MONGODB_URI);
		await client.connect();

		const db = client.db('PageContent');

		cachedClient = client;
		cachedDb = db;

		console.log('Successfully connected to Atlas');

		return { client, db };
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Caught an error: ${error.message}`);
		} else {
			console.error(`An unknown error occurred: ${error}`);
		}
	}
}

export default connectToDatabase;
