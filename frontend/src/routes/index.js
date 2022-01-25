import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamsList from '../pages/TeamList';
export default function Routes() {
  return (
    <Switch>
      <Route path="/teams" component={TeamsList} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={TeamsList} />
    </Switch>
  );
}