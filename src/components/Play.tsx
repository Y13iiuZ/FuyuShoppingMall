import React, { useState, useRef, useEffect } from "react";
import { Button, Alert } from "antd";
import { CSSTransition } from "react-transition-group";
import Lottie from "lottie-web";
import animationJson from "../animationJson/Animation.json";
import "./style/play.scss";
import { Play as P } from "myType"; //use一下
import ScoreTemplate from "../encapsulationTemplate/Score";
import Loading from "../encapsulationTemplate/LoadingOne";
let rendLottie;
let isLottieLoaded = false; // 添加加载状态变量
const randomImgSrc = ["fu.png", "wan.png", "shang.png", "cheng.png"];

//增加分数
enum Score {
  "fu.png" = 4,
  "wan.png" = 3,
  "shang.png" = 2,
  "cheng.png" = 1,
}
interface Position {
  top: string;
  left: string;
}

// 定义函数类型
interface RandomPositionGenerator {
  (): Position;
}

const getRandomPosition: RandomPositionGenerator = () => ({
  top: `${Math.random() * window.innerHeight}px`,
  left: `${Math.random() * window.innerWidth}px`,
});

const ReadLottie: React.FC = () => {
  useEffect(() => {
    if (!isLottieLoaded) {
      rendLottie = Lottie.loadAnimation({
        container: document.querySelector("#lottie") as HTMLElement,
        renderer: "svg",
        autoplay: true,
        animationData: animationJson,
      });
      isLottieLoaded = true; // 标记已加载
    }
  }, []);
  return <div className="lottie" id="lottie"></div>;
};
const GetMousePosition: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <p style={{ color: "red" }}>
        鼠标位置: {mousePosition.x}, {mousePosition.y}
      </p>
    </div>
  );
};
// const rect = imgRefs.current[index]?.current?.getBoundingClientRect()
// if (rect) {
//   console.log("Image X: " + rect.x);
//   console.log("Image Y: " + rect.y);
//   console.log("Image Width: " + rect.width);
//   console.log("Image Height: " + rect.height);
//   const imgElement = imgRefs.current[index]?.current as HTMLImageElement; //直接断言，避免为null
//   // 随机设置图片的位置
//   imgElement.style.top = `${Math.random() * window.innerWidth}px`;
//   imgElement.style.left = `${Math.random() * window.innerHeight}px`;
// }

const RandomRedEnvelope: React.FC = () => {
  const [randomImages, setRandomImages] = useState([] as string[]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [score, setScore] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const RandomRedEnvelopePosition = () => {
      const newPositions = Array.from({ length: 5 }, getRandomPosition);
      setPositions(newPositions);
    };

    const intervalId = setInterval(() => {
      const newRandomImages = [];
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.trunc(Math.random() * randomImgSrc.length);
        newRandomImages.push(randomImgSrc[randomIndex]);
      }
      setRandomImages(newRandomImages);
    }, 1000); // 每隔1秒执行一次

    RandomRedEnvelopePosition(); //初始化

    const handleResize = () => {
      getRandomPosition();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleImageClick = (index: number) => {
    const newRandomImages = [...randomImages];
    console.log(typeof Score);
    setScore(Score[newRandomImages[index] as keyof typeof Score] + score);
    newRandomImages.splice(index, 1);
    setRandomImages(newRandomImages);

    const newPositions = Array.from({ length: 1 }, getRandomPosition);
    setPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions[index] = newPositions[0];
      return updatedPositions;
    });
  };
  return (
    <div>
      {randomImages.map((imgUrl, index) => (
        <img
          ref={imgRef}
          key={index}
          src={`/${imgUrl}`}
          alt={`Random Image ${index}`}
          width={88}
          height={88}
          style={{
            position: "fixed",
            ...positions[index],
          }}
          onClick={() => handleImageClick(index)}
        />
      ))}
      <ScoreTemplate score={score} style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)'}}/>
    </div>
  );
};
const Play: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  const [startPlay, setStartPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const btnName: P = {
    name: "PLAY",
  };
  useEffect(() => {
    handleShowTips();
  }, []);
  const handleShowTips = (): void => {
    setShowMessage(true);
  };
  const playingGames = ():void =>{
    setStartPlay(false);
    setPlaying(true);
    setTimeout(()=>{
      setLoading(false);
    },500)
  }
  return (
    <div className="redLottie">
      <div className="tips">
        <CSSTransition
          in={showMessage}
          nodeRef={nodeRef}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <div ref={nodeRef}>
            <Alert
              type="info"
              message="温馨提示"
              description="沉迷游戏伤身，适度游戏益身"
              showIcon
              action={
                <Button
                  type="dashed"
                  onClick={() => {
                    setShowMessage(false);
                    setStartPlay(true);
                  }}
                  danger
                >
                  接受
                </Button>
              }
            />
          </div>
        </CSSTransition>
      </div>
      {startPlay && (
        <>
          <GetMousePosition />
          <ReadLottie />
          <button className="readLottiePlayBtn" onClick={playingGames}>{btnName.name}</button>
        </>
      )}
      {playing && (
        <>
        {loading ? <Loading /> : <RandomRedEnvelope />}
        </>
      )}
    </div>
  );
};

export default Play;
