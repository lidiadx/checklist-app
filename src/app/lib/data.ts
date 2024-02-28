import clientPromise from "@/app/lib/mongodb";

const db_name = "checklist-db-demo";
const collection = "users";

// TODO: only fetch data for the last month
export async function fetchUserData() {
  try {
      const client = await clientPromise;
      const db = client.db(db_name);

      const d = await db
        .collection(collection)
        .findOne({name: 'testuser'});

      const data = d?.data;

      return data;
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
        .updateOne({name: 'testuser'}, {$set: updatedUserData});

        console.log(`${d.matchedCount} document(s) matched the query criteria.`);
        console.log(`${d.modifiedCount} document(s) was/were updated.`);
    } catch(e) {
        console.error(e);
    }
}