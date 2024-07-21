import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://6698bec02069c438cd6fc5f2.mockapi.io/api/advert";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const url = new URL("/api/advert/campers", axios.defaults.baseURL);

    //   url.searchParams.append("page", page);
    //   url.searchParams.append("perPage", perPage);

        const res = await axios.get(url.toString());
        console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
