function ProximoIntegrador({ remainingEncounters, encuentroIntegrador }) {
  if (!remainingEncounters) {
    return <>¡Buena suerte!</>;
  }

  return (
    <>
      Integrador en:{" "}
      <span className="font-bold text-blue-500">{remainingEncounters}</span>{" "}
      encuentro{remainingEncounters > 1 ? "s " : " "}
      <span className="text-slate-500">{`Encuentro ${
        encuentroIntegrador ? encuentroIntegrador[0] : "..."
      }`}</span>
      <br />
      ¡Asegurate de prepararte bien!
    </>
  );
}

export default ProximoIntegrador;
