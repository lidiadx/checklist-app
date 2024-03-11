"use client";

import { useFormState } from "react-dom";
import { useRef } from "react";
import { createTask } from "@/app/lib/actions";

export default function AddGoal() {
  const formRef = useRef<HTMLFormElement>(null);

  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createTask, initialState);

  const handleCancel = () => {
    formRef.current?.reset();
  };

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
              className="bg-[#F0842B] peer block w-full rounded-full border border-gray-200 px-12 py-4 m-4 text-sm outline-1 outline-gray-400 placeholder:text-white text-white"
            />
            <svg
              onClick={handleCancel}
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
          </div>
        </div>
      </div>
    </form>
  );
}
