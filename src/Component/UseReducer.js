import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialValue =0;
    const reducer = (state,action ) => {
        console.log(state,"state");
        console.log(action,"action");
        if(action.type === 'Increment')
        {
            return state+1;
        }
        if(action.type === 'Decrement')
        {
            return state-1;
        }
        return state;
    }
    const[state,dispatch]= useReducer(reducer,initialValue);
  return (
    <div>
        <p>{state}</p>
        <button onClick={() => dispatch({type: "Increment"})}>Inc</button>
        <button onClick={() => dispatch({type: "Decrement"})}>Dec</button>

    </div>
  )
}
