import Container from "./Container";
// import PropTypes from "prop-types";
import Lesson from "./Lesson";
function LessonList() {
  // lessons && lessons.map((lesson) => <Lesson lesson={lesson} key={"1"} />)
  return (
    <Container addons=" w-full">
      <h1 className="text-center font-bold text-lg sm:text-2xl mb-3">
        Lista de lecciones
      </h1>
      <div className="overflow-auto" style={{ maxHeight: "60vh" }}>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </Container>
  );
}

// LessonList.propTypes = {
//   lessons: PropTypes.array.isRequired,
// };

export default LessonList;
