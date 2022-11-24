const button = document.querySelector("#dadi button");

const dadiElement = document.getElementById("dadi");

const newDiv = document.createElement("div");
newDiv.classList.add("col-12");

button.addEventListener("click", function(){
  const myNumber = Math.floor(Math.random() * 6 + 1);
  const computerNumber = Math.floor(Math.random() * 6 + 1);

  let winner = "Hai pareggiato, ritira i dadi";
  
  if (myNumber > computerNumber){
    winner = "Hai vinto";
  } else if (myNumber < computerNumber){
    winner = "Hai perso";
  }

  winner = winner.toUpperCase();

  newDiv.innerHTML=`<div class="row text-center">
  <div class="col-6 p-3">
    <div>Il tuo numero è: ${myNumber}</div>
  </div>
  <div class="col-6 p-3">
    <div>Il numero del computer è: ${computerNumber}</div>
  </div>
  <div class="col-12">
    <h2>${winner}</h2>
  </div>"`;

  dadiElement.append(newDiv);  

});