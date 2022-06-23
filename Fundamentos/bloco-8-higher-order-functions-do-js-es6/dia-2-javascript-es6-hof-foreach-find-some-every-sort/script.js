const numbers = [1,2,3,4,5,6,7,8,9,10];


for (let index = 0; index < numbers.length; index += 1){
  let multi = numbers[index] * 3;
  arr.push(multi);
}
const result1 = (numbers) => {
    const arr = [];//constante para armazenar o array feito pelo forEach;
    numbers.forEach((number) => arr.push(number * 3)); //forEach não retorna nada;
    return arr;
}

console.log(result1());

module.exports = { result1 };