1.Difference between “ == “ and “ === “ operators.

both checks the value is equal, but triple equals check the data type also


2.What is the spread operator?

The spread operator helps you expand iterables into individual elements. also used to attach 2 arrays to one array.


3.What are the differences between var, let and const?

these three are used to declare varables.var is global scope, let and const are blox scope. var can be redeclared and value can be modified,
let cannot be redeclared but can be modified, const cannot be redeclared nor modfy.

3.What is execution context

An Execution Context is created each time you run your .js file. where the datas are Stored and global executon context 
is created. it wll wrap whole code into it. 


4.What is meant by first class functions

First class functions basically means Functions as a data type just like a string,an array or a number. So in Javascript, functions are data.
so you can pass functions as arguments of another function.


5.What are closures? Give an example of closure

when a functon is called and insde that functon we are havng the console wth data varable whch is declared outsde the functon,as we know functons have function executon context. 
so by using closure property we can get the element which is inside a function,where that functon is already inside a function.
        function foo()
        {
             var b = 1;
             function inner(){
                 return b;
             }
             return inner;
        }
        var get_func_inner = foo();        
 
         console.log(get_func_inner());


6.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()

in call function we pass a object and parameters which wll be a string.so we dont need to specify that t would be a string 
in apply function we pass a object and parameters which wll be an array.so we dont need to specify that t would be a array
in bind function we pass the variables which should be added inside the another functon and print the output.