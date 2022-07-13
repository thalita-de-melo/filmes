import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnskgO2Vic8jlhwRyYXK8fx-u0AvOnfUQ",
  authDomain: "movies-5e976.firebaseapp.com",
  projectId: "movies-5e976",
  storageBucket: "movies-5e976.appspot.com",
  messagingSenderId: "1030495145180",
  appId: "1:1030495145180:web:802f81249c5f0afe1c3819",
};

const app = initializeApp(firebaseConfig);

//var email = "hyuugathalita@gmail.com";
//var password = "100995";

const auth = getAuth();

function data(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("logado");
      console.log("lahskdjhskdjah");
      const user = userCredential.user;
      console.log(user);
      //window.open("menu.html", "_self");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export { data };
