1. Your task is to add a and b.

const AddTwoNumbers = (a,b) => {
    return a+b
};



2.You are given two number first as A and second as B and check if both conditions (A<10 and A>B) 
are satisfied or not with the help of operators.

const Is_Valid = (a,b) => {
    return((a<10)&&(a>b))
  };
  


3.You are given two numbers A and B. You need to do the following checks:
if both are divisible by 10 console true.
if both are not divisible by 10 console false.
if one of them only is divisible by 10 console true.
Use operator to do this.

const Check = (A, B) => 
{
  if((A%10==0)&&(B%10==0))
  {return true}
  else if((A%10!=0)&&(B%10!=0))
  {return false}
  else
  {return true}   
};


4.You are provided a four digit number N only. Your task is to print out the first digit of that number.

const First_Digit = (n) => {
    x=n%1000
    return((n-x)/1000)
 };


 5.You are provided a four digit number N only. Your task is to print out the last digit of that number.

 const Last_Digit = (n) => {
    return(n%10)
 };


 6.You are provided with two numbers A  and  B  where A  as  divisor and  B
  as  dividend.Your task is find the remainder.

  const Find_the_remainder = (a,b) => {
    return(b%a)
};


7.You are provided with two numbers A and B. Your task is to multiply these two numbers.

const Multiply_two_number = (a,b) => {
    return(a*b)
};


8.Shyam has got his marks in three subjects as A, B, and C (out of 100).Write a program to calculate his total marks and his average.


const Sum = (A, B, C) => 
{ 
 return(A+B+C)
};

const Average = (A, B, C) => 
{
 return((A+B+C)/3)
};   
   