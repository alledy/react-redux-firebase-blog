import React from 'react';
import { Link } from 'react-router-dom';
import toggle from '@/hocs/toggle';

const NaviItem = ({ to, text, action, history }) => {
    const onClickAnchor = (e) => {
        if (action) {
            e.preventDefault();
            e.stopPropagation();
            action(history);
        }
    };

    return (
        <li className="nav-item">
            <Link to={to} className="nav-link" onClick={(e) => onClickAnchor(e)}>
                {text}
            </Link>
        </li>
    );
};

export default toggle(NaviItem);
