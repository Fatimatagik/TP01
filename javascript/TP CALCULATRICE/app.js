
let ecran = document.getElementById('ecran');
let touche = document.getElementById ('touche');
let button = document.getElementsByClassName('btn');
let number = document.querySelectorAll('span');
console.log([number])

let array = ['span'];

const afficherEcran = text =>{
    button.textcontent = text
}

button.addEventListener('click',(event) =>{
    envent.preventDefault();
    button.innerHTML =[number.value]
    array.push(number.value);
    //return number.span[number.selectedIndex].value;
    for(let i=0; i < array.length; i++){

        element.innerHTML += `
        <span> 
            ${array[i]}
            <button id="btn" onclick="(${i})" >delete</button> 
        </div>


    }

})


    // function checkResult(result){
    //     if(isNaN(result)){
    //     return alert('Not a Number');
    //     }else{
    //     return alert("Total : "+ result)
    //     }
    // }
    
    // function calcul(){
    //     event.preventDefault();
    
    //     let result;
    
    //     let saisie1 = parseInt(document.formulaire.saisie1.value);
    //     let saisie2 = parseInt(document.formulaire.saisie2.value);
        
    //     if(document.formulaire.operateur.value  == '+')
    //     {
    //     result = saisie1 + saisie2;
    //     checkResult(result);
    //     }
    //     else if(document.formulaire.operateur.value  == '-')
    //     {
    //     result = saisie1 - saisie2;
    //     checkResult(result);
    //     }
    //     else if(document.formulaire.operateur.value  == '/')
    //     {
    //     result = saisie1 / saisie2;
    //     checkResult(result);
    //     }
    //     else if(document.formulaire.operateur.value  == '*')
    //     {
    //     result = saisie1 * saisie2;
    //     checkResult(result);
    //     }
    //     else
    //     {
    //     alert('Veuillez saisir un operateur !');
    //     }
    
    // }
