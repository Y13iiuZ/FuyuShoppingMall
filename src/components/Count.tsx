import React, { useState, useEffect } from "react";
import { Button, Space } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import store from "../store/CartStore";
import { observer } from "mobx-react-lite";
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
const Counter: React.FC = () => {
  const {
    data: { name },
    changeName,
  } = store;
  const [names, setName] = useState(name);
  const [count, setCount] = useState("");
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, [name]);
  const handleClick = (): void => {
    const randomValue: number = Math.trunc(Math.random() * iconValues.length);
    setCount(iconValues[randomValue]);
    setTimeout(() => {
      setCount("");
    }, 1000);
  };
  return (
    <div>
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
        <input onChange={({ target: { value } }) => changeName(value)}></input>
      </div>
    </div>
  );
};
export default observer(Counter);
