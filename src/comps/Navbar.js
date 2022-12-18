import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
        <nav className="navbar">
            <h1>Filim-Tarayıcı2000</h1>
            <div className='col'>
                <Link to="/" className='align-item-end'>Ana Sayfa</Link>
            </div>
        </nav>
	);
};

export default Navbar;