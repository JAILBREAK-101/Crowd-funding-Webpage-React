import React from "react";

export function OpenNav() {
  return (
    <div>
      <div className="nav-list">
        {/*pass in a prop for the close button. */}
        <button onClick={handleCloseNav}>
          <img src="" />
        </button>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </div>
    </div>
  );
}
