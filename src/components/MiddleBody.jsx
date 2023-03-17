import React from "react";

export function MiddleBody() {
  return (
    <div className="middle-body">
      <section>
        <p>$89,914</p>
        <p>of $100,000 backed</p>
      </section>
      <section>
        <p>5,007</p>
        <p>total backers</p>
      </section>
      <section>
        <p>56</p>
        <p>days left</p>
      </section>
      <section className="range">
        <div className="range-value">
          {/*This would contain the meter value. */}
        </div>
      </section>
    </div>
  );
} 

// FOR THE METER
