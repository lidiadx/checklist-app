import { getWeek, getDay, format } from 'date-fns';
import { weekDays } from '@/app/lib/properties';

function DateStatus() {
  const today = new Date();

  const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const weekDay = weekDays[getDay(today)];
  return (
    <>
    <p>
    Current Week: {getWeek(today)}
    </p>
    <p>
      Today is: {format(today, "MM/dd/yyyy")}, {capitalize(weekDay)}
    </p>
    </>
  )
};

export default DateStatus;