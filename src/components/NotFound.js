import React from 'react';

const NotFound = () => (
    <div className="not-found">
        <h1 className="container">PAGE NOT FOUND :-(</h1>
        <style jsx>{`
            .not-found {
                min-height: 100%;
                min-height: 100vh;
                display: flex;
                align-items: center;
                text-align: center;
            }
        `}</style>
    </div>
);

export default NotFound;
