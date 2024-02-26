import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import TextfieldMac from '../form/TextfieldMac';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"

const schema = yup
  .object({
    firstname: yup.string().required('at least 1 caracter'),
    profession: yup.string().required('at least 1 caracter'),
    lastname: yup.string().required('at least 1 caracter')
  })

function FormMac() {
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
    <Grid container rowSpacing={2}>
        <Grid item xs={12}>
            <Typography align='center' variant="h6" component="h6">
                Registration
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <TextfieldMac type="text" label="firstname" size="small" name="firstname" register={register} errors={errors}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextfieldMac type="text" label="lastname" size="small" name="lastname" register={register} errors={errors}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextfieldMac type="text" label="profession" size="small" name="profesion" register={register} errors={errors}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextfieldMac type="text" label="firstname" size="small" name="firstname" register={register} errors={errors}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextfieldMac type="text" label="lastname" size="small" name="lastname" register={register} errors={errors}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextfieldMac type="text" label="profession" size="small" name="profesion" register={register} errors={errors}/>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
  )
}

export default FormMac