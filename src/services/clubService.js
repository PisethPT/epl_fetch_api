import axios from "axios";

const API_BASE_URL = "https://pisethpt.github.io/events-data/";
const CLUBS_ENDPOINT = "epl.json";

const fetchClubs = await axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  timeout: 10000, // 10 seconds timeout
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getClubs() {
    return fetchClubs.get(CLUBS_ENDPOINT);
  },
};
