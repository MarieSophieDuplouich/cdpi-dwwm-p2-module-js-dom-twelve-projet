/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/


// quand je clique sur le bouton toggleDarkmode, le site web devient NodeIterator, c'est le css quia change
// donc -> contenu



// Sélectionner

const toggleDarkmode = document.querySelectorAll("*");
const changeIcon = document.querySelector(".fa-sun");
const btnIbutton = document.querySelector(".switch");


//Fonction

function activerDarkmode(){
toggleDarkmode.forEach(dark_elem=>{
    // Les objet Element possède également la fonction querySelector.

dark_elem.classList.toggle('darkmode');


});

}


function changeIcon_func(){

changeIcon.classList.toggle('fa-moon');
}
//évènements
btnIbutton.addEventListener('click', activerDarkmode);
btnIbutton.addEventListener('click', changeIcon_func);


//modifier DOM

// remarque quand c'est un élément seul par icon moon pas besoin de foreach une fonction function.classList.toggle('fa-moon')
// suffit amplement


//Fetch


// console.log(produits_arr[0]); // La div des Nike
// console.log(produits_arr[1]); // La div des Adidas
// console.log(produits_arr[2]); // La div des Puma
// // // console.log(produits_arr.length);
// const color =  document.getElementsByClassName(".myH2").style.background = "#ff0000";

// const produits_arr = document.querySelectorAll("#produit"); 
// produits_arr.forEach(produit_elem=>{
//     // Les objet Element possède également la fonction querySelector.
//     console.log(produit_elem.querySelector("p").innerText);
//     produits_arr.forEach(produit_elem=>{
        
//        produit_elem.style.background = "lightblue";

//  }) };