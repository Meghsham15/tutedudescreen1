import React from "react";

function Nav(){
    return<nav>
    <div className='logo'><img src='/img/logo.png'></img></div>
    <div className='navItems'><ul>
      <li>My assignment</li>
      <li>Chat with Mentor</li>
      <li className='active'><img src='/img/prof.png'></img>ProfileName <img src='/img/dwnarr.png' className='dwn'></img></li>
    </ul></div>
  </nav>
}

export default Nav;