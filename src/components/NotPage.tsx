import { useNavigate } from "react-router";
import React from "react";
const NotPage: React.FC = () => {
  const navigatie = useNavigate();
  const goBack = () => {
    navigatie(-1);
  };
  return (
    <>
      <h1>主页</h1>
      <button onClick={goBack}>返回</button>
    </>
  );
};

export default NotPage;
