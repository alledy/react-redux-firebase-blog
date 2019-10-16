import React, { useMemo, useEffect, useCallback } from 'react';
import connectStore from '@/hocs/connectStore';
import Post from '@/components/Post';

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

    const postList = props.posts.entities.map((post, index) => {
        return <Post key={index} post={post} />;
    });

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

    return (
        <div className="posts container">
            <div className="blank"></div>
            {/* <PostForm onPostSubmit={writePostHandler} /> */}
            {postList}
            <style jsx>{`
                .container {
                    max-width: 600px;
                }
                .blank {
                    margin-bottom: 6rem;
                }
            `}</style>
        </div>
    );
};

export default connectStore(Home);
