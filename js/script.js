const allpoäng = 0
const rundanpoäng = 0

const form = document.querySelector("form");
form.addEventListener("submit", namnFunktion);

function namnFunktion(event) {
  event.preventDefault();
  const input = document.querySelector("input");

  const h1El = document.querySelector(".spelarens-namn");
  h1El.innerText = input.value;
}

const startbtn = document.getElementById("dice");

startbtn.addEventListener("click", () => {
  const randomsix = 1 + Math.floor(Math.random() * 6);
  console.log(randomsix);

  const pEl = document.querySelector(".Tärning-Nummer");
  pEl.innerHTML = randomsix;
  const pEl2 = document.querySelector('.Rundans-poäng')
  pEl2.innerHTML = rundanpoäng;

  if (randomsix ===1){
    allpoäng = 0;

  } else{
    rundanpoäng += randomsix;
  }
   
  
});

