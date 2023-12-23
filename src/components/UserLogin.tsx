import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

interface User {
  username: string;
  password: string;
}

interface Session {
  user: User;
  token: string;
}

const users: User[] = [JSON.parse(localStorage.getItem('userInfo') as string)] || [];

const sessions: Session[] = [] || localStorage.getItem('session');

//带有cookie的登录
// const login = async (username: string, password: string): Promise<void> => {
//   try {
//     const response = await axios.post('/api/login', { username, password });
//     // Set the session cookie
//     document.cookie = `session=${response.data.session}; path=/`;
//     console.log('Logged in successfully!');
//   } catch (error) {
//     console.error('Login failed:', error);
//   }
// };

const UserLogin: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const {username, password} = values;
    userLogin(username, password);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const userLogin = (username: string, password: string) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      const token = generateToken();
      const session: Session = {
        user,
        token,
      };
      sessions.push(session);
      localStorage.setItem("session", JSON.stringify(session)); // 存储会话session;
      console.log("登录成功!");
      navigate('/');
      return token;
    } else {
      console.log('去注册')
      navigate("/UserRegist");
    }
  };

  const generateToken = (): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.trunc(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
    return token;
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
            username: "ztx",
            password: "666",
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
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UserLogin;
