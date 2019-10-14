import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ to }) => {
    return (
        <>
            <Link to={to} className="navbar-brand">
                <i className="fab fa-facebook-square" />
            </Link>

            <style jsx>{`
                .navbar-brand i.fa-facebook-square {
                    font-size: 27px;
                    color: white;
                }
            `}</style>
        </>
    );
};

export default Logo;
