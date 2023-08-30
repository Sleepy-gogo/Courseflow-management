import useStoragedState from "./useStoragedState";
import useStore from "./useStore";

function useEncuentros() {
  const encuentros = useStoragedState("encuentro");
  const setEncuentros = useStore((state) => state.updateEncuentro);

  return { encuentros, setEncuentros };
}

export default useEncuentros;
