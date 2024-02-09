import React from 'react'
import { useForm } from "react-hook-form"
import Input from './Input';
import Button from '@mui/material/Button';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import CustomSelect from './CustomSelect';
import ControlSelect from './ControlSelect';

const schema = yup
  .object({
    firstname: yup.string().required('at least 1 caracter'),
    age: yup.string().required('must provided'),
    age1: yup.string().required('must provided'),
  })

  const options = [
    {key: 10, value: 'Ten'},
    {key: 20, value: 'twenty'},
    {key: 30, value: 'Thirty'},
    {key: 40, value: 'Fourteen'}
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
            <Input label="firstname" name="firstname" register={register} errors={errors}/>
            <CustomSelect label="age" name="age"  options={options} register={register} errors={errors}/>
            <ControlSelect label="age1" name="age1"  options={options} control={control} errors={errors}/>
            <Button type='submit' variant="text">submit</Button>
        </form>
    </div>
  )
}

export default FormExample