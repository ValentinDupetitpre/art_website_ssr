import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
    HOME_PAGE_ROUTE,
    COLLECTION_PAGE_ROUTE,
  } from './routes'
import Navigation from './components/navigation'
import HomePage from './components/page/home'
import CollectionPage from './components/page/collections'
import NotFoundPage from './components/page/not-found'

import {APP_NAME} from './config'

import './app.css'

const App = () => {
    return (
        <div className="app-wrapper">
            <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
            <Navigation />
            <div className="content">
                <Switch>
                    <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
                    <Route path={COLLECTION_PAGE_ROUTE} render={() => <CollectionPage />} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </div>
    )
}

export default App