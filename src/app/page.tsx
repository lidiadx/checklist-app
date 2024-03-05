import Image from "next/image";
import AddItem from "@/app/ui/AddItem";
import GoalsList from "@/app/ui/GoalsList";
import DateStatus from "@/app/ui/DateStatus";

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
        <AddItem></AddItem>
      </div>
      <div>
        <DateStatus></DateStatus>
      </div>
      <GoalsList></GoalsList>
    </main>
  );
}
