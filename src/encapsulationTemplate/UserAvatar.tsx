import React from "react";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Avatar } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/userSetting">
        用户设置
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/UserLogin">
        退出登录
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        暂无权限
      </a>
    ),
    disabled:true
  },
];

const UserAvatar: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
          icon={<UserOutlined />}
          style={{cursor: 'pointer'}}
        />
      </Space>
    </a>
  </Dropdown>
);

export default UserAvatar;
