let element= document.getElementById('caroussel'); 
console.log(element)
element.onclick = function(){
    let src = element.getAttribute('src');
    console.log(src)
    

    switch(src)
    {
        case'img/img1.png':
        element.src = 'img/img2.jpg'
        break;
        case'img/img2.jpg':
        element.src ='img/img3.png'
        break;
        case'img/img3.png':
        element.src = 'img/img4.png'
        break;
        default:
        element.src = 'img/img1.png'
    }
}

// /**
//  * app.js
//  * Carousel 
//  */

//  document.getElementById('carousel').addEventListener('click', () => {

//     /**
//      * @getAttribute
//      * Récupère la valeur d'une attribue.
//      */
//     let src = document.getElementById('carousel').getAttribute('src');
  
//     switch(src)
//     {
//       case 'img/Shoto.png':
//           document.getElementById('carousel').src = 'img/Dabi.png'
//           break;
//       case 'img/Dabi.png':
//         document.getElementById('carousel').src = 'img/Deku.png'
//         break;
//       case 'img/Deku.png':
//         document.getElementById('carousel').src = 'img/Katchan.png'
//         break;
//       default: 
//         document.getElementById('carousel').src = 'img/Shoto.png'
//         break;
//     }
//   })
  
  