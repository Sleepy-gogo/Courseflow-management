import Stats from "./components/Stats";
import Container from "./components/Container";

function App() {
  return (
    <main className="bg-gradient-to-br from-cyan-400 to-blue-800 h-screen p-3 md:p-10">
      <Container addons="w-full max-w-4xl">
        <h1 className="text-center font-bold text-xl sm:text-3xl md:text-4xl text-blue-950">
          Seguimiento de Progreso <span className="text-blue-500">Egg</span>
        </h1>
      </Container>

      <Stats />
    </main>
  );
}

export default App;
