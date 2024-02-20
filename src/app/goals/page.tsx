import { fetchUserData } from "../lib/data";
import Goal from "@/app/ui/Goal";


export default async function Goals() {
  const data = await fetchUserData();
  console.log('my data');
  console.log(data);
  return (
    <ul>
        {data.map((item) => (
          <Goal key={item.name} name={item.name} checks={item.checks}></Goal>
        ))}
      </ul>
  )
}