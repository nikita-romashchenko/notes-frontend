import { SERVER_ADDRESS } from "../constants.js";
import { ACCESS_TOKEN } from "../constants.js";

const getNotes = async () => {
  const response = await fetch(`${SERVER_ADDRESS}notes/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

export { getNotes };
