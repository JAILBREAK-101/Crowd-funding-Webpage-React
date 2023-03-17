import React from "react";
import { useState, useRef } from "react";
import openNavIcon from "./images/icon-hamburger.svg";
import closeNavIcon from "./images/icon-close-menu.svg";

export default function NavBar() {
  // for NavBar open and close (for now, it's closed).
  const [openNav, setOpenNav] = useState(false);

  // function to handle the opening and closing of the Nav
  let hidden = useRef();
  let show = useRef();

  // useEffect((show.current.style.display = "none"), true);
  // show.current.style.display = "none";
  // change to classes (add and remove)
  function handleNavOpen() {
    setOpenNav(true);
    hidden.current.style.display = "none";
    show.current.style.display = "block";
  }

  function handleCloseNav() {
    show.current.style.display = "none";
    hidden.current.style.display = "block";
    setOpenNav(false);
  }
  return (
    // add a function (useState) for the navBar for opening and closing it.
    <div className="nav-container">
      <nav className="navigation">
        {/*the expression for the opening and the closing of the navBar. */}
        <button className="close-menu" onClick={handleCloseNav} ref={show}>
          <img src={closeNavIcon} alt="close-nav-menu" />
        </button>
        {openNav ? (
          // when we open the nav menu, display what is below.
          <div className="position-absolute">
            <div className="opened-nav-menu">
              {/*change the position of this button */}

              <div className="nav-list">
                {/*pass in a prop for the close button. */}
                <ul className="nav-items">
                  <li>About</li>
                  <li>Discover</li>
                  <li>Get Started</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // For the Desktop View
          NavItems
        )}
        {
          /*Essentially, the above is saying that if our navBar is opened, display the navItems (with it's respective styles, if not, then don't display anything (close it)) */
          //   inside the nav (nav button)
        }
        <button className="nav-button" onClick={handleNavOpen} ref={hidden}>
          <img src={openNavIcon} alt="nav-button" />
        </button>

        {/* <img 
      //     src="../crowdfunding-product-page-main/images/icon-hamburger.svg"
      //     alt="nav-button"
      //   />
    */}
      </nav>
    </div>
  );
}

let NavItems = (
  <ul className="nav-items2">
    <li>About</li>
    <li>Discover</li>
    <li>Get Started</li>
  </ul>
);
