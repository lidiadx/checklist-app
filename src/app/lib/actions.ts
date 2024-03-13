"use server";

import { z } from "zod";
import { insertTask, updateCheck } from "@/app/lib/data";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { TaskEntry, Check } from "@/app/lib/definitions";

const FormSchema = z.object({
  taskName: z.string({required_error: "Task name is required",
  invalid_type_error: "Task name must be a string",}).min(1, {message: "Task name should not be empty"}),
});

export type State = {
  errors?: {
    taskName?: string[];
  };
  message?: string | null;
};

const CreateTask = FormSchema.pick({ taskName: true });

export async function createTask(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateTask.safeParse({
    taskName: formData.get("taskName"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Task.",
    };
  }

  const { taskName } = validatedFields.data;
  if (!taskName) {
    return {
      message: 'Enter some task.'
    };
  }

  // Insert data into the database
  try {
    const d = await insertTask(taskName);
    if (typeof d === 'undefined') {
      return {
        message: 'Database Error: Failed to Create Task.',
    };
    }
    // New task created successfully

  } catch (error: any) {
    // Handle database errors
    console.error('Database Error:', error.message);
    return {
        message: 'Database Error: Failed to Create Task.',
    };
  }
  revalidatePath('/');
  redirect('/');
}

// TODO: correct TypeScript
export async function updateTask(taskName: string, checkValue: Check, day: number){
   // Insert data into the database
   try {
    const d = await updateCheck(taskName, checkValue, day);
    if (typeof d === 'undefined') {
      return {
        message: 'Database Error: Failed to Update Task Status.',
    };
    }
    // New task created successfully

  } catch (error: any) {
    // Handle database errors
    console.error('Database Error:', error.message);
    return {
        message: 'Database Error: Failed to Update Task Status.',
    };
  }
  revalidatePath('/');
  redirect('/');
}
