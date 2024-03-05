/* Typescript types */

export enum Status {
  skip = 'skip',
  minus = 'minus',
  plus = 'plus',
  todo = 'todo'
}

export type Habit = {
  name: string,
  checks: Array<Status>    // TODO: how to say "of length 7"
}


export type DayStatus = 'minus' | 'plus' | 'skip' | 'todo';


// TODO: use the folllowing types for status
const CHECK_STATUS_MAP = {
  0: "pending",
  1: "success",
  2: "miss",
  3: "skip",
} as const;

type CheckStatusMap = typeof CHECK_STATUS_MAP;

// Backend
type CheckStatus = keyof CheckStatusMap;
// Frontend
type DisplayCheckStatus = CheckStatusMap[CheckStatus];

type HabitEntry = {
  habitTitle: string;
  userName: string;
  year: number;
  weekNumber: number;
  checks: Array<CheckStatus>;
}

type User = {
  name: string;
}