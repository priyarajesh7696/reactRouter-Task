import React from "react"
import {Link} from "react-router-dom"


function NavBar() {
 
  return <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
          <Link
                  to="/all"
                  className="nav-link text-uppercase"
                  href="index.html"
                >
                  <span>All</span>
                </Link>
              </li>
          <li className="nav-item px-lg-4">
                <Link
                  to="/fullstack"
                  className="nav-link text-uppercase"
                  href="index.html"
                >
                  <span>full stack devlopment</span>
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  to="/datascience"
                  className="nav-link text-uppercase"
                  href="index.html"
                >
                  <span>datascience</span>
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  to="/cybersecurity"
                  className="nav-link text-uppercase"
                  href="index.html"
                >
                  <span>cyber security</span>
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  to="/career"
                  className="nav-link text-uppercase"
                  href="index.html"
                >
                  <span>career</span>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
     
    </>
}

export default NavBar;
