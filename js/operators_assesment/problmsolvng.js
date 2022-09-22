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



6.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function getTime(){
  let date=new Date()
  let hre = date.getHours()
  let mnt = date.getMinutes()
  let scnd = date.getSeconds()

  document.getElementById("hour").innerText=hre
  document.getElementById("minute").innerText=mnt
  document.getElementById("second").innerText=scnd

  setTimeout(getTime,1000);
}
getTime();


//html
<span id="hour"></span>
<span id="minute"></span>
<span id="second"></span>



7.Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected


//html
<select id="dropYear" >
<option></option>
<option id="20-21">2020-2021</option>
<option id="21-22">2021-2022</option>
</select><span>     </span>
<button onclick="yearIs()"> submit </button>
<span>      selected: </span>
<span id="slc">:</span>


//js
function yearIs(){
  let year=document.getElementById("dropYear")
  let text = year.options[year.selectedIndex].innerText;
  document.getElementById("slc").innerText=text
  console.log(text)
}




8."Create a form having name ,email, phone no. , birth year 
Add validations - phone no. should start with 91 , it should be 10 digits
email should be domain prepbytes.com
birth year should be > 95"



//html
<form action="#">
<label for="name">Name : </label>
<input id="name" type="text" placeholder="Enter your name" required><br><br>
<label for="email">Email :</label>
<input id="email" type="text" placeholder="Enter your email" required><span
id="message1"> Domain should be "@prepbytes.com" only</span><br><br>
<label for="phone">Phone No:</label>
<input id="phone" type="number" placeholder="Enter the phone number"
required><span id="message2"> Phone number should start with 91 and must be 10 digits
only</span><br><br>
<label for="birthYear">Birth Year : </label>
<input id="birthYear" type="date" required><span id="message3"> Birth Year should
be greater than 1995</span><br><br>
<button type="submit" onclick="check()">Submit</button>
</form>


//js
function check(){
    let msg1 = document.getElementById("message1");
    let regex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let email = document.getElementById("email").value;
    let lastVal = email.slice(-14);
    let result1 = regex1.test(email);
    if(result1 && lastVal==="@prepbytes.com"){
    msg1.innerText = " Email is Valid"
    }
    else{
    msg1.innerText = " Email is InValid"
    }
    let msg2 = document.getElementById("message2");
    let regex2 = /^[9]+[1]+[0-9]{8}$/;
    let phone = document.getElementById("phone").value;
    let result2 = regex2.test(phone);
    if(result2){
    msg2.innerText = " Phone Number is Valid"
    }
    else{
    msg2.innerText = " Phone Number is Invalid"
    }
    let msg3 = document.getElementById("message3");
    let year = document.getElementById("birthYear").value;
    let year1 = parseInt(year.slice(0,4));
    if(year1 > 1995){
    msg3.innerText = " Birth Year is valid"
    }
    else{
    msg3.innerText = " Birth Year is Invalid"
    }
}

