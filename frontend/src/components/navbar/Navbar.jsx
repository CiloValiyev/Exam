import React from 'react'
import { NavLink } from 'react-router-dom';
import "../navbar/navbar.scss";

const Navbar = () => {
    let activeStyle = {
        background: "rgb(31, 166, 122)",
        fontSize:"18px"
      };
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span className='dazziling'>Dazzling Demo</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                       <li><NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="">Home</NavLink></li> 
                        <li><NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="about">About</NavLink></li>
                        <li> <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='galery'>Galery</NavLink></li>
                        <li> <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="shortcodes">ShortCodes</NavLink></li>
                        <li> <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='language'>Language</NavLink></li>
                        <li> <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='add'>Add</NavLink></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar