'use client';

import { useFormState } from "react-dom";
import { updateTask } from "@/app/lib/actions";
import { TaskEntry, Check } from "@/app/lib/definitions";
import CheckList from "@/app/ui/CheckList";

type Props = Pick<TaskEntry, "taskName" | "checks"> & { key: string };

export default function Goal(props: Props) {

  const initialState = { message: "", errors: {} };
  //const [state, dispatch] = useFormState(updateTask, initialState);

const handleTaskUpdate = (check: Check) => {
  console.log('will be updating ' + check);
  console.log(props.taskName);
}

  return (
    <li>
      <div className="flex justify-between w-full gap-4 bg-white px-10 py-4 m-4 rounded-full">
        <div>
          <span className="font-bold">{props.taskName}</span>
        </div>
        <CheckList checks={props.checks} handleClick={handleTaskUpdate}></CheckList>
      </div>
    </li>
  );
}
