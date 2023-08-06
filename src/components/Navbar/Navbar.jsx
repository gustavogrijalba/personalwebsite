import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="navbar-image">
        <Link to="/">
          <img
            className="messi"
            src="https://steamuserimages-a.akamaihd.net/ugc/811055404668406828/C20377A85AC435CB00B000AFAD88A7B0C7D85A87/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          />
        </Link>
      </div>

      <Link className="navbar-link" to="/activity">
        <p>PICTURES</p>
      </Link>

      <Link className="navbar-link" to="/nutrition">
        <p>PROJECTS</p>
      </Link>
    </div>
  );
};

export default Navbar;
