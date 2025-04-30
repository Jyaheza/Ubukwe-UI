import React, { useState, useEffect } from "react";
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

const PlanningStep4a = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [season, setSeason] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const availableCities = ["Kigali", "Gisenyi", "Musanze"];
  const availableSeasons = ["Fall", "Summer", "Spring"];
  const availableYears = ["2025", "2026", "2027"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const payload = {
        city,
        season,
        year,
      };
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
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
      navigate("/planning5");
    }
  };

  return (
    <PlanningTemplate
      title="Provide the information below so we can customize your planning experience."
      subtitle="Do you have a city and season in mind?"
      step={4}
      progressValue={80}
    >
      <Box mt={2} width="100%">
        <form onSubmit={handleSubmit}>
          <InputLabel id="city_select">Select City</InputLabel>
          <Select
            fullWidth
            labelId="city_select"
            id="city"
            value={city}
            onChange={(e: SelectChangeEvent) => setCity(e.target.value)}
          >
            {availableCities.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>

          <InputLabel id="season_select" sx={{ mt: 2 }}>
            Select a Season
          </InputLabel>
          <Select
            fullWidth
            labelId="season_select"
            id="season"
            value={season}
            onChange={(e: SelectChangeEvent) => setSeason(e.target.value)}
          >
            {availableSeasons.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>

          <InputLabel id="year_select" sx={{ mt: 2 }}>
            Select Year
          </InputLabel>
          <Select
            fullWidth
            labelId="year_select"
            id="year"
            value={year}
            onChange={(e: SelectChangeEvent) => setYear(e.target.value)}
          >
            {availableYears.map((y) => (
              <MenuItem key={y} value={y}>
                {y}
              </MenuItem>
            ))}
          </Select>

          <Box display="flex" justifyContent="center" gap={2} mt={3}>
            <LightStyledButton
              sx={{ width: "32%" }}
              onClick={() => navigate("/planning4")}
              disabled={loading}
            >
              Previous Step
            </LightStyledButton>

            <StyledButton type="submit" sx={{ width: "32%" }} disabled={loading}>
              {loading ? "Submitting..." : "Next Step"}
            </StyledButton>

            <LightStyledButton
              sx={{ width: "32%" }}
              onClick={() => navigate("/planning5")}
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

export default PlanningStep4a;
