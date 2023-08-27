import { LOG_IN_REQUEST } from './types';

export const login = (id, password) => ({
  type: LOG_IN_REQUEST,
  id,
  password,
});
