import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  _id?: string;
  title?: string;
  completed?: boolean | string;
  visible?: boolean;
  query?: string;
  page?: number;
  total?: number;
  visibility?: boolean;
};

const initialState: initialStateType = {
  _id: "",
  query: "",
  visible: false,
  page: 1,
  total: 0,
  title: "",
  completed: "",
  visibility: false
};

export const todoSlice = createSlice({
  name: "Todo Slice",
  initialState,
  reducers: {
    setVisible(state, { payload }: PayloadAction<initialStateType>) {
      state.visible = payload.visible;
      state._id = payload._id;
      state.title = payload.title;

      console.log(payload);
    },
    setQuery(state, { payload }: PayloadAction<string>) {
      state.query = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    setCompleted(state, { payload }: PayloadAction<string>) {
      state.completed = payload;
    },
    setVisibility(state, { payload }: PayloadAction<boolean>) {
      state.visibility = payload;
    }
  },
});

export const { setVisible, setQuery, setPage, setCompleted, setVisibility } =
  todoSlice.actions;

export default todoSlice.reducer;

