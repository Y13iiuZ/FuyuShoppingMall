import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import store from "../store/CartStore";
import ProductList from "./WantMeDo";
import Goods from "./Goods";
import data from "../mock";
import "./style/login.scss";
const Login: React.FC = () => {
  const {
    data: { name },
    changeName,
  } = store;
  const [names, setName] = useState(name);
  console.log(JSON.stringify(data.list, null, 4));
  const getGoodsListData = JSON.parse(JSON.stringify(data.list, null, 4));
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, [name]);
  return (
    <div>
      <div style={{ height: "auto" }}>
        <Link to={"list/1"}>
          <button className="viewNotice">VIEW NOTICE</button>
        </Link>
      </div>
      <Outlet />
      <p>简易mobx {names}</p>
      <input onChange={({ target: { value } }) => changeName(value)}></input>
      <div>
        <ProductList />
        <Goods getGoodsListData={getGoodsListData} />
      </div>
    </div>
  );
};

export default observer(Login);
