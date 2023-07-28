import Container from "./Container";
import PropTypes from "prop-types";

function Lesson({ lesson, progress }) {
  const { name, length } = lesson;
  const { completed, percentage } = progress;

  return (
    <Container addons="bg-white px-4 w-full">
      <div className="flex items-center gap-4">
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
      <div className="bg-green-400 w-100 mt-2 ml-auto max-w-lg">
        <p className="text-center text-sm sm:text-md font-bold text-slate-800">
          To do: Progress bar {percentage}
        </p>
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
  }).isRequired,
};

export default Lesson;
