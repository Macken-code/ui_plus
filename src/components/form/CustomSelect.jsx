import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({label, name, options, register, errors}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return (
        <div>
            
            <FormControl sx={{ m: 1, minWidth: 120 }} error={errors[name] ? true : false}>
                <InputLabel id={label}>{label}</InputLabel>
                <Select
                    {...register(name)}
                    labelId={label}
                    id={name}
                    value={age}
                    label={label}
                    onChange={handleChange}
                    renderValue={(value) => `${value}`}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                    options.map((option) => {
                        return(
                            <MenuItem value={option.key} key={option.key}>{option.value}</MenuItem>
                        )
                    })}
                </Select>
                <FormHelperText>{errors[name] && errors[name].message}</FormHelperText>
            </FormControl>
        </div>
    )
}

export default CustomSelect