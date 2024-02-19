import React from 'react'
import { useForm } from "react-hook-form"
import TextfieldMac from './TextfieldMac';
import Button from '@mui/material/Button';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SelectMac from './SelectMac';
import RadioMac from './RadioMac';
import CheckboxMac from './CheckboxMac';
import FormGroup from '@mui/material/FormGroup';

const schema = yup
  .object({
    firstname: yup.string().required('at least 1 caracter'),
    age: yup.string().required('must provided'),
    gender: yup.string().required('must provided'),
    testCheckbox: yup.array().of(yup.string()).min(1, "At least one checkbox is required"),
  })

  const options = [
    {key: 10, value: 'Ten'},
    {key: 20, value: 'twenty'},
    {key: 30, value: 'Thirty'},
    {key: 40, value: 'Fourteen'}
  ]

  const radioOption = [
    {label: 'male', value: 'male'},
    {label: 'female', value: 'female'},
    {label: 'other', value: 'other'}
  ]

  const checkOptions = [
    {text: 'male', value: 1},
    {text: 'female', value: 2},
    {text: 'other', value: 3}
  ]

const FormExample = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => console.log(data);

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextfieldMac type="text" label="firstname" name="firstname" register={register} errors={errors}/>
          <SelectMac label="age" name="age"  options={options} control={control} errors={errors}/>
          <RadioMac label="gender" name="gender"  options={radioOption} control={control} errors={errors}/>
          <FormGroup>
            {/* can replace with a loop */}
            {checkOptions.map((cOpt, index) => ( 
              <CheckboxMac key={`prop_${index}`} label={`${cOpt.text}`} checkedValue={cOpt} name={`testCheckbox[${index}]`} control={control} errors={errors}/>
            ))}
          </FormGroup>
          
          <Button type='submit' variant="text">submit</Button>
        </form>
    </div>
  )
}

export default FormExample