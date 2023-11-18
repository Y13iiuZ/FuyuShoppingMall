import { observable, action } from "mobx";
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
