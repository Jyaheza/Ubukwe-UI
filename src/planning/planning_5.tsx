import React, { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LightStyledButton from "../shared/widgets/lightStyledButton.tsx";
import StyledButton from "../shared/widgets/styledButton.tsx";
import PlanningTemplate from "../shared/PlanningTemplate.tsx";

const PlanningStep5 = () => {
  const navigate = useNavigate();

  const [guestCount, setGuestCount] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [loading, setLoading] = useState(false);

  const availableGuestCounts = ["100 - 300", "400 - 600", "700 - 1000+"];
  const availableBudgetRanges = ["$5,000 - $10,000", "$10,000 - $20,000", "$20,000+"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      const payload = {
        guestCount,
        budgetRange,
      };
      console.log(payload)
      const response = await fetch("", { // Api call here
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
      navigate("/planningFinal"); // Replace with the actual next step
    }
  };

  return (
    <PlanningTemplate
      title="Provide the information below so we can customize your planning experience."
      subtitle="Do you know your estimated guest count and total budget?"
      step={5}
      progressValue={100}
    >
      <Box mt={2} width="100%">
        <form onSubmit={handleSubmit}>
          <InputLabel id="guest-count-label">Estimated Guest Count</InputLabel>
          <Select
            fullWidth
            labelId="guest-count-label"
            id="guest-count"
            value={guestCount}
            onChange={(e: SelectChangeEvent) => setGuestCount(e.target.value)}
          >
            {availableGuestCounts.map((count) => (
              <MenuItem key={count} value={count}>
                {count}
              </MenuItem>
            ))}
          </Select>

          <InputLabel id="budget-range-label" sx={{ mt: 2 }}>
            Estimated Budget Range
          </InputLabel>
          <Select
            fullWidth
            labelId="budget-range-label"
            id="budget-range"
            value={budgetRange}
            onChange={(e: SelectChangeEvent) => setBudgetRange(e.target.value)}
          >
            {availableBudgetRanges.map((range) => (
              <MenuItem key={range} value={range}>
                {range}
              </MenuItem>
            ))}
          </Select>

          <Box display="flex" justifyContent="center" gap={2} mt={3}>
            <LightStyledButton
              sx={{ width: "32%" }}
              onClick={() => navigate("/planning4a")}
              disabled={loading}
            >
              Previous Step
            </LightStyledButton>

            <StyledButton type="submit" sx={{ width: "32%" }} disabled={loading}>
              {loading ? "Submitting..." : "Next Step"}
            </StyledButton>

            <LightStyledButton
              sx={{ width: "32%" }}
              onClick={() => navigate("/summary")}
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

export default PlanningStep5;
