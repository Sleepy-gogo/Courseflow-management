/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useUrlVerifier() {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location]);
}