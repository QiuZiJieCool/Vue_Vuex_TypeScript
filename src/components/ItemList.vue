<template>
  <div id="memos" class="container">
    <MemoItem v-for="(item, index) in filterMemo()" :key="index" :memo="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import itemData from '@/model/itemData';
import MemoItem from './MemoItem.vue';

@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {
  memoArr:Array<itemData> = this.$store.state.aHelper.memoList;
  
  filterMemo():any {
    if(this.$store.state.filterCateId === -1) {
      return this.memoArr
    }else {
      return this.memoArr.filter((item:any) => {
         return item.cateId === this.$store.state.filterCateId
      })
    }
  }
}
</script>