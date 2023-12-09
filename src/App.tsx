import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TrademarkCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import "./App.scss";
import Weather from "./components/weather";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    info: "",
    humidity: "",
    power: "",
    aqi: "",
    direct: "",
  });
  const requestAPI = () => {
    axios
      .get("/api1/simpleWeather/query", {
        params: {
          key: "1394c395ddd171dbd80b194cd636bc1f",
          city: "成都",
        },
      })
      .then((res) => {
        console.log(res.data.result.realtime);
        const { temperature, info, humidity, power, aqi, direct } =
          res.data.result.realtime;
        setWeatherData({ temperature, info, humidity, power, aqi, direct });
      })
      .catch((error: string) => {
        console.log(error);
      });
  };
  useEffect(() => {
    requestAPI();
  }, []);

  const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '.textLogo', popover: { title: 'textLogo', description: '这是我设计的文字LOGO!' } },
      { element: '.navbar-nav', popover: { title: 'Nav', description: '这是导航栏!' } },
      { element: '.voltage-button', popover: { title: 'voltageButton', description: '点击按钮进入购物吧!' } },
      { element: '.imgArea', popover: { title: 'advertisingImages', description: '每天不断更新仅展示最火的热销图!' } },
    ],
    nextBtnText:'下一步',
    prevBtnText:'上一步',
    doneBtnText:'完成',
    progressText: 'Step{{current}} of {{total}}'
  });
  driverObj.drive();  // Starts at step 0
  // const driverObj2 = driver();
  // driverObj2.highlight({
  //   element: ".home",
  //   popover: {
  //     title: "Home",
  //     description: "点击返回首页!",
  //   },
  // });
  return (
    <div className="App">
      <header className="head">
        <nav className="navbar">
          <ul className="navbar-nav">
            <h1
              style={{ color: "#fff", fontWeight: 1000 }}
              className="textLogo"
            >
              <NavLink to="/" className="active" end>
                FUPLAY & SHOP
                <TrademarkCircleOutlined
                  style={{
                    position: "absolute",
                    top: ".2rem",
                  }}
                />
              </NavLink>
            </h1>
            <li className="nav-item">
              <NavLink to="/" className="active home">
                首页
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/count" className="active">
                计数
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="active">
                模拟购物单
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/plays" className="active" title="商城不只是购物哟~">
                富玩
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/play/game" className="active">
                游戏
              </NavLink>
            </li>
            <div className="head-right">商城不止是购物Not Just Shopping</div>
          </ul>
        </nav>
        <img
          className="App-logo"
          src="/fp.png"
          alt="LOGO"
          title="LOGO"
          width="100"
          height="100"
        />
      </header>
      <section>
        <div className="voltage-button">
          <button>欢迎来到FPLAY商城</button>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 234.6 61.3"
            preserveAspectRatio="none"
            xmlSpace="preserve"
          >
            <filter id="glow">
              <feGaussianBlur
                className="blur"
                result="coloredBlur"
                stdDeviation="2"
              ></feGaussianBlur>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.075"
                numOctaves="0.3"
                result="turbulence"
              ></feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="30"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displace"
              ></feDisplacementMap>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="displace"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <path
              className="voltage line-1"
              d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z"
              fill="transparent"
              stroke="#fff"
            ></path>
            <path
              className="voltage line-2"
              d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z"
              fill="transparent"
              stroke="#fff"
            ></path>
          </svg>
          <div className="dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
          </div>
        </div>
      </section>
      <div
        className="imgArea"
        style={{
          width: "100%",
          height: "500px",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <img
          src="/zfcw.png"
          alt=""
          width={"30%"}
          height={500}
          style={{ borderRadius: "4px" }}
        />
        <img
          src="/shg.png"
          alt=""
          width={"30%"}
          height={500}
          style={{ borderRadius: "4px" }}
        />
        <img
          src="/rzfw.png"
          alt=""
          width={"30%"}
          height={500}
          style={{ borderRadius: "4px" }}
        />
      </div>
      <Weather
        temperature={+weatherData.temperature}
        info={weatherData.info}
        humidity={+weatherData.humidity}
        power={weatherData.power}
        aqi={weatherData.aqi}
        direct={weatherData.direct}
      />
    </div>
  );
};

export default App;
