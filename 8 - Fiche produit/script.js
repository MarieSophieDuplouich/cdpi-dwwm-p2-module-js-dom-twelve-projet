/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */


// Séléctionner
// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");
// 3. Je recupere le bouton AJOUTER
const btnAdd = document.querySelector(".btn-add");
// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;


//Fonctions


// quand je clique sur une image elle devient  grosse
function imageDevientgrosse(e) {
   const imaGegrosse = e.target.getAttribute("src");
   fullImg.setAttribute("src", imaGegrosse);

}


// quand je clique sur le bouton ajouter Panier une phrase s'affiche avec "Vous avez nombredeproduits produits dans votre panier."

// le ternaire c'est équivalent if else mais en plus court avec ?: https://www.pierre-giraud.com/javascript-apprendre-coder-cours/operateur-ternaire/
function panierAugmente() {
    
     panier ++;
     panierMsg.textContent = 
     panier === 1 ?  "Vous avez" + panier + "produits dans votre panier."
    : "Vous avez " + panier + " produits dans votre panier.";

console.log(panier);
}

//évènements

btnAdd.addEventListener("click",panierAugmente);

vignettes.forEach(function(vignette){
    vignette.addEventListener("click", imageDevientgrosse);
});
//DOM


//Fetch

