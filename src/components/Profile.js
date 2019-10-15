import React from 'react';
import toggle from '@/hocs/toggle';

const Profile = (props) => {
    const { name } = props.user;
    return (
        <li className="nav-item">
            <a href={'/u/' + props.user.seq} className="nav-link">
                <img
                    src={
                        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png'
                    }
                    alt=""
                />{' '}
                {name}
            </a>
            <style jsx>{`
                .nav-item img {
                    width: 25px;
                    height: 25px;
                    border-radius: 100%;
                    overflow: hidden;
                    margin-right: 5px;
                }
            `}</style>
        </li>
    );
};

export default toggle(Profile);
