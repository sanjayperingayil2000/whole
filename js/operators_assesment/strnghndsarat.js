1.You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef"


let b=""
for (let i=0;i<N;i++)
{
   if(STR[i]!==undefined)
   {
    b.push(STR[i])
   }
   for(let j=i+1;j<N;j++)
   {
    if(STR[i]==STR[j])
    {
        STR.delete(j)
    }
   }
}
console.log(b)


2.You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2

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
  z.push(key + "=" + value);
}

});
return (z);
};





let count
    let arr=[3,4,7,7,4,8,8,9,8]
    let s= new set(arr)
    for(i=0;i<s.length;i++)
    {
      count=0
      for(let j=0;j<arr.length;j++)
      {
        if(arr[j]==s[i])
      {
        count++
      }
      }
      if(count>0)
      {
       console.log(arr[i]+":"+count)
      }
    }
