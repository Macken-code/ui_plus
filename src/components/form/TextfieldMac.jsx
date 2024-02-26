import React from 'react';
import TextField from '@mui/material/TextField';

const TextfieldMac = ({label, size, name, register, errors,...rest}) => {
  return (
      <>
      <TextField
          {...register(name)}
          {...rest}
          error ={errors[name] ? true : false}
          id= {name}
          label={label}
          size={size}
          color='secondary'
          variant='filled'
          helperText={errors[name] ? errors[name].message : ''}
        />
      </>
  )
}

export default TextfieldMac