1.PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. 
She wants to calculate the shorter angle formed between hour and minute hand at any given time.



var Minimal_Angle = (h, m) => 
{
  if(h==12 && m==0)return 0
  let ma=m*6
  let ha=h*30 + m*0.5
  if(ha>ma)return(ha-ma)
  else return(ma-ha)
};
 




2.Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.

 
var Check_Leap = (year) => 
{
 if((year%4==0)&&(year%100!=0)||(year%400==0))
 {
   return "Leap Year"
 }
  else
  {
    return "Non Leap Year"
  }

};
 


3.Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.
Now, You are given an integer N, write a program to check whether the given number is a Perfect Number or not.

 
var Perfect_Check = (N) => 
{
  let total=0
  if(N==1)
  return "YES"
  else{
  for(let i = 1; i < N; i++)
  {
    if(N%i == 0)
    total += i;
  }
  if(total==N)return "YES"
  else return "NO"}
};
 


4.Write a program which takes a numebr N as input from the user and You need to reverse the number.

 
var Reverse_Number = (N) => 
{
  return Number(String(N).split("").reverse().join(""))
};
 



5.You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.



var Substring_Check = (S1, S2) => 
{
  let s=S1.split(" ")
  let tr
  for(let i=0; i<s.length; i++)
  {
    if(s[i]==S2) tr=true
    
  }
  if(tr) return "YES"
  else return "NO"
};
 
