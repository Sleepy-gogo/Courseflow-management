import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import Container from "./Container";
import Counter from "./Counter";
import useStudentInfo from "../hooks/useStudentInfo";

function getRemainingEncounters(integradorLength, encuentro) {
  return integradorLength ? integradorLength[0] - encuentro : "...";
}

function getPercentage(total, progress) {
  const rawPercentage = (progress * 100) / total;
  return +rawPercentage.toFixed(2);
}

function Stats({ encuentros, setEncuentros }) {
  const [lesson, integrador] = useStudentInfo({ encuentro: encuentros });

  return (
    <Container addons="flex flex-col justify-center items-center gap-5 p-5 sm:w-full">
      <div className="grid place-items-center gap-2">
        <h2 className="font-bold text-lg sm:text-2xl">Número de encuentro</h2>
        <Counter state={encuentros} setState={setEncuentros} />
      </div>
      <div className="h-52 w-52 sm:h-80 sm:w-80 sm:p-5 grid place-items-center">
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
      <div className="text-center">
        <h2 className="font-bold text-lg sm:text-2xl">
          Estás viendo:{" "}
          <a
            href="#current"
            className="transition-colors text-blue-500 hover:text-blue-300 "
          >
            {lesson ? lesson.name : "..."}
          </a>
        </h2>
        <p className="text-md sm:text-xl font-semibold">
          Integrador en:{" "}
          <span className="text-blue-500 font-bold">
            {getRemainingEncounters(integrador.length, encuentros)}
          </span>{" "}
          encuentros{" "}
          <span className="text-slate-500">{`Encuentro ${
            integrador.length ? integrador.length[0] : "..."
          }`}</span>
          <br />
          ¡Asegurate de prepararte bien!
        </p>
      </div>
    </Container>
  );
}

Stats.propTypes = {
  encuentros: PropTypes.number.isRequired,
  setEncuentros: PropTypes.func.isRequired,
};

export default Stats;
