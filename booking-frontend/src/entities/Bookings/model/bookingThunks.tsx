import { createAsyncThunk } from "@reduxjs/toolkit";
import type { BookingFormData } from "../types/bookingSchema";
import { BookingService } from "../api/booking.service";

export const getAllBookings = createAsyncThunk(
  "bookings/all",
  async (_, { rejectWithValue }) => {
    const result = await BookingService.getAllBookings();
    if (result.error) {
      return rejectWithValue(result.error);
    }
    return result.data;
  }
);

export const createBooking = createAsyncThunk(
  "booking/create",
  async (data: BookingFormData, { rejectWithValue }) => {
    const result = await BookingService.createBooking(data);
    if (result.error) {
      return rejectWithValue(result.error);
    }
    return result.data;
  }
);

export const cancelBooking = createAsyncThunk(
  "booking/cancel",
  async (id: number, { rejectWithValue }) => {
    const result = await BookingService.cancelBooking(id);
    if (result.error) {
      return rejectWithValue(result.error);
    }
    return id;
  }
);