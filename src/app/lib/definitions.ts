/* Typescript types */

export enum Status {
  skip = 'skip',
  minus = 'minus',
  plus = 'plus',
  todo = 'todo'
}

export type Habit = {
  name: string,
  checks: Array<Status> 
}


export type DayStatus = 'minus' | 'plus' | 'skip' | 'todo';


// TODO: use the folllowing types for status
const CHECK_MAP = {
  0: "pending",
  1: "success",
  2: "miss",
  3: "skip",
} as const;

type CheckMap = typeof CHECK_MAP;

// Backend
type Check = keyof CheckMap;
// Frontend
type DisplayCheck = CheckMap[Check];

type CheckWeek = [Check, Check, Check, Check, Check, Check, Check]; // Length = 7

type DisplayCheckWeek = [DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck]; // Length 7

type HabitEntry = {
  habitTitle: string;
  userName: string;
  year: number;
  weekNumber: number;
  checks: CheckWeek;
}

type User = {
  name: string;
}