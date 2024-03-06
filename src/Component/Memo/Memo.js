// Memoization is an optimization technique that is used to reduce time-consuming calulation by caching the result of the function class 
//and returning the  cached value when the inputs of the function call are samed.
//  
//So, whenever this add(5) will be called from next time it will always return the ans as it will be stored in cache instead of invoking function again n again.





// import React,{ useMemo, useState } from "react";
// function Memo(){
//     const [val,setVal] = useState(0);
//     const [vals,setVals] = useState(100);
//     const multiply = useMemo(function result (){
//         console.log("Hello memo");
//     },[val])
//     return(
//         <div>
//             {multiply}
//             <button onClick={()=> setVal(val+1)}>Add</button>
//             <span>{val}</span>
//             <button onClick={()=> setVals(vals-1)}>subtract</button>
//             <span>{vals}</span>
//         </div>
//     );
// }
// export default Memo;


//usecallback

import { useCallback, useMemo, useState } from "react";
import Child from "./Child";
// function Memo() {
//   const[count,setCount] = useState(0);

//   const PrintSomething = () => {
//     console.log("Hello");
//   }
  
//   const handleIncrement = useCallback(() => {
//     setCount(count+1);
//   },[count]);
  
//   // const handleIncrement = () => {
//   //   setCount(count +1);
//   // }
//   return(
//     <div>
//       <p>Count: {count}</p>
//       <Child onIncrement={handleIncrement} />
//       {PrintSomething()}
//     </div>
//   )
// }

function Memo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  // const isEven = useMemo(() => {
  //   console.log("......................");
  //   let i=0;
  //   while(i<500000000)
  //   {
  //     i++;
  //   }
  //   return counter1%2===0;
  // },[counter1])

  const isEven = () => {
    console.log("......................");
    let i=0;
    while(i<500000000)
    {
      i++;
    }
    return counter1%2===0;
  }
  return(
    <>
      <button onClick={() => setCounter1(counter1+1)}>Counter one - {counter1}</button>
       <span>{isEven? "even" : "odd"}</span>
      <button onClick={() => setCounter2(counter2+1)}>Counter two - {counter2}</button>
    </>
  )
}

export default Memo;
