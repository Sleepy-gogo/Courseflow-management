import { useState } from "react";
import Container from "./Container";
import Counter from "./Counter";

function Stats() {
  const [encuentros, setEncuentros] = useState(0);

  return (
    <Container addons="w-full flex flex-col justify-center items-center gap-5 p-5">
      <div className="grid place-items-center gap-2">
        <h2 className="font-bold sm:text-2xl">Número de encuentro</h2>
        <Counter state={encuentros} setState={setEncuentros} />
      </div>
      <div className="h-52 w-52 sm:h-80 sm:w-80 bg-red-200 grid place-items-center">
        <p>To do: Add donut graph</p>
      </div>
    </Container>
  );
}

export default Stats;
