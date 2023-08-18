/* eslint-disable react-hooks/exhaustive-deps */
import lessons from "../data/lessons";
import { useEffect, useState } from "react";

function getCurrentLesson(encuentro) {
  const lesson = lessons.find((lesson) => lesson.length[1] > encuentro);
  return lessons[lessons.indexOf(lesson)];
}

function getCurrentIntegrador(encuentro) {
  const regex = /^Integrador/;
  const integradorIndex = lessons.findIndex(
    (lesson) => regex.test(lesson.name) && lesson.length[1] > encuentro
  );
  return lessons[integradorIndex];
}

function useStudentInfo({ encuentro }) {
  const [lesson, setLesson] = useState({});
  const [integrador, setIntegrador] = useState({});

  function updateStates() {
    setLesson(getCurrentLesson(encuentro));
    setIntegrador(getCurrentIntegrador(encuentro));
  }

  useEffect(() => {
    updateStates();
  }, [encuentro]);

  useEffect(() => {
    updateStates();
  }, []);

  return [lesson, integrador];
}

export default useStudentInfo;
