// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//Exercico 1

function href(event){
    
    event.preventDefault();
}
HREF_LINK.addEventListener('click',href);

//Exercicio 2

function check (event){
    event.preventDefault();

}
INPUT_CHECKBOX.addEventListener('click', check);

//Exercicio 3
function tex (event){
    const letra = event.kay;
   if(letra !== 'a'){
    event.preventDefault();
   }
}
INPUT_TEXT.addEventListener('keypress', tex);