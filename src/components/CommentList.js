import React from 'react';
import Comment from '@/components/Comment';

const CommentList = (props) => {
    const { comments = [] } = props;

    return (
        <ul className="comment-list">
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
            <style jsx global>{`
                ul.comment-list {
                    padding: 0;
                    list-style: none;
                }
            `}</style>
        </ul>
    );
};

export default CommentList;
