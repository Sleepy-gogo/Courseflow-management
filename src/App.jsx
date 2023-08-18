import Stats from "./components/Stats";
import LessonList from "./components/LessonList";
import Container from "./components/Container";
import backgroundImage from "./assets/egg_background.jpg";
import eggIcon from "../public/egg_icon.svg";

import useStoragedState from "./hooks/useStoragedState";

function App() {
  const [encuentros, setEncuentros] = useStoragedState("encuentros", 1);

  return (
    <div
      className="bg-gradient-to-br from-cyan-400 to-blue-800 min-h-screen flex flex-col lg:h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav>
        <Container addons="sm:h-full h-14 sm:w-14 w-full rounded-none sticky sm:fixed p-2 px-3 flex justify-between sm:flex-col">
          <a href="" className="flex items-center gap-2">
            <img src={eggIcon} alt="Egg icon" className="h-full w-10" />
            <h1 className="font-bold text-xl text-blue-950 mobile-only">
              <span className="text-blue-500">Egg</span> Progress
            </h1>
          </a>
          <button className="rounded-full bg-blue-100 h-8 w-8">A</button>
        </Container>
      </nav>
      <main className="flex flex-col gap-4 justify-end items-center lg:flex-row max-w-screen-2xl mx-auto md:px-20 lg:py-14 min-h-screen">
        <Stats encuentros={encuentros} setEncuentros={setEncuentros} />
        <LessonList encuentros={encuentros} />
      </main>
    </div>
  );
}

export default App;
