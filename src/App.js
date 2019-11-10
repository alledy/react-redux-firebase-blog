import React, { useEffect } from 'react';
import connectStore from '@/hocs/connectStore';
import Navigation from '@/components/Navigation';
import Home from '@/components/Home';
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import PostForm from '@/components/PostForm';
import Login from '@/components/Login';
import PostDetail from '@/components/PostDetail';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import * as ROUTES from '@/constants/routes';
import { Route, Switch, withRouter } from 'react-router-dom';

const App = (props) => {
    const { posts, user, history, actions } = props;
    // App 컴포넌트 마운트 시, user 정보 있으면 /home
    useEffect(() => {
        props.actions.fetchUser(history);
    }, []);

    return (
        <div>
            <Navigation />
            <Switch>
                <Route
                    exact
                    path={ROUTES.LANDING}
                    render={() => (
                        <Login
                            OAuthLogin={actions.OAuthLogin}
                            sendEmailLink={actions.sendEmailLink}
                            verifySignIn={actions.verifySignIn}
                        />
                    )}
                />
                <Route path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.WRITE} render={() => <PostForm user={user} history={history} />} />
                <Route path={ROUTES.POST} component={PostDetail} />
                <Route path={ROUTES.PRIVACY_POLICY} component={PrivacyPolicy} />
                <Route component={NotFound} />
            </Switch>
            <Loading show={false} />

            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                html,
                body {
                    font-family: 'Helvetica Neue', 'Apple SD Gothic Neo', arial, 나눔고딕, 'Nanum Gothic', 돋움, Dotum,
                        Tahoma, Geneva, sans-serif;
                    color: #202b3d;
                    background-color: #e9eaed;
                    font-size: 1.1rem;
                    font-weight: 700;
                    line-height: 1.5;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    height: 100%;
                }

                 {
                    body {
                        padding-top: 4rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default withRouter(connectStore(App));
