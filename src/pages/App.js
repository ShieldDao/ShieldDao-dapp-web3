import { Suspense } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import DWRoute from '../DWRoute';
import '../static/css/App.css';
import 'antd/dist/antd.css';
import routes from './routes';
import AppLayout from './AppLayout';

function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Switch>
          <AppLayout>
            {routes.map((route, i) => {
              return <DWRoute key={i} {...route} />;
            })}
          </AppLayout>
        </Switch>
      </HashRouter>
    </Suspense>
  );
}

export default App;
