import React from "react";
import {Link} from "react-router-dom"

const Navbar = ({onClickFrench, onClickEnglish}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/works">Works</Link>
            </li>
          </ul>
        </div>
        <div className="flags d-flex row justify-content-end">
            <img src="fr-flag.png" className="mr-3" alt="" onClick={onClickFrench} style={{height: "50px", width: "70px"}}/>
            <img src="en-flag.png" className="mr-3" alt="" onClick={onClickEnglish} style={{height: "50px", width: "70px"}}/>
        </div>

      </nav>
    </>
  )
}

export default Navbar;