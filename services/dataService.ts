
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const addLead = async (leadData: { name: string; email: string; destination: string; visaType: string }) => {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      ...leadData,
      status: "new",
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding lead: ", e);
    throw e;
  }
};

export const addAssessment = async (assessmentData: { destination: string; goal: string; education: string; result: string }) => {
  try {
    const docRef = await addDoc(collection(db, "assessments"), {
      ...assessmentData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding assessment: ", e);
    throw e;
  }
};

export const addSubscription = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, "newsletter"), {
      email,
      subscribedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding subscription: ", e);
    throw e;
  }
};
