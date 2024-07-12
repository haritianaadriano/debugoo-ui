import { Navigate } from "react-router-dom";

export const HomePage = () => {
  return sessionStorage.getItem("me") ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to="/signin" />
  );
};
