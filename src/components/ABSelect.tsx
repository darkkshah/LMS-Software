import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ABSelect = (props: any) => {
  const { handleChange, value, optionsList, label } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value || ''}
        label={label}
        onChange={handleChange}
      >
        {optionsList.map((value: any) => {
          return <MenuItem key={value} value={value}>{value}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default ABSelect;
