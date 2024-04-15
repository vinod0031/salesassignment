import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const Navbar = () => {
return (
    <div > 
        <div className='companylogo'>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNEK6_wbkKGfBvyidbdSPLFoPM0GkGTmGD52hZ25UGqW_HhAM7lp-V_Wk9fHPipwM7dys"/></div>
        <h1 style={{fontFamily:"Fantasy"}}>Go Shop Karo</h1>
        </div>
        
        <div>
<nav>
    <ul className='navbarclass'>
    <li>
        <Link to="/" style={{ textDecoration: 'none' ,color:'white'}}>Home</Link>
    </li>
    <li>
        <Link to="/menbags" style={{ textDecoration: 'none' ,color:'white'}}>Men Bags</Link>
    </li>
    <li>
        <Link to="/womenbags" style={{ textDecoration: 'none',color:'white' }}>Women Bags</Link>
    </li>
    <li>
        <Link to="/kidsbags" style={{ textDecoration: 'none' ,color:'white'}}>Kids Bags</Link>
    </li>
    </ul>
</nav></div>


</div>
);
};

export default Navbar;