import { FETCH_USERS } from '../actions';
import { ADD_USERS, ADD_USER, SET_CURRENT_USER } from '../mutation';
import { fetchUsers } from '@/api/auth';
import { ActionContext } from 'vuex';
import { IRootState } from '../index';

export interface IUser {
  id: string;
  name: string;
  age: number;
  isLogin: boolean;
}

export interface IAuthState {
  users: IUser[];
}

const initState: IAuthState = {
  users: []
};

export const auth = {
  state: initState,
  getters: {
    currentUser: (state: IAuthState) => {
      return state.users.find(user => user.isLogin);
    }
  },
  mutations: {
    [ADD_USERS]: (state: IAuthState, users: IUser[]) => {
      state.users = [...state.users, ...users];
    },
    [ADD_USER]: (state: IAuthState, user: IUser) => {
      state.users.push(user);
    },
    [SET_CURRENT_USER]: (state: IAuthState, userId: string) => {
      state.users.forEach((user: IUser) => {
        if (user.id === userId) {
          user.isLogin = true;
        } else {
          user.isLogin = false;
        }
      });
    }
  },
  actions: {
    [FETCH_USERS](
      context: ActionContext<IAuthState, IRootState>
    ): Promise<void> {
      return fetchUsers().then(res => {
        console.log('FETCH_USERS', res);
        context.commit(ADD_USERS, res.data);
      });
    }
  },
  namespaced: true
};
