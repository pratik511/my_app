import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import axios from "axios";

const initialState = {
  value: 0,
  data: [],
  formData: {},
  formDataError: {},
  showPassword: false,
  error: null,
};
export const getData = createAsyncThunk("/getData", async () => {
  try {
    const response = await axios.get(`${BASE_URL}login`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});
export const addData = createAsyncThunk("/loginData", async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}login`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  activeJourney: null,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setFormDataError: (state, action) => {
      state.formDataError = action.payload;
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
  },
  extraReducers(homeData) {
    homeData
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addData.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(addData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { setFormData, setFormDataError, setShowPassword } = LoginSlice.actions;

export default LoginSlice.reducer;
