import clientPromise from "@/app/lib/mongodb";

const db_name = "checklist-db-demo";
const collection = "users";

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
export async function updateUserData(userData: any) { 
    try {
        const client = await clientPromise;
        const db = client.db(db_name);
        const d = await db
        .collection(collection)
        .updateOne({name: 'testuser'}, userData);
    } catch(e) {
        console.error(e);
    }
}