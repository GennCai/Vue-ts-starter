import Mock from 'mockjs';
import {
  TICKET_GET
} from '@/api/apiConstants';

const tickets = [{
    id: '123-456-789-000',
    name: 'This ticket is important',
    type: '巡检1',
    status: 'dispatched'
  },
  {
    id: '123-456-789-001',
    name: 'This ticket is important',
    type: '巡检2',
    status: 'doing'
  },
  {
    id: '123-456-789-002',
    name: 'This ticket is important',
    type: '巡检3',
    status: 'doing'
  },
  {
    id: '123-456-789-003',
    name: 'This ticket is important',
    type: '巡检4',
    status: 'done'
  }
]

Mock.mock(TICKET_GET, 'get', (res) => {
  console.log(res);
  const params = JSON.parse(res.body)
  if (params.id) {
    return tickets.find((ticket) => {
      return ticket.id === params.id;
    })
  }
  return {}
})