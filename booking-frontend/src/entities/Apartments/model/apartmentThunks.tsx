import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApartmentService } from "../api/apartments.service";


export const getAllApartments = createAsyncThunk(
  "apartments/getAll",
  async (_, { rejectWithValue }) => {
    const result = await ApartmentService.getAllApartments();
    
    if (result.error) {
      return rejectWithValue(result.error);
    }
    
    return result.data;
  }
);
