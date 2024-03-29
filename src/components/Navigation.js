import React from 'react';
import connectStore from '@/hocs/connectStore';
import Logo from '@/components/Logo';
import Profile from '@/components/Profile';
import NaviItem from '@/components/NaviItem';
import * as ROUTES from '@/constants/routes';
import PostSubmit from '@/components/PostSubmit';
import { withRouter } from 'react-router-dom';

const Navigation = ({ user, actions, location, posts, history }) => {
    return (
        <nav className="navbar fixed-top bg-white">
            <Logo to={ROUTES.HOME} />
            <ul className="nav">
                {/* 로그인하지 않은 상태 */}
                <NaviItem to={ROUTES.LANDING} text="시작하기" show={!user} />

                {/* 로그인한 상태 */}
                <NaviItem to={ROUTES.HOME} text="홈" show={user} />
                {/* 글쓰기창에서는 저장 컴포넌트(PostSubmit) 렌더링, 그 외는 글쓰기창 링크 */}
                {location.pathname == ROUTES.WRITE ? (
                    <PostSubmit
                        to={ROUTES.HOME}
                        text="저장"
                        show={user}
                        action={actions.writePost}
                        edit={posts.edit}
                        editBody={actions.editPostBody}
                        editTitle={actions.editPostTitle}
                        history={history}
                    />
                ) : (
                    <NaviItem to={ROUTES.WRITE} text="글쓰기" show={user} />
                )}

                <NaviItem to={ROUTES.HOME} action={actions.logout} history={history} text="로그아웃" show={user} />

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
                    font-size: 0.9rem;
                    cursor: pointer;
                    line-height: 26px;
                }
            `}</style>
        </nav>
    );
};

export default withRouter(connectStore(Navigation));
