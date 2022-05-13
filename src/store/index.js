import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: {},
    cupos: [],
    bancos: [],
  },
  getters: {},
  mutations: {
    SET_USUARIO(state, usuario) {
      state.usuario = usuario;
    },
    SET_CUPOS(state, cupos) {
      state.cupos = cupos;
    },
    SET_BANCOS(state, bancos) {
      state.bancos = bancos;
    },
  },
  actions: {
    async getDataDashboard({ commit }) {
      const URL = "dashboard.json";
      try {
        const request = await axios.get(URL);
        const data = request.data;
        commit("SET_USUARIO", data.usuario);
        commit("SET_CUPOS", data.cupos);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBancos({ commit }) {
      const URL = "bancos.json";
      try {
        const request = await axios.get(URL);
        const data = request.data;
        console.log(data);
        commit("SET_BANCOS", data.bancos);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
