import { Stats, LessonList } from "../components/index";

function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-end min-h-screen gap-4 mx-auto lg:flex-row max-w-screen-2xl sm:pl-28 sm:pr-5 lg:py-14">
      <Stats />
      <LessonList />
    </main>
  );
}

export default Dashboard;
