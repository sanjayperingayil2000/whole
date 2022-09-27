1.Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    name: "sanjay",
    rollno: "58424",
    place: "kerala"
};

let child = {
    name: "neeraja"
};

child.__proto__ = parent;
console.log(child.place);


2.Write code to explain prototype chaining

let obj = {
    name: "vishnu",
    age: 22,
    country: "india"
};

function Obj(x){
    this.name = x;
}

let obj2 = new Obj("namitha");
console.log(obj2)




3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays


let arr = new Array(5, 15, 25, 35);
arr.__proto__.sum = function(gArray){
    let sum = 0;
    for(let i of gArray){
        sum += i;
    }
    return sum;
}
let x = arr.sum(arr);
console.log(x);

let arr2 = new Array(12, 54, 25, 345, 50);
let y = arr2.sum(arr2);
console.log(y);


4.Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function fresh() {
    this.name = "alkesh"
    this.place = "kerala"
    this.experience = 5
    kkk.call(this)
}

function kkk() {
    this.food = "biriyani"
    this.phone = "rogue"
}
let friend = new fresh();
console.log(friend);

let name = function(Obj){
    for(let i in Obj){
        console.log(i);
    }
}
name(friend);