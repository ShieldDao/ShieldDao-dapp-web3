import { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../static/css/App.css';
import 'antd/dist/antd.css';
import Salam from '../components/salam';

function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Switch>
          <Route exact strict path="/" component={Salam} />
        </Switch>
      </HashRouter>
    </Suspense>
  );
}

export default App;
