
//Sélectionner
// 1. Je recupere le burger
const burger = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
const modal = document.querySelector(".modal");

// Quand je rétrécis l'écran,
//  en-dessous de 600px le burger apparaît 
// mais la navbar-mobile et modal n'apparaîssent pas
// c'est une class que je dois faire apparaître

//Fonction

function printBurger(){
modal.classList.add("show-modal");



console.log(printBurger);
}

// Evènement
burger.addEventListener('click', printBurger);

// Modifier DOM
burger.classList.add('show-modal');
//Fetch



