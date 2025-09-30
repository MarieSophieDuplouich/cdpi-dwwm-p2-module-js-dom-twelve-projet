/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// Séléctionner 
const quesTions = document.querySelectorAll(".question");
// Fonctions
quesTions.forEach(function (question) {
    // 3. Lors du click sur la question
    question.addEventListener("click", function () {
        
          
        const rePonse = question.nextElementSibling;
        const  bTn = question.querySelector(".btn-arrow");

        quesTions.forEach(item => {
            if (item !== question) {
                // item.classList.remove('show-reponse'); 
                item.nextElementSibling.style.maxHeight = null; // Collapse the answer          
                   const otherBtn = item.querySelector(".btn-arrow");
                otherBtn.classList.remove("fa-chevron-up");
                otherBtn.classList.add("fa-chevron-down");
            }
          
        });
          
        // Toggle 'active' class on the clicked question to rotate the arrow
        rePonse.classList.toggle('show-reponse');
         
        // Check if the answer is already open
        if (rePonse.style.maxHeight) {
            // If open, close it by resetting max-height
            rePonse.style.maxHeight = null;
             bTn.classList.remove("fa-chevron-up");
            bTn.classList.add("fa-chevron-down");
          
        
        } else {
            // If closed, set max-height to scrollHeight to expand it
            rePonse.style.maxHeight = rePonse.scrollHeight + 'px';
            bTn.classList.remove("fa-chevron-down");
            bTn.classList.add("fa-chevron-up");
        }
   
    });
});


// Evenements

//Modifier Dom

//Fetch



