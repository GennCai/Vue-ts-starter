import { get } from '@/api/request';
import { USER_LIST_GET } from './apiConstants';

export const fetchUsers = (data?: object) => {
  return get(USER_LIST_GET, { data });
};
