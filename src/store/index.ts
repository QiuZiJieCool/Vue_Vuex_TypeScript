import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper';

Vue.use(Vuex)

let store = new Vuex.Store({
   state: {
    title: 'vue-ts从入门到放弃',
    aHelper: new ActionHelper(),
    isShow: false,
    transData: null,
    filterCateId: -1//筛选分类Id
   },
   mutations: {
     showEditMemo(state:any,editMemo:any) {
       state.transData = editMemo;
       state.isShow = true;
     } 
   }
});

export default store;