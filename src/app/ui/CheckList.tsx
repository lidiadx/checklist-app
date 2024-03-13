'use client';

import Check from "@/app/ui/Check";
import { CheckWeek } from "@/app/lib/definitions";

type Props = { checks: CheckWeek, handleClick: Function };

export default function CheckList(props: Props) {
  const sussessCount = props.checks.filter((check) => check === 1).length;

  const goalCount = props.checks.filter((check) => check !== 3).length;
  return (
    <div className="flex">
      {props.checks?.map((check, index) => (
        <Check key={index} id={index} check={check} handleClick={props.handleClick}></Check>
      ))}
      <div className="font-bold ml-[1.5em]">
        {sussessCount} / {goalCount}
      </div>
    </div>
  );
}
