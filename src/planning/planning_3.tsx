import React, { useState } from "react";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LightStyledButton from "../shared/widgets/lightStyledButton.tsx";
import StyledButton from "../shared/widgets/styledButton.tsx";
import PlanningTemplate from "../shared/PlanningTemplate.tsx";

const PlanningStep3 = () => {
  const navigate = useNavigate();
  const [venueAnswer, setVenueAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVenueAnswer(e.target.value);
  };

  const sendToBackend = async () => {
    try {
      setLoading(true);
      const payload = {
        venueKnown: venueAnswer,
      };
      console.log(payload)
      const response = await fetch("", {//Api call here
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
    navigate("/planning4");
  };

  const handleSkip = () => navigate("/planning4");

  return (
    <PlanningTemplate
      title="Provide the information below so we can customize your planning experience."
      subtitle="Do you know your venue?"
      step={3}
      progressValue={60}
    >
      <Box mt={2} width="100%">
        <form onSubmit={handleSubmit}>
          <RadioGroup
            aria-labelledby="venue-radio-group"
            name="venue"
            value={venueAnswer}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes, we even booked it" />
            <FormControlLabel value="no" control={<Radio />} label="Nope, we're still considering options" />
          </RadioGroup>

          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <LightStyledButton sx={{ width: "32%" }} onClick={() => navigate("/planning2")} disabled={loading}>
              Previous Step
            </LightStyledButton>
            <StyledButton type="submit" sx={{ width: "32%" }} disabled={loading}>
              {loading ? "Submitting..." : "Next Step"}
            </StyledButton>
            <LightStyledButton sx={{ width: "32%" }} onClick={handleSkip} disabled={loading}>
              Skip this step
            </LightStyledButton>
          </Box>
        </form>
      </Box>
    </PlanningTemplate>
  );
};

export default PlanningStep3;
