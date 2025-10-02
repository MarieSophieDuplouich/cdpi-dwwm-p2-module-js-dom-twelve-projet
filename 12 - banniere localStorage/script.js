/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */

// sélectionner

const cookies = document.querySelector(".cookies");
const btnBtnaccept = document.querySelector(".btn.btn-accept");
function garderChoixusercookies() {
    document.body.classList.toggle("btn-accept");

    if (document.body.classList.contains("btn-accept")) {
        localStorage.setItem("cookies", "accepted");
        if (cookies) {
          cookies.classList.add("cookies-display-none");
        }
    } 
    console.log("cookies acceptés");
}

document.addEventListener("DOMContentLoaded", function () {
    const savedCookies = localStorage.getItem("cookies");
        
    // cookies.classList.remove('cookies');
    if (savedCookies === "accepted") {
       
        if (cookies) cookies.style.display = "none";
    }

     console.log("cookies déjà acceptés");
});


btnBtnaccept.addEventListener('click',garderChoixusercookies);


// document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
// console.log(document.cookie); // Output: username=JohnDoe
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// function setAuthToken(token) {
//     document.cookie = `authToken=${token}; path=/; expires=Fri, 31 Dec 2025 23:59:59 GMT`;
// }

// function getAuthToken() {
//     let cookies = document.cookie.split("; ");
//     for (let cookie of cookies) {
//         let [name, value] = cookie.split("=");
//         if (name === "authToken") return value;
//          console.log(cookies);
//     }
//     return null;

   
// }