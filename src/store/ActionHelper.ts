import DataHelper from './DataHelper'
import ItemData from '../model/itemData'
import Category from '@/model/CateEnum';
import itemData from '../model/itemData';

class ActionHelper {
  // 1.负责数据处理
	dataHelper: DataHelper = new DataHelper('memoData', 'id');
  // 1.1笔记数组
  memoList!: Array<ItemData>;
  // 构造函数：读取本地数据，并设置给 成员变量 memoList
  constructor() {
    //读取本地数据，将 笔记数组 保存 到 this.memoList 变量中
		this.memoList = this.readData();
  }
  // 读取本地数据，并返回 ItemData类型数组
  readData(): Array<ItemData> {
    //1.读取 本地 的 Object数组 - dataHelper
    let arrObj = this.dataHelper.readData();
    //2.将 Object数组 转成 ItemData数组
    let arrItem = arrObj.map((ele: any) => {
			let item: ItemData = new ItemData();
      item.id = ele.id;
      item.cateId = ele.cateId;
      item.title = ele.title;
      item.content = ele.content;
      return item;
    });

    //3.返回itemData数组
    return arrItem;
	}
	
	getCateNameById(cateId:Category):string {
		const arrNames = ['工作','生活','学习'];
		return arrNames[cateId];
	}
	addData(item:ItemData):number {
		this.dataHelper.addData(item);
		this.memoList.push(item);
		this.dataHelper.saveData(this.memoList);
		return item.id
	}

	updataData(item:itemData):void {
		let editItem = this.memoList.find((ele) => {
			return ele.id === item.id
		})
		if(editItem) {
			editItem.cateId = item.id;
			editItem.title = item.title;
			editItem.content = item.content;
			this.dataHelper.saveData(this.memoList);
		}
	}

	removeById(id:number):void{
    let index:number = this.memoList.findIndex((item) => {
			return item.id === id
		})
		if(index > -1) {
			this.memoList.splice(index, 1);
			this.dataHelper.saveData(this.memoList);
		}
	}
}

export default ActionHelper