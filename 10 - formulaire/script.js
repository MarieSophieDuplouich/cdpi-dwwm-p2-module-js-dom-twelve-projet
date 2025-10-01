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
const bTnalert = document.querySelector("btn");
// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)

// le trim ça permet d'enlever les espaces quand on rentre son prénom ou autre Merci Amaury pour son code


 const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

 // Contraintes formulaire
  // Prénom     >>> faire une fonction
  if (prenomValue.length < 2 || prenomValue.length > 20) {
    // prenom.nextElementSibling.classList.remove("invisible");
    // setTimeout(function () {
    //   prenom.nextElementSibling.classList.add("invisible");
    // }, 2000);
    invalide(prenom);
  }

  // Nom
  if (nomValue.length < 2 || nomValue.length > 20) {
    // nom.nextElementSibling.classList.remove("invisible");
    invalide(nom)
  }

   // eMail
  if (isValidEmail(emailValue) === false) {
    // email.nextElementSibling.classList.remove("invisible");
    invalide(email);
  }
  // Message
  if (messageValue.length < 10 || messageValue.length > 100) {
    // message.nextElementSibling.classList.remove("invisible");
    invalide(message);
  };

function afficherlesp(){
const alert = document.querySelector(".error");
       alert.classList.add("invisible");
console.log (alert);   
}

bTnalert.addEventListener('click', afficherlesp);


form.addEventListener("submit",function(event){
    // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
    event.preventDefault();
    // ..
});

/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}

function invalide(elem) {
  elem.nextElementSibling.classList.remove("invisible");
  setTimeout(function () {
    elem.nextElementSibling.classList.add("invisible");
  }, 3000);
}
































/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}