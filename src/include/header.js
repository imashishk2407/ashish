import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
         <div>
        <div class="header_section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="logo"><a href="index.html"><img src="assets/images/logo.png"/></a></div>
            </div>
            <div class="col-md-9">
              <div class="menu_text">
                <ul>
                  <div class="togle_3">
                    <div class="menu_main">
                      <div class="padding_left0"><a href="#">Register</a>
                      <span class="padding_left0"><Link to={'admin'} activeClassName="active">Login</Link></span></div>
                    </div>
                    <div class="shoping_bag"><img src="assets/images/search-icon.png"/></div>
                  </div> 
                  <div id="myNav" class="overlay">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                  <div class="overlay-content">
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="about.html">About</a>
                    <a href="choose.html">Choose</a>
                    <a href="team.html">Team</a>
                    <a href="contact.html">Contact Us</a>
                  </div>
                  </div>
                  <span class="navbar-toggler-icon"></span>
                  <span onclick="openNav()"><img src="assets/images/toggle-icon.png" class="toggle_menu"/></span>
                </ul>
              </div>      
            </div>
          </div>
        </div>


    
    </div>




    </div> 
  )
}

export default Header;