import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/guru-logo.png';
const Logo = ({ to }) => {
    return (
        <>
            <Link to={to} className="navbar-brand">
                <img src={logo} alt="logo" />
            </Link>

            <style jsx>{`
                img {
                    height: 3.2rem;
                    padding-bottom: 0.5rem;
                }
            `}</style>
        </>
    );
};

export default Logo;
