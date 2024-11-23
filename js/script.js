let pEl = document.querySelector(".Tärning-Nummer");

let pEl2 = document.querySelector(".Rundans-poäng");

let pEl3 = document.querySelector(".omgångar");

let pEl4 = document.querySelector(".all-poäng");

const h3El = document.querySelector(".slut-meddelande");

let allpoäng = 0;

let rundanpoäng = 0;

let omgångar = 0;

const form = document.querySelector("form");
form.addEventListener("submit", namnFunktion);

function namnFunktion(event) {
  event.preventDefault();
  const input = document.querySelector("input");

  const h1El = document.querySelector(".spelarens-namn");
  h1El.innerText = `Välkommen ${input.value}`;
}

const startbtn = document.getElementById("dice");

startbtn.addEventListener("click", startbutton);

function startbutton() {
  const randomsix = 1 + Math.floor(Math.random() * 6);
  console.log(randomsix);

  pEl.innerText = `Tärnings nummer: ${randomsix}`;

  if (randomsix === 1) {
    rundanpoäng = 0;

    pEl2.innerText = `Rundans poäng: ${rundanpoäng}`;
    omgångar++;
    pEl3.innerText = `Spelade omgångar: ${omgångar}`;
  } else {
    rundanpoäng += randomsix;
    pEl2.innerText = `Rundans poäng: ${rundanpoäng}`;
  }
}

const stoppabtn = document.querySelector("#stoppa");

stoppabtn.addEventListener("click", stoppabutton);

function stoppabutton() {
  if (stoppabtn) {
    allpoäng += rundanpoäng;
    pEl4.innerHTML = `Totala poäng: ${allpoäng}`;
    omgångar++;
    pEl3.innerText = `Spelade omgångar: ${omgångar}`;
    rundanpoäng = 0;
    pEl2.innerText = `Rundans poäng: ${rundanpoäng}`;
    randomsix = 0;
    pEl.innerText = `Tärnings nummer: ${randomsix}`;
  }

  if (allpoäng >= 100) {
    h3El.innerText = `Spelet är slut du klarade spelet på ${omgångar} omgångar, Grattis!`;
  }
}

const startaom = document.querySelector("#restarta");

startaom.addEventListener("click", () => {
  rundanpoäng = 0;
  pEl2.innerHTML = `Rundans poäng: ${rundanpoäng}`;
  allpoäng = 0;
  pEl4.innerHTML = `Totala Poäng: ${allpoäng}`;
  omgångar = 0;
  pEl3.innerHTML = `Spelade omgångar: ${omgångar}`;
  randomsix = 0;
  pEl.innerText = `Tärnings Nummer: ${randomsix}`;
  h3El.innerText = "";
});
