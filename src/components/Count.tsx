import React, { useState, useEffect } from "react";
import { Button, Space, Card, Flex, Typography, Watermark } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import store from "../store/CartStore";
import { observer } from "mobx-react-lite";
import { randomDrawing } from "../utils";
/* ----------类组件---------- */

// interface CounterState {
//   count: number;
// }

// class Counter extends Component<{}, CounterState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 4,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleClick}>Click to Add One</button>
//       </div>
//     );
//   }
// }

/* -----切换为函数组件，采用hooks----- */
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

const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: "block",
  width: 273,
};
const Counter: React.FC = () => {
  const {
    data: { name },
    changeName,
  } = store;
  const [names, setName] = useState(name);
  const [count, setCount] = useState("");
  const [personDemo, setPersonDemo] = useState([
    { n: "p1", w: 100 },
    { n: "p2", w: 200 },
    { n: "p3", w: 150 },
    { n: "p4", w: 180 },
    { n: "p5", w: 190 },
    { n: "p6", w: 175 },
  ]);
  const getLuckyPerson = randomDrawing(personDemo);
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
    console.log(1);
  }, [name]);
  const handleClick = (): void => {
    const randomValue: number = Math.trunc(Math.random() * iconValues.length);
    setCount(iconValues[randomValue]);
    setTimeout(() => {
      setCount("");
    }, 1000);
  };
  return (
    <Watermark content={["张铁曦", "18381037727"]}>
    <div style={{height: "100vh"}}>
      <h1>
        抽到什么学什么:
        <IconFont type={`${count}`} />{" "}
      </h1>
      <Button onClick={handleClick}>Draw now</Button>
      <Space>
        <IconFont type="icon-javascript" />
        <IconFont type="icon-java" />
        <IconFont type="icon-shoppingcart" />
        <IconFont type="icon-python" />
      </Space>
      <div>
        <p>简易mobx {names}</p>
        <input onChange={({ target: { value } }) => changeName(value)} />
      </div>
      <div>
        <Card
          hoverable
          style={cardStyle}
          bodyStyle={{ padding: 0, overflow: "hidden" }}
        >
          <Flex justify="space-between">
            <img
              alt="avatar"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              style={imgStyle}
            />
            <Flex
              vertical
              align="flex-end"
              justify="space-between"
              style={{ padding: 32 }}
            >
              <Typography.Title level={3}>
                {`今天中奖的幸运儿是:${getLuckyPerson.n}`}
              </Typography.Title>
              <Button type="text" href="javascript:void(0);" target="_blank">
                点击参与
              </Button>
            </Flex>
          </Flex>
        </Card>
      </div>
    </div>
    </Watermark>
  );
};
export default observer(Counter);
