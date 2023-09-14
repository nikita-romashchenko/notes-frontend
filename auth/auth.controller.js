import { signIn, signUp } from "../api/auth.api.js";

const signInUsername = document.getElementById("sign-in-username");
const signInPassword = document.getElementById("sign-in-password");

const signUpUsername = document.getElementById("sign-up-username");
const signUpPassword = document.getElementById("sign-up-password");

window.onload = () => {
  document
    .getElementById("sign-in-button")
    .addEventListener("click", () => onSignIn());

  document
    .getElementById("sign-up-button")
    .addEventListener("click", () => onSignUp());
};

const onSignIn = async () => {
  const isLoggedIn = await signIn(signInUsername.value, signInPassword.value);
  if (isLoggedIn) {
    window.location.replace("/");
  }
};

const onSignUp = async () => {
  const isSignedUp = await signUp(signUpUsername.value, signUpPassword.value);
  console.log(isSignedUp);
};
