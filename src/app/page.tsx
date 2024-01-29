import Image from "next/image";
import { data } from "@/app/lib/data-mock";
import Goal from "@/app/ui/Goal";

export default function Home() {
  return (
      <main>
      <div>
        <h1>Checklist app</h1>
        By{" "}
            <Image
              src="/check.svg"
              alt="Checklist Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
      </div>
      <ul className="goals">
        {data.map((item) => (
          <Goal key={item.name} name={item.name} checks={item.checks}></Goal>
        ))}
      </ul>
    </main>
  );
}
