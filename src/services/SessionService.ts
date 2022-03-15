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

const hasSession = () => {
  const credentials = {
    'access-token': localStorageService.getValue('access-token'),
    client: localStorageService.getValue('client'),
    uid: localStorageService.getValue('uid')
  };
  const keys = Object.keys(credentials);
  return keys.every((key: string) => credentials[key as keyof Credentials]);
};

const SessionService = {
  saveSession,
  clearSession,
  hasSession
};

export default SessionService;
