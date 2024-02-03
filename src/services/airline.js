import axios from "./axios";

export const getDefaultAirports = async (request) => {
  try {
    const {
      data: { result },
    } = await axios.get("location/autocomplete/?region=BD", request);
    return result;
  } catch (error) {
    console.log("Error in getDefaultAirports", error);
    return [];
  }
};
