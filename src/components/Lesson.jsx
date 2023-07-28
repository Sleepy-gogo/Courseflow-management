import ProgressBar from "@ramonak/react-progress-bar";
import Container from "./Container";
import PropTypes from "prop-types";

function Lesson({ lesson, progress }) {
  const { name, length } = lesson;
  const { completed, percentage, current } = progress;

  const active = current ? "border-solid border-2 border-blue-400" : "";

  return (
    <Container addons={`bg-white px-4 w-full ${active}`}>
      <div className="flex items-center gap-4" id={current ? "current" : ""}>
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="w-11 h-11 accent-green-600 pointer-events-none"
        />
        <div className="w-full">
          <h3 className="text-center text-sm sm:text-md font-bold text-slate-700">
            {name}
          </h3>
          <p className="text-center text-sm sm:text-md font-bold text-slate-500">
            {`Encuentros: ${length[0]} al ${length[1]}`}
          </p>
        </div>
      </div>
      <div className="w-100 mt-2 ml-auto w-full h-7 overflow-hidden">
        <ProgressBar
          completed={percentage}
          barContainerClassName="bg-slate-200 rounded shadow"
          bgColor="#22c55e"
        />
      </div>
    </Container>
  );
}

Lesson.propTypes = {
  lesson: PropTypes.shape({
    name: PropTypes.string.isRequired,
    length: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  progress: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    percentage: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Lesson;
