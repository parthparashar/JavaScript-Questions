function Hoisting(){
    getName(); // Namaste Javascript
    console.log(x); // undefined
    var x = 7;
    function getName() {
        console.log("Namaste Javascript");
    }
}
export default Hoisting;


/*
Allows to use variables and functions before they are declared in your code. This way we can hide function implementation farther down in the file and let the reader focus on what the code is doing.
JavaScript Hoisting refers to the process whereby the JS Engine appears to move the declaration of functions, variables or classes to the top of their scope,prior to execution of the code
The JS code interpretation performed in two passes.
A global execution contect is created and 
During the first pass, the interpreter processes variable and function declarations, memory is alloted to these variables with value undefined.
The second pass is the actual code execution step. The interpreter processes function expressions and undeclared variables. 

*/