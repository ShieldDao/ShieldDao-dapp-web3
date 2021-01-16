import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Providers from './Providers';

ReactDOM.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
);
