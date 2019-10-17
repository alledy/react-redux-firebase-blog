import React, { useEffect } from 'react';

// Take another component and renders it when user is authenticated
// If not, will redirect to sign in page
export default function requireAuth(WrappedComponent) {
    return function ComposeWithAuth(props) {
        useEffect(() => {
            if (!props.user) {
                alert('로그인을 해주세요!');
                props.history.push('/');
            }
        });
        return props.user ? <WrappedComponent {...props} /> : null;
    };
}
