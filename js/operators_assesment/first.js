1.Create one function with zero parameter having a console statement;
function a()
{
    console.log("hello")
}


2.Create one function which takes two values as a parameter and print the sum of them as "Sum of "+a+","+ b" is 7"
function sum()
{
    let a=3
    let b=4
    return a+b
}
console.log("sum of "+a+","+b+" is")


3.Create one arrow function
const 
const myFunction = (sum) => 
{ 
    let a=3
    let b=4
    return a+b;
}


4."Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();"

A) undefined



5."Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
"
A)undefined,20

6.var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

A) notdefined


7.Write a function that accepts parameter n and returns factorial of n

A)function fact(){  
    let i=0
    let n=5
    let f=1
    for(i=n;i>0;i--)
    {
     f=f*i;    
    }
    return f;
    } 
 fact()
