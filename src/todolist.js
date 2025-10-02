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
import Todo from "./Todo";


//import react hooks and libraries
import { v4 as uuid } from 'uuid';





const tasks = [
  { id: uuid(), title: "تنظيف", details: "تنظيف الغرفة وترتيبها", isCompleted: false },
  { id: uuid(), title: "مذاكرة", details: "مذاكرة درس البرمجة الكائنية OOP", isCompleted: true },
  { id: uuid(), title: "مشروع", details: "إكمال مشروع موقع السفر", isCompleted: false },
  { id: uuid(), title: "تسوق", details: "شراء خضار وفواكه من السوق", isCompleted: true },
  { id: uuid(), title: "مراجعة", details: "مراجعة ملاحظات المحاضرة الأخيرة", isCompleted: false }
];

export default function Todolist() {

  return (

      <Container maxWidth="sm">
        <Task/>

      </Container>

  );
}

function Task(){
    const taskjsx = tasks.map((t)=>{
    return  <Todo key={t.id} title={t.title} details={t.details} isCompleted={t.isCompleted}/>
  })
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
          {taskjsx}
          {/*tasks*/}
        </CardContent>



        <CardContent>
            <Grid container spacing={2}>
                <Grid size={8} className="textGrid" style={{display:"flex",justifyContent:"left"}} >
                <TextField id="outlined-basic" style={{fontSize:"10px",width:"400px"}} label="المهمة" variant="outlined" />

                </Grid>
                <Grid  size={4} style={{display:"flex",justifyContent:"center"}}>
                <Button variant="contained" style={{width:"160px",fontSize:"20px",background:"#4264a0ff"}}>اضافة المهمة</Button>

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
