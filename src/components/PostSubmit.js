import React from 'react';
import { Link } from 'react-router-dom';
import toggle from '@/hocs/toggle';

const PostSubmit = ({ to, text, action, edit, show, editBody, editTitle, history }) => {
    const onClickAnchor = (e) => {
        if (action) {
            e.preventDefault();
            e.stopPropagation();
            if (!edit.title) {
                alert('제목을 입력해주세요');
            } else {
                action(edit.title, edit.body, show, history);
                editTitle('');
                editBody('');
            }
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

export default toggle(PostSubmit);
