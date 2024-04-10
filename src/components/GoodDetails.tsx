import React,{useRef,useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import Like from "./Like";
import Mock from "mockjs";
const productId = Mock.mock("@guid");
import PayBtn from "@/encapsulationTemplate/PayBtn";
import CartBtn from "@/encapsulationTemplate/CartBtn";
import LikeBtn from "@/encapsulationTemplate/LikeBtn";
import CommentBtn from "@/encapsulationTemplate/CommentBtn";
import Comment from "@/encapsulationTemplate/CommentBox";
import "./style/goodDetails.scss";
import BackBtn from "@/encapsulationTemplate/BackBtn";
import ShowCommentBox from "@/encapsulationTemplate/ShowCommentBox";
const GoodDetails: React.FC = () => {
  const { state } = useLocation();
  // console.log(useLocation());
  const commentRef = useRef<HTMLDivElement>(null);
  const [isShowComment, setIsShowComment] = useState(false);
  const handleCommentClick = () => {
    setIsShowComment(!isShowComment);
  }
  useEffect(() => {
    // 检查评论区域高度是否超过200px，超过则进行平滑滚动
    if (commentRef.current!.scrollHeight > 20) {
      commentRef.current!.scrollTo({
        top: commentRef.current!.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, []);
  const { id, name, price, stars, quantity, like_number, dislike_number } = state;
  return (
    <>
    <BackBtn />
    <div
      style={{ position: "relative", display: "grid", placeItems: "center" }}>
      <div className="detailPrice">
        <div className="detailPrice-img">
          <div className="img"></div>
        </div>
        <div className="detailPrice-title">{name}</div>
        <div className="detailPrice-subtitle">
          {quantity} | {stars} | 产品号: {id}
          {productId}
          {"ztx"}
        </div>
        <hr className="detailPrice-divider" />
        <div className="detailPrice-footer">
          <div className="detailPrice-price">
            <span>$</span> {price}
          </div>
        </div>
      </div>
      <Like
        style={{ marginTop: "0.2rem" }}
        like={like_number}
        dislike={dislike_number}
        key={id}
      />
      <div
        className="controlers"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:'5px',
          height:65
        }}>
        <LikeBtn />
        <CommentBtn addCmoment={handleCommentClick}/>
        <CartBtn names={name}/>
        <PayBtn order={name}/>
      </div>
      <div className="commentBox" ref={commentRef} style={{
        height: 335,
        width: 246,
        overflowY: 'auto',
        position: 'fixed',
        right: '8%'
      }}>
        <Comment author="Alice" content="这是第一条评论" />
      </div>
      {isShowComment && <ShowCommentBox />}
    </div>
    </>
  );
};

export default GoodDetails;
