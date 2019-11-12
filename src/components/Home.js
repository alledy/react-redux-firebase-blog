import React, { useMemo, useEffect, useCallback } from 'react';
import connectStore from '@/hocs/connectStore';
import Post from '@/components/Post';
import { Route, Link } from 'react-router-dom';
import * as ROUTES from '@/constants/routes';

const Home = (props) => {
    // const posts = useMemo(() => props.posts.ids.map((id) => props.posts.entities[id]), [
    //     props.posts.entities,
    //     props.posts.ids,
    // ]);

    // const postList = useCallback(() => {
    //     props.posts.entities.map((post, index) => {
    //         console.log('useMemo ', post);
    //         return <Post key={index} post={post} />;
    //     });
    // }, [props.posts.entities]);

    // 홈에서 포스트 리스트 최신순 정렬
    const postList = props.posts.entities
        .slice(0)
        .reverse()
        .map((post, index) => {
            return <Post key={index} post={post} index={post.index} comments={props.comments} />;
        });

    // const postsObj = useMemo(() => {
    //     props.posts.entities.reduce((acc, cur) => {
    //         acc[cur.key] = cur;
    //         return acc;
    //     }, {});
    // }, [props.posts.entities]);

    // const userClickHandler = (user) => {
    //     const userPostArr = props.posts.entities.filter(
    //         (post) => post.writer.email == props.user.email || post.writer.name == props.user.name
    //     );

    //     const userPostList = userPostArr.map(post, index);
    // };

    // const writePostHandler = useCallback(
    //     (contents) => {
    //         props.actions.writePost(contents, props.user);
    //     },
    //     [props.user]
    // );
    // const writeCommentHandler = useCallback(
    //     (postSeq, contents) => {
    //         props.actions.writeComment(postSeq, contents, props.user);
    //     },
    //     [props.user]
    // );
    // const postList = useMemo(
    //     () =>
    //         posts.map((post) => {
    //             const comments = props.comments[post.seq];
    //             return (
    //                 <Post
    //                     key={post.seq}
    //                     post={post}
    //                     comments={comments}
    //                     onLikePost={props.actions.likePost}
    //                     onCommentSubmit={writeCommentHandler}
    //                 />
    //             );
    //         }),
    //     [posts]
    // );

    useEffect(() => {
        props.actions.fetchPosts();
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

            <style jsx>{`
                .container {
                    max-width: 600px;
                }
                .container .text-center {
                    margin-top: 20px;
                }
            `}</style>
        </>
    );
};

export default connectStore(Home);
