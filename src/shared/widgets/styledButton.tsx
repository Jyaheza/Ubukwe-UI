import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
  backgroundColor: "#D5AC44",
  color: "#fff",
  fontWeight: "bold",
  padding: "10px",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#b5953d",
  },
});

export default StyledButton;
