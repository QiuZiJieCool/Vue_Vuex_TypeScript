import Category from './CateEnum'
class itemData {
  id: number;
  cateId: Category;
  title: string;
  content: string;
  createTime: string;
  constructor( id: number=-1,cateId: Category=-1, title: string='', content: string='',) {
    this.id = id;
    // 使用枚举类型 根据cateId分类
    this.cateId = cateId;
    this.title = title;
    this.createTime = this.formData(Date.now());// 时间mmm
    this.content = content;
  }
  formData(time:number):string {
    let date = new Date(time);
    let str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    return str;
  }
}

export default itemData;