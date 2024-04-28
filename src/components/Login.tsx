import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import SearchBtn from "@/encapsulationTemplate/SearchBtn";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  QuestionCircleOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import Goods from "./Goods";
import axios from "axios";
import BackBtn from "@/encapsulationTemplate/BackBtn";
import UserAvatar from "@/encapsulationTemplate/UserAvatar";
import "./style/login.scss";
import FuzzyQuery from "@/algorithm/FuzzyQuery";

const Login: React.FC = () => {
  const [goodsData, setGoodsData] = useState<string[]>();
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dataRef = useRef()
  const checkLogin = () => !!localStorage.getItem("isLogin") || false;
  const requestAPI = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setGoodsData(res.data.result);
        dataRef.current = res.data.result;
      })
      .catch((error: string) => {
        throw new Error(error);
      });
  };

  const checkIsLogining = (e:any) => {
    if(!checkLogin()){
      e.preventDefault();
      navigate("/UserLogin");
    }
  }

  const onHandleChildClick = () => {
    const datas = JSON.parse(JSON.stringify(dataRef.current) || JSON.stringify(goodsData) || "");
    const result = [] as string[];
    datas.map((item: any) => {
      if (item.name) result.push(item.name);
    });
    const searchResult = FuzzyQuery.fuzzyQuery(searchRef.current?.value, result);
    const refreshShow = datas.filter((item:any) => searchResult.includes(item.name));
    setGoodsData((pre) => (pre = refreshShow));
  };
  useEffect(() => {
    requestAPI();
  }, []);

  useEffect(()=>{
    localStorage.setItem("searchGoods", JSON.stringify(goodsData));
  },[goodsData])

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <BackBtn />
        <UserAvatar isClick={checkIsLogining}/>
      </div>
      <div
        style={{
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Link to={"list/1"}>
          <button className="viewNotice">VIEW NOTICE</button>
        </Link>
        <SearchBtn ref={searchRef!} onChildClick={onHandleChildClick} />
      </div>
      <Outlet />
      <FloatButton.Group
        trigger="click"
        shape="square"
        description="咨询"
        tooltip={<div>提出您的建议吧</div>}
        type="primary"
        style={{ right: 24, bottom: 80 }}
        icon={<CustomerServiceOutlined />}
        badge={{ dot: true }}>
        <FloatButton
          tooltip="欢迎咨询富玩Ai客服(5人已看)"
          badge={{ count: 5, color: "skyblue" }}
          href="https://doubao.com/bot/GfH9VvYW"
        />
        <FloatButton
          icon={<CommentOutlined />}
          badge={{ dot: true }}
          href="/sMeDo"
        />
        <FloatButton
          badge={{ count: 32 }}
          icon={<QuestionCircleOutlined />}
          tooltip="FAQs?(32人已问)"
        />
        <FloatButton
          badge={{ count: 99 }}
          icon={<BranchesOutlined />}
          tooltip="作者who?(99人已看)"
        />
      </FloatButton.Group>
      <FloatButton.BackTop style={{ bottom: 10 }} />
      <Goods getGoodsListData={goodsData!} />
    </div>
  );
};

export default Login;
