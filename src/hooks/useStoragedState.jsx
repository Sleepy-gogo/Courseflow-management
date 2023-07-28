import { useState, useEffect } from "react";

function useStoragedState(key, initialValue) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key)) ?? initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useStoragedState;
