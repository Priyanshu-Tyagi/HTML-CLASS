// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myFunction);
function myFunction(){
    event.preventDefault();
    var image=document.querySelector("#image").value;
    var studentName=document.querySelector("#name").value;
    var batch=document.querySelector("#batch").value;
    var dsa=document.querySelector("#dsa").value;
    var skillathon=document.querySelector("#cs").value;
    var coding=document.querySelector("#coding").value;


    var row=document.createElement("tr");
    var td1=document.createElement("td")
    var avatar=document.createElement("img");
    avatar.setAttribute("src",image);
    td1.append(avatar);
    var td2=document.createElement("td");
    td2.append(studentName);
    var td3=document.createElement("td");
    td3.append(batch);
    var td4=document.createElement("td");
    td4.append(dsa);
    var td5=document.createElement("td");
    td5.append(skillathon);
    var td6=document.createElement("td");
    td6.append(coding);
    var td7=document.createElement("td");
        var obtainedmarks=Number(dsa)+Number(skillathon)+Number(coding);
        var percent=(obtainedmarks/30)*100;
    td7.append(percent);
    console.log(percent);
    var td8=document.createElement("td");
    if(percent<50){
        td8.innerText="Async";
        td8.style.backgroundColor="red";
    }
    else{
        td8.innerText="Regular";
        td8.style.backgroundColor="green";
    }
    var td9=document.createElement("td");
    td9.innerText="Delete";
    td9.style.backgroundColor="red";
    td9.style.cursor="pointer"
    td9.addEventListener("click",deleteRow);

    row.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(row);
}

function deleteRow(){
    event.target.parentNode.remove();
}