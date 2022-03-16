import api from 'config/api';

import { Credentials } from '../types/credentials';

import localStorageService from './LocalStorageService';

const saveSession = (credentials: Credentials): void => {
  const headers = Object.keys(credentials);
  headers.forEach((header: string) => {
    localStorageService.setValue(header, credentials[header as keyof Credentials]);
    api.setHeader(header, credentials[header as keyof Credentials]);
  });
};

const clearSession = () => {
  localStorageService.removeValue('access-token');
  localStorageService.removeValue('client');
  localStorageService.removeValue('uid');
};

const getSession = (): Credentials => {
  const credentials: Credentials = {
    'access-token': localStorageService.getValue('access-token'),
    client: localStorageService.getValue('client'),
    uid: localStorageService.getValue('uid')
  };
  return credentials;
};

const hasSession = () => {
  const credentials = getSession();
  const keys = Object.keys(credentials);
  return keys.every((key: string) => credentials[key as keyof Credentials]);
};

const SessionService = {
  saveSession,
  clearSession,
  hasSession,
  getSession
};

export default SessionService;
