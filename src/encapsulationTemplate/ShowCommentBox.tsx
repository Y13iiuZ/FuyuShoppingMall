import React, { ChangeEvent,useRef } from "react";
import "./templateStyle/showCommentBox.scss";
import store from "../store/CartStore";
import { observer } from "mobx-react-lite";
const ShowCommentBox: React.FC = () => {
//   const [commentInfo, setCommentInfo] = React.useState({
//     author: "",
//     content: "",
//   });
const { addComments } = store;
const infoRef = useRef({});
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value, "info:", e.target[1].value);
    // setCommentInfo({
    //   ...commentInfo,
    //   author: e.target[0].value,
    //   content: e.target[1].value,
    // });
    infoRef.current = {
        author: e.target[0].value,
        content: e.target[1].value,
    }
    addComments(infoRef.current);
  };
  return (
    <>
      <div className="showCommentCard">
        <span className="title">Leave a Comment</span>
        <form className="form" onSubmit={handleClick}>
          <div className="group">
            <input placeholder="‎" type="text" required={false} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <textarea
              placeholder="‎"
              id="comment"
              name="comment"
              rows={5}
              required={false}></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button type="submit">评论</button>
        </form>
      </div>
    </>
  );
};

export default observer(ShowCommentBox);
