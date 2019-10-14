import React from 'react';
import connectStore from '@/hocs/connectStore';
import Logo from '@/components/Logo';
import Profile from '@/components/Profile';
import NaviItem from '@/components/NaviItem';
import * as ROUTES from '@/constants/routes';

const Navigation = ({ user, actions, location }) => {
    return (
        <nav className="navbar fixed-top bg-white">
            <Logo to={ROUTES.HOME} />
            <ul className="nav">
                {/* <NaviItem to="/login" text="로그인" show={!user} />
                <NaviItem to="/signup" text="회원가입" show={!user} />
                <Profile show={user} user={user} />
                <NaviItem to="/signout" action={actions.logout} text="로그아웃" show={user} /> */}
                <NaviItem to={ROUTES.SIGN_IN} text="로그인" show={!user} />
                {/* <NaviItem to={ROUTES.LANDING} text="메인" show={!user} /> */}
                {location.pathname == ROUTES.WRITE ? (
                    <NaviItem to={ROUTES.HOME} text="저장" show={user} />
                ) : (
                    <NaviItem to={ROUTES.WRITE} text="글쓰기" show={user} />
                )}

                <NaviItem to={ROUTES.ACCOUNT} text="계정" show={user} />
                <Profile show={user} user={user} />
            </ul>

            <style jsx>{`
                .fixed-top {
                    height: 4rem;
                }
                .bg-white {
                    background-color: #fff;
                }
                .navbar {
                    box-shadow: rgb(0, 0, 0) 0px 5px 20px -10px;
                }
                /* ".nav" 임이의 prefix가 추가되지만 ".nav-item .nav-link"은 추가되지 않습니다. 
          자식 컴포넌트에 스타일을 적용할 수 있습니다. */
                .nav :global(.nav-item .nav-link) {
                    color: black;
                    font-weight: 800;
                    font-size: 12px;
                    cursor: pointer;
                    line-height: 26px;
                }
                .nav :global(.nav-item .nav-link:hover) {
                    color: rgba(255, 255, 255, 0.75);
                }
            `}</style>
        </nav>
    );
};

export default connectStore(Navigation);
