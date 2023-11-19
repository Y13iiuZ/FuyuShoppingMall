import React, { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import Goods from "./Goods";
import data from "../mock";
import "./style/login.scss";
const Login: React.FC = () => {
  const getGoodsListData = JSON.parse(JSON.stringify(data.list, null, 4));
  const memoizedGoods = useMemo(
    () => <Goods getGoodsListData={getGoodsListData} />,
    [getGoodsListData]
  );
  return (
    <div>
      <div style={{ height: "auto" }}>
        <Link to={"list/1"}>
          <button className="viewNotice">VIEW NOTICE</button>
        </Link>
      </div>
      <Outlet />
      <FloatButton.Group
        trigger="click"
        shape="square"
        description="HELP"
        tooltip={<div>提出您的建议吧</div>}
        type="primary"
        style={{ right: 24, bottom: 80 }}
        icon={<CustomerServiceOutlined />}
        badge={{ dot: true }}
      >
        <FloatButton />
        <FloatButton
          icon={<CommentOutlined />}
          badge={{ dot: true }}
          href="/sMeDo"
        />
      </FloatButton.Group>
      <FloatButton.BackTop style={{ bottom: 10 }} />
      <div>{memoizedGoods}</div>
    </div>
  );
};

export default Login;
