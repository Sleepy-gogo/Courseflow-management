/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useUserAuth from "../hooks/useUserAuth";

export function AuthorizedUser({ children }) {
  const { user } = useUserAuth();

  return Object.keys(user ?? {}).length > 0 ? (
    children
  ) : (
    <Navigate to={"/login"} replace />
  );
}

export function UnAuthorizedUser({ children }) {
  const { user } = useUserAuth();

  return Object.keys(user ?? {}).length == 0 ? (
    children
  ) : (
    <Navigate to={"/"} replace />
  );
}
