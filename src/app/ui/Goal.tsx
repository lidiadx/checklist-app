import { days, renderStatus } from "@/app/lib/properties";

function Goal({ name, checks }) {
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
