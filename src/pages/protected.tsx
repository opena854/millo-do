//import { Alert } from '@mui/material';
//import { Lock } from '@mui/icons-material'
import { useUser } from '../components/user';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const Protected = () => {
  let user = useUser();
  let location = useLocation();

  if (user!== undefined && !user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
    //return <Alert severity='warning' icon={<Lock />} >Debe acceder para visualizar esta contenido — <Link to={"/signin"} state={{ from: location }} replace >Acceder</Link>.</Alert>
  }
  return <Outlet />;
  //return <Navigate to="/signin" state={{ from: location }} replace />;
}

export default Protected;


