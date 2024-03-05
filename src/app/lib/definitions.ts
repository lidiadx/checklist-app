/* Typescript types */
export const CHECK_MAP = {
  0: "pending",
  1: "success",
  2: "miss",
  3: "skip",
} as const;

type CheckMap = typeof CHECK_MAP;

// Backend
export type Check = keyof CheckMap;
// Frontend
export type DisplayCheck = CheckMap[Check];

export type CheckWeek = [Check, Check, Check, Check, Check, Check, Check]; // Length = 7

export type DisplayCheckWeek = [DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck, DisplayCheck]; // Length 7

export type TaskEntry = {
  taskName: string;
  userName: string;
  year: number;
  weekNumber: number;
  checks: CheckWeek;
}

export type DisplayEntry = {
  taskName: string;
  checks: DisplayCheckWeek;
}

type User = {
  name: string;
}