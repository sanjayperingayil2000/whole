1.Write one example explaining how you can write a callback function ?

function set(n1,n2)={
    let x=n1+n2
    return x
}
console.log(set(24,26))



2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 
3 should be printed after 3 sec and so on. 
Explain callback hell.Numbers1234567"

setTimeout(()=> {console.log(1)
    setTimeout(()=>{console.log(2)
    setTimeout(()=>{console.log(3)
    setTimeout(()=>{console.log(4)
    setTimeout(()=>{console.log(5)
    setTimeout(()=>{console.log(6)
    setTimeout(()=>{console.log(7)
        
 } ,1000)   
},1000)   
},1000)   
 } ,1000)  
},1000)
},1000)
},1000)


3."Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
Numbers1234567"


let counter = 1;
function timeOut(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(counter++);
    },1000 * i)
  });
}
for (let i = 1; i <= 7 ; i++) {
  timeOut(i).then((x) => console.log('counter:', x))
}


4.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print 
Promise Resolved, and if nothing is passed then it should 
go to reject state and catch the error and print Promise Rejected 

let x=new Promise((resolve,reject) =>{
    let a="yes"
    if(a=="yes"){
        resolve("Promise Resolved")
    }
    else reject("Promise Rejected")
})

x.then((d)=>{console.log(d)}).catch((d)=>{console.log(d)})



5.Create examples to explain callback function


         function see(a){
            console.log("I am function " + a);
         }
         function test(clbk){
            var a= 101;
            clbk(a);
         }
         test(see); 



6.Create examples to explain callback hell function


   const getRollNo = () => {
        setTimeout(()=> {
        
            let roll_no = [1,2,3,4,5];
            console.log(roll_no);
            setTimeout((rollno)=>{
                const biodata = {
                    name :'rohan',
                    age: '25'
                }
               console.log(` My roll no is ${rollno}. my name is ${biodata.name} and i am ${biodata.age} yeard old`)
            },2000,roll_no[1])
        },2000)
    }
    getRollNo();



7.Create examples to explain promises function

    const main = (resolve,reject) => {
        let a = 54
        if(a < 9){
            resolve("resolved")
        }
        else reject("rejected")
      }
      let x = new Promise(main)
      function f1(message){
        console.log(message)
      }
      function f2(message){
        console.log(message)
      }
      x.then(f1).catch(f2)



8.Create examples to explain async await function

    async function trial() {
      console.log("2:Message");
      await  console.log("3:Message");
      console.log("4:Message");
    }
      console.log("1:Message");
      trial();
      console.log("5:Message")



9.Create examples to explain promise.all function

  let p1 = new Promise((resolve,reject) => {
         setTimeout(() => {
             console.log('the first promise has resolved');
             resolve(10);
          },1 * 1000);
     });
     let p2 = new Promise((resolve,reject) => {
         setTimeout(() => {
             console.log('the second promise has resolved');
             resolve(20);
         },2 * 1000);
     });
     let p3 = new Promise((resolve,reject) => {
         setTimeout(() => {
             console.log('the third promise has resolved');
             resolve(30);
         },3 * 1000);
     });
     Promise.all([p1,p2,p3]).then((result)=> {
         console.log(`Result: ${result}`);
     }).catch((error)=>{
         console.log(`Error: ${error}`);
     });