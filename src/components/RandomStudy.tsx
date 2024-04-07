import React,{useState} from "react";
import { Button, Space } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overridden)
      "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
    ],
  });
  
  enum Icon {
    javascript = "icon-javascript",
    java = "icon-java",
    shoppingcart = "icon-shoppingcart",
    python = "icon-python",
  }
  const iconValues: string[] = Object.values(Icon); // 将枚举值存储在数组中

const RandomStudy: React.FC = () => {
  const [count, setCount] = useState("");
  const handleClick = (): void => {
    const randomValue: number = Math.trunc(Math.random() * iconValues.length);
    setCount(iconValues[randomValue]);
    setTimeout(() => {
      setCount("");
    }, 1000);
  };
  return (
    <>
      <h1>
        抽到什么学什么:
        <IconFont type={`${count}`} />{" "}
      </h1>
      <Button onClick={handleClick}>开始</Button>
      <Space>
        <IconFont type="icon-javascript" />
        <IconFont type="icon-java" />
        <IconFont type="icon-shoppingcart" />
        <IconFont type="icon-python" />
      </Space>
    </>
  );
};

export default RandomStudy;
