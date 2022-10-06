let delid=0, adid=0, rmid=0, txtid=0
function toggle(){
    let blurr=document.getElementById("blurr")
    blurr.classList.toggle("active")
    let popup=document.getElementById("popup")
    popup.classList.toggle("active")
    let textHead=document.getElementsByClassName('lftpd')
    textHead[0].style.display="none"
}
function toggle2(){
    let blurr=document.getElementById("blurr")
    blurr.classList.toggle("active")
    let popup2=document.getElementById("popup2")
    popup2.classList.toggle("active")
}
function toggle3(){
    let blurr=document.getElementById("blurr")
    blurr.classList.toggle("active")
    let popup3=document.getElementById("popup3")
    popup3.classList.toggle("active")
}
const taskList=[];

const addTask=()=>{
    let task=document.getElementById("task").value;

    const tempObj={
        id: Date.now(),
        list: task
    }
    taskList.push(tempObj);
    console.log(taskList);
    addscreen();
}

const taskListInside=[];

const addTaskInside=()=>{
    let taskInside=document.getElementById("taskInside").value;

    const tempObjInside={
        id: Date.now(),
        listInside: taskInside
    }
    taskListInside.push(tempObjInside);
    console.log(taskListInside);
    addtsk(adid1);
}

function addscreen(){
    let textHead=document.getElementsByClassName('lftpd')
    textHead[0].style.display="none"

    let box=document.createElement('div');
    box.setAttribute('class','child');
    let currentElement=document.getElementById('parent');
    currentElement.appendChild(box)

    let box1=document.createElement('a')
    let largescreenid=Date.now()
    box1.setAttribute('id',largescreenid)
    
    box1.setAttribute('onclick','largeScreen(this.id),toggle3()')
    box.appendChild(box1)
    box1.innerText=taskList[taskList.length-1].list;

    let hr=document.createElement('hr')
    hr.setAttribute('class','hrcl')
    box.appendChild(hr)
    
    let delflexinside=document.createElement('div')
    let delflexinsideid=Date.now()
    delflexinside.setAttribute('id',delflexinsideid)
    delflexinside.setAttribute('class','delflexinside')
    box.appendChild(delflexinside)

    let delflex=document.createElement('div')
    delflex.setAttribute('class','delflex')
    box.appendChild(delflex);

    let flxdel=document.createElement('a')
    flxdel.setAttribute('onclick','delete1(this.id)')
    let delid=Date.now()
    flxdel.setAttribute('id',delid)
    delflex.appendChild(flxdel);

    let del=document.createElement('div')
    del.setAttribute('class','del')
    flxdel.appendChild(del)

    let trash=document.createElement('div')
    trash.setAttribute('class','trash')
    del.appendChild(trash)

    let flxdadd=document.createElement('a')
    flxdadd.setAttribute('onclick','toggle2(),addtsk(this.id)')
    let addidd=Date.now()
    flxdadd.setAttribute('id',addidd)
    delflex.appendChild(flxdadd);

    let dadd=document.createElement('div')
    dadd.setAttribute('class','dadd')
    flxdadd.appendChild(dadd);

    let pluss=document.createElement('div')
    pluss.setAttribute('class','pluss')
    dadd.appendChild(pluss)
}
function addtsk(adid1){
    let adid=adid1;
    let box1=document.getElementById(adid).parentElement.parentElement

    let delflex1=document.createElement('div')
    delflex1.setAttribute('class','delflex1')
    let box2=box1.getElementsByClassName('delflexinside')
    box2[0].appendChild(delflex1)

    let childInside=document.createElement('div')
    childInside.setAttribute('class','childInside')
    delflex1.appendChild(childInside)
    childInside.innerText=taskListInside[taskListInside.length-1].listInside;

    let tdel=document.createElement('a')
    tdel.setAttribute('onclick','removetask(this.id)')
    let rmid=Date.now()
    tdel.setAttribute('id',rmid)
    delflex1.appendChild(tdel)

    let doneBttn=document.createElement('div')
    doneBttn.setAttribute('class','doneBttn')
    tdel.appendChild(doneBttn)

    let markDone=document.createElement('span')
    markDone.setAttribute('class','markDone')
    doneBttn.appendChild(markDone)
    markDone.innerText="Mark Done"
}
function removetask(rmid1){
    let rmid=rmid1;
    let s=document.getElementById(rmid).parentElement
    let ss=s.getElementsByClassName('childInside')
    ss[0].style.color="red"
    ss[0].style.textDecoration="line-through"
    let sss=document.getElementById(rmid)
    let ssss=sss.getElementsByClassName('doneBttn')
    ssss[0].style.display="none"

}
function delete1(idofdel){
    let delid=idofdel;
    let delchild=document.getElementById(delid).parentElement
    delchild.style.display="none"
}
function largeScreen(lst){
    let lrgid=lst;
    let lgbt=document.getElementById('popup3')
    let txtt=document.getElementById(lrgid).parentElement
    let fff=document.createElement('div')
    fff.setAttribute('class','fff')
    lgbt.appendChild(fff)
    fff.appendChild(txtt)
}
