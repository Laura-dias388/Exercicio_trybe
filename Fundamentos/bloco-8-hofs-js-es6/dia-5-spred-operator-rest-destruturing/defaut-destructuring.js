/*Agora você já sabe como aplicar desestruturação em objetos e arrays. Você se lembra do que acontece quando tentamos acessar:
uma propriedade que não existe em um objeto?
um valor em uma posição inexistente em um array?*/

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian

  /*E se você quisesse dar um valor padrão para nationality, caso essa propriedade não exista no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6:  */


//======================================================================
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0