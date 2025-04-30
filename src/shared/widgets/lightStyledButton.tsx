import { Button, colors, styled } from "@mui/material";

const LightStyledButton = styled(Button)({
  backgroundColor: "#FAF9F6",
  color: "#D5AC44",
  fontWeight: "bold",
  padding: "10px",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#b5953d",
    color: "#fff",
  },
});

export default LightStyledButton;
