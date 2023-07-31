import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./navBar.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [dataInput, setDataInput] = useState("");

  const handleSearch = () => {
    console.log(dataInput);
  };

  const handleChange = (event) => {
    setDataInput(event.target.value);
  };

  return (
    <nav className="nav-container">
      <div className="nav-search">
        <Link to="/users" style={{ color: "white", textDecoration: "none"}}>
          <h2>HYG</h2>
        </Link>
        <Link to="/createUser">
          <IconButton sx={{ width: "30px", height: "30px" }}>
            <AddCircleIcon type="string" sx={{ color: "white" }} />
          </IconButton>
        </Link>

        <div className="nav-search-input">
          <input
            type="text"
            placeholder="Buscar aquí por usuario"
            name="textSearch"
            onChange={handleChange}
          />
          <SearchIcon className="icon-search" onClick={handleSearch} />
        </div>
      </div>

      <div className="nav-profile">
        <img
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/518.jpg"
          alt=""
        />
        <h5>Pepito</h5>
      </div>
    </nav>
  );
};

export default NavBar;
