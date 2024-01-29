
export const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const displayStatus = {
  0: '-',
  1: '+',
  2: 'o'
};

export const renderStatus = statusKey => {
  return displayStatus[statusKey];
};