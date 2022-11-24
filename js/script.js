// Game dice 
const diceElement = document.getElementById("dadi");

const diceButton = diceElement.querySelector("button");

const newDiv = document.createElement("div");
newDiv.classList.add("col-12");

diceButton.addEventListener("click", function(){
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

  diceElement.append(newDiv);  
});

// Check email
const SectionEmailElement = document.getElementById("section-mail");

const emailElement = document.getElementById("email");

const emailButton = SectionEmailElement.querySelector("button");

const gotEmail = ["pinco@gmail.com", "pallo@gmail.com", "caio@gmail.com", "sempio@gmail.com"];

emailButton.addEventListener("click", function(){

  const emailValue = emailElement.value.toLowerCase();
  
 if (gotEmail.includes(emailValue)){
  console.log("esisto già");
 }else{
  console.log("non esisto già")
 }
})


