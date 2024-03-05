import { TaskEntry } from "@/app/lib/definitions";
import { renderStatus } from "@/app/lib/properties";

export default function Goal(props: TaskEntry) {
  return (
    <li>
      <div className="flex justify-between gap-4 bg-white px-10 py-4 m-4 rounded-full">
        <div><span className="font-bold">{props.taskName}</span></div>
        <div className="flex">
        {props.checks.map((check, index) => (
          <span key={index}>
          {renderStatus(check)}
        </span>
        ))
        }
        </div>   
      </div>
    </li>
  );
}