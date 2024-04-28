import React from "react";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import { Avatar } from "antd";

interface UserAvatarProps {
  isClick?: (e: any) => void;
}

const UserAvatar: React.FC<UserAvatarProps> = () => {
  const navigate = useNavigate();
  const checkLogin = () => !!localStorage.getItem("isLogin") || false;

  // const onClick: MenuProps["onClick"] = (e: any) => {
  //   if (!checkLogin()) {
  //     e.preventDefault();
  //     navigate("/UserLogin");
  //   }
  // };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <NavLink
          to="/userSetting" onClick={e => {if (!checkLogin()) {
            e.preventDefault();
            navigate("/UserLogin");
          }}}>
          用户设置
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to="/UserLogin"
          onClick={e => {if (!checkLogin()) {
            e.preventDefault();
            navigate("/UserLogin");
          }}}
          >
          退出登录
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          暂无权限
        </a>
      ),
      disabled: true,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
            icon={<UserOutlined />}
            style={{ cursor: "pointer" }}
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default UserAvatar;
