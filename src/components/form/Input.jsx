import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({label, name, register, errors}) => {
  return (
    <div>
        <TextField
          {...register(name)}
          error ={errors[name] ? true : false}
          id= {name}
          label={label}
          helperText={errors[name] ? errors[name].message : ''}
        />
    </div>
  )
}

export default Input