/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");

// 2. Je parcours toutes les questions
questions.forEach(function(question){
    // 3. Lors du click sur la question
    question.addEventListener("click",function(){
        
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove('show-reponse'); 
              
            }
        });

        // Toggle 'active' class on the clicked question to rotate the arrow
        question.classList.toggle('show-reponse');

    
  
    });
});



