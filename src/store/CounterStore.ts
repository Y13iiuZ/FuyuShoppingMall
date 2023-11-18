import { observable, action } from "mobx";
//推荐使用装饰器的语法了(makeObservable绑定构造函数不用了)
class CounterStore {
  @observable count = 0;

  @action increment = () => {
    this.count++;
  };
  @action decrement = () => {
    this.count -= 1;
  };
}
const CntStore = new CounterStore();

export default CntStore;
