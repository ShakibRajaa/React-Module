import React from "react";
import "./NotesContentMobile.css";

function NotesContentMobile({ note }) {
  return (
    <div className="mobile__notes__content__body">
      <div className="mobile__notes__content__date__time__details">
        <div className="mobile__notes__content__date">{note.date}</div>
        <div className="mobile__notes__content__time">{note.time}</div>
      </div>
      <div className="mobile__notes__content__details">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NotesContentMobile;