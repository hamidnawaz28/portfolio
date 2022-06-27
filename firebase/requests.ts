import { doc, setDoc } from "firebase/firestore";
import db from "./firestore";
const addADoc = async (collection: string, data: any) => {
  const docId = Date.now().toString();
  await setDoc(doc(db, collection, docId), data);
  return docId;
};

const editADoc = async (collection: string, documentId: string, data: any) => {
  await setDoc(doc(db, collection, documentId), data);
};
export { addADoc, editADoc };
