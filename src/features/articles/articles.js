import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const generalURL =
  'https://newsapi.org/v2/top-headlines?category=general&language=en&pageSize=100';
const healthURL =
  'https://newsapi.org/v2/top-headlines?category=health&language=en&pageSize=100';
const scienceURL =
  'https://newsapi.org/v2/top-headlines?category=science&language=en&pageSize=100';
const businessURL =
  'https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=100';
const entUrl =
  'https://newsapi.org/v2/top-headlines?category=entertainment&language=en&pageSize=100';
const sportsURL =
  'https://newsapi.org/v2/top-headlines?category=sports&language=en&pageSize=100';
const techURL =
  'https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=100';

const initialState = {
  allArticles: JSON.parse(localStorage.getItem('top10')),
  general: [],
  science: [],
  tech: [],
  business: [],
  entertainment: [],
  health: [],
  sports: [],
  isLoading: true,
  isError: false,
};

export const getAllArticles = createAsyncThunk(
  'articles/getAllArticles',
  async (thunkAPI) => {
    try {
      const resp = await axios(generalURL, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectiWithValue('somehting went wrong');
    }
  }
);

export const getTech = createAsyncThunk(
  'articles/getTech',
  async (thunkAPI) => {
    try {
      const resp = await axios(techURL, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectiWithValue('somehting went wrong');
    }
  }
);
export const getScience = createAsyncThunk(
  'articles/getScience',
  async (thunkAPI) => {
    try {
      const resp = await axios(scienceURL, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectiWithValue('somehting went wrong');
    }
  }
);
export const getSports = createAsyncThunk(
  'articles/getSports',
  async (thunkAPI) => {
    try {
      const resp = await axios(sportsURL, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectiWithValue('somehting went wrong');
    }
  }
);
export const getEnt = createAsyncThunk('articles/getEnt', async (thunkAPI) => {
  try {
    const resp = await axios(entUrl, {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    console.log(error.response.data);
    return thunkAPI.rejectiWithValue('somehting went wrong');
  }
});
export const getHealth = createAsyncThunk(
  'articles/getHealth',
  async (thunkAPI) => {
    try {
      const resp = await axios(healthURL, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectiWithValue('somehting went wrong');
    }
  }
);
export const getBusiness = createAsyncThunk(
  'articles/getBusiness',
  async (thunkAPI) => {
    try {
      const resp = await axios(businessURL, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
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
        state.general = action.payload.articles;
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getTech.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTech.fulfilled, (state, action) => {
        state.tech = action.payload.articles;
      })
      .addCase(getTech.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getScience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScience.fulfilled, (state, action) => {
        state.science = action.payload.articles;
      })
      .addCase(getScience.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBusiness.fulfilled, (state, action) => {
        state.business = action.payload.articles;
      })
      .addCase(getBusiness.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getHealth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHealth.fulfilled, (state, action) => {
        state.health = action.payload.articles;
      })
      .addCase(getHealth.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getSports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSports.fulfilled, (state, action) => {
        state.sports = action.payload.articles;
      })
      .addCase(getSports.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getEnt.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnt.fulfilled, (state, action) => {
        state.entertainment = action.payload.articles;
        state.isLoading = false;
      })
      .addCase(getEnt.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default articlesSlice.reducer;
