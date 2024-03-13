import clientPromise from "@/app/lib/mongodb";
import { TaskEntry, CheckWeek, Check } from "@/app/lib/definitions";
import { getWeek, getYear } from "date-fns";

const db_name = "checklist-db-demo";
const collection = "tasks";
const userName = "testUser";


// fetch tasks for current week
export async function fetchCurrentTasks() {
    const today = new Date();
    const year = getYear(today); 
    const weekNumber = getWeek(today); 
    try {
        const client = await clientPromise;
        const db = client.db(db_name);
  
        const d = await db
          .collection<TaskEntry>(collection)
          .find({userName: userName, year: year, weekNumber: weekNumber})
          .sort({ _id: -1 });
  
        const results = await d.toArray();
  
        return results;
    } catch (e) {
        console.error(e);
    }
  }

  // add a new task
  export async function insertTask(taskName: string) {
    const today = new Date();
    const year = getYear(today);
    const weekNumber = getWeek(today); 
    const checks: CheckWeek = [0, 0, 0, 0, 0, 0, 0]; 

    try {
        const client = await clientPromise;
        const db = client.db(db_name);
  
        const result = await db
          .collection<TaskEntry>(collection)
          .insertOne({taskName: taskName, userName: userName, year: year, weekNumber: weekNumber, checks: checks});
  
        return result; // TODO: ? whats inside
    } catch (e) {
        console.error(e);
    }
  }

  // TODO: correct TypeScript
export async function updateCheck(taskName: string, check: Check, day: number) {
  const today = new Date();
  const year = getYear(today);
  const weekNumber = getWeek(today); 

  try {
    const client = await clientPromise;
    const db = client.db(db_name);

    const result = await db
      .collection<TaskEntry>(collection)
      .updateOne({taskName: taskName, userName: userName, year: year, weekNumber: weekNumber}, { $set: { [`checks.${day}`]: check } });

    return result; // TODO: ? whats inside
} catch (e) {
    console.error(e);
}
}

// TODO: test this function
// updatedUserData: properties that changed
export async function updateUserData(updatedUserData: any) { 
    try {
        const client = await clientPromise;
        const db = client.db(db_name);
        const d = await db
        .collection(collection)
        .updateOne({name: userName}, {$set: updatedUserData});

        console.log(`${d.matchedCount} document(s) matched the query criteria.`);
        console.log(`${d.modifiedCount} document(s) was/were updated.`);
    } catch(e) {
        console.error(e);
    }
}