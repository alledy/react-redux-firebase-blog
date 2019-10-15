import React, { useState, useMemo, useEffect } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';
import '@/style/prism.css';

const MarkdownRender = ({ body }) => {
    const [html, setHtml] = useState('');

    const markedOpt = {
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        highlight(code, lang) {
            return Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup, lang);
        },
    };
    const handleHtmlChange = () => {
        setHtml(marked(body, markedOpt));
    };

    useEffect(() => Prism.highlightAll(), []);

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
