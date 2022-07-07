const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers1 = collection.reduce(getSum);
console.log(sumNumbers); // 15

//================================================================================
const numbers1 = [32, 15, 3, 2, -5, 56, 10];

const getSum1 = (result, number) => {
    console.log(result); // 32 47 50 52 47 103
    return result + number;
  };
  
  const sumNumbers2 = numbers.reduce(getSum);
  console.log(sumNumbers); // 113

//=================================================================================

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum2 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers3 = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

//=================================================================================

const numbers4 = [32, 15, 3, 2, -5, 56, 10];

const getSum4 = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers4 = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123
//=================================================================================

const numbers5 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

//=================================================================================
const numbers7 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair3 = (accumulator, number) => accumulator + number;

const sumNumbers5 = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

//=================================================================================

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152

//==================================================================================

