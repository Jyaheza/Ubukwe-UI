import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";
import AuthTemplate from "../../shared/AuthTemplate.tsx";
import StyledButton from "../../shared/widgets/styledButton.tsx";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <AuthTemplate title="Welcome!" subtitle="Sign in for Ubukwe">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email address"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <StyledButton type="submit" fullWidth sx={{ mt: 2 }}>
          Sign in
        </StyledButton>
      </form>

      <Box textAlign="center" mt={2}>
        <MuiLink href="#" sx={{ fontSize: "0.9rem", color: "#D5AC44" }}>
          Forgot your password?
        </MuiLink>
      </Box>

      <Box textAlign="center" mt={2} fontSize="0.9rem">
        <Typography variant="body2">
          Are you a vendor?{" "}
          <MuiLink href="#" sx={{ color: "#D5AC44" }}>
            Log in here.
          </MuiLink>
        </Typography>
      </Box>

      <Box textAlign="center" mt={2} fontSize="0.9rem">
        <Typography variant="body2">
          Not a member yet?{" "}
          <MuiLink
            component={RouterLink}
            to="/signup"
            sx={{ color: "#D5AC44" }}
          >
            Sign up now.
          </MuiLink>
        </Typography>
      </Box>
    </AuthTemplate>
  );
};

export default LoginPage;
