import { useUser } from '../components/user';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const Protected = () => {
  let user = useUser();
  let location = useLocation();

  if (user!== undefined && !user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default Protected;


