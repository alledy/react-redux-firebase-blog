import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import * as OAuth from '@/constants/OAuth';

function Login({ OAuthLogin, sendEmailLink, history, verifySignIn }) {
    useEffect(() => {
        verifySignIn(history);
    }, []);

    const handleOAuth = (OAuth) => {
        OAuthLogin(OAuth, history);
    };
    const [email, setEmail] = useState('');

    const emailSubmitHandler = (e) => {
        e.preventDefault();
        sendEmailLink(email, history);
    };

    return (
        <div className="login container">
            <h1 className="text-center">시작하기</h1>
            <form>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <input type="password" className="form-control" placeholder="Password" /> */}
                <button
                    className="btn btn-lg btn-light btn-block"
                    type="submit"
                    onClick={emailSubmitHandler}
                    disabled={!email.trim().length}>
                    이메일로 로그인
                </button>
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={() => handleOAuth(OAuth.FACEBOOK)}>
                    {OAuth.FACEBOOK} 로그인
                </button>
                <button
                    className="btn btn-lg btn-danger btn-block"
                    type="submit"
                    onClick={() => handleOAuth(OAuth.GOOGLE)}>
                    {OAuth.GOOGLE} 로그인
                </button>
            </form>

            {/* <p className="text-help text-center">
                계정이 필요하신가요?{' '}
                <a className="text-center new-account" href="/signup">
                    계정 만들기
                </a>
            </p> */}
            <style jsx global>{`
                .login h1 {
                    margin-top: 100px;
                    margin-bottom: 20px;
                    font-weight: 700;
                    color: white;
                }
                .login form {
                    max-width: 320px;
                    padding: 8px;
                    margin: 0 auto;
                }
                .login input.form-control {
                    font-size: 16px;
                    height: auto;
                    padding: 10px;
                    margin-bottom: 10px;
                }
                .login button.btn-primary {
                    background-color: #3b5999;
                    color: #fffffe;
                    font-weight: 800;
                    border-color: unset;
                    margin-top: 10px;
                }
                .login button.btn-danger {
                    background-color: #ea4335;
                    color: #fffffe;
                    font-weight: 800;
                    border-color: unset;
                    margin-top: 10px;
                }
                .login .text-help {
                    margin-top: 10px;
                }
                .login .new-account {
                    font-weight: 900;
                    color: #3a5999;
                }
            `}</style>
        </div>
    );
}

export default withRouter(Login);
