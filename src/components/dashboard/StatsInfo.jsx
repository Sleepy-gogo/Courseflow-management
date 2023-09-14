import useStudentInfo from "../../hooks/useStudentInfo";
import ProximoIntegrador from "./ProximoIntegrador";

function getRemainingEncounters(integradorLength, encuentro) {
  return integradorLength ? integradorLength[0] - encuentro : "...";
}

function StatsInfo({ encuentros }) {
  const { lesson, integrador } = useStudentInfo({ encuentro: encuentros });
  const remainingEncounters = getRemainingEncounters(
    integrador?.length,
    encuentros
  );

  return (
    <div className="text-center w-[14rem] lg:w-[15rem] xl:w-[20rem]">
      <h2 className="text-lg font-bold truncate sm:text-2xl">
        Estás viendo:
        <br />
        <a
          href="#current"
          className="text-blue-500 transition-colors hover:text-blue-300 underline underline-offset-1"
        >
          {lesson?.name ?? "..."}
        </a>
      </h2>
      <p className="font-semibold text-md sm:text-xl">
        <ProximoIntegrador
          remainingEncounters={remainingEncounters}
          encuentroIntegrador={integrador?.length}
        />
      </p>
    </div>
  );
}

export default StatsInfo;
