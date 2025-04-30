import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LightStyledButton from "../shared/widgets/lightStyledButton.tsx";
import StyledButton from "../shared/widgets/styledButton.tsx";
import PlanningTemplate from "../shared/PlanningTemplate.tsx";

const PlanningStep1 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToBackend = async () => {
    try {
      setLoading(true);
      const payload = { ...formData };
      console.log(payload)
      const response = await fetch("", { //Api call here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");
      const result = await response.json();
      console.log("Backend response:", result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendToBackend();
    navigate("/planning2");
  };

  const handleSkip = () => navigate("/planning2");

  return (
    <PlanningTemplate
      title="Provide the information below so we can customize your planning experience."
      subtitle="Couple details"
      step={1}
      progressValue={20}
    >
      <Box mt={2} width="100%">
        <form onSubmit={handleSubmit}>
          <TextField label="Groom first name" name="firstName" fullWidth margin="normal" variant="outlined" value={formData.firstName} onChange={handleChange} />
          <TextField label="Groom last name" name="lastName" fullWidth margin="normal" variant="outlined" value={formData.lastName} onChange={handleChange} />
          <TextField label="Phone number" name="phone" fullWidth margin="normal" variant="outlined" value={formData.phone} onChange={handleChange} />
          <TextField label="Email" name="email" fullWidth margin="normal" variant="outlined" value={formData.email} onChange={handleChange} />

          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <StyledButton type="submit" sx={{ width: "50%" }} disabled={loading}>
              {loading ? "Submitting..." : "Next Step"}
            </StyledButton>
            <LightStyledButton sx={{ width: "50%" }} onClick={handleSkip} disabled={loading}>
              Skip this step
            </LightStyledButton>
          </Box>
        </form>
      </Box>
    </PlanningTemplate>
  );
};

export default PlanningStep1;
