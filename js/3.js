import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyAoo8SoHkN2U-aQPtlGb26-BeDYaKT-ruw",
        authDomain: "storied-coil-396417.firebaseapp.com",
        projectId: "storied-coil-396417",
        storageBucket: "storied-coil-396417.appspot.com",
        messagingSenderId: "858608833436",
        appId: "1:858608833436:web:53db7445954793bb812e59",
        measurementId: "G-H3RGG1HMJV"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

var email = document.getElementById("email")
var user = document.getElementById("user")
var password = document.getElementById("password-input")
var password1 = document.getElementById("password-input1")

window.signup = function(e) {  
  e.preventDefault(); 

  if (user.value == "" || email.value == "" || password.value == "" || password1.value == "") {
    alert("All Field Are Required");
    return false;
  }

  if (password.value != password1.value) {
    alert("Password Confirmation is Wrong");
    return false;
  }

  var obj = {
    firstName: user.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success) {
      window.location.replace('../index.html');
      alert("Signup Successful");
    })
    .catch(function(err) {
      alert("Error: " + err);
    });

  console.log();
};