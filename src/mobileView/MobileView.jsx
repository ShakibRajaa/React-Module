import React, { useState, useEffect } from "react";
import "./MobileView.css";

import PopupMobile from "../components/mobileComponents/mobilePopup/PopupMobile";
import NotesMobile from "../components/mobileComponents/mobileNotes/NotesMobile";
import HomeMobile from "../components/mobileComponents/mobileHome/HomeMobile";

function MobileView({ selected, setSelected }) {
    const [titles, setTitles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [groupNamesParent, setGroupNamesParent] = useState(
      localStorage.getItem("groupNames") || []
    );
  
    useEffect(() => {
      const data = localStorage.getItem("groupNames");
      if (data) {
        setGroupNamesParent(JSON.parse(data));
      } else {
        setGroupNamesParent([]);
      }
    }, []);
  
    useEffect(() => {
      if (groupNamesParent.length > 0) {
        const obj = JSON.parse(localStorage.getItem("groupNames"));
        const result = Object.keys(obj).map((key) => [obj[key]]);
        setTitles(result);
      }
    }, [groupNamesParent]);
  
    const handleClick = () => {
      setShowPopup(true);
    };
  
    const handleClose = () => {
      setShowPopup(false);
    };
    return (
      <div className="mobile__sidebar">
        <div className="mobile__sidebar__title">Pocket Notes</div>
        <div className="mobile__sidebar__create__notes__btn">
          <button onClick={handleClick}>
            <span id="add">+</span>
            <span>Create Notes Group</span>
          </button>
        </div>
        <div className="mobile__sidebar__notes__title">
          {titles.length > 0 ? (
            titles.map((title, index) => (
              <NotesMobile
                selected={selected}
                setSelected={setSelected}
                title={title}
                key={index}
              />
            ))
          ) : (
            <HomeMobile />
          )}
        </div>
        {showPopup && (
          <div className="mobile__popup__overlay">
            <PopupMobile
              onClose={handleClose}
              groupNamesParent={groupNamesParent}
              setGroupNamesParent={setGroupNamesParent}
            />
          </div>
        )}
      </div>
    );
  }
  
  export default MobileView;