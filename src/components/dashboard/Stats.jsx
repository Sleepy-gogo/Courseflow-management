import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Container from "../global/Container";
import Counter from "./Counter";

import useEncuentros from "../../hooks/useEncuentros";
import StatsInfo from "./StatsInfo";

function getPercentage(total, progress) {
  const rawPercentage = (progress * 100) / total;
  return +rawPercentage.toFixed(2);
}

function Stats() {
  const { encuentros, setEncuentros } = useEncuentros();

  return (
    <Container className="flex flex-col justify-center items-center gap-2 p-5 lg:max-w-[60%] w-11/12 md:w-full">
      <div className="grid gap-2 place-items-center">
        <h2 className="text-lg font-bold sm:text-2xl">Número de encuentro</h2>
        <Counter state={encuentros} setState={setEncuentros} />
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-col gap-3">
          <div className="grid h-52 w-52 sm:h-64 sm:w-64 sm:p-5 place-items-center">
            <CircularProgressbar
              value={getPercentage(161, encuentros)}
              styles={buildStyles({
                pathTransitionDuration: 1.2,
                pathColor: "#3b82f6",
                trailColor: "#d4e4fb",
                textColor: "#3b82f6",
                strokeLinecap: "butt",
                textSize: "9px",
              })}
              text={`${getPercentage(161, encuentros)}% avanzado!`}
            />
          </div>
        </div>
        <StatsInfo encuentros={encuentros} />
      </div>
    </Container>
  );
}

export default Stats;
