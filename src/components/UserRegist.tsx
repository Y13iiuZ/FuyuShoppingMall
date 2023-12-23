import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UnlockOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./style/UserLogin.scss";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
//带有cookie的注册
// const register = async (username: string, password: string, name: string): Promise<void> => {
//   try {
//     const response = await axios.post('/api/register', { username, password, name });
//     // Set the session cookie
//     document.cookie = `session=${response.data.session}; path=/`;
//     console.log('Registered successfully!');
//   } catch (error) {
//     console.error('Registration failed:', error);
//   }
// };
interface User {
  username: string;
  password: string;
}

const users: User[] = [JSON.parse(localStorage.getItem('userInfo') as string)] || [];

const UserRegist: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const { username, password } = values;
    userRegist(username, password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const userRegist = (username: string, password: string): void => {
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      console.error("注册失败，用户名已存在!");
    } else {
      const newUser: User = {
        username,
        password
      };
      users.push(newUser);
      localStorage.setItem("userInfo", JSON.stringify(newUser));
      console.log("注册成功，去登录吧!");
      navigate("/UserLogin");
    }
  };
  return (
    <>
      <div className="UserLogin">
        <Form
          name="userLogin"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{
            maxWidth: 600,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          initialValues={{
            remember: true,
            username: "",
            password: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "请输入你的用户名!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入你的用户名!" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "请输入你的密码!" }]}
          >
            <Input.Password
              prefix={passwordVisible ? <UnlockOutlined /> : <LockOutlined />}
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              placeholder="请输入你的密码!"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UserRegist;
