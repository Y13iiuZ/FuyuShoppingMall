// 可以创建多个store，使用时引入对应store即可
import { makeAutoObservable } from "mobx";

interface StoreProps {
  data: {
    name: any[];
    orders:any[];
  };
  changeName: (value: string) => void;
  addOrder: (value: string) => void;
}

const store: StoreProps = makeAutoObservable<StoreProps>({
  data: {
    name: JSON.parse(localStorage.getItem('storeName')!)as string[] || [],
    orders: JSON.parse(localStorage.getItem('storeOrder')!)as string[] || []
  },
  changeName: (val: string) => {
    store.data.name = [...store.data.name, val];
    localStorage.setItem("storeName", JSON.stringify(store.data.name));
  }, // actions
  addOrder: (val: string) => {
    store.data.orders = [...store.data.orders, val];
    localStorage.setItem("storeOrder", JSON.stringify(store.data.name));
  }
});

export default store;
