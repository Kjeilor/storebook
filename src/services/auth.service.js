import { account } from '../lib/appwriteConfig';

export const getCurrentUser = () => account.get().catch(() => null);

export const login = async (email, pwd) => {
  await account.createEmailPasswordSession(email, pwd);
  return account.get();
};

export const register = async (email, pwd, name) => {
  await account.create('unique()', email, pwd, name);
  await account.createEmailPasswordSession(email, pwd);
  return account.get();
};

export const logout = () => account.deleteSession('current');