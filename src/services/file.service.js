import { storage } from '../lib/appwriteConfig';

export const uploadFile = (bucketId, file) =>
  storage.createFile(bucketId, 'unique()', file);

export const getFileUrl = (bucketId, fileId) =>
  `${import.meta.env.REACT_APP_APPWRITE_URL}/storage/buckets/${bucketId}/files/${fileId}/view?project=${import.meta.env.REACT_APP_APPWRITE_PROJECT}`;