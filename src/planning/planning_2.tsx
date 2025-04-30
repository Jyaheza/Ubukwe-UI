import React, { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import LightStyledButton from "../shared/widgets/lightStyledButton.tsx";
import StyledButton from "../shared/widgets/styledButton.tsx";
import PlanningTemplate from "../shared/PlanningTemplate.tsx";
import BasicDatePicker from "../shared/widgets/datePicker.tsx";

const PlanningStep2 = () => {
  const navigate = useNavigate();
  const [engagementDate, setEngagementDate] = useState<Dayjs | null>(null);
  const [loading, setLoading] = useState(false);

  const sendToBackend = async () => {
    try {
      setLoading(true);
      const payload = {
        engagementDate: engagementDate?.toISOString() || null,
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
    navigate("/planning3");
  };

  const handleSkip = () => navigate("/planning3");

  return (
    <PlanningTemplate
      title="Provide the information below so we can customize your planning experience."
      subtitle="When Did You Get Engaged?"
      step={2}
      progressValue={40}
    >
      <Box mt={2} width="100%">
        <form onSubmit={handleSubmit}>
          <BasicDatePicker
            label="Select the engagement date"
            value={engagementDate}
            onChange={(newDate) => setEngagementDate(newDate)}
          />
          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <LightStyledButton sx={{ width: "32%" }} onClick={() => navigate("/planning1")} disabled={loading}>
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

export default PlanningStep2;
