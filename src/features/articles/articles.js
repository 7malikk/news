import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import paginate from '../../utils/paginate';
const baseurl =
  'https://newsapi.org/v2/top-headlines?language=en&pageSize=100&category=';

const searchURL = 'https://newsapi.org/v2/everything?q=';
const sourcesUrl = 'https://newsapi.org/v2/top-headlines/sources';

const initialState = {
  all: [],
  general: [],
  science: [],
  tech: [],
  business: [],
  entertainment: [],
  health: [],
  sports: [],
  searchResult: [],
  sources: [],
  isLoading: true,
  isSearchLoading: true,
  isHealthLoading: true,
  isScienceLoading: true,
  isEntLoading: true,
  isSportsLoading: true,
  isBusinessLoading: true,
  isTechLoading: true,
  isSourcesLoading: true,
  isError: false,
  isSearchError: false,
  isHealthError: false,
  isScienceError: false,
  isEntError: false,
  isSportsError: false,
  isBusinessError: false,
  isTechError: false,
};

// get general articles
export const getAllArticles = createAsyncThunk(
  'articles/getAllArticles',
  async () => {
    try {
      const resp = await axios(baseurl + 'general', {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      return 'An error occured';
    }
  }
);

// get technology articles
export const getTech = createAsyncThunk('articles/getTech', async () => {
  try {
    const resp = await axios(baseurl + 'technology', {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    return 'An error occured';
  }
});
// get science articles
export const getScience = createAsyncThunk('articles/getScience', async () => {
  try {
    const resp = await axios(baseurl + 'science', {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    return 'An error occured';
  }
});
// get sport articles
export const getSports = createAsyncThunk('articles/getSports', async () => {
  try {
    const resp = await axios(baseurl + 'sports', {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    return 'An error occured';
  }
});
// get entertainment articles
export const getEnt = createAsyncThunk('articles/getEnt', async () => {
  try {
    const resp = await axios(baseurl + 'entertainment', {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    return 'An error occured';
  }
});
// get health articles
export const getHealth = createAsyncThunk('articles/getHealth', async () => {
  try {
    const resp = await axios(baseurl + 'health', {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    return 'An error occured';
  }
});

// get business articles
export const getBusiness = createAsyncThunk(
  'articles/getBusiness',
  async () => {
    try {
      const resp = await axios(baseurl + 'business', {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      return 'An error occured';
    }
  }
);

// get all sources provisioned by the API
export const getSources = createAsyncThunk('articles/getSources', async () => {
  try {
    const resp = await axios(sourcesUrl, {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    return 'An error occured';
  }
});

// search function
export const search = createAsyncThunk('articles/search', async (keyword) => {
  try {
    const resp = await axios(searchURL + keyword, {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    });
    return resp.data;
  } catch (error) {
    return 'An error occured';
  }
});
// function to filter based on selected source
export const getFromSource = createAsyncThunk(
  'articles/getFromSource',
  async (keyword) => {
    try {
      const resp = await axios(searchURL + keyword, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
      });
      return resp.data;
    } catch (error) {
      return 'An error occured';
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //general
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.general = action.payload.articles;
        state.all.push(...action.payload.articles);
        state.isLoading = false;
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = true;
      });
    // tech
    builder
      .addCase(getTech.pending, (state) => {
        state.isTechLoading = true;
      })
      .addCase(getTech.fulfilled, (state, action) => {
        state.tech = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isTechLoading = false;
      })
      .addCase(getTech.rejected, (state, action) => {
        console.log(action);
        state.isTechLoading = false;
        state.isTechError = true;
      });
    // science
    builder
      .addCase(getScience.pending, (state) => {
        state.isScienceLoading = true;
      })
      .addCase(getScience.fulfilled, (state, action) => {
        state.science = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isScienceLoading = false;
      })
      .addCase(getScience.rejected, (state, action) => {
        console.log(action);
        state.isScienceLoading = false;
        state.isScienceError = true;
      });
    // business
    builder
      .addCase(getBusiness.pending, (state) => {
        state.isBusinessLoading = true;
      })
      .addCase(getBusiness.fulfilled, (state, action) => {
        state.business = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isBusinessLoading = false;
      })
      .addCase(getBusiness.rejected, (state, action) => {
        console.log(action);
        state.isBusinessLoading = false;
        state.isBusinessError = true;
      });
    // health
    builder
      .addCase(getHealth.pending, (state) => {
        state.isHealthLoading = true;
      })
      .addCase(getHealth.fulfilled, (state, action) => {
        state.health = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isHealthLoading = false;
      })
      .addCase(getHealth.rejected, (state, action) => {
        console.log(action);
        state.isHealthLoading = false;
        state.isHealthError = true;
      });

    // sports
    builder
      .addCase(getSports.pending, (state) => {
        state.isSportsLoading = true;
      })
      .addCase(getSports.fulfilled, (state, action) => {
        state.sports = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isSportsLoading = false;
      })
      .addCase(getSports.rejected, (state, action) => {
        console.log(action);
        state.isSportsLoading = false;
        state.isSportsError = true;
      });
    // entertainment
    builder
      .addCase(getEnt.pending, (state) => {
        state.isEntLoading = true;
      })
      .addCase(getEnt.fulfilled, (state, action) => {
        state.entertainment = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isEntLoading = false;
      })
      .addCase(getEnt.rejected, (state, action) => {
        console.log(action);
        state.isEntLoading = false;
        state.isEntError = true;
      });
    // search
    builder
      .addCase(search.pending, (state) => {
        state.isSearchLoading = true;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.searchResult = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isSearchLoading = false;
      })
      .addCase(search.rejected, (state, action) => {
        console.log(action);
        state.isSearchLoading = false;
        state.isSearchError = true;
      });
    // get all sources (to be inserted into the dropdown)
    builder
      .addCase(getSources.pending, (state) => {
        state.isSourcesLoading = true;
      })
      .addCase(getSources.fulfilled, (state, action) => {
        state.sources = action.payload.sources;
        state.isSourcesLoading = false;
      })
      .addCase(getSources.rejected, (state, action) => {
        console.log(action);
        state.isSourcesLoading = false;
        state.isError = true;
      });
    // get articles bases on filter
    builder
      .addCase(getFromSource.pending, (state) => {
        state.isSearchLoading = true;
      })
      .addCase(getFromSource.fulfilled, (state, action) => {
        state.searchResult = paginate(action.payload.articles);
        state.all.push(...action.payload.articles);
        state.isSearchLoading = false;
      })
      .addCase(getFromSource.rejected, (state, action) => {
        console.log(action);
        state.isSearchLoading = false;
        state.isSearchError = true;
      });
  },
});

export default articlesSlice.reducer;
