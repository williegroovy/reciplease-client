import DashboardWrapper from './scenes/DashboardWrapper';
import DashboardHome from './scenes/DashboardHome';
import DashboardTables from './scenes/DashboardTables';
import DashboardMedia from './scenes/DashboardMedia';
import DashboardCharts from './scenes/DashboardCharts';
import DashboardCanvas from './scenes/DashboardCanvas';
import DashboardMaps from './scenes/DashboardMaps';
import DashboardOrderOut from './scenes/DashboardOrderOut';
import Weather from './scenes/Weather/index';


const dashboardRoutes = [
  {
    path: '/dashboard',
    component: DashboardWrapper,
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
        path: '/dashboard/weather',
        component: Weather
      }
    ]
  }
];

export default dashboardRoutes;