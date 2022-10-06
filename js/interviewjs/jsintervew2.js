1.What is creation phase and execution phase?

when ever we run a js code the creation phaseis been created and declaratons are stored in it. The execution phase is the next 
phase after finishing the creation phase. An execution phase is the one where the JS engines scan through the function in the code 
once again, i.e., one more time for updating the variable object with the values of the variables and then run the code.


2.What are objects in javascript?

Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.
An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.
Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.


3.What are function constructors?

In JavaScript, a constructor function is used to create objects.
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John


4.Explain prototypes

JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype 
object, which enables all the other objects to inherit these methods and properties.


5.What is prototype chain

The prototype of an object would also have a prototype object. This continues until we reach the top level when there is no prototype object.


6.Give an example of inheritance using function constructor

Constructor functions define the prototype of the properties an object will contain. Using the constructor function, we can create a new object after passing the required parameters.
Inheriting a previously defined constructor function means using the parameters of the previously defined function along with adding some new parameters to the newly defined constructor function. For this, we need to use the call() function which allows us to call a function defined somewhere else in the current context. 


7.What are callbacks?

In JavaScript, a callback is a function that isn't immediately executed, but is instead passed to another function as a parameter. It is then executed—or 'called back'—at a later point, in the body of the containing function.