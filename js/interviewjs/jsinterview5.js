1.What is the for-in loop in JavaScript? Give its syntax

for loops are used to repeat a block of code by giving conition to it for how much it should repeat.
for (i=0; i<n; i++) {
    // for loop body
}


2.Explain global Scope, Block Scope, Functional Scope and Scope Chain in javascript

The variables in global scope can be accessed from anywhere in the program.  
Functional scope can only be accessed from within that function, that means they can’t be accessed from the outside code.
ES6 introduced let and const variables, unlike var variables, they can be scoped to the nearest pair of curly braces.
 That means, they can’t be accessed from outside that pair of curly braces.

 When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. 
 If it could not find the variable, it will look into the outer scope and will continue to do so until it finds 
 the variable or reaches global scope.


3.What is difference between null and undefined and where to use what?

In JavaScript, null and undefined are both primitive values.An undefined variable is a variable that has been declared but
 doesn’t have a value assigned (yet).null is a value that is commonly assigned to a variable. but has no value.


4. what is Symbol?

Symbols are immutable (cannot be changed) and are unique.It is a primitive data type along with the string, number, Boolean, null and undefined.


5.Write code to explain map and filter in arrays

It is a method that act's on an Array and this method is going to have an anonymous function within it.
const a = [1, 2, 3]
const b = a.map(v => v*2)

Calling filter() on an array will create a new array and the filter() method will have a condition within it. Each element in the original Array 
is taken and a condition is performed on it. If the condition returns true, that element will be included in the resultant Array.
const a = [1, 2, 3, 4, 5, 6, 7]
const b = a.filter(v => v > 3) 


6.Explain passed by value and passed by reference

primitive data types is passed by value and non-primitive data types is passed by reference.
->In pass by value, function is called by directly passing the value of the variable as an argument.
->Any change that you make to the argument inside the function does not effect the original value.

->In Pass by Reference, function is called by directly passing the reference/address of the variable as an argument.
->On changing the value inside the function also change the original value.
->In JavaScript array and Object follows pass by reference property.


7.Please explain Self Invoking Function and its code

“Self-Invoking” function is a type of function that is invoked or called automatically after its definition.
(function (parameters) {
    //body of the function
})(arguments);