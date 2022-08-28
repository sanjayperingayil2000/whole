
1.Write a program to make a simple calculator using switch statement that takes operator and two 
numbers from user and print the result after operation.

const Calculator = (A, B, C) => 
{
	switch(A)
	{
	  case ("+"):
	      {return (B + C);
	      break;}
	   case ("-"):
	      {return (B - C);
	      break;}
	   case ("*"):
	      {return (B * C);
	      break;}
	   case ("/"):
	      {return (B / C);
	      break;}
	}
    
};


2.Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.

const Check_divisibility = (N) => {
    if((N%6==0)&&(N%9==0))  
    {
      return ("Divisible by both")
    }
    else((N%6!=0)&&(N%9!=0))
    {
      return ("Not Divisible by both")
    }  
  };

  

3.You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.  

const isEligible = (a) => {
    if(a<18)
    {
      return ("Not Eligible for Voting")
    }
    else
    {
      return("Eligible for Voting")
    }
};


4.PrepBuddy wants you to get familiar with various Relational operators. He provides you with two 
integer values X and Y and asks you to find the relation between them.The relationships between integers 
X and Y are as follows:

If X<Y, it means that X is smaller than Y.
If X>, it means that X is greater than Y.
If X=Y, it means that X is equal to Y. 

const findRelation = (x,y) => {
  if(x<y)
  {
    return(x +" is smaller than "+ y)
  }
  else if(x>y)
  {
    return(x +" is greater than "+ y)
  }
  else
  {
    return(x +" is equal to "+ y)
  }
};



5.Your school has the following grading system based upon the marks(M) obtained by a student:

If M≤10, the grade will be E.
If 11≥M≤20, the grade will be D.
If 21≥≤30, the grade will be C.
If 31≥≤40, the grade will be B.
If 41≥M≤50, the grade will be A.

const findGrades = (a) => {
    if((0<=a)&&(a<=10))
    {
      return ("E")
    }
    else if((11<=a)&&(a<=20))
    {
      return ("D")
    }
    else if((21<=a)&&(a<=30))
    {
      return ("C")
    }
    else if((31<=a)&&(a<=40))
    {
      return ("B")
    }
    else
    {
      return ("A")
    }
 };



6.You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from 
the table corresponding to an input character and return it.

| P or p 	- PrepBytes      	|
| Z or z 	- Zenith         	|
| E or e 	- Expert Coder   	|
| D or d 	- Data Structure 	| 

const getValue = (a) => {
  if((a=="P")||(a=="p"))
  {
    return ("PrepBytes")
  }
  else if((a=="Z")||(a=="z"))
  {
    return ("Zenith")
  }
  else if((a=="E")||(a=="e"))
  {
    return ("Expert Coder")
  }
  else 
  {
    return ("Data Structure")
  }
};


7.Take three numbers and print the largest number among them if all of three are same print  −1.
 
const Max_out_of_three = (A,B,C) => {
  if((A==B)&&(A==C))
  {
    return (-1)
  }
  else if(A>=B)
  {
   if(A>=C)
   {
     return A
   }
   else
   {
     return C
   }
  }
  else if(B>=C)
  {
    return B
  }
  else
  {
    return C
  }
  

};


8.You are given 3 distinct integers X,Y, and Z, and your task is to find and return the second smallest
 integer among the three provided integers.
 
const findSndSmallest = (x,y,z) => {
 if(x>y && x>z){
  if(y>z){
    return y;
  }
  else{
    return z;
  }
}
else if(y>x && y>z){
  if(x>z){
    return x;
  }
  else{
    return z;
  }
}
else{
  if(x>y){
    return x;
  }
  else{
    return y;
  }
}
};


9.Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

const Triangle_Check = (A,B,C) => {
  if((A<=90)&&(B<=90)&&(C<=90))
  {
    return("acute")
  }
 else if((A>90)||(B>90)||(C>90))
   {
     return("obtuse")
   }
};