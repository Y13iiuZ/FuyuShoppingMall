// 可以创建多个store，使用时引入对应store即可
import { makeAutoObservable } from "mobx";

interface StoreProps {
  data: {
    name: string;
  };
  changeName: (value: string) => void;
}

const store: StoreProps = makeAutoObservable<StoreProps>({
  data: {
    name: "default name",
  },
  changeName: (val: string) => {
    store.data.name = val;
    localStorage.setItem("name", val);
  }, // actions
});

export default store;
