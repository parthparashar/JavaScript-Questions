import React, {useRef,useEffect} from "react";
function UseRefDemo(props)
{
    const refdemo = useRef(null);
    const focusInput = () => {
        refdemo.current.focus();
    }
    useEffect(() => {
        refdemo.current =props;
    },[props])
    return(
        <div>
            <input ref={refdemo} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}


//Storing previous values of state or props to avoid unnecessary re-renders
// function UseRefDemo(props)
// {
//     const demo = useRef();
//     useEffect(() => {
//         demo.current = props;
//     },[props])
//     return(
//         <div ref={demo}>
//             EXAMPLE
//         </div>
//     )
// }

//Creating a mutable variable that doesn't trigger re-renders:
// function UseRefDemo() {
//   const mutableVar = useRef(0);

//   const updateMutableVar = () => {
//     mutableVar.current += 1;
//     console.log(mutableVar);
//     // No re-render is triggered when mutableVar.current changes
//   };

//   return (
//     <div>
//       <button onClick={updateMutableVar}>Update</button>
//     </div>
//   );
// }

//Accessing and modifying DOM properties and methods:

// function UseRefDemo() {
//   const divRef = useRef(null);

//   useEffect(() => {
//     // Accessing and modifying DOM properties using divRef
//     if (divRef.current) {
//       divRef.current.style.backgroundColor = 'red';
//     }
//   }, []);

//   return <div ref={divRef}>Example</div>;
// }


export default UseRefDemo;