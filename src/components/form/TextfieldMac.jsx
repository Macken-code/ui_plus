import React from 'react';
import TextField from '@mui/material/TextField';

const TextfieldMac = ({label, name, register, errors,...rest}) => {
  return (
      <>
      <TextField
          {...register(name)}
          {...rest}
          error ={errors[name] ? true : false}
          id= {name}
          label={label}
        
          helperText={errors[name] ? errors[name].message : ''}
        />
      </>
  )
}

export default TextfieldMac