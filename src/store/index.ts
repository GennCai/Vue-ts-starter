import Vue from 'vue';
import Vuex from 'vuex';
import { auth, IAuthState } from './modules/auth';
import { home, IHomeState } from './modules/home';

Vue.use(Vuex);

export interface IRootState {
  app: IAuthState;
  user: IHomeState;
}

export default new Vuex.Store<IRootState>({
  modules: {
    auth,
    home
  }
});
