import axios from "axios";

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Request failed with status:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function fetchAdvantages() {
  return fetchData("http://localhost:5000/advantages");
}

export async function fetchCards() {
  return fetchData("http://localhost:5000/teachers");
}

export async function fetchCourses() {
  return fetchData("http://localhost:5000/courses");
}
