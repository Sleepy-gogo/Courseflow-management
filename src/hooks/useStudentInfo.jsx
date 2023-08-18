/* eslint-disable react-hooks/exhaustive-deps */
import useLessonsData from "./useLessonsData";
import { useEffect, useState } from "react";

function getCurrentLesson(encuentro, lessons) {
  const lesson = lessons.find((lesson) => lesson.length[1] > encuentro);
  return lessons[lessons.indexOf(lesson)];
}

function getCurrentIntegrador(encuentro, lessons) {
  const regex = /^Integrador/;
  const integradorIndex = lessons.findIndex(
    (lesson) => regex.test(lesson.name) && lesson.length[1] > encuentro
  );
  return lessons[integradorIndex];
}

function useStudentInfo({ encuentro }) {
  const { lessons } = useLessonsData();
  const [lesson, setLesson] = useState({});
  const [integrador, setIntegrador] = useState({});

  function updateStates() {
    setLesson(getCurrentLesson(encuentro, lessons));
    setIntegrador(getCurrentIntegrador(encuentro, lessons));
  }

  useEffect(() => {
    updateStates();
  }, [encuentro]);

  useEffect(() => {
    updateStates();
  }, []);

  return { lesson, integrador };
}

export default useStudentInfo;
