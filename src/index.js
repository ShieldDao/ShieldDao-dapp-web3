import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/commons/header';
import App from './pages/App';

ReactDOM.render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
