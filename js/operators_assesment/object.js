1.Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member named 
name. Your task is to create a method inside this object named sette
, such that this method will print the value of the data member named as name.

function Check(obj1){
    obj1.setter= function (){
      console.log(this.name)
    }
  }



2.Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from the object and return the object.

function Check(obj1) {
    delete obj1.rollno
    if(obj1.rollno){return true}
    else {return false}
  }



3.Complete the function in the editor. In which you are given an object as a parameter.
In that object, there is one property named as salary if the salary is maximum than 5 lakh then return "Dream" otherwise  return "NotDream".


function Check(obj1) {
    if(obj1.salary > 500000)return ("Dream")  
    else return("NotDream")
  }



4.Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no parameter in the object otherwise return "true".

function Check(obj1) {
    let size = Object.keys(obj1).length;
    if(size > 0){
      return "true";
    }
    else{
      return "false";
    }
  }



5.Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two objects and return a single object.

function Check(obj1,obj2) {
    let s= Object.assign (obj1, obj2)
    return s   
  }



6.Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.

function Check(a,obj1) {
    obj1.id = obj1.id*a;
    obj1.houseno = obj1.houseno*a;
    return obj1;
}



7.You are given a function Check which takes an object Obj as a parameter.
Your taks is to find out the sum of the three data members of the object. The data members are named as p1, p2, p3.

function Check(obj1) {
    return(obj1.p1+obj1.p2+obj1.p3) 
 }

 
8.Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables name and id.
Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
Return "true" if new_name and id are same as objects name and id otherwise return  "false".

function check(obj1,a,b) {
    if(obj1.name==a && obj1.id==b)  return true
    else return false  
  }