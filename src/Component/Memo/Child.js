import React,{memo} from "react";
function Child({onIncrement}){
    console.log("child render");
  return (
    <>
        <button onClick={onIncrement}>Increment</button>
    </>
  );
}
export default memo(Child);


//Create a callback method in the parent component. 
//This method will get the data from the Child to Parent. 
//The callback method in the Parent will be send to the Child component as prop.
//The Child can now call the Parent’s callback passed as props with the data that is  shared as its argument.
// function signature: Make sure the function signature of the callback function matches what the child component expects. This includes the number and order.
// of the arguments Name the prop that passes the callback function to the child component correctly so that it clearly communicates what the function does.This makes the code more readable.
