import React, { useEffect } from 'react';
import connectStore from '@/hocs/connectStore';
import Navigation from '@/components/Navigation';
import Home from '@/components/Home';
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import PostForm from '@/components/PostForm';
import * as ROUTES from '@/constants/routes';
import { Route, Switch } from 'react-router-dom';

const App = (props) => {
    // useEffect(() => {
    //     props.actions.login();
    // }, []);

    return (
        <div>
            <Route path={ROUTES.LANDING} component={Navigation} />
            <Switch>
                <Route exact path={[ROUTES.LANDING, ROUTES.HOME]} component={Home} />
                <Route path={ROUTES.WRITE} component={PostForm} />
                <Route component={NotFound} />
            </Switch>
            <Loading show={false} />
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                html,
                body {
                    font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕',
                        malgun gothic, '돋움', Dotum, sans-serif;
                    color: #202b3d;
                    background-color: #e9eaed;
                    font-size: 1.2rem;
                    font-weight: 400;
                    line-height: 1.5;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    height: 100%;
                }

                 {
                    /* body {
                    padding: 100px 0;
                } */
                }
            `}</style>
        </div>
    );
};

export default connectStore(App);
