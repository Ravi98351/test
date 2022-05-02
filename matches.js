var matches=JSON.parse(localStorage.getItem("schedule"))||[];
var fav=[]
function filter(){
    var slect=document.querySelector("filterVenue").value;

    var filterlist=matches.filter(function(elem){
        return elem.filterVenue==selected;
    });
    displayData(filterlist);
}


displayData(matches);

function displayData(matches){

    matches.forEach(function(ele){

        var tr=document.createElement("tr")

        var td1=document.createElement("td");
        td1.innerText=ele.matchnumber;

        var td2=document.createElement("td");
        td2.innerText=ele.teamA
        var td3=document.createElement("td");
        td3.innerText=ele.teamB
        var td4=document.createElement("td");
        td4.innerText=ele.date
        var td5=document.createElement("td");
        td5.innerText=ele.venue;
        
        var td6=document.createElement("td")
        td6.innerText="Favourite"
        td6.style.color="blue"
        td6.addEventListener("click",function(){
            Favourite(ele);
        });
    
        
        
      tr.append(td1,td2,td3,td4,td5,td6)
     document.querySelector("tbody").append(tr);

    });

}
function Favourite(ele){
    fav.push(ele);
    localStorage.setItem("favourites",JSON.stringify(fav));

}

