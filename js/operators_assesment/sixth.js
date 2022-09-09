1.You are given a string S, and your task is to return an array B
 (having a size of 2), where [0] contains the count of character A (uppercase) in string S and 
B[] contains the count of character D (uppercase) in string S.

const countCharacters = (S) => 
{
    let B=[0,0]
    let count=0
    let cc=0
    for (let i=0;i<S.length;i++)
    {
      if(S[i]=="A")
      {
         count++
      }
    }
    for (let j=0;j<S.length;j++)
    {
      if(S[j]=="D")
      {
        cc++
      }
    }
    B[0]=count
    B[1]=cc
    return B
};


2.Tina is given a string  S which contains the first letter of all the student names in her class. 
She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S ,
 she decided to write a code that finds out the count of characters that occur more than once in the string.

 var Count_Occ = (s) => 
{
    
      let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
};






 3.You are given a string  S  containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

 var Count_Vowels= (S) => 
{
  let count=0
  let str=['A','a','E','e','I','i','O','o','U','u']
    for(let i=0;i<str.length;i++)
    {
      for(let j=0;j<S.length;j++)
      {
        if(str[i]===S[j])
        {
          count++
        }
      }
    }
    return count
};
 


4.You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the concatenation of both the given strings. 

var Concatenate_Strings = (S1, S2) => 
{
  return (S1+S2)
};



5.You are given a string S, and your task is to return the length of the string S

const findLength = (S) => 
{
   let i=0
   while (S[i]!==undefined)
   {
     i++
   }
   return i
};
 .


 6.You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya and Danish, where letter A
  represents the win of Aditya and letter D represents the win of Danish

  {
    let a=0
    let d=0
    for(let i=0;i<S.length;i++)
    {
      if(S[i]=="A")
      {
        a++
      }
      else if(S[i]=="D")
      {
        d++
      }
    }
    if(a==d)
    {
      return("Draw")
    }
    else if(a>d)
    {
      return("Aditya")
    }
    else 
    {
      return("Danish")
    }
  }
 
  

7.You are given two strings S and P, and your task is to concatenate them and return the concatenated string.

const joinStrings = (S, P) => 
{
  let d=S.concat(P)
  return d
};


8.You are given a string S, Your task is to check wether the given string is a Paindrome or not.

var Palin_Check = (str) =>
{
	 let s=[]
	 let j=0
	 let x=[]
	 for(let i=(str.length-1);i>=0;i--)
	 {
	   s[j]=str[i]
	   j++
	 }
	 let d= s.toString()
	 for(let k=0;k<str.length;k++)
	 {
	   x[k]=str[k]
	 }
	 let y=x.toString()
	 if(y===d)
	 {
	   return("True")
	 }
	 else
	 {
	   return("False")
	 }

};



9.You are given a string S, Your task is to Reverse the string.String can contain both upppercase lowercase letters. 

var Reverse_String = (str) => 
{
  let s=''
  let j=0
   for(let i=(str.length-1);i>=0;i--)
	 {
	   s+=str[i]
	   j++
	 } 
	 return s
};



10.You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.

var String_Match = (S1,S2) => 
{
    if(S1==S2)
    {
      return ("YES")
    }
    else 
    {
      return("NO")
    }
};
 


11.You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in 
S to the text string.

var Replace = (S, pattern , text) => 
{
  let b=S.replace(pattern,text)
  return b
};






12.You are given a string S, Your task is to split the string with respect to spaces.

var Split_the_string = (S) => 
{
    return(S.split(" "))    
};



13.You are given a string S containing both uppercase and lowercase letters. 
You need to find out the number of vowels and the number of consonants in the given string.


var Count_Vowels= (S) => 
{
  let count=0
  let str=['A','a','E','e','I','i','O','o','U','u']
    for(let i=0;i<str.length;i++)
    {
      for(let j=0;j<S.length;j++)
      {
        if(str[i]===S[j])
        {
          count++
        }
      }
    }
    return count    
};
var Count_Consonants= (S) => 
{
  let cnt=0
  let st=['A','a','E','e','I','i','O','o','U','u']
  for(let i=0;i<st.length;i++)
    {
      for(let j=0;j<S.length;j++)
      {
        if(st[i]==S[j])
        {
          cnt++
        }
      }
    }
    return (S.length-cnt )
};
 