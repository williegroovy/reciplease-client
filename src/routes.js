import Articles from './components/Pages/Articles';
import DashboardNav from './components/Dashboard/DashboardNav';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardTables from './components/Dashboard/DashboardTables';

import RequireAuth from './components/UtilityHOCs/require_auth';

const routes = [
  {
    path: '/dashboard',
    component: DashboardNav,
    routes: [
      {
        exact: true,
        path: '/dashboard',
        component: Dashboard
      },
      {
        exact: true,
        path: '/dashboard/tables',
        component: DashboardTables
      }
    ]
  }
];

export default routes;