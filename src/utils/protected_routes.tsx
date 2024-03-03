import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
  const auth = Cookies.get('lambda_usr_token');

  return auth ? <Outlet /> : <Navigate to="/login" />;
  // return true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
