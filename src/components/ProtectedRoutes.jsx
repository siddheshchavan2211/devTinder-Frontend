import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const isUserLogin = useSelector((state) => state.user.user);
  if (!isUserLogin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;
