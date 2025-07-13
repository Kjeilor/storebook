import { account } from '../lib/appwriteConfig';

export const login = (email, pwd) =>
  account.createEmailPasswordSession(email, pwd).then(() => account.get());

export const register = (email, pwd, name) =>
  account.create('unique()', email, pwd, name);

export const logout = () => account.deleteSession('current');

export const getCurrentUser = () => account.get();