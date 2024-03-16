import { decodeToken } from "react-jwt";
import { Outlet, Navigate } from "react-router-dom";

const PrivatesRoutes = () => {
  const value = localStorage.getItem("tokenUser");
  const jwt =
    value && value !== "undefined" && value !== "null" ? JSON.parse(value) : "";
  const decodedToken = decodeToken(jwt);
  const userID = decodedToken && parseInt(decodedToken.id);

  return Number.isSafeInteger(userID && userID) ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivatesRoutes;
