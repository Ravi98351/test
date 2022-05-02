// write js code here corresponding to favourites.html
var favrt=JSON.parse(localStorage.getItem("favourites"))||[];

displayData(favrt);

function displayData(favrt){

favrt.forEach(function(ele){

var tr=document.createElement("tr")

var td1=document.createElement("td")
td1.innerText=ele.matchnumber

var td2=document.createElement("td");
td2.innerText=ele.teamA
var td3=document.createElement("td");
td3.innerText=ele.teamB
var td4=document.createElement("td");
td4.innerText=ele.date
var td5=document.createElement("td");
td5.innerText=ele.venue;
var td6=document.createElement("td")
td6.innerText="Remove";
td6.style.color="red"
td6.addEventListener("click",remove)

function remove(){
event.target.parentNode.remove();

}

tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)

})


}