function getTime(){
    let date=new Date()
    let hre = date.getHours()
    let mnt = date.getMinutes()
    let scnd = date.getSeconds()

    if(hre>12){
        hre=hre-12;
        document.getElementById("am").innerText="PM"
    }
    if(hre<10){
        hre="0"+hre
    }
    if(mnt<10){
        mnt="0"+mnt
    }
    if(scnd<10){
        scnd="0"+scnd
    }


    if(((hre==6)||(hre==7)||(hre==8)||(hre==9)||(hre==10)||(hre==11))&&(document.getElementById("am").innerText=="PM")){
        document.getElementById("textForChange").innerText="GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById("picChange").style.backgroundImage="first.svg"
        document.getElementById("test").innerText="GOOD MORNING!! WAKE UP !!"
    }
    
    if(((hre==12)||(hre==1)||(hre==2)||(hre==3))&&(document.getElementById("am").innerText=="PM")){
        document.getElementById("textForChange").innerText="LET'S HAVE SOME LUNCH !!"
        document.getElementById("picChange").style.backgroundImage="url(lunch.svg)"
        document.getElementById("test").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP"
    }

    if(((hre==5)||(hre==6)||(hre==4)||(hre==7))&&(document.getElementById("am").innerText=="PM")){
        document.getElementById("textForChange").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        document.getElementById("picChange").style.backgroundImage="url(lunch_image.png)"
        document.getElementById("test").innerText="GOOD EVENING !!"
    }

    if(((hre==8)||(hre==10)||(hre==11))&&(document.getElementById("am").innerText=="PM")){
        document.getElementById("textForChange").innerText="CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById("picChange").style.backgroundImage="url(lunch_image.png)"
        document.getElementById("test").innerText="GOOD NIGHT !!"
    }

    

    document.getElementById("hour").innerText=hre
    document.getElementById("minute").innerText=mnt
    document.getElementById("second").innerText=scnd

    setTimeout(getTime,1000);
}
getTime();


function set(){
    
    let firsttext = document.getElementById("firstsel").options[document.getElementById("firstsel").selectedIndex].innerText;
    document.getElementById("wkupt").innerText=firsttext

    let secondtext = document.getElementById("secondsel").options[document.getElementById("secondsel").selectedIndex].innerText;
    document.getElementById("lncht").innerText=secondtext

    let thirdtext = document.getElementById("thirdsel").options[document.getElementById("thirdsel").selectedIndex].innerText;
    document.getElementById("npt").innerText=thirdtext

    let fourthtext = document.getElementById("fourthsel").options[document.getElementById("fourthsel").selectedIndex].innerText;
    document.getElementById("nghtt").innerText=fourthtext

}


