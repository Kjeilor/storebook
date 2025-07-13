import { databases, storage } from './appwriteConfig';
import { DATABASE_ID, COLLECTION_BUSINESSES, BUCKET_LOGOS } from './collections';

export async function createBusiness(payload) {
  let logoId = '';
  if (payload.logo && payload.logo.startsWith('blob:')) {
    const res = await fetch(payload.logo);
    const blob = await res.blob();
    const file = new File([blob], 'logo.png', { type: blob.type });
    const uploaded = await storage.createFile(BUCKET_LOGOS, 'unique()', file);
    logoId = uploaded.$id;
  }

  const businessDoc = await databases.createDocument(
    DATABASE_ID,
    COLLECTION_BUSINESSES,
    'unique()',  // ← fixed quote
    {
      name: payload.businessName,
      type: payload.businessType,
      industry: payload.industry || '',
      address: payload.address,
      logoId,
      ownerEmail: payload.ownerEmail,
      ownerName: payload.ownerName,
      ownerPhone: payload.ownerPhone,
      createdAt: new Date().toISOString(),
    }
  );

  return businessDoc;
}