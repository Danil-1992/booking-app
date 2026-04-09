import { createSlice } from "@reduxjs/toolkit";
import type { bookingArrayType } from "../types/bookingSchema";
import { cancelBooking, createBooking, getAllBookings } from "./bookingThunks";

type initialStateType = {
  bookings: bookingArrayType;
  bookingLoading: boolean;
  bookingError: string | null;
};

const initialState: initialStateType = {
  bookings: [],
  bookingLoading: false,
  bookingError: null,
};

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (buildings) => {
    buildings
      .addCase(getAllBookings.pending, (state) => {
        state.bookingLoading = true;
        state.bookingError = null;
      })
      .addCase(getAllBookings.fulfilled, (state, { payload }) => {
        state.bookings = payload||[];
        state.bookingLoading = false;
        state.bookingError = null;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.bookingLoading = false;
        state.bookingError =
          action.error.message ?? "Ошибка при получении бронирований";
      });
    buildings
      .addCase(createBooking.pending, (state) => {
        state.bookingLoading = true;
        state.bookingError = null;
      })
      .addCase(createBooking.fulfilled, (state, { payload }) => {
        if (payload) {
          state.bookings.push(payload);
        }

        state.bookingLoading = false;
        state.bookingError = null;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.bookingLoading = false;
        state.bookingError =
          action.error.message ?? "Ошибка при добавлении брони";
      });
    buildings
      .addCase(cancelBooking.pending, (state) => {
        state.bookingLoading = true;
        state.bookingError = null;
      })
      .addCase(cancelBooking.fulfilled, (state, { payload }) => {
        let booking = state.bookings.find((el) => el.id === payload);
        if (booking) {
          booking.status = "cancelled";
        }
        state.bookingLoading = false;
        state.bookingError = null;
      })
      .addCase(cancelBooking.rejected, (state, action) => {
        state.bookingLoading = false;
        state.bookingError =
          action.error.message ?? "Ошибка при отмене бронирования";
      });
  },
});

export default bookingSlice.reducer;
