import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamsList from '../pages/TeamList';
import Matchups from '../pages/Matchups';
import Registration from '../pages/Registration';
export default function Routes() {
  return (
    <Switch>
      <Route path="/teams" component={TeamsList} />
      <Route path="/matchups" component={Matchups} />
      <Route path="/registration" component={Registration} />
      {/* redirect user to TeamList page if route does not exist and user is not authenticated */}
      <Route component={TeamsList} />
    </Switch>
  );
}