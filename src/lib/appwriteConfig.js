import { Client, Databases, Query, Account } from 'appwrite'; // Appwrite SDK import

const client = new Client(); // Initialize Client

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite API Endpoint
    .setProject('68377ee1002690c35152'); // Your project ID (verified from console)

export const account = new Account(client); // Initialize Account
export const databases = new Databases(client); // Initialize Databases
export { client, Query }; // Export Query (it's a static class, not an instance)