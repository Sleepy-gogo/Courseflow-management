import { createContext } from "react";
import PropTypes from "prop-types";
import useStoragedState from "../hooks/useStoragedState";

const initialValue = 0;
export const EncuentroContext = createContext(initialValue);

export default function EncuentroProvider({ children }) {
  const [encuentros, setEncuentros] = useStoragedState("encuentros", 1);

  return (
    <EncuentroContext.Provider
      value={{
        encuentros,
        setEncuentros,
      }}
    >
      {children}
    </EncuentroContext.Provider>
  );
}

EncuentroProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
