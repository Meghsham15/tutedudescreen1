import React from "react";

function NavPh(){
    return<nav>
    <div className='logo'><img src={require('../img/logo.png')}></img></div>
    <div className='navItems'><ul>
    <li className='active'><img src={require('../img/prof.png')}></img>ProfileName  ˅</li>
    </ul></div>
  </nav>
}

export default NavPh;