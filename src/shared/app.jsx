import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
    HOME_PAGE_ROUTE,
    COLLECTION_PAGE_ROUTE,
    INFORMATION_PAGE_ROUTE,
    CONTACT_PAGE_ROUTE,
  } from './routes'
import Navigation from './components/navigation'
import HomePage from './components/page/home'
import CollectionPage from './components/page/collections'
import InformationPage from './components/page/information'
import ContactPage from './components/page/contact'
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
                    <Route path={INFORMATION_PAGE_ROUTE} render={() => <InformationPage />} />
                    <Route path={CONTACT_PAGE_ROUTE} render={() => <ContactPage />} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </div>
    )
}

export default App