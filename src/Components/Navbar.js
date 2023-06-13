import React from 'react';
import "../styles/nav.css";
import {logo} from "../data/data.json";
import {Link} from "react-router-dom";


const 
Navbar = (

) => {
  return (
    <div className='nav'>
        <div className="logo">
            <Link to="/dsd">
                 {/* <img id="logoImage" src={logo} alt="Not" />  */}
            </Link>
            </div>
            <Link className='navlinks' to="/miphones">Mi Phones</Link>
            <Link className='navlinks' to="/redmiphones">Redmi Phones</Link>
            <Link className='navlinks' to="/tv">TV</Link>
            <Link className='navlinks' to="/laptops">Laptops</Link>
            <Link className='navlinks' to="/lifestyle">Fitness & Lifestyle</Link>
            <Link className='navlinks' to="/home">Home</Link>
            <Link className='navlinks' to="/radio">Radio</Link>
            <Link className='navlinks' to="/accessories">Accessories</Link>
            <div className="searchbox">
                <input type="text" name='search' placeholder='Search Products' /> 
            </div>
        </div>
    

    )
}

export default Navbar