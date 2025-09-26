/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/


// quand je clique sur le smiley blanc il devient jaune -> html et css ->
// 1. Je recupere l'icone smiley

// 2. Je recupere le bouton ABONNER

// quand je clique sur le bouton abonner, le bouton abonner change de coueleur et le texte change en "abonné"-> contenu->InnerText

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur -> booleén

// 4. J'ecoute le clique sur l'icone smiley ->addeventlistener click

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ ->addeventlistener click


//Sélectionner

const smileyMeh = document.querySelector(".fa-solid.fa-face-meh");
const smileyHappy = document.querySelector(".fa-solid fa-face-smile");
const btnBtnaccept = document.querySelector(".bloc-btn");
const btnBtnabonnerchangecolor= document.querySelector(".btn-sub");
const btnBtnabonnerchangetext= document.querySelector(".btn-sub");

const booleanUser = false;
// function smiley

function likeSmiley(){
    
smileyMeh.classList.add("happy");

}


// function abonner vous



// function abonner change de couleur abonnez vous
function btnAbonnerchangecolor() {
    btnBtnabonnerchangecolor.classList.add("abonne");
}


function action(){
//    btnBtnabonnerchangetext.classList.toggle('hidden');
    btnBtnabonnerchangetext.textContent = "Abonné";
}
    
 // function bool etat ou non abonné ou non User  true false

 function misClick(){
if (hour < 15) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

 }





// évènement

btnBtnaccept.addEventListener('click',likeSmiley);
btnBtnabonnerchangecolor.addEventListener('click', btnAbonnerchangecolor);
btnBtnabonnerchangetext.addEventListener('click', action);

// btnBtnabonnerchangetext.addEventListener('click', btnChangerTextabonner);
// modifier DOM


// fetch
