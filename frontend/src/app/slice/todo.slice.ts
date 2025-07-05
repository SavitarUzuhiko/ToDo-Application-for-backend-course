import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  _id?: string;
  title?: string;
  completed?: string;
  visible?: boolean;
  query?: string;
  page?: number;
};

const initialState: initialStateType = {
  visible: false,
};

export const todoSlice = createSlice({
  name: "Todo Slice",
  initialState,
  reducers: {
    setVisible: (state, {payload}: PayloadAction<initialStateType>) => {
      state.visible = payload.visible;
      state._id = payload._id;
      state.title = payload.title;
      state.completed = payload.completed;
      console.log(payload);
    },
    setQuery: (state, {payload}: PayloadAction<string>) => {
      state.query = payload;
      console.log(state.query);
    },
    setPage: (state, {payload}: PayloadAction<number>) => {
      state.page = payload;
    },
    setCompleted: (state, {payload}: PayloadAction<string>) => {
      state.completed = payload;
      console.log(state.completed);
    }
  },
});

export const { setVisible , setQuery , setPage , setCompleted} = todoSlice.actions;

export default todoSlice.reducer;
