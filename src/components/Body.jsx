import React from "react";
import { UpperBody } from "./UpperBody";
import { MiddleBody } from "./MiddleBody";
import { LowerBody } from "./LowerBody";

// for the lowerBody Section (component)
const data = [
  {
    title: "Bamboo Stand",
    subTitle: "Pledge $25 or more",
    content: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
    items: 101,
    button: "Select Reward",
  },
  {
    title: "Black Edition Stand",
    subTitle: "Pledge $75 or more",
    content:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included",
    items: 64,
    button: "Select Reward",
  },
  {
    title: "Mahogany Special Edition",
    subTitle: "Pledge $200 or more",
    content:
      " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    items: 0,
    // THIS CLASS MAKES IT GREYED OUT.
    id: "id",
    button: "Out of Stock",
  },
];

export default function Body() {
  return (
    <div className="body-container">
      <div className="body">
        <UpperBody />
        <MiddleBody />
        <LowerBody contents={data} />
      </div>
    </div>
  );
}

// <LowerBody contents={...data} />
