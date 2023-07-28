import Stats from "./components/Stats";
import LessonList from "./components/LessonList";
import Container from "./components/Container";

import useStoragedState from "./hooks/useStoragedState";

function App() {
  const [encuentros, setEncuentros] = useStoragedState("encuentros", 1);

  return (
    <div className="bg-gradient-to-br from-cyan-400 to-blue-800 min-h-screen h-full p-3 md:p-10">
      <header>
        <Container addons="w-full max-w-4xl">
          <h1 className="text-center font-bold text-xl sm:text-3xl md:text-4xl text-blue-950">
            Seguimiento de Progreso <span className="text-blue-500">Egg</span>
          </h1>
        </Container>
      </header>
      <main
        className="flex flex-col-reverse gap-4 justify-end items-center lg:flex-row max-w-screen-lg mx-auto"
        style={{ minHeight: "80vh" }}
      >
        <LessonList encuentros={encuentros} />
        <Stats encuentros={encuentros} setEncuentros={setEncuentros} />
      </main>
    </div>
  );
}

export default App;
