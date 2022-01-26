import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamsList from '../pages/TeamList';
import Matchups from '../pages/Matchups';
export default function Routes() {
  return (
    <Switch>
      <Route path="/teams" component={TeamsList} />
      <Route path="/matchups" component={Matchups} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={TeamsList} />
    </Switch>
  );
}