import React, { useState } from "react";
import {
  TextField,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import LightStyledButton from "../shared/widgets/lightStyledButton.tsx";
import StyledButton from "../shared/widgets/styledButton.tsx";
import BasicDatePicker from "../shared/widgets/datePicker.tsx";
import PlanningTemplate from "../shared/PlanningTemplate.tsx";

const PlanningStep4 = () => {
  const navigate = useNavigate();

  const [receptionVenue, setReceptionVenue] = useState("");
  const [weddingDate, setWeddingDate] = useState<Dayjs | null>(null);
  const [loading, setLoading] = useState(false);

  const sendToBackend = async () => {
    try {
      setLoading(true);
      const payload = {
        receptionVenue,
        weddingDate: weddingDate?.toISOString() || null,
      };
      console.log(payload)
      const response = await fetch("", { //api call here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");

      const result = await response.json();
      console.log("Backend response:", result);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendToBackend();
    navigate("/planning4a");
  };

  const handleSkip = () => navigate("/planning4a");

  return (
    <PlanningTemplate
      title="Provide the information below so we can customize your planning experience."
      subtitle="Awesome! What did you book?"
      step={4}
      progressValue={80}
    >
      <Box mt={2} width="100%">
        <form onSubmit={handleSubmit}>
          <TextField
            label="The Reception Venue"
            type="text"
            variant="filled"
            fullWidth
            margin="normal"
            value={receptionVenue}
            onChange={(e) => setReceptionVenue(e.target.value)}
          />

          <BasicDatePicker
            label="The Wedding Date"
            value={weddingDate}
            onChange={(newDate) => setWeddingDate(newDate)}
          />

          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <LightStyledButton
              sx={{ width: "32%" }}
              onClick={() => navigate("/planning3")}
              disabled={loading}
            >
              Previous Step
            </LightStyledButton>

            <StyledButton
              type="submit"
              sx={{ width: "32%" }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Next Step"}
            </StyledButton>

            <LightStyledButton
              sx={{ width: "32%" }}
              onClick={handleSkip}
              disabled={loading}
            >
              Skip this step
            </LightStyledButton>
          </Box>
        </form>
      </Box>
    </PlanningTemplate>
  );
};

export default PlanningStep4;
