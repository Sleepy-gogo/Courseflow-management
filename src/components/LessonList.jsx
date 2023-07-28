import Container from "./Container";
import PropTypes from "prop-types";
import Lesson from "./Lesson";
import lessons from "../data/lessons.js";

function getProgressData(encounter, lesson) {
  const data = {};
  const [inicio, final] = lesson.length;
  const [progreso, progresoFinal] = [encounter - inicio, final - inicio];
  data.completed = encounter >= final;
  data.percentage =
    encounter < inicio
      ? 0
      : data.completed
      ? 100
      : (progreso * 100) / progresoFinal;
  data.current = encounter >= inicio && encounter <= final;
  return data;
}

function LessonList({ encuentros }) {
  return (
    <Container addons=" w-full">
      <h1 className="text-center font-bold text-lg sm:text-2xl mb-3">
        Lista de lecciones
      </h1>
      <div
        className="overflow-auto scroll-pt-7 scroll-smooth"
        style={{ maxHeight: "60vh" }}
      >
        {lessons &&
          lessons.map((lesson) => (
            <Lesson
              lesson={lesson}
              progress={getProgressData(encuentros, lesson)}
              key={lesson.id}
            />
          ))}
      </div>
    </Container>
  );
}

LessonList.propTypes = {
  encuentros: PropTypes.number.isRequired,
};

export default LessonList;
