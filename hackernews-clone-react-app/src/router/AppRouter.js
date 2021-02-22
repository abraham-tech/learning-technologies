import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path='/' component={HomePage} exact='true'/>
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;