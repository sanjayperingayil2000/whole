1.Take a number from the user and print the count of digits in that number.

const Find_Digits = (N) => 
{
	 let t=0
	 while(N != 0) {
	N = parseInt(N / 10,10)
	t++; 
}
return t
};


2.Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and 
wants you to find out the number of times 5 occurred in the given number.

const Find_Five = (N) => 
{
	 let count = 0;
        while (N > 0)
        {
            if (N % 10 == 5)
                count++;
 
            N = parseInt(N / 10, 10);
        }
        return count;
};



3.You are given an integer N, and your task is to find the sum of all the even integers starting from 
1 upto N(N inclusive).

const findSum = (n) => {
  let i=0
  let sum=0
  while(n>0)
  {
    if(n%2==0)
    {
      sum=sum+n;
    }
   n=n-1; 
  }
  return sum
};


4.Write a program that takes a number from the user and get the sum of the digits present in the number.

const Number_Sum = (N) => 
{
  let sum=0
  let rem=0
	while(N>0)
	{
	  rem=N%10
	  sum=rem+sum;
	  N=parseInt(N/10,10)
	}
	return sum
};


5.Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

const Print_Odd = (N) => 
{
  console.log(2)
  for(let i=2; i<=N ; i++)
  {
    if(i%2==1){
    console.log(i)}
    
  }
};


6.Write a program which ask user for no of lines and print a pattern using an asterik .

const Print_pattern = (N) => 
{
  let s=""
  for(let i=1;i<=N;i++)
  {
    for(j=1;j<=i;j++){
      s=s+("*")
    }
    s=s+"\n"
  }
  console.log(s)
};




const Prime_Check = (N) => 
{
  if (N <= 1) {
    return "NO";
  } else {
    for (let i = 2; i < N; i++) {
      if (N % i == 0) {
        return "NO";
      }
    }
    return "YES";
  }
};


8.You are given an integer N, and your task is to print all the integers starting from 
1 till N (N inclusive).

const printNumbers = (n) => {
  let i=0
  let s=""
  if(n>0)
  {
  for(i=1;i<=n;i++)
  {
    s=s+" "+i
  }
  console.log(s)
  }
};


9.Write a program which takes a number from user and print the table.

const Print_Table = (N) => 
{
	for (let i = 1; i <= 10; i++) {
  console.log(N +" "+ "*" + " " + i +" "+ "="+" " + N * i);
}
};