import { createSlice } from "@reduxjs/toolkit";
import { TFacility } from "../../../types";

type TInitialState = {
  facilities: TFacility[];
};

const initialState: TInitialState = {
  facilities: [],
};

const facilitySlice = createSlice({
  name: "Facilities",
  initialState,
  reducers: {},
});

export const {} = facilitySlice.actions;

export default facilitySlice.reducer;
