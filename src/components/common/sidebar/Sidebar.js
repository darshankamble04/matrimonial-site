import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
function Sidebar() {
    return (
        <div className='sidebar'>
            {/* <div className="sidebarBrand">name</div> */}
            <div className="tabs d-flex flex-column">
                <Link to="/dashboard" className={`tab ${window.location.pathname == "/dashboard" ? "active" : ""}`}><span>Dashboard</span></Link>
                <Link to="/Search" className={`tab ${window.location.pathname == "/Search" ? "active" : ""}`}><span>Search</span></Link>
                <Link to="/notification" className={`tab ${window.location.pathname == "/notification" ? "active" : ""}`}><span>Notification</span></Link>
                <Link to="/Chat" className={`tab ${window.location.pathname == "/Chat" ? "active" : ""}`}><span>Chat</span></Link>
                <Link to="/my-account" className={`tab ${window.location.pathname == "/my-account" ? "active" : ""}`}><span>My Account</span></Link>
                <Link to="/contact-us" className={`tab ${window.location.pathname == "/contact-us" ? "active" : ""}`}><span>Contact Us</span></Link>
                <Link to="/about-us" className={`tab ${window.location.pathname == "/about-us" ? "active" : ""}`}><span>About   Us</span></Link>
            </div>

        </div>
    )
}

export default Sidebar