1.Write a program that takes an array as input from the user and find out the product of the elements.

const Find_Prod = (array, N) => 
{
 let otpt = 1
 for(let i=0; i<N; i++) 
 { 
    otpt = otpt * array[i];
 }
return(otpt);
};



2.Write a program which takes an array as input from the user and find out the sum of the array elements.

const Find_Sum = (array, N) => 
{
  let otpt = 0
 for(let i=0; i<N; i++) 
 { 
    otpt = otpt + array[i];
 }
return(otpt);

};



3.You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of 
K in array A.

const findCount = (N, K, Arr) => 
{
   let otpt = 0
   for(let i=0; i<N; i++) 
  { 
    if(Arr[i]==K)
    otpt++
  }
   return(otpt); 
};
 

4.You are given an array A containing N integer elements, and your task is to return an array 
B (having a size equal to 2), where B[] contains the sum of all even elements of array A and 
B[1] has the sum of all odd elements of the array A.

const findEvenOdd = (N, Arr) => 
{
   let B=[0,0]
   for(let i=0; i<N; i++) 
  { 
    if(Arr[i]%2==0)
    {
      B[0]=B[0]+Arr[i]
    }
    else
    {
      B[1]=B[1]+Arr[i]
    }
    
  }
   return(B); 
};



5.Write a program which takes an array as input from the user and a number.
Check whether the number is present or not.

const Find_Num = (array,N,M) => 
{
  let p=false
  for(let i=0 ;i<N; i++)
  {
    if(array[i]==M)
    {
      p=true
      break;
    }
  }
  if(p)
  {
    return("YES")
  }
  else
  {
    return("NO")
  }
};
 


6.You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18
 (18 included).

 const highAge = (N, Arr) => 
{
   let otpt=[]
   let j=0
   for(let i=0;i<N;i++)
   {
     if(Arr[i]>=18)
     {
       otpt[j]=Arr[i];
       j++
     }
   }
   return(otpt)
};





7.You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

const Inc_Arr = (array,N) => 
{
  let arr=[]
  for(let i=0;i<N;i++)
  {
    arr.push(array[i]+1)
  }
  console.log(...arr)

};





8.You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.

const isAllPass = (N, Arr) => 
{
  let p=true
   for(let i=0; i<N; i++)
   {
     if(Arr[i]<32)
     {
       p= false;
       break;
     }
   }
   if(p)
   {
     return("YES")
   }
   else
   {
     return("NO")
   }
};


9.Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.
Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many 
M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.

function Unique_Shirts (arr,N) {
  arr=arr.sort()
  let count=0
  for(let i=0; i<N;i++)
  {
   if((arr[i-1]===arr[i]||(arr[i]===arr[i+1]))) 
   {
     count++
   }
  }
 return(N-count)
}



10.Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.

function arrayMin(arr) {
  let b=[]
  b[0]=arr[0]
  let x=arr
 for(let i=1;i<arr.length;i++)
 {
   if(x[i]<b[0])
   {
     b[0]=x[i];
   }
 }
 return b[0]
}

function arrayMax(arr) {
let b=[]
b[1]=arr[0]
let y=arr
 for(let j=1;j<arr.length;j++)
 {
   if(y[j]>b[1])
   {
     b[1]=y[j];
   }
 }
 return b[1]
}




11.Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by 
 A[ i ] .   She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month  M
  and te sum of the integers on the squares is equal to his birthday 
 D .  You must determine how many ways she can divide the chocolate.

 function Birthday_Game(arr,D ,M) {
 
    let counter = 0;
     for(let i = 0; i < arr.length - 1; i++){
          let subArray = arr.slice(i, i+M);
          if (subArray.length === M) {
             let sum = subArray.reduce((a,b) => a + b, 0);
             if(sum === D){
                  counter += 1;
              }
           }
     }
     return counter;
}