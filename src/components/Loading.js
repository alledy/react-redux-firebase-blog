import React from 'react';
import toggle from '@/hocs/toggle';
import Spinner from '@/components/Spinner';

const Loading = () => {
    return (
        <div className="loading">
            <Spinner width={8} />
            <style jsx scoped>{`
                .loading {
                    background: rgba(0, 0, 0, 0.5) no-repeat;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 9999;
                }
            `}</style>
        </div>
    );
};

export default toggle(Loading);
