import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const url = 'https://newsapi.org/v2/top-headlines?country=ng&pageSize=5';

const initialState = {
  allArticles: JSON.parse(localStorage.getItem('top10')),
  isLoading: true,
  isError: false,
};

export const getAllArticles = createAsyncThunk(
  'articles/getAllArticles',
  async (thunkAPI) => {
    try {
      const resp = await axios(url, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      localStorage.setItem('top10', JSON.stringify(resp.data.articles));
      return resp.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectiWithValue('somehting went wrong');
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allArticles = action.payload.articles;
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default articlesSlice.reducer;
