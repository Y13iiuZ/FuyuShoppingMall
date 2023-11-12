import React from "react";
import { Link,Outlet } from "react-router-dom";
const Login: React.FC = () => {
  return (
    <div>
      <div style={{height:"autto"}}>
        登录页面
        <Link to={"list"}>跳转到LIST PAGE</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
