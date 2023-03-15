import {
  PrimaryButton,
  LoginBox,
  LoginContainer,
  LoginInput
} from "./StyledComponents";
import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";

export default function Login({ setLoggedin }) {
  const [email, setEmail] = useState("");

  return (
    <LoginContainer>
      <LoginBox>
        <Typography sx={{ color: "#666666" }} variant="h4" gutterBottom>
          Log in
        </Typography>
        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            id="email"
            placeholder="Email or Username"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <LoginInput id="password" placeholder="Password" />
          <PrimaryButton
            sx={{ margin: "20px 0" }}
            variant="contained"
            onClick={() => setLoggedin(true)}
          >
            Continue with Email
          </PrimaryButton>
        </FormControl>
      </LoginBox>
    </LoginContainer>
  );
}
