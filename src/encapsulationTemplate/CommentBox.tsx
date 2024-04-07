import React from 'react';
import './templateStyle/commentBox.scss';

interface CommentBoxProps {
    author: string;
    content: string;
}

const Comment: React.FC<CommentBoxProps> = ({ author, content }) => {
  return (
    <div className="comment">
      <h3 className="author">{author}</h3>
      <p className="content">{content}</p>
    </div>
  );
};

export default Comment;
