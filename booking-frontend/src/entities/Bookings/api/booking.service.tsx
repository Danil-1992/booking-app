import axios from "axios";
import {
  bookingArraySchema,
  bookingSchemaResp,
  type BookingFormData,
} from "../types/bookingSchema";
import { handleApiError } from "../../../shared/error/ErrorHandler";


export const BookingService = {
  async getAllBookings() {
    try {
      const response = await axios.get("http://localhost:8080/bookings");
      const validData = bookingArraySchema.parse(response.data);
      return { data: validData, error: null };
    } catch (error) {
      return { data: null, error: handleApiError(error) };
    }
  },

  async createBooking(data: BookingFormData) {
    try {
      const response = await axios.post("http://localhost:8080/bookings", data);
      const validData = bookingSchemaResp.parse(response.data);
      return { data: validData, error: null };
    } catch (error) {
      return { data: null, error: handleApiError(error) };
    }
  },

  async cancelBooking(id: number) {
    try {
      const response = await axios.patch(`http://localhost:8080/bookings/${id}`);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: handleApiError(error) };
    }
  },
};
