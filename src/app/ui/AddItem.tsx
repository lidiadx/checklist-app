'use client';

import { useFormState } from 'react-dom';
import { useState } from 'react';
import { createTask } from '@/app/lib/actions';

function AddItem() {

  const [active, setActive] = useState(false);
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createTask, initialState);

  const handleClick = () => {
    setActive(true);
  };

  const handleReset = () => {
    setActive(false);
  }

  return (
    <>
    {active? 
    <form action={dispatch}>
      <div className="mb-4">
          <label htmlFor="taskName" className="mb-2 block text-sm font-medium">
            Enter task name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="taskName"
                name="taskName"
                type="string"
                placeholder=""
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.taskName &&
              state.errors.taskName.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          </div>
        </div>
        <button type="submit" className="bg-[#F0842B] hover:bg-[#FF8C2E]/90 text-white rounded-full px-8 py-2 font-bold text-lg text-center inline-flex items-center">Add</button>
        <button onClick={handleReset} className="bg-[#F0842B] hover:bg-[#FF8C2E]/90 text-white rounded-full px-8 py-2 font-bold text-lg text-center inline-flex items-center">Cancel</button>
    </form>
     : 
     <button onClick={handleClick} className="bg-[#F0842B] hover:bg-[#FF8C2E]/90 text-white rounded-full px-8 py-2 font-bold text-lg text-center inline-flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      Add
    </button>}
    </>
  );
}

export default AddItem;
