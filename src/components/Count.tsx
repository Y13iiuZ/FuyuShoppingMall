import React, { useState,useEffect } from "react";
import { Button, Card, Flex, Typography, Watermark } from "antd";
import store from "../store/CartStore";
import { observer } from "mobx-react-lite";
import BackBtn from "@/encapsulationTemplate/BackBtn";
import { randomDrawing } from "../utils";

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
  } = store;
  const [personDemo, setPersonDemo] = useState([
    { n: "p1", w: 100 },
    { n: "p2", w: 200 },
    { n: "p3", w: 300 },
    { n: "p4", w: 400 },
    { n: "p5", w: 500 },
    { n: "p6", w: 600 },
  ]);
  return (
    <Watermark content={["张铁曦", "18381037727"]}>
    <BackBtn />
    <div style={{height: "100vh"}}>
      <div>
        {/* <p>{`购物车的所有商品为:${[...name].length === 0 ? "空" : JSON.stringify([...name])}`}</p> */}
        <p>{`购物车的所有商品数量为:${[...name].length}`}</p>
      </div>
      <div>
        {[...name].reverse().map((item:any) => {
        const getLuckyPerson = randomDrawing(personDemo);
        return (<Card
          hoverable
          style={cardStyle}
          bodyStyle={{ padding: 0, overflow: "hidden" }}
          key={item}
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
                {`您添加的商品是:${item ? item : "暂无"}`}
              </Typography.Title>
              <Button type="text">
                当前购买量级:{getLuckyPerson.n}
              </Button>
            </Flex>
          </Flex>
        </Card>)})}
        
      </div>
    </div>
    </Watermark>
  );
};
export default observer(Counter);
