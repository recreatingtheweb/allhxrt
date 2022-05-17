import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return <div>
     <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Allhxrt</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample01">
        <ul class="navbar-nav me-auto mb-2">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/paintings">Paintings</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/clothing">Clothing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/contact">Contact</Link>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
    </div>
}

export default Navbar;