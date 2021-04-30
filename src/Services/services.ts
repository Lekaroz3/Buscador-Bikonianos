import axios from "axios";

export async function GetAllBikonianos() {
  try {
    const response = await axios.get("data.json");
    return response.data;
  } catch (error) {
    new Error(error);
  }
}
