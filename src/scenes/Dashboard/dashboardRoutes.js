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
    path: '/react/dashboard',
    component: DashboardWrapper,
    routes: [
      {
        exact: true,
        path: '/react/dashboard',
        component: DashboardHome
      },
      {
        exact: true,
        path: '/react/dashboard/tables',
        component: DashboardTables
      },
      {
        exact: true,
        path: '/react/dashboard/media',
        component: DashboardMedia
      },
      {
        exact: true,
        path: '/react/dashboard/charts',
        component: DashboardCharts
      },
      {
        exact: true,
        path: '/react/dashboard/canvas',
        component: DashboardCanvas
      },
      {
        exact: true,
        path: '/react/dashboard/maps',
        component: DashboardMaps
      },
      {
        exact: true,
        path: '/react/dashboard/order-out',
        component: DashboardOrderOut
      },
      {
        exact: true,
        path: '/react/dashboard/weather',
        component: Weather
      }
    ]
  }
];

export default dashboardRoutes;