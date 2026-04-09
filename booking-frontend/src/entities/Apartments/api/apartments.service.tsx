import axios from "axios";
import { apartmentArraySchema } from "../types/apartmentsSchema";
import { handleApiError } from "../../../shared/error/ErrorHandler";


export const ApartmentService = {
  async getAllApartments() {
    try {
      const response = await axios.get("http://localhost:8080/apartments");
      const validData = apartmentArraySchema.parse(response.data);
      return { data: validData, error: null };
    } catch (error) {
      return { data: null, error: handleApiError(error) };
    }
  },
};
