
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


//
import { TodoContext } from "./context/todosContext";
import { useContext } from "react";





export default function Todo({handleCheck}){
  const { todo,setTodos } = useContext(TodoContext); 
  function handleCheckClick(id){
    const checkedTodo = todo.map((t)=>{
      if(t.id === id ){
      t.isCompleted = !t.isCompleted
        
      }
      return t
    })
    setTodos(checkedTodo)
  }
  return(
    <>
      <Card className="todoCard" sx={{ minWidth: 275 ,background:"#4264a0ff",}} style={{borderRadius:"15px",color:"white",margin:"10px"}}>
        <CardContent>
            <Grid container spacing={2}>
                <Grid size={8} className="textGrid" >
                    <Typography variant="h5" style={{textAlign:"right"}}>{todo.title}</Typography>
                    <Typography variant="h6" style={{textAlign:"right"}}>{todo.isCompleted}</Typography>
                    <Typography variant="h6" style={{textAlign:"right"}}>{todo.id}</Typography>
                </Grid>
                <Grid  size={4} style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                    <IconButton className="iconsButton" aria-label="check" onClick={()=>{handleCheckClick();}} style={{color:todo.isCompleted===false?"#8bc34a":"white",border:"#8bc34a solid 3px" , backgroundColor:todo.isCompleted===false?"white":"#8bc34a",  height: "52px"}}>
                        <CheckIcon/>
                    </IconButton>
                    <IconButton className="iconsButton" aria-label="edit" style={{color:"#4395d4ff",border:"#4395d4ff solid 3px" , backgroundColor:"white",height: "52px"}}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton className="iconsButton" aria-label="delete" style={{color:"#ec2e14ff",border:"#ec2e14ff solid 3px" , backgroundColor:"white",height: "52px"}}>
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </CardContent>

      </Card>

    </>
  )
}