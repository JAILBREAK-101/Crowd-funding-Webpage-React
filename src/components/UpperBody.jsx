import React, { useRef, useState } from "react";

import mastercraft from "./images/logo-mastercraft.svg";
import bookmark from "./images/icon-bookmark.svg";
import closeModal from "./images/icon-close-modal.svg";
import EachData from "./EachData";
import { dataModal } from "./OpenModal";

export function UpperBody({ props = dataModal }) {
  const [back, openBack] = useState(false);
  // for bookmarking
  const [bookmarked, bookmarkPage] = useState({
    bookmarked: false,
    // No need
    id: generateId(),
  });

  // two things should happen, when we click on the bookmark icon button.
  function handleBack() {
    openBack(true);
  }

  let bookmarkIcon = useRef();
  // for handling bookmarking
  function handleBookmark() {
    bookmarkPage((bookmarked.bookmarked = true));
    bookmarkIcon.current.classList.add("open-bookmark");
  }

  // function for generating random ID for when we bookmark
  function generateId() {
    return Math.floor(Math.random() * 10 + 1);
  }

  // for the close button of the modal
  function handleClick() {
    openBack(false);
  }
  return (
    <div className="upper-body">
      <img className="mastercraft" src={mastercraft} alt="mastercraft-logo" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="button-group">
        <button className="back" onClick={handleBack}>
          Back this project
        </button>
        <button className="bookmark" onClick={handleBookmark}>
          <img src={bookmark} />
        </button>

        {/*THE MODAL DATA*/}
        {back ? (
          <div className="modal-container">
            <section className="head">
              <h2>Back this project</h2>
              <button onClick={handleClick} ref={bookmarkIcon}>
                <img src={closeModal} alt="close-button"></img>
              </button>
            </section>

            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>

            <section className="flex-box">
              {/*Loop from here */}
              {dataModal.map((data) => {
                return <EachData props={data} />;
              })}
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// <div className="card">
//             <div className="header">
//               <input
//                 id={"radio"}
//                 /*{`checkbox ${num}`}*/ type={"radio"}
//                 checked={true}
//               />
//               <label
//               // for={`checkbox ${num}`}
//               >
//                 Pledge with no reward
//               </label>
//             </div>

//             <div className="content">
//               Choose to support us without a reward if you simply believe in
//               our project. As a backer, you will be signed up to receive
//               product updates via email.
//             </div>
//           </div>
