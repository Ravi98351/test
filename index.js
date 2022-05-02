// write js code here corresponding to index.html
// You should add submit event on the form

var homearray=JSON.parse(localStorage.getItem("schedule"))||[];



document.querySelector("#masaiForm").addEventListener("submit",Home);
function Home(){
  event.preventDefault();




var homeobj={
matchnumber:masaiForm.matchNum.value,
teamA:masaiForm.teamA.value,
teamB:masaiForm.teamB.value,
date:masaiForm.date.value,
venue:masaiForm.venue.value,
}

homearray.push(homeobj);

localStorage.setItem("schedule",JSON.stringify(homearray));
window.location.href="matches.html"

}







 