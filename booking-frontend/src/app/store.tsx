import { configureStore } from "@reduxjs/toolkit";
import apartmentSlice from "../entities/Apartments/model/apartmentSlice";
import bookingSlice from "../entities/Bookings/model/bookingSlice";

export const store = configureStore({
  reducer: {
    apartments: apartmentSlice,
    bookings: bookingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
