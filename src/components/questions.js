import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Question = (prop) => {
      let {ques} = prop;
    return (
<Grid container className="pt-4">
<Grid item xs={12} md={12}>
  <Item>
  <Typography variant="h6" gutterBottom component="div">
      {ques} 
    </Typography>
     </Item>
</Grid>
</Grid>
    );
  }
  export default Question