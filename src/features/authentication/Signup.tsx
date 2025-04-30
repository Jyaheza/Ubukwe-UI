import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import AuthTemplate from "../../shared/AuthTemplate.tsx";
import StyledButton from "../../shared/widgets/styledButton.tsx";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Signing up with:", { email, password, confirmPassword });
    navigate("/planning1");
  };

  return (
    <AuthTemplate title="Welcome!" subtitle="Create an account for Ubukwe">
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

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <StyledButton type="submit" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </StyledButton>
      </form>

      <Box textAlign="center" mt={2} fontSize="0.9rem">
        <Typography variant="body2">
          Already have an account?{" "}
          <MuiLink component={RouterLink} to="/login" sx={{ color: "#D5AC44" }}>
            Login here.
          </MuiLink>
        </Typography>
      </Box>
      <Box textAlign="center" mt={2} fontSize="0.9rem">
        <Typography variant="body2">
          Already a member?{" "}
          <MuiLink component={RouterLink} to="/" sx={{ color: "#D5AC44" }}>
            Log in.
          </MuiLink>
        </Typography>
      </Box>

      <Box textAlign="center" mt={2} fontSize="0.9rem">
        <Typography variant="body2">
          Are you a vendor?{" "}
          <MuiLink href="#" sx={{ color: "#D5AC44" }}>
            Log in here.
          </MuiLink>
        </Typography>
      </Box>
    </AuthTemplate>
  );
};

export default SignupPage;
