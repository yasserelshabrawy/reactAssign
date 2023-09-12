import React, { useState } from 'react'
import { NavLink , Link} from 'react-router-dom';


export default function Navbar() {
  let [navbar, setNavbar] = useState(false)
  const changePadding =()=>{
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll' , changePadding)
 

  return (
    <>
 <nav className={navbar? "navbar navbar-expand-lg bgNav py-2 sticky-top" : "navbar navbar-expand-lg bgNav py-4" }>
  <div className="container">
    <Link className="navbar-brand fs-3 text-white" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto fw-bold ">
        <li className="nav-item mx-2">
        <NavLink className="nav-link text-white" to="about">About</NavLink>
        </li>

        <li className="nav-item mx-2">
          <NavLink className="nav-link text-white" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link text-white" to="contact">CONTACT</NavLink>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
