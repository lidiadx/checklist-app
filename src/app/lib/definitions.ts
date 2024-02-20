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

