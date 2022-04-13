import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "array",
  initialState: {
    entities: [],
    size: 50
  },
  reducers: {
    arrayGenerated(state, action) {
      state.entities = action.payload
    },
    arraySizeChange(state, action) {
        state.size = action.payload
    }
  },
});


export const {arrayGenerated, arraySizeChange} = arraySlice.actions
export default arraySlice.reducer;