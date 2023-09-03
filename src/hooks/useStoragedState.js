/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useStore from "./useStore";

function useStoragedState(key) {
  const state = useStore((state) => state[key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return state;
}

export default useStoragedState;
