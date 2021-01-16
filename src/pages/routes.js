import HomePage from './Home';
import VaultsPage from './Vaults';

const routes = [
  {
    title: 'ShieldDAO App',
    exact: true,
    strict: true,
    path: '/',
    component: HomePage,
  },
  {
    title: 'ShieldDAO Vaults',
    exact: true,
    strict: true,
    path: '/vaults',
    component: VaultsPage,
  },
];

export default routes;
