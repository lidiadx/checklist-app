import clientPromise from "@/app/lib/mongodb";

export async function fetchUserData() {
  try {
      const client = await clientPromise;
      const db = client.db("checklist-db-demo");

      const d = await db
          .collection("users")
          .find({name: 'testuser'})
          .toArray();
        
      const data = d[0].data;  // expect only one result

      return data;
  } catch (e) {
      console.error(e);
  }
}