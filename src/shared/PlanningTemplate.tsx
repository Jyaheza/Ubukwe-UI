import React from "react";
import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
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

interface PlanningTemplateProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  step: number;
  progressValue: number;
}

const PlanningTemplate: React.FC<PlanningTemplateProps> = ({
  title,
  subtitle,
  children,
  step,
  progressValue,
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
        sx={{ minHeight: "100vh", padding: 3 }}
      >
        <FormContainer
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            height: "70vh",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
              zIndex: 2,
              paddingBottom: 2,
            }}
          >
            <Box mb={2}></Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#364A71"
              align="center"
            >
              {title}
            </Typography>

            <Typography variant="caption" fontWeight="bold">
              STEP {step} OF 5
            </Typography>
            <Typography>
              <LinearProgress
                variant="determinate"
                value={progressValue}
                sx={{ height: 5, borderRadius: 5, mt: 1, mb: 2 }}
              />
            </Typography>

            <Typography
              variant="h5"
              fontWeight="bold"
              color="#364A71"
              align="center"
            >
              {subtitle}
            </Typography>
          </Box>

          {/* Placeholder */}
          <Box mt={2} width="100%">
            {children}
          </Box>
        </FormContainer>
      </Grid>
    </RootContainer>
  );
};

export default PlanningTemplate;
