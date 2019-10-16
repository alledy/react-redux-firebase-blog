import React from 'react';
import connectStore from '@/hocs/connectStore';
import CodeEditor from '@/components/CodeEditor';
import MarkdownPreview from '@/components/MarkdownPreview';

const PostForm = (props) => {
    return (
        <div className="write-template">
            <div className="write-header"></div>
            <div className="rest">
                <div className="pane left">
                    <div className="write-title">
                        <input
                            placeholder="제목을 입력해주세요"
                            onChange={(e) => props.actions.editPostTitle(e.target.value)}
                            value={props.posts.edit.title}
                        />
                    </div>
                    <CodeEditor editBody={props.actions.editPostBody} body={props.posts.edit.body} />
                </div>
                <div className="pane right">
                    <MarkdownPreview title={props.posts.edit.title} body={props.posts.edit.body} />
                </div>
            </div>
            <style jsx>{`
                .write-template {
                    height: 100vh;
                    display: block;
                    margin-top: 0;
                    padding-top: 0;
                }
                .write-header {
                    display: flex;
                    width: 100%;
                    height: 4rem;
                }
                .rest {
                    display: flex;
                    width: 100%;
                    height: calc(100% - 4rem);
                    position: relative;
                }
                .write-title {
                    position: relative;
                    z-index: 15;
                    height: 4rem;
                    padding: 0.75rem;
                    display: flex;
                    color: #fff;
                    background-color: rgb(52, 58, 64);
                    width: 100%;
                }
                .write-title input {
                    background-color: rgba(0, 0, 0, 0);
                    color: #fff;
                    border-style: none;
                    outline: none;
                    font-size: 1.25rem;
                    width: 100%;
                }
                .pane {
                    display: flex;
                    position: relative;
                    flex: 0.5 1 0%;
                }
                .left {
                    background-color: rgb(38, 50, 56);
                    flex-direction: column;
                }
                .right {
                    background-color: #fff;
                }
            `}</style>
        </div>
    );
};

export default connectStore(PostForm);
