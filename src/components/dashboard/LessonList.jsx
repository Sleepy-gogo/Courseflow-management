import Container from "../global/Container";
import Lesson from "./Lesson";
import useEncuentros from "../../hooks/useEncuentros";
import useLessonsData from "../../hooks/useLessonsData";

function getProgressData(encounter, lesson) {
  const data = {};
  const [inicio, final] = lesson.length;
  const [progreso, progresoFinal] = [encounter - inicio, final - inicio];
  const percentage = (progreso * 100) / progresoFinal;
  data.completed = encounter >= final;
  data.percentage =
    encounter < inicio ? 0 : data.completed ? 100 : +percentage.toFixed(1);
  data.current = encounter >= inicio && encounter <= final;
  return data;
}

function LessonList() {
  const { encuentros } = useEncuentros();
  const { lessons } = useLessonsData();
  return (
    <Container className="w-11/12 md:w-full h-[55vh] lg:h-full">
      <h1 className="mb-3 text-lg font-bold text-center sm:text-2xl">
        Lista de lecciones
      </h1>
      <div className="overflow-auto scroll-pt-7 scroll-smooth max-h-[calc(100%-3em)]">
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

export default LessonList;
