/*Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados. É aí que o conceito de assincronicidade entra a nosso favor para que nossa aplicação não perca eficiência.*/

const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);
//=======================================================================

const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

setTimeout(() => pushNumber2(numbers, 1), 3000);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

console.log(numbers2); // O retorno é [2, 3]

//=======================================================================
const pushNumber3 = (list, number) => list.push(number);

let numbers3 = [];

setTimeout(() => pushNumber3(numbers3, 1), 3000);
pushNumber3(numbers3, 2);
pushNumber3(numbers3, 3);

setTimeout(() => console.log(numbers3), 3000);

//=======================================================================

