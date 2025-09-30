/**
 * removeEventListener
 * Scroll Event
 */


//Sélectionner
// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section1 = document.querySelector(".one");

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

//Fonctions
// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre
window.addEventListener("scroll",onScrollDisplayModal);
/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */
function onScrollDisplayModal(){
    console.log("Ouiiii je scroollll");
      modal.style.display ="flex";
     

}

//Evenements
// 5. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click",function(){
    
    window.removeEventListener("scroll",onScrollDisplayModal);
     modal.style.display ="none";

});



    //  modal.classList.add('modal');

// quand je scroll, la fenêtre avec la classe modal apparaît ->attribut class classList.add        style.display=flex