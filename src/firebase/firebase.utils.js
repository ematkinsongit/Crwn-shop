import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { collection, addDoc } from "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBaZtQLXiyDsMA5nwinnq7q7Erkdvq3Ncc",
  authDomain: "crwn-clothing-a067f.firebaseapp.com",
  projectId: "crwn-clothing-a067f",
  storageBucket: "crwn-clothing-a067f.appspot.com",
  messagingSenderId: "28270359314",
  appId: "1:28270359314:web:f8faa626ec62819c6139cb",
  measurementId: "G-MVMGSJMDET",
};

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
export const createNewUserProfileDocument = createUserProfileDocument;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
