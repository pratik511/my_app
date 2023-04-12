import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  setFormData,
  addData,
  setFormDataError,
  setShowPassword
} from "./LoginSlice";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { formData, formDataError, showPassword } = useSelector(
    (state) => state?.login
  );
  const onChangeValue = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
    dispatch(setFormDataError({ ...formDataError, [name]: "" }));
  };

  const validForm = () => {
    let Fromvlid = true;
    let formDataError = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!formData?.email?.trim()) {
      Fromvlid = false;
      formDataError["email"] = "Email is required";
    } else if (!regex.test(formData.email)) {
      Fromvlid = false;
      formDataError["email"] = "Please enter valid email";
    }
    if (!formData?.password?.trim()) {
      Fromvlid = false;
      formDataError["password"] = "Password is required";
    }
    dispatch(setFormDataError(formDataError));
    return Fromvlid;
  };

  const onSubmit = () => {
    if (validForm()) {
      dispatch(addData(formData))
        .then((res) => {
          if (res?.payload?.id) {
            navigate("/dashboard")
            window.location.reload()
            localStorage?.setItem("Data",JSON?.stringify(res?.payload))
            dispatch(getData());
            dispatch(setFormData({ email: "", password: "" }));
          }
        })
        .catch((err) => console.log("err", err));
    }
  };

  const handleClickShowPassword = () => dispatch(setShowPassword(!showPassword));

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Login</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            "& > :not(style)": { mt: 2 }
          }}
        >
          <div style={{ textAlign: "left" }}>
            <span style={{ margin: "10px" }}>Email</span>
            <TextField
              fullWidth
              id="outlined-required"
              // label="First Name"
              name="email"
              value={formData?.email}
              onChange={(e) => onChangeValue(e)}
            />
            <span style={{ fontSize: "14px", color: "red", margin: "10px" }}>
              {formDataError?.email}
            </span>
          </div>
          <div style={{ textAlign: "left" }}>
            <span style={{ margin: "10px" }}>Password</span>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData?.password}
                onChange={(e) => onChangeValue(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                // label="Password"
              />
            </FormControl>
            <span style={{ fontSize: "14px", color: "red", margin: "10px" }}>
              {formDataError?.password}
            </span>
          </div>
          <Button sx={{ mb: 5 }} variant="contained" onClick={() => onSubmit()}>
            Log in
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;
