import { Client, Account } from 'appwrite';
import { Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ee8d21c97a5316078a'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
