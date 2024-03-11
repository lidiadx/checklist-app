import { fetchCurrentTasks } from "@/app/lib/data";
import Goal from "@/app/ui/Goal";
import { TaskEntry } from "@/app/lib/definitions";

export default async function GoalList() {
  const data = await fetchCurrentTasks();
  console.log("my data");
  console.log(data);

  return (
    <ul className="mb-20 pb-20">
      {data?.map((entry: TaskEntry) => (  
          <Goal key={entry.taskName} taskName={entry.taskName} checks={entry.checks}></Goal>
        ))}
    </ul>
  );
}
