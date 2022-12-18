import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
        <nav className="navbar">
            <h1>Film-Tarayıcı2000</h1>
            <div className='col'>
                <Link to="/">Ana Sayfa</Link>
            </div>
        </nav>
	);
};

export default Navbar;