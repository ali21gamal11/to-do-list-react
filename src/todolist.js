// import MUI components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// import react components
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import { TodoContext } from "./context/todosContext";
import { useContext } from "react";
import { useState } from "react";




export default function Todolist() {
  return (

      <Container maxWidth="sm">
        <Task/>

      </Container>

  );
}

function Task(){
  const { todos,setTodos} = useContext(TodoContext);



    const [ TitleInput,setTitleInput ] = useState("");

  //   const taskjsx = todos.map((t)=>{
  //   return  <Todo key={t.id} todo={t}
  //     />
  // });

  function handleAddTask(){
    const newtodo = {
      id: uuid(),
      title: TitleInput,
      details:"",
      isCompleted:"false"
    }

    setTodos([...todos,newtodo]);
    setTitleInput("")
  }
  return(
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2">
            مهامي
          </Typography>
          <Divider variant="middle" component="h1" />
          <ToggleButtonGroup style={{direction:"ltr",marginTop:"30px"}}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" >
              الغير منجز
            </ToggleButton>
            <ToggleButton value="center">
              المنجز
            </ToggleButton>
            <ToggleButton value="right" >
             الكل
            </ToggleButton>
          </ToggleButtonGroup>


          {/*tasks*/}
          <Todo/>
          {/*tasks*/}
        </CardContent>



        <CardContent>
            <Grid container spacing={2} style={{display:"flex",justifyContent:"center",flexDirection: "row"}}>
              <p></p>
                <Grid size={8} className="textGrid" style={{display:"flex",justifyContent:"left"}} >
                <TextField value={TitleInput} onChange={(e)=>{setTitleInput(e.target.value)}} id="outlined-basic" style={{fontSize:"10px",width:"400px"}} label="المهمة" variant="outlined" />
                </Grid>

                <Grid  size={4} style={{display:"flex",justifyContent:"center"}}>
                <Button onClick={()=>{handleAddTask();}} variant="contained" style={{width:"160px",fontSize:"20px",background:"#4264a0ff"}}>اضافة المهمة</Button>
                </Grid>

            </Grid>
      </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}
