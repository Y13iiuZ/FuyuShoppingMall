import React from 'react';
import './templateStyle/commentBox.scss';
import store from "../store/CartStore";
import { observer } from "mobx-react-lite";
interface CommentBoxProps {
    author: string;
    content: string;
}

const Comment: React.FC<CommentBoxProps> = ({ author, content }) => {
  const {
    data: { comments },
  } = store;
  return (
    <>
    {comments.map((item,index) => (
        <div className="comment" key={item + index}>
        <h3 className="author">{item.author}</h3>
        <p className="content">{item.content}</p>
      </div>
    ))}
    {/* <div className="comment">
      <h3 className="author">{author}</h3>
      <p className="content">{content}</p>
    </div> */}
    </>
  );
};

export default observer(Comment);
