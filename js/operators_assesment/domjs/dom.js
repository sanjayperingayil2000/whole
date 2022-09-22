1.Write the code to access element which is having id as "text"

getElementById('text')


2.Write the code to access element which is having tag as "h1"

getElementsByTagName('h1')


3.Write the code to access element which is having class as "box"

getElementsByClassName('box')


4."<h1>Hello </h1>
Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

let a=document.getElementsByTagName("h1")
a[0].innerText="HELLO WORLD"


5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". 
When user clicks on this button, the cards arrangement should be changed to vertical direction.

//html
<h1>Hello </h1>
    <div class="flex">
        <div class="flxcon"></div>
        <div class="flxcon"></div>
        <div class="flxcon"></div>
        <button onclick="chng()" type="button" class="btn">clck</button>

</div>

//css
.flex
{
    display: flex;
    flex-direction: row;
    background-color: black;
    margin: 5px;
    padding: 10px;
}

.flxcon
{
    width: 100px;
    height: 50px;
    margin: 10px;
    background-color: aqua;
}
.btn{width: 50px; height: 30px; position: relative; top: 10px;}
.cngt{width: 50px; height: 30px; position: relative; top: 10px;}



//js
let chng=function(){
    let s=document.getElementsByClassName('flex')

    s[0].style.flexDirection = "column"
    
}


6.What’s the difference between window vs document?

windows represents the whole browser properties and the document represents the properties of html loaded on the browser.


7."<h1>Hello </h1>
Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the 
above given h1 tag using DOM functions"

let b=document.getElementsByTagName("h1")[1]
b.style.color="red"
b.setAttribute("id","heading")


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

