import React from 'react';
import MarkdownRender from '@/components/MarkdownRender';

const MarkdownPreview = ({ title, body }) => {
    return (
        <div className="preview">
            <h1 className="title">{title}</h1>
            <hr />
            <div>
                <MarkdownRender body={body} />
            </div>
            <style jsx>{`
                .preview {
                    position: relative;
                    font-size: 1.5rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    width: 100%;
                    overflow-y: auto;
                }
                .title {
                    padding-top: 1.5rem;
                }
            `}</style>
        </div>
    );
};

export default MarkdownPreview;
