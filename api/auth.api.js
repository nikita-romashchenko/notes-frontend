import { SERVER_ADDRESS } from "../constants.js";
import { ACCESS_TOKEN } from "../constants.js";

export const signUp = async (username, password) => {
  console.log(JSON.stringify({ username, password }));
  const response = await fetch(`${SERVER_ADDRESS}auth/sign-up`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.ok) {
    return true;
  }
  return false;
};

export const signIn = async (username, password) => {
  const response = await fetch(`${SERVER_ADDRESS}auth/sign-in`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    window.localStorage.setItem("ACCESS_TOKEN", data.accessToken);
    return true;
  }
  return false;
};
