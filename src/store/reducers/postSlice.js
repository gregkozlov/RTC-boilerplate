import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk("posts/getPosts", async (_, { dispatch }) => {
  const res = await axios.get(url);
  dispatch(setPosts(res.data));
});

export const deletePostById = createAsyncThunk("posts/removePostById", async (id, { dispatch }) => {
  await axios.delete(`${url}/${id}`);
  dispatch(deletePost(id));
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, deletePost } = postSlice.actions;

export default postSlice.reducer;
