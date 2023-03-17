// THIS IS WHERE THE FIRST PROJECT COMES IN
import React from "react";
// import utilities, images and icons that i need beneath here.
import "./images.json";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  return (
    <div className="wrapper">
      {/*Background picture would come here in the Header component */}
      <Header />
      <Body />
    </div>
  );
}

// UNWANTED CODE.
// import React from "react";
// import { Navbar } from "./component/Navbar";
// return (
//   <div>
//     <Navbar />
//     <Hero />
//     <Footer />
//   </div>
// );
