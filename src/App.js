import { useEffect, useState } from "react";
import ViewDesktop from "./desktopView/ViewDesktop";
import MobileView from "./mobileView/MobileView";
import NotesPageMobile from "./components/mobileComponents/mobileNotesPage/NotesPageMobile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App(){
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [selected, setSelected] = useState(""); // eslint-disable-line
  const [notes, setNotes] = useState([]); // eslint-disable-line

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected]);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);

  return (
    <div className="App">
      {screenSize > 500 ? (
        <ViewDesktop />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MobileView selected={selected} setSelected={setSelected} />
              }
            />
            <Route
              path="/notes"
              element={
                <NotesPageMobile
                  selected={selected}
                  setSelected={setSelected}
                  notes={notes}
                  setNotes={setNotes}
                />
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  )
}
export default App;