import React from "react";

export default function Contents({
  id: identifier,
  title,
  subTitle,
  content,
  items,
  button,
}) {
  return (
    <div className="card" id={identifier}>
      <div className="header">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <p className="content">{content}</p>
      <div className="item">
        <p className="item">
          <span className="item-bold">{items}</span>
          <span className="text">left</span>
        </p>
      </div>
      <button className="reward-button">
        {/*{"Select Reward" || { button }}*/}
        {button}
      </button>
    </div>
  );
}
