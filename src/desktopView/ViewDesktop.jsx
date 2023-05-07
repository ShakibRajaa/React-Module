import React, { useState } from "react";
import "./ViewDesktop.css";
import SidebarDesktop from "../components/desktopComponents/desktopSidebar/SidebarDesktop";
import HomeDesktop from "../components/desktopComponents/desktopHome/HomeDesktop";
import NotesDesktop from "../components/desktopComponents/desktopNotes/NotesDesktop";

function ViewDesktop() {
    const [selected, setSelected] = useState("");
    const [notes, setNotes] = useState([]); 
  
    return (
      <div className="desktop">
        <SidebarDesktop selected={selected} setSelected={setSelected} />
        {selected.length > 0 ? (
          <NotesDesktop
            notes={notes}
            setNotes={setNotes}
            selected={selected}
            setSelected={setSelected}
          />
        ) : (
          <HomeDesktop />
        )}
      </div>
    );
  }
  
  export default ViewDesktop;