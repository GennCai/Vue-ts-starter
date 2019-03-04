import {
  GetterTree,
  MutationTree,
  ActionTree,
  Module,
  ActionContext
} from 'vuex';
import { IRootState } from '../index';
import { fetchTickedById } from '../../api/home';

export interface ITicket {
  id: string;
  type: string;
  status: string;
}

export interface IHomeState {
  tickets: ITicket[];
}

const initState: IHomeState = {
  tickets: []
};

const getters: GetterTree<IHomeState, IRootState> = {
  totalNumber: (state: IHomeState) => state.tickets.length
};

const mutations: MutationTree<IHomeState> = {
  addTicket: (state: IHomeState, ticket: ITicket) => {
    state.tickets.push(ticket);
  }
};

const actions: ActionTree<IHomeState, IRootState> = {
  fetchTicketById(
    { commit, state }: ActionContext<IHomeState, IRootState>,
    ticketId: string
  ): Promise<void> {
    const target = state.tickets.find(ticket => {
      return ticket.id === ticketId;
    });
    if (target) {
      return Promise.resolve();
    }
    return fetchTickedById({ id: ticketId }).then(res => {
      console.log('fetchTickedById', res);
      commit('addTicket', res.data);
    });
  },
  addTicket(): Promise<void> {
    return Promise.resolve();
  }
};

export const home: Module<IHomeState, IRootState> = {
  state: initState,
  getters,
  mutations,
  actions,
  namespaced: true
};
