/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postsContainer = document.querySelector(".posts");

// 2. Voici ma base de données factise 
const posts = 
[
    {
        titre:"SEO, les bonnes pratiques",
        hashtag:"#SEO",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Bien, les bonnes pratiques",
        hashtag:"#JS",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    },
    {
        titre:"Content, les bonnes pratiques",
        hashtag:"#PHP",
        link:"#",
        extrait:"Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
    }
];

// 3. Je parcours la bdd


posts.forEach(function(post){
      const div = document.createElement(".post");
  
    // 4. Je créer un nouveau post dans le conteneur de post pour chaque post de la BDD
    const dIv = document.createElement("div")
    // div.textContent = post.titre,post.hashtag,post.link,post.extrait;
      dIv.textContent = post.titre;
     dIv.classList.add("post-titre");


     const diVe = document.createElement("div");
     diVe.classList.add("post-extrait");
      diVe.textContent = post.extrait;
      const diVVe = document.createElement("div");
     diVVe.classList.add("post-hashtag");
     diVVe.textContent = post.hashtag;


    //  div.textContent = post.link;
      

    // 5. Je l'ajoute dans le conteneur de publication
    dIv.appendChild(div);
    diVe.appendChild(div);
    diVVe.appendChild(div);

    
     postsContainer.appendChild(div);


}); 


   
            // <div class="post">
            //     <!-- <div class="post-titre">
            //         <a href="lien">Titre de l'article</a>
            //     </div>
            //     <div class="post-extrait">
            //         Extrait
            //     </div>
            //     <div class="post-hashtag">
            //         #tag
            //     </div> -->
            // </div>



// const fruits = ['apple', 'banana', 'cherry'];
// const outputDiv = document.getElementById("output");

// fruits.forEach((fruit) => {
//   // Je crée un paragraphe pour chaque fruit
//   const p = document.createElement("p");
//   p.textContent = `Fruits: ${fruit}`;
  
//   // J'ajoute ce paragraphe dans la div
//   outputDiv.appendChild(p);
// });