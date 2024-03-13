'use client';

import { renderStatus } from "@/app/lib/properties";
import { Check } from "@/app/lib/definitions";

type Props = {
  key: number;
  id: number;
  check: Check;
  handleClick: Function;
}

export default function Check(props: Props) {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log('check clicked ' + e.currentTarget.dataset.key);
    props.handleClick(e.currentTarget.dataset.key);
  }

  return (
    <span className="text-[grey] cursor-pointer" data-key={props.id} key={props.id} onClick={handleClick}>
          {renderStatus(props.check)}
        </span>
  );
}