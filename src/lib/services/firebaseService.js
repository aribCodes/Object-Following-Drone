import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../config/firebase/firebaseConfig";

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      alert("succesful Login");
      location.pathname = "/home";
    })
    .catch((error) => {
      console.log("error code ", error.code);
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use!");
      } else {
        alert("Sorry! please try creating your account again");
      }
    });
};

export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      location.pathname = "/home";
    })
    .catch((error) => {
      console.log("error code", error.code);
      if (error.code === "auth/invalid-credential") {
        alert("Wrong email or password!");
      } else {
        alert("Sorry! please try logging in your account again");
      }
    });
};
