import { createSlice } from "@reduxjs/toolkit";

const saved = localStorage.getItem("colout_data");

const initialState = {
  data: saved
    ? JSON.parse(saved)
    : {
        bg: "bg-black/5",
        bg_plate: "bg-black/50",
        bg_tool: "bg-sky-50",
      },
};

const reactslicer = createSlice({
  name: "slicer1",
  initialState,
  reducers: {
    change_colour: (state, action) => {
      state.data.bg = action.payload;
      localStorage.setItem("colout_data", JSON.stringify(state.data));
    },
    change_plate_colour: (state, action) => {
      state.data.bg_plate = action.payload;
      localStorage.setItem("colout_data", JSON.stringify(state.data));
    },
    change_tool_colour: (state, action) => {
      state.data.bg_tool = action.payload;
      localStorage.setItem("colout_data", JSON.stringify(state.data));
    },
  },
});

export const { change_colour, change_plate_colour, change_tool_colour } = reactslicer.actions;
export default reactslicer.reducer;

