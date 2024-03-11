import Image from "next/image";
import GoalList from "@/app/ui/GoalList";
import DateStatus from "@/app/ui/DateStatus";
import AddGoal from "./ui/AddGoal";

export default function Home() {
  return (
    <main className="p-10">
      <div className="flex justify-between pb-8">
        <h1 className="text-5xl">Checklist</h1>
        <Image
          src="/check.svg"
          alt="Checklist Logo"
          className="dark:invert"
          width={54}
          height={54}
          priority
        />
      </div>
      <div>
        <DateStatus></DateStatus>
      </div>
      <GoalList></GoalList>
      <AddGoal></AddGoal>
    </main>
  );
}
