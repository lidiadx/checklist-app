import { fetchUserData } from "../lib/data";
import Goal from "@/app/ui/Goal";

export default async function GoalsList() {
  const data = await fetchUserData();
  console.log('my data');
  console.log(data);
  return (
    <ul>
        {data.map((item: any) => (   // TODO: Typescript type
          <Goal key={item.name} name={item.name} checks={item.checks}></Goal>
        ))}
      </ul>
  );
}