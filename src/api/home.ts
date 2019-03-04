import { get } from '@/api/request';
import { TICKET_GET } from './apiConstants';

export const fetchTickedById = (data?: object) => {
  return get(TICKET_GET, { data });
};
