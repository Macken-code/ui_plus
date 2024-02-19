import React from 'react';
import { Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const  RadioMac = ({ label, name, options, control, errors }) => {
  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} error={!!errors[name]}>
            <FormLabel id={label}>{label}</FormLabel>
            <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                    <RadioGroup
                        {...field}
                        id={name}
                        value={field.value}
                        label={label}
                        onChange={(e) => field.onChange(e.target.value)}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        {options.map((option) => (
                            <FormControlLabel key={option.label} value={option.value} control={<Radio />} label={option.label} />
                        ))}
                    </RadioGroup>
            )}
            />
        </FormControl>
    </div>
  )
}

export default RadioMac