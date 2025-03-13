// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
// };
// export default PrivateRoute;

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo === undefined) {
    return <Loader />; // Show loader while checking auth state
  }

  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
