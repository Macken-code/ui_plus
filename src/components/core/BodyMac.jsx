import { Box, Grid } from '@mui/material'
import React from 'react'
import FormMac from './FormMac'

function BodyMac() {
  return (
    <Grid container>

        <Grid item xs={6}> 
            <FormMac/>
        </Grid>

        <Grid item xs={6}> 
            <Box></Box>
        </Grid>
        
    </Grid>
  )
}

export default BodyMac