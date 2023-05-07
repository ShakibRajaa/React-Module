import React from "react";
import "./NotesContentsDesktop.css";

function NotesContentsDesktop({ note }) {
  
  return (
    <div className="desktop__notes__content__note">
      <div className="desktop__notes__content__date__time__details">
        <div className="desktop__notes__content__date">{note.date}</div>
        <div className="desktop__notes__content__time">{note.time}</div>
      </div>
      <div className="desktop__notes__content__details">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NotesContentsDesktop;