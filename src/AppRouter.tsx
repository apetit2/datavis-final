import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoutes } from './appRoutes';
import { NotFound } from './pages/NotFound';
import { lazy } from 'react';

// minimum wage pages
const MinimumWageScatterPlot = lazy(() => import('./pages/MinimumWage'));

export const AppRouter: React.FC = () => (
  <Switch>
    <Route exact path={AppRoutes.Home}>
      <Redirect to={AppRoutes.FinalVis} />
    </Route>
    <Route exact path={AppRoutes.FinalVis} component={MinimumWageScatterPlot} />
    <Route component={NotFound} />
  </Switch>
);
