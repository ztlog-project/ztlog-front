import logo from "../../pages/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function Header() {
  // const currentTop = document.body.getBoundingClientRect().top * -1;

  // const [navActive, setNavActive] = useState(false);
  // const [scrollY, setScrollY] = useState(0);
  // const [scrollActive, setScrollActive] = useState(false);

  // const scrollFixed = () => {
  //   if (scrollY > 100) {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(true);
  //   } else {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(false);
  //   }
  // };

  // useEffect(() => {
  //   const scrollListener = () => {
  //     window.addEventListener("scroll", scrollFixed);
  //   };
  //   scrollListener();
  //   return () => {
  //     window.removeEventListener("scroll", scrollFixed);
  //   };
  // });

  return (
    <header>
      <nav id="mainNav" className="navbar-light navbar navbar-expand-lg">
        <div className="container px-4 px-lg-5">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ width: "50px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link px-lg-3 py-3 py-lg-4">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="nav-link px-lg-3 py-3 py-lg-4">
                  Tags
                </Link>
              </li>
              <li className="nav-item">
                <div className="search px-lg-3 py-3 py-lg-3">
                  <input type="text" placeholder="검색어 입력..." />
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
