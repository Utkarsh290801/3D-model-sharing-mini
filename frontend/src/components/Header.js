import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from "../AppContext";
const Header = () => {
  const url = "http://localhost:5000";
  // const [currentUser , setCurrentUser]=  useState(JSON.parse(sessionStorage.getItem('user')))
  // const {loggedIn,setloggedIn} = useContext(AppContext);
  // const navigate = useNavigate();
  // const logout =()=>{
  //   //destroy session value 
  //   sessionStorage.removeItem('user');
  //   //  setloggedIn to false
  //   setloggedIn(false)
  //   //  navigate to login page
  //   navigate('/login')
  // }
  return (
    <div>
      {/* <!-- Navbar --> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
        {/* <!-- Collapsible wrapper --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src={url + "/logo.png"}
              height="35"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* <!-- Left links --> */}
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
              
              <NavLink className="nav-link " aria-current="page" to="/home">
                  Home
                </NavLink>
            </li>
          <li class="nav-item">
              
              <NavLink className="nav-link " aria-current="page" to="/modelbrowser">
                  Models
                </NavLink>
            </li>
          <li class="nav-item">
              
              <NavLink className="nav-link " aria-current="page" to="/login">
                  Log In
                </NavLink>
            </li>
          <li class="nav-item">
              
              <NavLink className="nav-link " aria-current="page" to="/signup">
                  Signup
                </NavLink>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li> */}
          </ul>
         
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
    
        {/* <!-- Right elements --> */}
        <div class="d-flex align-items-center">
        {/* {
              // currentUser=== null?
              !loggedIn?
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/login">Login Now</NavLink>
              </li>
              :
              <button onClick={logout} className="btn btn-danger">Logout</button>
            }



          <!-- Icon --> */}



          {/* <Link  class="nav-item me-5" to="">
          <i  href="/addmodel" class="fa-solid fa-upload"></i>
          </Link> */}
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          </a>
    
          {/* <!-- Notifications --> */}
          <div class="dropdown">
            <a
              class="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="#">Some news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another news</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </div>
          {/* <!-- Avatar --> */}
          <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
             
            </ul>
          </div>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    {/* <!-- Navbar --> */}
    </div>
  )
}

export default Header