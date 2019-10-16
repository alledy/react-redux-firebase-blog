import React from 'react';
import classnames from 'classnames';
import locale from 'date-fns/locale/ko';
import distanceInWords from 'date-fns/distance_in_words_to_now';
import removeMd from 'remove-markdown';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';

// const Post = ({ post, comments = [], onLikePost, onCommentSubmit }) => {
//     const {
//         key,
//         createAt,
//         writer: { name },
//         contents,
//         likes,
//         likesOfMe,
//     } = post;
//     const datetime = distanceInWords(createAt, {
//         locale,
//         addSuffix: true,
//     });
//     const likeHandler = (e) => {
//         e.preventDefault();
//         onLikePost(post.seq);
//     };

//     return (
//         <div className="card">
//             <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 <h6 className="card-subtitle text-muted">{datetime}</h6>
//                 <p className="card-text">{contents}</p>
//                 <hr />
//                 <div className="card-info">
//                     <button type="button" className="thumb-count" onClick={likeHandler}>
//                         <i
//                             className={classnames('far fa-thumbs-up', {
//                                 on: likesOfMe,
//                             })}
//                         />{' '}
//                         {likes} 개
//                     </button>
//                     <span className="comment-count">
//                         {/* <i className="far fa-comment-alt" /> {comments.length} 개 */}
//                     </span>
//                 </div>
//             </div>
//             {/* <CommentList comments={comments} />
//             <CommentForm postSeq={key} onCommentSubmit={onCommentSubmit} /> */}
//             <style jsx global>{`
//                 .card {
//                     padding: 0;
//                     margin-top: 50px;
//                     border: none;
//                     border-radius: 0.5rem;
//                 }
//                 .card .card-body {
//                     padding: 40px;
//                 }
//                 .card .card-text {
//                     padding-top: 20px;
//                     white-space: pre-wrap;
//                 }
//                 .card .card-info {
//                     height: 20px;
//                 }
//                 .card .card-info .thumb-count,
//                 .card .card-info .comment-count {
//                     display: inline-block;
//                     margin-right: 24px;
//                     vertical-align: middle;
//                     font-size: 12px;
//                     cursor: pointer;
//                     padding: 0;
//                     border: none;
//                     background-color: transparent;
//                     transition: color ease-in-out 0.3s;
//                     transition: margin-top ease-in-out 0.2s;
//                 }
//                 .card .card-info .thumb-count:hover,
//                 .card .card-info .comment-count:hover {
//                     color: #007bff;
//                     margin-top: -3px;
//                 }
//                 .card .card-info .thumb-count .on {
//                     color: #007bff;
//                 }
//             `}</style>
//         </div>
//     );
// };

const Post = ({ post }) => {
    const datetime = distanceInWords(post.createAt, {
        locale,
        addSuffix: true,
    });
    const plainContents = removeMd(post.contents).replace(/\n+/g, ' ');
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <div>
                    <span className="card-subtitle text-muted">{post.writer.name}</span>
                    {'  '}
                    <span className="card-subtitle text-muted">{datetime}</span>
                </div>

                <p className="card-text">{plainContents}</p>
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
                        {/* <i className="far fa-comment-alt" /> {comments.length} 개 */}
                    </span>
                </div>
            </div>
            {/* <CommentList comments={comments} />
            <CommentForm postSeq={key} onCommentSubmit={onCommentSubmit} /> */}
            <style jsx global>{`
                .card {
                    padding: 0;
                    margin-top: 50px;
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 0.9rem;
                }
                .card .card-title {
                    font-size: 1rem;
                }
                .card .card-subtitle {
                    font-size: 0.75rem;
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
