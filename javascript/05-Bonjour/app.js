//  Afficher dix fois bonjour avec une boucle et faite en sorte que le 5eme bonjour soit de couleur rouge par exemple

// version avec if & ternaire attendu sans utiliser document.write

/* 
    Optionnel "IF" sans accolade.
//   */
//     while(i3 <= 5){
//         if(i3 === 5 )
//           document.write(i3 + "<br>");
//         else
//           document.write(i3 + '---');
//         i3++;
//       }
    
//       // initialisation; condition; incrémentation 
//       for(let i = 0; i <= 5; i++){
//         document.write(i + " Dans la boucle FOR ! <br>");
//       }
    
//       for(let i = 0; i <= 5; i++){
//         if(i === 5){
//           document.write(i);
//         }
//         else{
//           document.write(i + '---');
//         }
//       }

//document.write(voiture == 'audi' ? 'jolie <br>' : 'moche <br>');

let element = document.getElementById('app')

    for( i=0; i<=10; i++){
        i===5 ? element.innerHTML+= "<p style=color:red>Bonjour</p>" : element.innerHTML +="<p> Bonjour</p>"
    
}

//CORRECTION

// let element = document.getElementById('app');

// for(i = 1; i <= 10; i++){
//   i === 5 ? element.innerHTML += "<p style=color:red;>Bonjour</p>" : element.innerHTML += "<p>Bonjour</p>";
// }

// for(i = 1; i <= 10; i++){
//   if(i === 5 ){
//     element.innerHTML += "<p style=color:red;>Bonjour</p>" 
//   }else{
//     element.innerHTML += "<p>Bonjour</p>";
//   }
// }



/**
 * app.js
 * Bonjour 😬
 */

 let element = document.getElementById('app');

 /* 
   Version avec ternaire.
 */
 for(i = 1; i <= 10; i++){
   i === 5 ? element.innerHTML += "<p style=color:red;>Bonjour</p>" : element.innerHTML += "<p>Bonjour</p>";
 }
 
 /* 
   Version avec IF.
 */
 for(i = 1; i <= 10; i++){
   if(i === 5){
     element.innerHTML += "<p style=color:red;>Bonjour</p>" 
   }else{
     element.innerHTML += "<p>Bonjour</p>";