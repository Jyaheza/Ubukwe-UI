import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const RootContainer = styled(Grid)({
  height: "100vh",
});

const ImageContainer = styled(Grid)({
  backgroundImage: `url('Images/ubukwe.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.6)",
});

const FormContainer = styled(Paper)({
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "none",
});

interface AuthTemplateProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <RootContainer container>
      <ImageContainer item xs={12} md={6} />

      <Grid
        item
        xs={12}
        md={6}
        container
        justifyContent="center"
        alignItems="center"
      >
        <FormContainer elevation={3}>
          {/* Logo */}
          <Box mb={2}>
            <img src="Images/logo.png" alt="Logo" width={50} />
          </Box>

          <Typography variant="h5" fontWeight="bold" color="#364A71">
            {title}
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="#364A71">
            {subtitle}
          </Typography>

          {/* Placeholder */}
          <Box mt={2} width="100%">
            {children}
          </Box>
        </FormContainer>
      </Grid>
    </RootContainer>
  );
};

export default AuthTemplate;
