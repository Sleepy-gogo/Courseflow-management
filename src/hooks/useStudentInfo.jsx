/* eslint-disable react-hooks/exhaustive-deps */
import lessons from "../data/lessons";
import { useEffect, useState } from "react";

function getIndexOf(array, encuentro) {
  return array.reduce((idx, element) => {
    if (encuentro > element) return idx + 1;
    return idx;
  }, 0);
}

function getCurrentLesson(encuentro) {
  const endings = lessons.map((lesson) => lesson.length[1]);
  const lessonIndex = getIndexOf(endings, encuentro);
  return lessons[lessonIndex];
}

function getCurrentIntegrador(encuentro) {
  const regex = /^Integrador/;
  const integradores = lessons.filter((lesson) => regex.test(lesson.name));
  const integradorIndex = getIndexOf(
    integradores.map((lesson) => lesson.length[1]),
    encuentro
  );
  return integradores[integradorIndex];
}

function useStudentInfo({ encuentro }) {
  const [lesson, setLesson] = useState({});
  const [integrador, setIntegrador] = useState({});

  function updateStates() {
    const currentLesson = getCurrentLesson(encuentro);
    const currentIntegrador = getCurrentIntegrador(encuentro);
    console.log(currentLesson, currentIntegrador);
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
