import Container from "./Container";

function Lesson() {
  return (
    <Container addons="bg-white px-4 w-full">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={true}
          readOnly
          className="w-11 h-11 accent-green-600 pointer-events-none"
        />
        <div className="w-full">
          <h3 className="text-center text-sm sm:text-md font-bold text-slate-700">
            Nombre de la lección
          </h3>
          <p className="text-center text-sm sm:text-md font-bold text-slate-500">
            Encuentros: X al X
          </p>
        </div>
      </div>
      <div className="bg-green-400 w-100 mt-2 mx-auto max-w-md">
        <p className="text-center text-sm sm:text-md font-bold text-slate-800">
          To do: Progress bar
        </p>
      </div>
    </Container>
  );
}

export default Lesson;
