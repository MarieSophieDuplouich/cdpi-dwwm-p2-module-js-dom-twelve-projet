/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"
// Quand je clique sur le bouton "accepter les cookies" ou "refuser les cookies" , la bannière de cookies qui disparaît le html disparaît -> le contenu
// innerHTML ne pas utiliser car interdit et injections script xss je vais utiliser classList remove

// Séléctionner tout ce qu'il faut bref les boutons et la classe cookies
const cookies = document.querySelector(".cookies");
const cookiesBtn = document.querySelector(".cookies-btn");
const btnBtnaccept = document.querySelector(".btn.btn-accept");
const btnBtndeny = document.querySelector(".btn.btn-deny");


// Fonction pour supprimer la bannière après avoir accepté ou refusé les cookies

function chooseAnoption(){
    cookies.classList.add("cookies-display-none");
    // cookies.classList.remove('cookies');

 }


//  Relier les 2 boutons à la fonction chooseanoption
btnBtnaccept.addEventListener('click',chooseAnoption);
btnBtndeny .addEventListener('click',chooseAnoption);

// class en css display none et ensuite je  un add pour ajouter cette classe là 

// Besoin : Créer une bannière de cookie qui disparait quand l'utilisateur à accepter les cookies. pas de localstorage !!!


// btn btn-accept
// btn btn-deny

// const balise = document.querySelector(cssSeelctor);
// balise.classList.add(className);    // Ajouter
// balise.classList.remove(className); // Supprimer
// balise.classList.toggle(className); // Inverser la présence




// 2. Je recupere la banniere de cookies je l'ai fait dans mon code non ?

// 3. J'écoute l'evenement "click" sur le bouton "Accepter les cookies" je l'ai fait dans mon code non ?