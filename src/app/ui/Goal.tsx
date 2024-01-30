import { days, renderStatus } from "@/app/lib/properties";

// TODO: use app types
function Goal({ name, checks }: {name: string, checks: any}) { 
  return (
    <li>
      <div className="goal_container">
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
