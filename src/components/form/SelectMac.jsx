import React from 'react';
import { Controller } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectMac = ({ label, name, options, control, errors }) => {
  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} error={!!errors[name]}>
            <InputLabel id={label}>{label}</InputLabel>
            <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <Select
                    {...field}
                    labelId={label}
                    id={name}
                    value={field.value}
                    label={label}
                    onChange={(e) => field.onChange(e.target.value)}
                    renderValue={(value) => `${value}`}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem key={option.key} value={option.key}>
                        {option.value}
                        </MenuItem>
                    ))}
                </Select>
            )}/>
            <FormHelperText>{errors[name] && errors[name].message}</FormHelperText>
        </FormControl>
    </div>
  )
}

export default SelectMac