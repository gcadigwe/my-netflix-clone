import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netlix Logo"
      />

      <img
        className="nav__avatar"
        src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
