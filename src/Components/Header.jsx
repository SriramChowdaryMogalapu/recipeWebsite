import React from "react";
const Header = ({ handleNavigation }) => {
  return (
    <header id="header">
      <nav>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <li>
            <button onClick={() => handleNavigation("home")}>
              <i class="fa-solid fa-house"></i> &nbsp; Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("about")}>
              <i class="fa-solid fa-user-tie"></i> &nbsp; About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("contribute")}
              id="contribute-button"
            >
              <i class="fa-solid fa-phone"></i> &nbsp; Contribute Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
