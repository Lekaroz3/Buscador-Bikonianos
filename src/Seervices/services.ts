import axios from "axios";

export async function ObtenerBikonianos() {
  try {
    const response = await axios.get("data.json");
    return response.data;
  } catch (error) {
    new Error(error);
  }
}
