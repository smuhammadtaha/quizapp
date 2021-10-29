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

function App() {

  const [marks , setMark] = useState(0);
  const [data, setdata] = useState ([
    {
      question : "Q1: Which of the following is used to create Web Pages ?",
      answers : ["C++","Java","HTML","JVM"],
      correctAns : "HTML",
    },
    {
      question : "Q2: HTML is a set of markup",
      answers : ["tags","sets","attributes","None of these"],
      correctAns : "tags",
    },
    {
      question : "Q3: HTML tags are used to describe document",
      answers : ["defination","content","language","model"],
      correctAns : "content",
    },
    {
      question : "Q4: HTML program is saved using ______ extension",
      answers : [".htmn",".html",".css",".js"],
      correctAns : ".html",
    },
    {
      question : "Q5: HTML program can be read and rendered by _______.",
      answers : ["Compiler","Server","Web Browser","Interpreter"],
      correctAns : "Web Browser",
    },
    {
      question : "Q6: HTML tags are surrounded by _____ brackets.",
      answers : ["Angle","Curly","Round","Square"],
      correctAns : "Angle",
    },
    {
      question : "Q7: HTML document can contain _______.",
      answers : ["Tags","Plain Text","Attributes","All of above"],
      correctAns : "All of above",
    },
    {
      question : "Q8: Page designed in HTML is called as _________.",
      answers : ["Server Page","Web Page","Media Page","none of above"],
      correctAns : "Web Page",
    },
    {
      question : "Q9: Which of the following is the first web browser ?",
      answers : ["Nexus","Netscape Navigator","Internet Explorer","Mosaic"],
      correctAns : "Nexus",
    },
    {
      question : "Q10: Who created the first web browser ?",
      answers : ["Tim Berners Lee","Jacobs","Marc Andeersen","Mozilla foundation"],
      correctAns : "Tim Berners Lee",
    }
  ]);
  const [dataInd, setDataInd] = useState(0);
  let total;
  const nextQues = () =>{
    if(setDataInd.length -1){
     total = "Your total marks is"(marks)
    }
    setDataInd(dataInd + 1);
  };

  const CheckAns = (correct , wrong) => {
    if(correct == wrong){
      setMark (marks + 10);
    }
    nextQues();
  };


  return (
    <div className="App">
      <ButtonAppBar/>
      <Question ques={data[dataInd].question}/>      
      <Box  sx={{ width: '95%' }}  className="pt-5 mt-4" >
      <Grid  className="p-5" container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }} >
      {data[dataInd].answers.map((item)=>{
        return(
          console.log(item),
          <Options click={() => CheckAns(data[dataInd].correctAns,item)} opt={item}/>
        ) 
      })}
    </Grid>
      </Box>
      <p>{total}</p>
    </div>
    
  );
}

export default App;
