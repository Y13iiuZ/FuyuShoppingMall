import React from "react";
import { Link } from "react-router-dom";
import "./style/goods.scss";
interface goodsImgSrc {
  src: string[];
}
interface GoodsProps {
  getGoodsListData: any[];
}
const goodsimg: goodsImgSrc = {
  src: [
    "Android.png",
    "coffee.jpg",
    "company.JPG",
    "cooks.jpg",
    "demoPic.jpg",
    "iPhone.jpg",
    "panda.png",
    "shoe.jpg",
    "vegetable.jpg",
  ],
};
const Goods: React.FC<GoodsProps> = ({ getGoodsListData }) => {
  // const [gDst, setDst] = useState(999) //可做成晃眼特效
  return (
    <>
      <div className="goodsDisplay">
        {getGoodsListData.map((item, index) => {
          const { length } = goodsimg.src;
          const randomIndex = Math.trunc(Math.random() * length);
          const gSrc = goodsimg.src[randomIndex];
          return (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={item.id}
              >
                <Link to={`/goodDetails`} state={item}>
                  <div className="goodsCard" key={item.id}>
                    <div className="content">
                      <img
                        src={`/goodsList/${gSrc}`}
                        alt="demoPic"
                        width={150}
                        height={120}
                      />
                      <div className="description">
                        <p className="title">
                          <strong>{item.name}</strong>
                        </p>
                        <p className="info">
                          {item.category} | {item.stars}
                        </p>
                        <p className="price">{item.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Goods;
