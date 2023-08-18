import { useContext } from "react";
import { EncuentroContext } from "../context/EncuentroProvider";

function useEncuentros() {
  const context = useContext(EncuentroContext);

  if (!context) {
    throw new Error(
      "El hook debe ser llamado dentro del alcance del proveedor."
    );
  }

  return context;
}

export default useEncuentros;
