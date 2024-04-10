// 可以创建多个store，使用时引入对应store即可
import { makeAutoObservable } from "mobx";

interface StoreProps {
  data: {
    name: any[];
    orders:any[];
    comments:any[];
  };
  changeName: (value: string) => void;
  addOrder: (value: string) => void;
  addComments: (value: {}) => void;
}

const store: StoreProps = makeAutoObservable<StoreProps>({
  data: {
    name: JSON.parse(localStorage.getItem('storeName')!)as string[] || [],
    orders: JSON.parse(localStorage.getItem('storeOrder')!)as string[] || [],
    comments: JSON.parse(localStorage.getItem('storeComments')!)as string[] || 
    [
    {
    author: "ztx",
    content:'激发创造、丰富生活'
    },
    {
    author: "React",
    content:'让我们一起瑞阿特克'
    },
    {
    author: "Vite",
    content:'让我们一起Vichet'
    },
    {
    author: "企鹅",
    content:'让我们一起进阶鹅厂和宇宙厂吧'
    },
  ]
  },
  changeName: (val: string) => {
    store.data.name = [...store.data.name, val];
    localStorage.setItem("storeName", JSON.stringify(store.data.name));
  }, // actions
  addOrder: (val: string) => {
    store.data.orders = [...store.data.orders, val];
    localStorage.setItem("storeOrder", JSON.stringify(store.data.orders));
  },
  addComments: (val: {}) => {
    store.data.comments = [...store.data.comments, val];
    localStorage.setItem("storeComments", JSON.stringify(store.data.comments));
  },
});

export default store;
