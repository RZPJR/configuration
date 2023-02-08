import Vue from "vue";
import Vuex from "vuex";

import application from "./modules/application";
import regionpolicy from "./modules/regionpolicy";
import wrt from "./modules/wrt";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    regionpolicy,
    wrt
  }
});
