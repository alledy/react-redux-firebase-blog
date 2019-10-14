import React from 'react';
import locale from 'date-fns/locale/ko';
import distanceInWords from 'date-fns/distance_in_words_to_now';

const Comment = ({ comment }) => {
    const { createAt, writer, contents } = comment;
    const datetime = distanceInWords(createAt, {
        locale,
        addSuffix: true,
    });

    return (
        <li className="comment">
            <div className="comment-info">
                <h6 className="comment-writer">{writer.name}</h6>
                <div className="comment-datetime">{datetime}</div>
            </div>
            <p className="comment-text">{contents}</p>
            <style jsx>{`
                li.comment {
                    padding: 20px 40px 24px;
                    border-bottom: 1px solid #e6ecf5;
                    background-color: #fafbfd;
                    position: relative;
                }
                li.comment:first-child {
                    border-top: 1px solid #e6ecf5;
                }
                li.comment .comment-text {
                    padding-top: 20px;
                }
            `}</style>
        </li>
    );
};

export default Comment;
