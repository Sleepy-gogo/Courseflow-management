import Stats from "../components/dashboard/Stats";
import LessonList from "../components/dashboard/LessonList";

function Dashboard() {
  return (
    <main className="flex flex-col gap-4 justify-end items-center lg:flex-row max-w-screen-2xl mx-auto sm:pl-28 sm:pr-5 lg:py-14 min-h-screen">
      <Stats />
      <LessonList />
    </main>
  );
}

export default Dashboard;
