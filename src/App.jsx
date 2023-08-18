import Stats from "./components/Stats";
import LessonList from "./components/LessonList";
import Container from "./components/Container";
import backgroundImage from "./assets/egg_background.jpg";
import eggIcon from "../public/egg_icon.svg";
import userPlaceholderIcon from "./assets/user_placeholder.jpeg";

function App() {
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
        <Container addons="sm:h-full h-14 sm:w-16 w-full rounded-none sticky sm:fixed py-1 sm:py-10 px-3 flex justify-between sm:flex-col">
          <div className="flex items-center gap-2">
            <img
              src={eggIcon}
              alt="Egg icon"
              className="h-full sm:w-full aspect-square"
            />
            <h1 className="font-bold text-xl text-blue-950 mobile-only">
              <span className="text-blue-500">Egg</span> Progress
            </h1>
          </div>
          <button className="rounded-full overflow-hidden bg-blue-100 aspect-square sm:w-full">
            <img src={userPlaceholderIcon} alt="" />
          </button>
        </Container>
      </nav>
      <main className="flex flex-col gap-4 justify-end items-center lg:flex-row max-w-screen-2xl mx-auto sm:pl-28 sm:pr-5 lg:py-14 min-h-screen">
        <Stats />
        <LessonList />
      </main>
    </div>
  );
}

export default App;
