import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';


  let Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Options = (prop) =>{
    let {opt,click} = prop

    return (
        <Grid item xs={6}  >
          <Item>
          <Stack direction="row" spacing={2} >
        <Button onClick={click} className="ml-5">{opt}</Button>
      </Stack>
      </Item>
        </Grid>
    )
  }

  export default Options
  
