import Vue from 'vue'
import App from './App.vue'
import store from './store'

import CateEnum from './model/CateEnum'
import ItemData from './model/itemData'
import ActionHelper from './store/ActionHelper'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

let item1 = new ItemData(4, CateEnum.Study, 'first vue/ts', '1111大家一起学习吧');
let ah = new ActionHelper();
// ah.addData(item1);
ah.removeById(3);
console.log(ah.memoList);

