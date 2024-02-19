import { days, renderStatus } from "@/app/lib/properties";

export interface Props {
  name: string;
  checks: number[];
}

function Goal({ name, checks }: Props) { 
  return (
    <li>
      <div className="flex justify-between gap-4 bg-white px-10 py-4 m-4 rounded-full">
        <div><span className="font-bold">{name}</span></div>
        <div>
        {checks.map((check, index) => (
          <span key={index} className={days[index]}>
            {renderStatus(check)}
          </span>
        ))}
        </div>   
      </div>
    </li>
  );
}

export default Goal;
