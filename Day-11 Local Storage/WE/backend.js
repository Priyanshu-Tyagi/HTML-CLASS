//All Variables

// var form=document.querySelector("#backform");
var investorData=JSON.parse(localStorage.getItem("invData")) || [];

//All Function

document.querySelector("#backForm").addEventListener("submit",investorfun);


function investorfun(){
    event.preventDefault();

    var somedata={
        invName:backForm.invname.value,
        invImg:backForm.invimgurl.value,
        invLogo:backForm.invlogourl.value,
        invRole:backForm.invpos.value,
    };
    investorData.push(somedata);
    localStorage.setItem("invData",JSON.stringify(investorData));
};