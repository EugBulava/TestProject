import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from '../Header/header';
import { Navigation } from '../Navigation/navigation';
import { AuthPage } from '../../pages/AuthPage/authPage';
import { Page1 } from '../../pages/Page1/page1';
import { Page2 } from '../../pages/Page2/page2';
import { Page3 } from '../../pages/Page3/page3';

function AppRouter() {
  return (
  <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/page_1">
          <Page1 />
        </Route>
        <Route path="/page_2">
          <Page2 />
        </Route>
        <Route path="/page_3">
          <Page3 />
        </Route>
      </Switch>
  </Router>)
}

export default AppRouter;