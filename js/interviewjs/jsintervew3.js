1.What is the use of setTimeout

The setTimeout() is a method inside the window object, it calls the specified function or evaluates a JavaScript 
expression provided as a string after a given time period for only once. 


2.What is an event loop and call stack

The call stack is a mechanism that helps the JavaScript interpreter to keep track of the functions that a script calls.
Every time a script or function calls a function, it's added to the top of the call stack. Every time the function exits, the interpreter removes it from the call stack.ths process is called event loop.


3.What are arrow functions?

An arrow function is short function expression, used to replace with regular function in low complexity. 
The intention to create arrow function is to shorten function code


4.What is a Temporal Dead Zone?

temporal dead zone describes a zone where variables are un-reachable. There are variables in the current scope. However, these variables were not declared yet. 
Try to access those variables inside the temporal dead zone.


5.What is hoisting?

all the declarations either variable declaration or function declaration are moved at the top of the scope just before executing the program's code. 
when using the var declaraton after usage of the declared varable, shows as undefined beacuse it is a global scope variable.


6.What is the DOM?

it is the tree like structure for ease accessing of the whole web page which contains different datas from the root .


7.Difference between undefined vs not defined vs NaN

The global undefined property represents the primitive value undefined. It tells us that something has not assigned value; isn’t defined.
undefined isn’t converted into any number, so using it in maths calculations returns NaN.
when the variable is not defined using let or var or const and try to access it will show as not defined error.

