import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page2 from './page2/Page2';
import SerachPage from './SerachPage';

const Navigation = () => {
  return (
    <Switch>
      <Route path="/page2" component={Page2} />
      <Route path="/" component={SerachPage} />
    </Switch>
  );
};

export default Navigation;
