import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar.jsx";


function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}

export default App;
