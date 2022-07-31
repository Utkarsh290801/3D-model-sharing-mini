import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const url = "http://localhost:5000";
  return (
    <div id="container">
      <div id="navbar">
        <div id="logo">
          <img src={url + "/logo.png"} alt="" />
        </div>
        <ul>
          <li class="active">
            <a to="#">Home</a>
          </li>

          <li>
            <a   href="/signup">Sign Up</a>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/addmodel">Upload</Link>
          </li>
        </ul>
      </div>
      <div id="aSide">
        <img src={url + "/background.png"} alt="" />
        <model-viewer
          src={url + "/Drossel.gltf"}
          alt="model robot"
          auto-rotate
          camera-controls
          ar
          ios-src={url + "/Drossel.gltF"}
        ></model-viewer>
      </div>
      <div id="content">
        <h2>3D MODEL</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          laboriosam, sapiente veniam<mark>Made By Utkarsh arora</mark> quae
          perferendis sunt cumque iusto distinctio totam facilis. Obcaecati
          minima at magni eligendi ip sum hic officia iure ipsam?
        </p>
        <Link  class="btn button" to="/modelbrowser">Find More</Link>
      </div>
      <div id="icons">
        <div id="iconsLogo">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
      <div id="pagination">
        <div id="leftBtn">
          <i class="fas fa-angle-left"></i>
        </div>
        <div id="rightBtn">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};
export default Home;
