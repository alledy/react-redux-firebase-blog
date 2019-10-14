import React from 'react';

const Spinner = ({ width = 4, color = '#fff' }) => {
    return (
        <div className="spinner">
            <style jsx scoped>{`
                .spinner {
                    display: inline-block;
                    height: 28px;
                    width: 28px;
                    position: absolute;
                    top: calc(50% - 14px);
                    left: calc(50% - 14px);
                    animation: rotate 0.8s infinite linear;
                    border: ${width}px solid ${color};
                    border-right-color: transparent;
                    border-radius: 50%;
                }

                @keyframes rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Spinner;
