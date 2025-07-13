import { databases, storage } from '../lib/appwriteConfig';
import { DATABASE_ID, COLLECTION_BUSINESSES, BUCKET_LOGOS } from '../lib/collections';

export const createBusiness = async (payload) => {
  let logoId = '';
  if (payload.logo && payload.logo.startsWith('blob:')) {
    const res = await fetch(payload.logo);
    const blob = await res.blob();
    const file = new File([blob], 'logo.png', { type: blob.type });
    const uploaded = await storage.createFile(BUCKET_LOGOS, 'unique()', file);
    logoId = uploaded.$id;
  }

  return databases.createDocument(DATABASE_ID, COLLECTION_BUSINESSES, 'unique()', {
    name: payload.businessName,
    type: payload.businessType,
    industry: payload.industry || '',
    address: payload.address,
    logoId,
    ownerEmail: payload.ownerEmail,
    ownerName: payload.ownerName,
    ownerPhone: payload.ownerPhone,
  });
};

export const getBusinessByOwner = async (email) => {
  const res = await databases.listDocuments(DATABASE_ID, COLLECTION_BUSINESSES, [
    `ownerEmail=${email}`,
  ]);
  return res.documents[0] ?? null;
};