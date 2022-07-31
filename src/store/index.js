import { createStore } from "vuex";

export default createStore({
  state: {
    menuId:1,
    // token:0,
  },
  getters: {
    GET_MENU_ID : function(state){
      // console.log("vuex getMenuId");
      return state.menuId;
    },
    // GET_TOKEN : function(state){
    //   console.log("GET_TOKEN:",state.token);
    //   return state.menuId;
    // },
  },
  mutations: {
    SET_MENU_ID:function(state,menuId){
      // console.log("vuex Setting", menuId);
      state.menuId = menuId;
    },
    // SET_TOKEN:function(state,token){
    //   console.log("SET_TOKEN:",token)
    //   state.token = token;
    // },
  },
  actions: {},
  modules: {},
});
