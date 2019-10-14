import React, { useMemo, useEffect, useCallback } from 'react';
import connectStore from '@/hocs/connectStore';
import Post from '@/components/Post';
import PostForm from '@/components/PostForm';

const Home = (props) => {
    const posts = useMemo(() => props.posts.ids.map((id) => props.posts.entities[id]), [
        props.posts.entities,
        props.posts.ids,
    ]);
    const writePostHandler = useCallback(
        (contents) => {
            props.actions.writePost(contents, props.user);
        },
        [props.user]
    );
    const writeCommentHandler = useCallback(
        (postSeq, contents) => {
            props.actions.writeComment(postSeq, contents, props.user);
        },
        [props.user]
    );
    const postList = useMemo(
        () =>
            posts.map((post) => {
                const comments = props.comments[post.seq];
                return (
                    <Post
                        key={post.seq}
                        post={post}
                        comments={comments}
                        onLikePost={props.actions.likePost}
                        onCommentSubmit={writeCommentHandler}
                    />
                );
            }),
        [posts]
    );

    useEffect(() => {
        props.actions.getPosts([]);
    });

    return (
        <div className="posts container">
            {/* <PostForm onPostSubmit={writePostHandler} /> */}
            {postList}
            <style jsx>{`
                .container {
                    max-width: 600px;
                }
            `}</style>
        </div>
    );
};

export default connectStore(Home);
