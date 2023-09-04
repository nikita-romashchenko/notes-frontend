import { SERVER_ADDRESS } from "../constants";
import { ACCESS_TOKEN } from "../constants";

const getNotes = async () => {
  const response = await fetch(`${SERVER_ADDRESS}notes/`, {
    method: "get",
    headers: {
      Authentication: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
