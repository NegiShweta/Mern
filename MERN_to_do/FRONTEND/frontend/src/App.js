import { useEffect, useState } from "react";
import { getAllToDo, addToDo, updateToDo, deleteToDo} from "./Utils/HandleAPI";
import  ToDo from "./components/ToDo";


function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState();

  useEffect(() => {
    getAllToDo(setToDo);
  },[])

  const updateMode = (_id, text) =>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }



  return (
    <div className="App">
      <div className="container">
        <h1> ToDo App</h1> 
        <div className="top">

          <input type="text"
          placeholder="Add Todos"
          value = {text}
          onChange={(e) => setText(e.target.value)} />


<div className="add"
onClick={
  isUpdating
  ? () => updateToDo(toDoId,text, setToDo, setText, setIsUpdating)
  : () => addToDo(text, setText, setToDo)
}
>
  { isUpdating ? "Updated" : " Add"}

        </div>
         </div>

  <div className="list"> 

  { Array.isArray(toDo)? 
  (toDo.map((item) => (
    <ToDo Key = {item._id}
    text = {item.text}
    updateMode = {()=> updateMode(item._id, item.text)}
    deleteToDo = {() => deleteToDo(item._id,setToDo)} />
  ))
  ) : ( 
    <p> nothing </p>
  )

  }
 
  </div>
    </div>
    </div>
  );
}

export default App;
