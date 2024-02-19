/* Typescript types */

export enum Status {
  Skip = 'Skip',
  Miss = 'Miss',
  Done = 'Done',
}

export type Habit = {
  name: string,
  date: string,
  values: Array<Status>    // TODO: how to say "of length 7"
}

