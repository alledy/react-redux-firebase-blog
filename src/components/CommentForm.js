import React, { useState, useRef, useEffect } from 'react';

const CommentForm = (props) => {
    const {
        postSeq,
        minHeight = 20,
        lineHeight = 20,
        placeholder = '댓글을 입력하세요...',
        onCommentSubmit = () => {},
    } = props;
    const textareaEl = useRef(null);
    const [contents, setContents] = useState('');

    // textarea 높이 자동 조절
    useEffect(() => {
        textareaEl.current.style.height = 'auto';
        textareaEl.current.style.height = textareaEl.current.scrollHeight + lineHeight + 'px';
    }, [contents]);

    const onSubmit = (e) => {
        e.preventDefault();
        onCommentSubmit(postSeq, contents);
        setContents('');
    };

    return (
        <form className="comment-form" onSubmit={onSubmit}>
            <textarea
                className="form-control input-lg"
                placeholder={placeholder}
                spellCheck="false"
                ref={textareaEl}
                value={contents}
                onChange={(e) => setContents(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" disabled={!contents.trim().length}>
                댓글달기
            </button>

            <style jsx global>{`
                .comment-form {
                    margin: 20px;
                }
                .comment-form > textarea.form-control {
                    min-height: ${minHeight}px;
                    line-height: ${lineHeight}px;
                    border-radius: 0.5rem;
                    resize: none;
                }
                .comment-form > button.btn {
                    float: right;
                    margin-bottom: 0;
                    margin-top: 16px;
                    background-color: #3b5999;
                    color: #fffffe;
                    border-color: unset;
                    font-weight: 800;
                }
            `}</style>
        </form>
    );
};

export default CommentForm;
