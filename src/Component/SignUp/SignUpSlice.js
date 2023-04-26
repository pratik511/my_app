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

export const addData = createAsyncThunk("/loginData", async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}register`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

export const SignUpSlice = createSlice({
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
      .addCase(addData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addData.fulfilled, (state,action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(addData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { setFormData, setFormDataError, setShowPassword } = SignUpSlice.actions;

export default SignUpSlice.reducer;
