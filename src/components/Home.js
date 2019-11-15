import React, { useMemo, useEffect, useCallback } from 'react';
import connectStore from '@/hocs/connectStore';
import Post from '@/components/Post';
import { Route, Link } from 'react-router-dom';
import * as ROUTES from '@/constants/routes';

const Home = (props) => {
    // 홈에서 포스트 리스트 최신순 정렬
    const postList = props.posts.entities
        .slice(0)
        .reverse()
        .map((post, index) => {
            // 전체 코멘트 중 해당 postKey 값만 저장
            const comments = props.comments[post.key];
            return (
                <Post
                    key={index}
                    post={post}
                    index={post.index}
                    fetchComments={props.actions.fetchComments}
                    comments={comments}
                />
            );
        });

    // 홈 마운트 시 전체 포스트와 전체 코멘트 fetch
    useEffect(() => {
        props.actions.fetchPosts();
        props.actions.fetchComments();
    }, []);

    // useEffect(() => {
    //     if (props.user) {
    //         history.push('/home');
    //     }
    // }, [props.user]);

    return (
        <>
            {/* <Route path={ROUTES.USER_POST} component={userPostList} /> */}
            <div className="posts container">
                {postList}
                <div className="text-center">
                    <Link to={ROUTES.PRIVACY_POLICY}>개인정보 처리방침</Link>
                </div>
            </div>

            <style jsx global>{`
                .container {
                    max-width: 600px;
                }
                .container .text-center {
                    margin-top: 20px;
                }
                a {
                    font-weight: 500;
                    color: #3a5999;
                }
                a {
                    text-decoration: none;
                }
            `}</style>
        </>
    );
};

export default connectStore(Home);
