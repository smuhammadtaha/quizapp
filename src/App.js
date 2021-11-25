import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAppBar from './components/appbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Question from './components/questions';
import Options from './components/options';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {

  const data = useSelector((state)=> state);

  const [marks , setMark] = useState(0);
  const Result = `Your Marks is ${marks}`;
  const none = '';
  const [dataInd, setDataInd] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const nextQues = () =>{

    if (data.length - 1 == dataInd) {
      setShowResult(true)
    }
    else{
      setDataInd(dataInd + 1);
    }
  };
 

  const CheckAns = (correct , wrong) => {
    if(correct == wrong){
      setMark (marks + 10);
    }
    nextQues();
  };

console.log(Result)
  return (
    <div>
      <ButtonAppBar/>
      <Question ques={ showResult ?  Result : data[dataInd].question} />
            
      <Box  sx={{ width: '95%' }}  className="pt-5 mt-4" >
      <Grid  className="p-5" container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }} >
      { showResult ? none : data[dataInd].answers.map((item)=>{
        return(
          console.log(item),
          <Options click={() => CheckAns(data[dataInd].correctAns,item)} opt={item}/>
        ) 
      })}
    </Grid>
      </Box>
    
        <p></p>
      
    </div>
    
  );
}

export default App;
