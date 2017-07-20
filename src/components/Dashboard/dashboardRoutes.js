import Dashboard from './Dashboard';
import DashboardHome from './Pages/DashboardHome';
import DashboardTables from './Pages/DashboardTables';
import DashboardMedia from './Pages/DashboardMedia';
import DashboardCharts from './Pages/DashboardCharts';
import DashboardCanvas from './Pages/DashboardCanvas';
import DashboardMaps from './Pages/DashboardMaps';
import DashboardOrderOut from './Pages/DashboardOrderOut';
import DashboardCardFlex from './Pages/DashboardCardFlex';


const dashboardRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
    routes: [
      {
        exact: true,
        path: '/dashboard',
        component: DashboardHome
      },
      {
        exact: true,
        path: '/dashboard/tables',
        component: DashboardTables
      },
      {
        exact: true,
        path: '/dashboard/media',
        component: DashboardMedia
      },
      {
        exact: true,
        path: '/dashboard/charts',
        component: DashboardCharts
      },
      {
        exact: true,
        path: '/dashboard/canvas',
        component: DashboardCanvas
      },
      {
        exact: true,
        path: '/dashboard/maps',
        component: DashboardMaps
      },
      {
        exact: true,
        path: '/dashboard/order-out',
        component: DashboardOrderOut
      },
      {
        exact: true,
        path: '/dashboard/card-flex',
        component: DashboardCardFlex
      }
    ]
  }
];

export default dashboardRoutes;