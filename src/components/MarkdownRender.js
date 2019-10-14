import React, { useState, useMemo, useCallback } from 'react';
import marked from 'marked';
import Prism from 'prismjs';

const MarkdownRender = ({ body }) => {
    const [html, setHtml] = useState('');
    const handleHtmlChange = () => {
        setHtml(marked(body, { breaks: true, sanitize: true }));
    };

    useMemo(() => handleHtmlChange(), [body]);
    const markup = { __html: html };
    return (
        <>
            <div className="markdown-render" dangerouslySetInnerHTML={markup}></div>
            <style jsx>{`
                .markdown-render {
                    text-align: start;
                    font-size: 1.125rem;
                    color: #343a40;
                    word-break: break-word;
                    word-wrap: break-word;
                }
            `}</style>
        </>
    );
};

export default MarkdownRender;
