import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

//Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-MR7aRuSmFlMWhKGpz6dgycb0T_L-cu0",
  authDomain: "stylz-project.firebaseapp.com",
  projectId: "stylz-project",
  storageBucket: "stylz-project.appspot.com",
  messagingSenderId: "288203544176",
  appId: "1:288203544176:web:454983cd5bd6c145cfc6b5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userDocRef;
};

// Authentication Interfaces

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListner = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Database Code

export const addCollectionAndDocsToDb = async (
  collectionName,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.category.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done!");
};

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docRef) => docRef.data());
};
