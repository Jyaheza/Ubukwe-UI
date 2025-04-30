// BasicDatePicker.tsx
import React from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

type BasicDatePickerProps = {
  label: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
};

const BasicDatePicker: React.FC<BasicDatePickerProps> = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            fullWidth: true,
            margin: "normal",
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
