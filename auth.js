
import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendPasswordResetEmail,
signOut,
updateProfile,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
doc,
setDoc,
getDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// ---------------------------
// SIGN UP
// ---------------------------

window.signup = async function(){

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirm").value;

if(password!==confirm){

alert("Passwords do not match.");

return;

}

try{

const userCredential=

await createUserWithEmailAndPassword(

auth,

email,

password

);

await updateProfile(

userCredential.user,

{

displayName:name

}

);

await setDoc(

doc(db,"users",userCredential.user.uid),

{

name,

email,

created:new Date()

}

);

window.location.href="account.html";

}

catch(error){

alert(error.message);

}

}

// ---------------------------
// LOGIN
// ---------------------------

window.login=async function(){

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

window.location.href="account.html";

}

catch(error){

alert(error.message);

}

}

// ---------------------------
// LOGOUT
// ---------------------------

window.logout=async function(){

await signOut(auth);

window.location.href="index.html";

}

// ---------------------------
// RESET PASSWORD
// ---------------------------

window.resetPassword=async function(){

const email=document.getElementById("email").value;

if(email===""){

alert("Enter your email first.");

return;

}

try{

await sendPasswordResetEmail(

auth,

email

);

alert(

"Password reset email sent."

);

}

catch(error){

alert(error.message);

}

}

// ---------------------------
// ACCOUNT PAGE
// ---------------------------

onAuthStateChanged(

auth,

async(user)=>{

if(!user){

return;

}

const username=document.getElementById("username");

const useremail=document.getElementById("useremail");

if(username){

username.innerHTML=user.displayName;

}

if(useremail){

useremail.innerHTML=user.email;

}

const snap=

await getDoc(

doc(db,"users",user.uid)

);

if(snap.exists()){

console.log(

snap.data()

);

}

}

);
