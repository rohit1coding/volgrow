import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                <ul className="left hide-on-med-and-down" style={{marginLeft:"30px",alignItems:"center"}}>
                    <li className="navbar_list"><Link to="/">Home</Link></li>
                    <li className="navbar_list"><Link to="/">About</Link></li>
                    <li className="navbar_list"><Link to="/">Schemes</Link></li>
                    <li className="navbar_list"><Link to="/">Loans</Link></li>
                    <li className="navbar_list"><Link to="/">Member</Link></li>
                    <li className="navbar_list"><Link to="/">Careers</Link></li>
                    <li className="navbar_list"><Link to="/">Gallery</Link></li>
                    <li className="navbar_list"><Link to="/">Faqs</Link></li>
                    <li className="navbar_list"><Link to="/">Contact Us</Link></li>
                </ul>
                </div>
  </nav>
        </div>
    )
}

export default Navbar
