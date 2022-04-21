import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";
// const initialState = [
//   {
//     postTitle: "Data default",
//     postId: 1,
//   },
//   {
//     postTitle: "Data default2",
//     postId: 2,
//   },
// ];

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getListTodo = createAsyncThunk("post/getListTodo", async () => {
  try {
    const res = await axios.get(
      "https://624ee282bdda77e9a9b67962.mockapi.io/LearnReactJS"
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("co loi xay ra", error);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // addPost: (state, action) => {
    //   state.push({
    //     postTitle: action.payload,
    //     postId: nanoid(),
    //   });
    // },
    // sortPost: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(getListTodo.pending, (state, actions) => {
        state.loading = true;
      })
      .addCase(getListTodo.fulfilled, (state, actions) => {
        state.loading = false;
        state.data = actions.payload;
      })
      .addCase(getListTodo.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
});

export const { addPost, sortPost } = postSlice.actions;
export default postSlice.reducer;
