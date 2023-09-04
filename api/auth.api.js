import { SERVER_ADDRESS } from "../constants";
import { ACCESS_TOKEN } from "../constants";

export const signUp = async (username, password) => {
  const response = await fetch(`${SERVER_ADDRESS}auth/sign-up`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  if (response.ok) {
    return true;
  }
  return false;
};

export const signIn = async (username, password) => {
  const response = await fetch(`${SERVER_ADDRESS}auth/sign-in`, {
    method: "GET",
    body: JSON.stringify({ username, password }),
  });
  if (response.ok) {
    const data = JSON.parse(response.body);
    window.localStorage.setItem("ACCESS_TOKEN", data.accessToken);
    window.localStorage.setItem("REFRESH_TOKEN", data.refreshToken);
    return true;
  }
  return false;
};
