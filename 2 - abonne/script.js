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

// const smileyMeh = document.querySelector(".fa-solid.fa-face-meh");
// const smileyHappy = document.querySelector(".fa-solid.fa-smile-wink.happy"); 
const smileyHappy = document.querySelector("i"); 
const btnBtnaccept = document.querySelector(".bloc-btn");
const btnBtnabonnerchangecolor= document.querySelector(".btn-sub");
const btnBtnabonnerchangetext= document.querySelector(".btn-sub");

let booleanUser = false;

// le booléen flase true pour le bouton abonné


// function smiley

function likeSmiley(){
    
smileyMeh.classList.add("happy");

}

// function changeSmiley

function changeSmiley(){


    if(smileyHappy){
        smileyHappy.classList.toggle("fa-face-meh");
    smileyHappy.classList.toggle("fa-smile-wink");
    smileyHappy.classList.toggle("happy");
    } else{
      console.log("SOS !!!");
    }

   
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


function cancelButton(){

    if(booleanUser){
booleanUser = false;
        
          btnBtnabonnerchangetext.textContent = "Abonner";
           btnBtnabonnerchangecolor.classList.remove("abonne");
    }
    else {
        booleanUser = true;
        btnBtnabonnerchangetext.textContent = "Abonné";
           btnBtnabonnerchangecolor.classList.add("abonne");
        
    }

}




// évènement

btnBtnaccept.addEventListener('click',likeSmiley);
btnBtnabonnerchangecolor.addEventListener('click',cancelButton);
btnBtnabonnerchangetext.addEventListener('click', action);
smileyHappy.addEventListener('click', changeSmiley);

// btnBtnabonnerchangetext.addEventListener('click', btnChangerTextabonner);
// modifier DOM


// fetch
