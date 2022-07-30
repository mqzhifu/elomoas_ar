import { createStore } from "vuex";

export default createStore({
  state: {
    menuId:1,
  },
  getters: {
    getMenuId : function(state){
      console.log("vuex getMenuId");
      return state.menuId;
    },
  },
  mutations: {
    Setting:function(state,menuId){
      console.log("vuex Setting", menuId);
      state.menuId = menuId;
    },
  },
  actions: {},
  modules: {},
});
