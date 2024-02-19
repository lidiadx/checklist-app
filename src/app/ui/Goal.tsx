import { days, renderStatus } from "@/app/lib/properties";

export interface Props {
  name: string;
  checks: number[];
}

function Goal({ name, checks }: Props) { 
  return (
    <li>
      <div className="bg-white px-10 py-4 m-4 rounded-full">
        <span className="goal_name">{name}:</span>
        {checks.map((check, index) => (
          <span key={index} className={days[index]}>
            {renderStatus(check)}
          </span>
        ))}
      </div>
    </li>
  );
}

export default Goal;
