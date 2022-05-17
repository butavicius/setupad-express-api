import fetch from "node-fetch";
import config from "../config.js";

async function get(startDate, endDate) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    accept: "application/json",
  };

  const response = await fetch(
    `${config.apiURL}?start=${startDate}&end=${endDate}`,
    requestOptions
  );

  const result = await response.json();
  return result;
}

export { get };
