import { doc, setDoc } from "firebase/firestore";
import db from "./firestore";
const addADoc = async (collection: string, data: Record<string, unknown>) => {
  const docId = Date.now().toString();
  await setDoc(doc(db, collection, docId), data);
  return docId;
};

const editADoc = async (collection: string, documentId: string, data: Record<string, unknown>) => {
  await setDoc(doc(db, collection, documentId), data);
};
export { addADoc, editADoc };
