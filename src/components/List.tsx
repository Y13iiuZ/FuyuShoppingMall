import React from "react";
import { Link } from "react-router-dom";
import "./style/listNotice.scss";
const List: React.FC = () => {
  return (
    <>
      <div className="results-summary-container">
        <div className="confetti">
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
        </div>
        <div className="results-summary-container__result">
          <div className="heading-tertiary">Notice</div>
          <div className="result-box">
            <div className="heading-primary">1</div>
            <p className="result">of 999+</p>
          </div>
          <div className="result-text-box">
            <div className="heading-secondary">项目进展--初期</div>
            <p className="paragraph">
              目前还在不断完善中，有什么建议可以通过下方按钮联系我.
            </p>
          </div>
          <div className="summary__cta">
            <Link to="/me">
              <button className="noticeBtn btn__continue">Contact me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
