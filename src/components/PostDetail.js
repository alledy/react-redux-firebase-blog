import React, { useCallback, useEffect } from 'react';
import MarkdownPreview from '@/components/MarkdownPreview';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';
import connectStore from '@/hocs/connectStore';

const PostDetail = ({ match, posts, comments, actions, user }) => {
    const index = parseInt(match.params.index);
    const postWriter = match.params.user;

    const post = posts.entities[index];
    const title = post.title;
    const contents = post.contents;

    const likeHandler = (e) => {
        e.preventDefault();
        actions.likePost(post.key);
    };

    const writeCommentHandler = useCallback(
        (postSeq, contents, user) => {
            actions.writeComment(postSeq, contents, user);
        },
        [user]
    );

    return (
        <div className="post-detail container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title header">@{postWriter}</h5>
                    <MarkdownPreview title={title} body={contents} />

                    <div className="card-info">
                        <hr />
                        <button type="button" className="thumb-count" onClick={likeHandler}>
                            <i className="far fa-thumbs-up" /> {post.likes} 개
                        </button>
                        <span className="comment-count">
                            <i className="far fa-comment-alt" /> {comments[post.key] ? comments[post.key].length : 0} 개
                        </span>
                    </div>
                    <CommentList comments={comments[post.key]} />
                    <CommentForm postKey={post.key} onCommentSubmit={writeCommentHandler} user={user} />
                </div>
            </div>

            <style jsx>{`
                .container {
                    max-width: 600px;
                }
                .card {
                    padding: 0;
                    margin-top: 50px;
                    margin-bottom: 50px;
                    border: none;
                    border-radius: 0.5rem;
                }
                .card .card-body {
                    padding: 40px;
                }
                .card .card-text {
                    padding-top: 20px;
                    white-space: pre-wrap;
                }
                .card .card-info {
                    height: 20px;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    margin-bottom: 50px;
                }
                .card .card-info .thumb-count,
                .card .card-info .comment-count {
                    display: inline-block;
                    margin-right: 24px;
                    vertical-align: middle;
                    font-size: 12px;
                    cursor: pointer;
                    padding: 0;
                    border: none;
                    background-color: transparent;
                    transition: color ease-in-out 0.3s;
                    transition: margin-top ease-in-out 0.2s;
                }
                .card .card-info .thumb-count:hover,
                .card .card-info .comment-count:hover {
                    color: #007bff;
                    margin-top: -3px;
                }
                .card .card-info .thumb-count .on {
                    color: #007bff;
                }
                .header {
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    padding-left: 2rem;
                    font-size: 1rem;
                    font-weight: 400;
                }
            `}</style>
        </div>
    );
};

export default connectStore(PostDetail);
