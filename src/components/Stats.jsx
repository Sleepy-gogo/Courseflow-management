import { useState } from "react";
import Container from "./Container";
import Counter from "./Counter";

function Stats() {
  const [encuentros, setEncuentros] = useState(0);

  return (
    <Container addons="flex flex-col justify-center items-center gap-5 p-5">
      <div className="grid place-items-center gap-2">
        <h2 className="font-bold text-lg sm:text-2xl">Número de encuentro</h2>
        <Counter state={encuentros} setState={setEncuentros} />
      </div>
      <div className="h-52 w-52 sm:h-80 sm:w-80 bg-red-200 grid place-items-center">
        <p>To do: Add donut graph</p>
      </div>
      <div className="text-center">
        <h2 className="font-bold text-lg sm:text-2xl">Estás viendo: X</h2>
        <p className="text-md sm:text-xl font-semibold">
          Próximo integrador en: <span className="text-purple-600">X</span>{" "}
          encuentros <span className="text-slate-500">(Encuentro X)</span>
          <br />
          ¡Asegurate de prepararte bien!
        </p>
      </div>
    </Container>
  );
}

export default Stats;
