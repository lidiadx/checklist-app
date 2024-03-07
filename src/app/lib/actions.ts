"use server";

import { z } from "zod";
import { insertTask } from "@/app/lib/data";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { InsertOneResult } from "mongodb";
import { TaskEntry } from "./definitions";

const FormSchema = z.object({
  taskName: z.string(),
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
  if (typeof taskName === 'undefined') {
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
    return {
      message: 'Task created successfully.',
    };
  } catch (error: any) {
    // Handle database errors
    console.error('Database Error:', error.message);
    return {
        message: 'Database Error: Failed to Create Task.',
    };
  }
}
