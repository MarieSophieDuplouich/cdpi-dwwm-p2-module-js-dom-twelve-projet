/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */

// sélectionner

// le btn et les cookies pour les faire disparaître
// MS Toggle
// function garderChoixusercookies() {
//     document.body.classList.toggle("btn-accept");

//     if (document.body.classList.contains("btn-accept")) {
//         localStorage.setItem("theme", "dark");
//         if (logo) {
           
//         }
//     } else {
//         localStorage.setItem("theme", "light");
//         if (logo) {
           
//         }
//     }

//     console.log(garderChoixusercookies());
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const toggle = document.getElementById("toggle");
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//         document.body.classList.add("btn-accept");
//         if (toggle) toggle.checked = true;
       
//     }
// });

// document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
// console.log(document.cookie); // Output: username=JohnDoe
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

function setAuthToken(token) {
    document.cookie = `authToken=${token}; path=/; expires=Fri, 31 Dec 2025 23:59:59 GMT`;
}

function getAuthToken() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [name, value] = cookie.split("=");
        if (name === "authToken") return value;
         console.log(cookies);
    }
    return null;

   
}