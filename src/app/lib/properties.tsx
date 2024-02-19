
export const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];


export type DayStatus = '-' | '+' | 'o';


const displayStatus: DayStatus[] = ['-', '+', 'o'];

export const renderStatus = (statusKey: number) => {
  return displayStatus[statusKey];
};