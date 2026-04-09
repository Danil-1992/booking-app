import { createSlice } from "@reduxjs/toolkit";
import type { apartmentArrayType } from "../types/apartmentsSchema";
import { getAllApartments } from "./apartmentThunks";

type initialStateType = {
  apartments: apartmentArrayType;
  apartmentLoading: boolean;
  apartmentError: string | null;
};

const initialState: initialStateType = {
  apartments: [],
  apartmentLoading: false,
  apartmentError: null,
};

export const apartmentSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(getAllApartments.pending, (state) => {
        state.apartmentLoading = true;
        state.apartmentError = null;
      })
      .addCase(getAllApartments.fulfilled, (state, { payload }) => {
        state.apartments = payload || [];
        state.apartmentLoading = false;
        state.apartmentError = null;
      })
      .addCase(getAllApartments.rejected, (state, action) => {
        state.apartmentLoading = false;
        state.apartmentError =
          action.error.message ?? "Ошибка при загрузке апартаментов";
      });
  },
});

export default apartmentSlice.reducer;
