import React from 'react';
import classnames from 'classnames';
import locale from 'date-fns/locale/ko';
import distanceInWords from 'date-fns/distance_in_words_to_now';
import removeMd from 'remove-markdown';
import { Link } from 'react-router-dom';

const Post = ({ post, index, comments = [] }) => {
    const datetime = distanceInWords(post.createAt, {
        locale,
        addSuffix: true,
    });
    const plainContents = removeMd(post.contents).replace(/\n+/g, ' ');

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {/* PostDetail 컴포넌트 링크 */}
                    <Link to={`/${post.writer.name || post.writer.email}/${index}`}>{post.title}</Link>
                </h5>
                <div>
                    <span className="card-subtitle writer text-muted">{post.writer.name || post.writer.email}</span>
                    <span className="card-subtitle text-muted">
                        {' · '}
                        {datetime}
                    </span>
                </div>

                <p className="card-text text-muted">{plainContents}</p>

                <hr />
                <div className="card-info">
                    <button type="button" className="thumb-count">
                        <i
                            className={classnames('far fa-thumbs-up', {
                                on: post.likesOfMe,
                            })}
                        />{' '}
                        {post.likes} 개
                    </button>
                    <span className="comment-count">
                        <i className="far fa-comment-alt" /> {comments.length} 개
                    </span>
                </div>
            </div>
            <style jsx global>{`
                .card {
                    padding: 0;
                    margin-top: 50px;
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 0.9rem;
                }
                .card .card-subtitle {
                    font-size: 0.8rem;
                }
                .card .writer {
                    color: #3b5999 !important;
                }
                .card a {
                    color: black;
                    text-decoration: none;
                    font-weight: 700;
                }
                .card a:hover {
                    color: rgb(52, 58, 64);
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
            `}</style>
        </div>
    );
};

export default Post;
