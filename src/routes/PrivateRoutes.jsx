import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingPage from "../components/LoadingPage";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingPage />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.any,
};
export default PrivateRoutes;
