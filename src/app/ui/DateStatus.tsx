import { getWeek, getDay, format } from 'date-fns';
import { weekDays } from '@/app/lib/properties';

function DateStatus() {
  const today = new Date();

  const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const weekDay = weekDays[getDay(today)];
  return (
    <div className="mt-4 mb-10">
    <p>
    Current Week: {getWeek(today)}
    </p>
    <p>
      Today is: {format(today, "MM/dd/yyyy")}, {capitalize(weekDay)}
    </p>
    </div>
  )
};

export default DateStatus;