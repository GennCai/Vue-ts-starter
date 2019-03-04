import Mock from 'mockjs';
import {
  USER_LIST_GET
} from '@/api/apiConstants';

const users = [{
    id: '234-dfg-5g6-4t6',
    name: 'Lucy',
    age: 17
  },
  {
    id: '235-dfa-546-4tb',
    name: 'Lily',
    age: 18
  }
];

Mock.mock(USER_LIST_GET, 'get', users);