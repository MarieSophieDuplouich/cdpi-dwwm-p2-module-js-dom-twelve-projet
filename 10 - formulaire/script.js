/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)

// le trim ça permet d'enlever les espaces quand on rentre son prénom ou autre 

form.addEventListener("submit", function (event) {
  // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
  event.preventDefault();
  
    // reset toutes les erreurs visibles
    document.querySelectorAll(".error").forEach(p => {
        p.textContent = "";
        p.classList.add("invisible");
    });

    // validation prénom
    let erreurPrenom = validateForename(prenom);
    if (erreurPrenom) {
        const p = prenom.parentElement.querySelector(".error");
        p.textContent = erreurPrenom;
        p.classList.remove("invisible");
    }

    // validation nom
    let erreurNom = validateSurname(nom);
    if (erreurNom) {
        const p = nom.parentElement.querySelector(".error");
        p.textContent = erreurNom;
        p.classList.remove("invisible");
    }

    // validation email
    let erreurEmail = isValidEmail(email.value.trim()) ? "" : "Cette adresse email n'est pas valide.";
    if (erreurEmail) {
        const p = email.parentElement.querySelector(".error");
        p.textContent = erreurEmail;
        p.classList.remove("invisible");
    }

    // validation message
    let erreurMessage = validateMessage(message);
    if (erreurMessage) {
        const p = message.parentElement.querySelector(".error");
        p.textContent = erreurMessage;
        p.classList.remove("invisible");
    }

    // Si aucune erreur -> envoi du formulaire
    if (!erreurPrenom && !erreurNom && !erreurEmail && !erreurMessage) {
        // Ici tu peux appeler sendMail() ou autre action
        console.log("Formulaire valide, prêt à être envoyé !");
        // sendMail(message.value.trim(), email.value.trim());
    }


});

/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide. 
 * J'ai repris le code du formulaire du livre  Php, Mysql et Javascript Robin Nixon p374 p375
 */
function isValidEmail(email) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
  if (emailFormat.test(email)) {
    return true;
  } else {
    return false
  }
}


// prénom en tre 2 et 20 caractères Ce champ doit contenir au entre 2 et 20 caractères.

function validateForename(prenom) {
  const prenomValue = prenom.value.trim();
  if (prenomValue == "") return "Entrez un prénom.\n"
  else if (prenomValue.length < 2 || prenomValue.length > 20)
    return "Ce champ doit contenir au entre 2 et 20 caractères.\n"
  else if (/[^a-zA-Z0-9_-]/.test(prenomValue))
    return "Seuls caractères permis dans le champs nom : " +
      "a-z, A-Z, 0-9,- et _.\n"
  return ""
}

// nom Ce champs doit contenir entre 2 et 20 caractères.
function validateSurname(nom) {

  const nomValue = nom.value.trim();
  if (nomValue == "") return "Entrez un nom.\n"
  else if (nomValue.length < 2 || nomValue.length > 20)
    return "Ce champ doit contenir au entre 2 et 20 caractères.\n"
  else if (/[^a-zA-Z0-9_-]/.test(nomValue))
    return "Seuls caractères permis dans le champs nom : " +
      "a-z, A-Z, 0-9,- et _.\n"
  return ""

}


// partie message
function validateMessage(message) {
  const messageValue = message.value.trim();
  if (messageValue == "") return "Entrez votre message.\n"
  else if (messageValue.length < 10 || messageValue.length > 100)
    return "Ce champ doit contenir au entre 10 et 100 caractères.\n"
  else if (/[^a-zA-Z0-9_-]/.test(messageValue))
    return "Seuls caractères permis dans le champs message : " +
      "a-z, A-Z, 0-9,- et _.\n"
  return ""

}


// Ce champs doit contenir entre 10 et 100 caractères.

/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message, from) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{"message":"${message}","from":"${from}"}`
  };

  fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}