import { useState } from 'react';
import { message } from 'antd';
import './templateStyle/likeBtn.scss';
export default function LikeBtn() {
    const [like,setLike] = useState(false)
    const handleClick = () => {
      message.success(`${like ? '取消收藏' : '已收藏'}`, 1);
      setLike(!like)
    }
  return (
    <>
      <input
        value="favorite-button"
        name="favorite-checkbox"
        id="favorite"
        checked={like ? !!"checked" : !"checked"}
        type="checkbox"
        onClick={handleClick}
      />
      <label className="likeContainer" htmlFor="favorite">
        <svg
          className="feather feather-heart"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <div className="action">
          <span className="option-1">收藏</span>
          <span className="option-2">已收藏</span>
        </div>
      </label>
    </>
  );
}
