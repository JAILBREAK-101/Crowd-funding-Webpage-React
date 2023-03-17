// WHERE EACH DATA WOULD BE HOSTED.
import React from "react";

// THE DATA THAT HAVE SUBTITLE AND PRICE IN THE MODAL.
export default function EachData({ props }) {
  return (
    <div className="card" id={props.id}>
      <div className="header">
        <input
          id={"radio"}
          /*{`checkbox ${num}`}*/ type={"radio"}
          checked={props.radio}
        />
        <div className="label-container">
          <label
          // for={`checkbox ${num}`}
          >
            {props.label}
          </label>
          <p>{props.subtitle}</p>
        </div>
      </div>

      <div className="content">{props.content}</div>

      <div className="card-footer">
        <span className="items">{props.items}</span> <span>left</span>
      </div>
    </div>
  );
}
