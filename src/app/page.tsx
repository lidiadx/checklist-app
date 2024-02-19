import Image from "next/image";
import { data } from "@/app/lib/data-mock";
import Goal from "@/app/ui/Goal";
import AddItem from "@/app/ui/AddItem";

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
      <ul>
        {data.map((item) => (
          <Goal key={item.name} name={item.name} checks={item.checks}></Goal>
        ))}
      </ul>
    </main>
  );
}
