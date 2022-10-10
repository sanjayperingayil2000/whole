1.How many operators do we have in JS ?

Aritmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Conditional Operators
Type Operators


2.What are pure functions?

Pure function
A pure function is a deterministic function. This means when a same input is passed every time, the function will return same output. 
In mathematical terms it is nothing but a well defined function.

A pure function will have the following properties

It depends only on its own arguments.

It wont try to change variables out of its scope.

It doesn't produce any side effects.



3.What is callback hell

Callback hell refers to the situation where callbacks are nested within other callbacks several levels deep, potentially 
making it difficult to understand and maintain the code.


4.What are promises and why do we need them?

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. 


5.What is promise chaining?

This process of chaining multiple promises together is termed as Promise Chaining. Using Promise Chaining, we can handle multiple successive asynchronous operations 
as each handler will only be executed once its immediate predecessor completes.


6.Give an example of async/await

Async means asynchronous. It allows a program to run a function without freezing the entire program. This is done using the Async/Await keyword.

Async/Await makes it easier to write promises. The keyword ‘async’ before a function makes the function return a promise, always. And the keyword await is used inside async functions, 
which makes the program wait until the Promise resolves.

async function example() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  example();

The function execution “pauses” at the (*) line and resumes when the promise is fulfilled, with result becoming its result. 
So the code above shows “done!” in two seconds.

const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        movies.push(movie);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function init(){
await createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`});

getMovies(); (*)
}

init();

In the above example, getMovies() at the (*) line is waiting for createMovies() to be executed in the async function.

In other words, createMovies() is async, so getMovies() will only run after createMovies() is done.



7.What is the purpose of async/await keywords?

he async function helps us to write promises based codes that will run under the hood in an asynchronous way. The await keyword makes sure to get a value from the function while it makes the code wait and
 runs asynchronously. After availing the value async always return the value.