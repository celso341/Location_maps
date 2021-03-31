import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Map from './pages/MapLocation';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Map}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;