let a=document.getElementsByTagName("h1")[0]
a.innerText="HELLO WORLD"


let chng=function(){
    let s=document.getElementsByClassName('flex')

    s[0].style.flexDirection = "column"
    
}


let b=document.getElementsByTagName("h1")[1]
b.style.color="red"
b.setAttribute("id","heading")



function cngt(){
    let c=document.getElementsByTagName("h1")[2]
    let btt=document.getElementById('cngt')

    c.innerText="Welcome to Elevation academy"
    
}


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




function yearIs(){
    let year=document.getElementById("dropYear")
    let text = year.options[year.selectedIndex].innerText;
    document.getElementById("slc").innerText=text
    console.log(text)
}




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