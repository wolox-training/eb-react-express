import { Credentials } from '../types/credentials';

import localStorageService from './LocalStorageService';

const saveSession = (credentials: Credentials): void => {
  const keys = Object.keys(credentials);
  keys.forEach((item: string) => {
    localStorageService.setValue(item, credentials[item as keyof Credentials]);
  });
};

const clearSession = () => {
  localStorageService.removeValue('access-token');
  localStorageService.removeValue('client');
  localStorageService.removeValue('uid');
};

const SessionService = {
  saveSession,
  clearSession
};

export default SessionService;
