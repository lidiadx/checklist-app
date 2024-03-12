"use client";

import { useFormState } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { createTask } from "@/app/lib/actions";

export default function AddGoal() {
  const formRef = useRef<HTMLFormElement>(null);

  //if user is typing the cancel button appears
  const [typing, setTyping] = useState(false);

  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createTask, initialState);

  const handleCancel = () => {
    //console.log('handleCancel');
    setTyping(false);
    formRef.current?.reset();
  };

  const handleFocus = () => {
    console.log("handleFocus");
    setTyping(true);
  };

  const handleBlur = () => {
    //console.log('handleBlur');
    setTyping(false);
  };

  useEffect(() => {
    //output the current values entered in the form
    //console.log(state);
    if (!state) {
      // redirect makes state undefined
      formRef.current?.reset();
      setTyping(false);
    }
  }, [state]);

  return (
    <form action={dispatch} ref={formRef}>
      <div className="fixed bottom-0">
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="white"
              className="w-6 h-6 absolute left-8 inset-y-0 my-auto cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <input
              id="taskName"
              name="taskName"
              type="string"
              placeholder="Add a Task"
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className="bg-[#F0842B] peer block w-full rounded-full border border-gray-200 px-12 py-4 m-4 text-sm outline-1 outline-gray-400 placeholder:text-white text-white"
            />
            {typing && (
              <svg
                onMouseDown={handleCancel}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="w-6 h-6 absolute right-2 inset-y-0 my-auto cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div id="task-error">
            {state?.message && <p className="mt-2 text-sm text-red-500">{state.message}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}
