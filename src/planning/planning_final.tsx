
import React, { FormEvent } from "react";
import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import WineBarIcon from "@mui/icons-material/WineBar";
import CampaignIcon from "@mui/icons-material/Campaign";
import StoreIcon from "@mui/icons-material/Store";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleIcon from "@mui/icons-material/People";
import PlanningTemplate from "../shared/PlanningTemplate.tsx";
import { useNavigate } from "react-router-dom";
import StyledButton from "../shared/widgets/styledButton.tsx";

const sections = [
  { icon: <WineBarIcon />, label: "Reception venues" },
  { icon: <CampaignIcon />, label: "Announcements" },
  { icon: <StoreIcon />, label: "Vendors" },
  { icon: <CardGiftcardIcon />, label: "Registry" },
  { icon: <MailOutlineIcon />, label: "Invitations" },
  { icon: <PeopleIcon />, label: "Details" },
];

const PlanningFinal: React.FC = () => {
    const navigate = useNavigate();
    
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
      navigate("/dashboard");
    }

  return (
    <PlanningTemplate
    title="Congrats You're Engaged"
    subtitle="Your Wedding is going to be awesome! We'll get there bit by bit in six areas."
    step={5}
    progressValue={100}
  >
    <Box mt={2} width="100%">
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          {sections.map((section, index) => (
            <Grid item key={index}>
              <IconButton
                sx={{
                  backgroundColor: "#233d75",
                  color: "white",
                  width: 60,
                  height: 60,
                  "&:hover": { backgroundColor: "#1a2d56" },
                }}
              >
                {section.icon}
              </IconButton>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                {section.label}
              </Typography>
            </Grid>
          ))}
                  <StyledButton type="submit" sx={{ width: "30%" }} disabled={false}>
              {"Next Step"}
            </StyledButton>    
        </Grid>
    
      </form>
      
    </Box>
  </PlanningTemplate>
);
};

export default PlanningFinal;