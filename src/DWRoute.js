import { useEffect, useMemo } from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const DWRoute = (props) => {
  useMemo(() => {
    nprogress.start();
  }, []);

  useEffect(() => {
    nprogress.done();

    return () => {
      nprogress.done();
    };
  }, []);

  return <Route {...props} />;
};

export default DWRoute;
