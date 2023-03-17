import React from "react";
import Contents from "./Contents";
// criterias: Pay Attention in class.
// Attending the class.

export function LowerBody({ contents }) {
  return (
    <div className="lower-body">
      <h2>About this project</h2>
      <p>
        <span>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </span>
        <span>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </span>
      </p>

      <section className="flex-box">
        {/*Use props to run through this design */}
        {
          // Where the data would be mapped to (dynamically)
          contents.map((dataItems) => {
            // return an HTML Component for our contents.

            // always set a key, for the uniqueness of each child element in a mapped array of children rendered as HTML elements.
            return <Contents key={dataItems.title} props={dataItems} />;
          })
        }
      </section>
    </div>
  );
}

{
  /*props.map((prop) => {
        <div className="card">
          <div className="header">
            <p>{prop.title}</p>
            <p>{prop.subTitle}</p>
          </div>
          <div className="body">
            <p>{prop.content}</p>
          </div>
          <div className="item-button">
            <p className="item">
              {prop.items} <span className="text">left</span>
            </p>
          </div>
          <button className="reward-button">Select Reward</button>
        </div>;
      }) */
}
