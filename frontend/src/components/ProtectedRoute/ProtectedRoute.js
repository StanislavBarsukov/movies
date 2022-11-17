import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  const location = useLocation().pathname;
  return loggedIn ? children : <Navigate to={location} replace />;
};

export default ProtectedRoute;
