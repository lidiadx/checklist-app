import { TaskEntry } from "@/app/lib/definitions";
import { renderStatus } from "@/app/lib/properties";

type Props = Pick<TaskEntry, "taskName" | "checks"> & { key: string };

export default function Goal(props: Props) {
  const sussessCount = props.checks.filter(check => check === 1).length;

  const goalCount = props.checks.filter(check => check !== 3).length;

  return (
    <li>
      <div className="flex justify-between gap-4 bg-white px-10 py-4 m-4 rounded-full">
        <div>
          <span className="font-bold">{props.taskName}</span>
        </div>
        <div className="flex">
          {props.checks.map((check, index) => (
            <span className="text-[grey]" key={index}>
              {renderStatus(check)}
            </span>
          ))}
          <div className="font-bold ml-[1.5em]">{sussessCount} / {goalCount}</div>
        </div>
      </div>
    </li>
  );
}
