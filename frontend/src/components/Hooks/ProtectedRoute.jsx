import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = Cookies.get("auth_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const user = jwtDecode(token);
    if (allowedRoles.includes(user.role)) {
      return children;
    } else {
      return <Navigate to="/" replace />;
    }
  } catch (err) {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
