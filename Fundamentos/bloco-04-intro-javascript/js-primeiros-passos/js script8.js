//Triangulos

let a = 60;
let b = 40;
let c = 80;

let somaDosLados = a + b + c;
let anguloPositivo = a > 0 && b > 0 && c > 0; 

if (anguloPositivo){
    if (somaDosLados === 180){
       console.log(true);
    } else {
       console.log(false);
    };
} else {
    console.log('Erro: ângulo invalido');

} 

