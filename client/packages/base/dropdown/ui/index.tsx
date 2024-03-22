import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type SelectProps = {
  value: string | undefined;
  handleChange: (value: string) => void;
  options: string[];
};

export const BasicSelect: React.FC<SelectProps> = ({
  value,
  handleChange,
  options,
}) => {
  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
        <InputLabel
          id="select-label"
          sx={{ color: "white", borderColor: "white" }}
        >
          År
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={value}
          label="Age"
          onChange={(event) => handleChange(event.target.value as string)}
          sx={{ color: "white", borderColor: "white" }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} sx={{}}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
