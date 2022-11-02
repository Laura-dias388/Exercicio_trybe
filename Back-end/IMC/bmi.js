const readline = require('readline-sync');


const weigth = readline.question('Qual seu peso? ');
const height = readline.question('Qual sua altura? ');
const resp = weigth / (height * height);
console.log(`Seu IMC é de: ${resp}`);
return resp;




