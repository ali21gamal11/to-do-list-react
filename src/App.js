import './App.css';

//import react hooks and libraries
import { TodoContext } from "./context/todosContext"
import { useState } from "react";
import Todolist from "./todolist"
import { v4 as uuid } from 'uuid';

const tasks = [
  { id: uuid(), title: "تنظيف", details: "تنظيف الغرفة وترتيبها", isCompleted: false },
  { id: uuid(), title: "مذاكرة", details: "مذاكرة درس البرمجة الكائنية OOP", isCompleted: true },
  { id: uuid(), title: "مشروع", details: "إكمال مشروع موقع السفر", isCompleted: false },
  { id: uuid(), title: "تسوق", details: "شراء خضار وفواكه من السوق", isCompleted: true },
  { id: uuid(), title: "مراجعة", details: "مراجعة ملاحظات المحاضرة الأخيرة", isCompleted: false }
];


function App() {
      const [ todos,setTodos ] = useState(tasks);
  
  return (
    <div className="App">
      <div className="Todolistcon">
        <TodoContext.Provider value={{todos,setTodos}}>
        <Todolist />
        </TodoContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
