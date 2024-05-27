import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const registerUser = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const user = response.user;

  return user;
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const response = await signInWithPopup(auth, provider);
  const user = response.user;

  return user;
};

export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const saveNote = () => {};

export const getNotes = () => {};

export const authStateObserver = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

// export const signInWithFacebook = async () => {
//   const provider = new FacebookAuthProvider();
//   const response = await signInWithPopup(auth, provider);
//   console.log("Response from Facebook >>>>> " + JSON.stringify(response));
// };
