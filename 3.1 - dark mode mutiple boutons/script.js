
//1. Je recupere tout les switchs

//2. Je recupere tout les elements html de ma page

//3. Je parcours tout les switchs

// Sélection des éléments
const allElements = document.querySelectorAll("*");
const switchBtns = document.querySelectorAll(".switch"); // tous les boutons
const icons = document.querySelectorAll(".icon");

// Fonction pour activer/désactiver le dark mode
function toggleDarkMode() {
    allElements.forEach(el => {
        el.classList.toggle('darkmode');
    });

    icons.forEach(icon => {
        icon.classList.toggle('fa-moon'); // exemple : changer icône
        icon.classList.toggle('fa-sun');
    });
}

// Ajouter l'événement à chaque bouton
switchBtns.forEach(btn => {
    btn.addEventListener('click', toggleDarkMode);
});


//modifier DOM

// remarque quand c'est un élément seul par icon moon pas besoin de foreach une fonction function.classList.toggle('fa-moon')
// suffit amplement


//Fetch




