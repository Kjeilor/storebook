import { Client, Account, Databases, Storage, Query } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.REACT_APP_APPWRITE_URL || 'https://fra.cloud.appwrite.io/v1')
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT || '68377ee1002690c35152');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { Query };
export const DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID || 'main';
export const COLLECTION_BUSINESSES = 'businesses';
export const BUCKET_LOGOS = 'logos';