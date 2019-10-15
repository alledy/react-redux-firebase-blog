import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/scroll/simplescrollbars.css';

const CodeEditor = ({ editBody, body }) => {
    const editor = useRef();
    let codeMirror = null;
    let cursor = null;

    const initialize = () => {
        if (!CodeMirror) return;
        codeMirror = CodeMirror(editor.current, {
            mode: 'markdown',
            theme: 'material',
            lineNumbers: false,
            lineWrapping: true,
            placeholder: '나누고 싶은 이야기를 적어보세요',
        });
        codeMirror.on('change', handleTextChange);
    };

    const handleTextChange = (body) => {
        cursor = body.getCursor();
        editBody(body.getValue());
    };

    useEffect(() => initialize(), []);
    useEffect(() => {
        if (!codeMirror) return;
        codeMirror.setValue(body);
        if (!cursor) return;
        codeMirror.setCursor(cursor);
    }, [body]);
    return (
        <div className="code-editor material">
            <div className="editor" ref={editor}></div>
            <style jsx>{`
                .code-editor {
                    position: relative;
                    display: flex;
                    flex: 1 1;
                    flex-direction: column;
                    min-width: 0;
                }
                .editor textarea {
                    position: absolute;
                    width: 1000px;
                }
            `}</style>
        </div>
    );
};

export default CodeEditor;
