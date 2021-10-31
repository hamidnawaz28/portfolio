import { doc, setDoc } from "firebase/firestore";
import db from "./firestore";
console.log("--------DB---------", db);
const addADoc = async (collection: string, data: any) => {
  await setDoc(doc(db, collection, Date.now().toString()), data);
};
export { addADoc };
