import React from 'react';
import RippleBtn from './components/RippleBtn';
import "./css/header.css"

function Header() {


  return (
    <nav class="navbar">
      <div className="containerfluid d-flex">
        <div className='rightNav'>
          <div className="logo-brandName">
            <span className="brandName">MarathaSadhi.com</span>
          </div>
        </div>
        <div className="leftNav h-center">
          <RippleBtn text="login" />
          <RippleBtn text="registration" />

        </div>
      </div>
    </nav>
  )
}

export default Header 