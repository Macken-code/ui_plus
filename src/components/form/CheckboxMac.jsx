import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Controller } from 'react-hook-form';

export default function CheckboxMac({label, name, checkedValue, control, errors}) {
  return (
        <Controller
            name={name}
            control={control}
            defaultValue={false}
            render={({ field }) => (
                    <FormControlLabel 
                    control={<Checkbox 
                        {...field}
                        onChange={(e) => {
                            console.log(checkedValue.value);
                            field.onChange(e.target.checked ? checkedValue.value : false)
                        }}
                        name={name}
                    />} label={label} />
            )}
            />
  );
}