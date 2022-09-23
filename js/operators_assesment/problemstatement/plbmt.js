1."Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

['JOHN', 'BABA', 'YAGA', 'WICK']"


let ss=studentRecords.map(student => student.name.toUpperCase() )
console.log(ss)



2."Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"


let ss=studentRecords.map(student => student.marks)
for(let i=0; i<studentRecords.length; i++){
if(ss[i] > 50){
    console.log(studentRecords[i])
}
}



3.Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let ss=studentRecords.map(student => student.marks)
for(let i=0; i<studentRecords.length; i++){
if(ss[i] > 50 && studentRecords[i].mark>120){
    console.log(studentRecords[i])
}
}


4.Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sum=0
let ss=studentRecords.map(student => student.marks)
for(let i=0; i<studentRecords.length; i++){
    sum=sum+ss[i]
}
console.log(sum)


5.Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

for(let i in studentRecords)
{
    if(studentRecords[i].marks>50)  
    {
        console.log(studentRecords[i].name)
    }  
}



6. Question 6: This time we are required to print the sum of marks of the students with id > 120.

let sum=0
 for(let i in studentRecords)
    {
    if(studentRecords[i].id>120)  
    {
      sum=sum + studentRecords[i].marks
     }
    }
    console.log(sum)



7.Question 7: This time we are required to print the total marks of the students with marks greater than 50 after 
a grace of 15 marks has been added to those students who scored less than 50.

    let sum=0
    for(let i in studentRecords)
       {
       if(studentRecords[i].marks<50)  
       {
         studentRecords[i].marks=studentRecords[i].marks+15
        }
        sum=sum+studentRecords[i].marks
       }
       console.log(sum)



8.Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let obj1=[{name:'snjy',class:'1',rollNo:54}]
let obj2=[{name:'neeraja',class:'2',rollNo:15}]
let obj3=[{name:'akku',class:'3',rollNo:35}]
let obj4=[{name:'achi',class:'4',rollNo:10}]
let obj5=[{name:'nami',class:'5',rollNo:11}]
let obj6=[{name:'vihsnu',class:'6',rollNo:7}]

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6)