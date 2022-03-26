import axios from "axios";

const KEY = "AIzaSyB5gl_uoNP47Grw83SYQ9ivL0nO0__qWRo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
