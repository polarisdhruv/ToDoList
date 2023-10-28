import React, { useState } from "react";

// function ToDoItem(props){

//   const[isDone , setIsDone] = useState(false);

// function handleClick(){

// return(
//   setIsDone(prevValue => {
//     return !prevValue;
//   })
// );

// }

//   return (
//     <div onClick = {handleClick}>
//     <li style ={{textDecoration :isDone? "line-through": "none"}}>{props.text}</li>
//     </div>
//   )
// }

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li> {props.text}</li>
    </div>
  );
}

export default ToDoItem;
