import { fetchCurrentTasks } from "@/app/lib/data";
import AddItem from "@/app/ui/AddItem";
import Goal from "@/app/ui/Goal";
import { TaskEntry } from "@/app/lib/definitions";

export default async function GoalList() {
  const data = await fetchCurrentTasks();
  console.log("my data");
  console.log(data);

  return (
    <>
    <div>
    <AddItem></AddItem>
    </div>
    <ul>
      {data?.map((entry: TaskEntry) => (  
          <Goal key={entry.taskName} taskName={entry.taskName} checks={entry.checks}></Goal>
        ))}
    </ul>
    </>
  );
}
