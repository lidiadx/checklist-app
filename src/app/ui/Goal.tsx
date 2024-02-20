import { days, renderStatus } from "@/app/lib/properties";
import { DayStatus } from "../lib/definitions";

export interface Props {
  name: string;
  checks: Array<DayStatus>;
}

function Goal({ name, checks }: Props) { 
  return (
    <li>
      <div className="flex justify-between gap-4 bg-white px-10 py-4 m-4 rounded-full">
        <div><span className="font-bold">{name}</span></div>
        <div className="flex">
        {checks.map((check, index) => (
          <span key={index} className={days[index]}>
          {renderStatus(check)}
        </span>
        ))
        }
        </div>   
      </div>
    </li>
  );
}

export default Goal;
