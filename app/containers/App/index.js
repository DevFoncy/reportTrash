/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Home from 'containers/Home';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Login from 'containers/Login';
import Dashboard from 'containers/Dashboard';
import Ticket from 'containers/Ticket';
import Service from 'containers/Service';
import Account from 'containers/Account';

import { message } from 'antd';
import 'index.less';
import GlobalStyle from '../../global-styles';
window.message = message;

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      {/* <Header/> */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/login" />}
          component={HomePage}
        />
        <Route exact path="/catalog" component={Home} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/login/:alerta" component={Login} />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/:alerta" component={Dashboard} />
        <Route exact path="/dashboard/create/ticket" component={Ticket} />
        <Route exact path="/dashboard/services" component={Service} />
        <Route exact path="/dashboard/account" component={Account} />

        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer/> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
