import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CommentOutlined, CustomerServiceOutlined,QuestionCircleOutlined,BranchesOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import Goods from "./Goods";
import axios from "axios";
import BackBtn from "@/encapsulationTemplate/BackBtn";
import "./style/login.scss";
import { count } from "console";
const Login: React.FC = () => {
  const [goodsData, setGoodsData] = useState<string[]>();
  const requestAPI = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log(res);
        setGoodsData((pre) => (pre = res.data.result));
      })
      .catch((error: string) => {
        console.log(error);
      });
  };
  useEffect(() => {
    requestAPI();
  }, []);

  return (
    <div>
      <BackBtn />
      <div style={{ height: "auto" }}>
        <Link to={"list/1"}>
          <button className="viewNotice">VIEW NOTICE</button>
        </Link>
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
        <FloatButton badge={{ count: 32 }} icon={<QuestionCircleOutlined />} tooltip='FAQs?(32人已问)'/>
        <FloatButton badge={{ count: 99 }} icon={<BranchesOutlined />} tooltip='作者who?(99人已看)'/>
      </FloatButton.Group>
      <FloatButton.BackTop style={{ bottom: 10 }} />
      <Goods getGoodsListData={goodsData!} />
    </div>
  );
};

export default Login;
