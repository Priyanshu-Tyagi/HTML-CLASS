var investorData=JSON.parse(localStorage.getItem("invData"))

//our investorData is generated at backend and stored in local server as an array that's why we are using forEach to get key value pair by their key.

investorData.forEach(function(el){
    var card=document.createElement("div");
    var avatar=document.createElement("img");
    avatar.setAttribute("src",el.invImg);
    var name=document.createElement("h3");
    name.innerText=el.invName;
    var position=document.createElement("p");
    position.innerText=el.invRole;
    var logo=document.createElement("img");
    logo.setAttribute("src",el.invLogo);
    card.append(avatar,name,position,logo);
    frontcontainer.append(card);
});