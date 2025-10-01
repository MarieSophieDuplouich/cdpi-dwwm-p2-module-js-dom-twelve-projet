/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");
//  ctnToasts.style.display ="none";
//fonctions

function printFichier() {


    const toast = document.createElement("div");

    toast.classList.add("toast");

    toast.innerText="Votre fichier est enregistré !";
    ctnToasts.appendChild(toast);// appenchild ici??



    setTimeout(function(){
        toast.remove();

    }, 2000);
}
// evenement
btn.addEventListener('click', printFichier);





//DOM


//fetch


// quand je clique sur enregistré le site web m'affiche votre fichier est enregistré -> contenu innerhtml




// setTimeout (function(){
//     console.log("Ouiiii je scroollll");
//       modal.style.display ="flex";
// }, 2000);
// //Evenements
// // 5. Je fais disparaite la modale au clique sur la croix
// modalQuit.addEventListener("click",function(){
    
    

// });
