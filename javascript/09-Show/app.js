let array = [
    "Ergy",
    "Steve",
    "Akses",
    "Alexis",
    "Amélie",
    "Bathula",
    "Erwan",
    "Fatimata",
    "jovenel",
    "Marion",
    "Nabil",
    "Sylvia",
    "Vann"
];
console.log(array.join("" + "<br>"));
alert(array[i])

/*Afficher le contenu de ce tableau
creer des alertes dès le click sur le non, et afficher alerte "non"*/
for(let i=0; i< array.length;i++){
    array.addEvenListener('click',(event)=>{
        event.preventDefault();
        if(i===array.values);

    })

    //     let element = document.getElementById('app');
    // //console.log(array)

    // for(i = 0; i < array.length; i++){
    // //console.log(i)
    // element.innerHTML += `<p onclick='show_alert(${i})'>${array[i]}</p>` 
    
    // }

    // const show_alert = (index) =>{
    // //console.log(index)
    // alert(array[index]);
    // }
