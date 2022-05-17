let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1 percorra o array imprimindo todos valores nele contidos:

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

// Exercício 2 some todos os valores contidos no array e imprima o resultado:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
   soma += (numbers[index]);

}
console.log(soma); 

// Exercício 3 calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length ; index += 1){
      soma += (numbers[index]);
     
}
let media = soma / numbers.length;
console.log(media);

// Exercício 4 caso o valor da soma seja maior que 20, imprima a mensagem 
//"maior que 20", caso não seja imprima "valor menor que 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length ; index += 1){
      soma += (numbers[index]);  
}
 let media = soma / numbers.length;

if (media > 20){
    console.log('Valor maior que 20');
} else if (media <= 20){
    console.log('Valor menor ou igual a 20');
}

//Exercicio 5, descubra o maior valor do array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherN = numbers[0];

for (let index = 1; index < numbers.length ; index += 1){
    if (numbers[index] > higherN){
        higherN = numbers[index];
    }
}
console.log(higherN);


//Exercício 6, descubra quantos valores ímpares existem no array,
// caso não exista nenhum, imprima a mensagem "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddValue = 0;

for (let index = 0; index < numbers.length ; index += 1){
    if (numbers[index] % 2 !== 0){
        oddValue += 1;
    }
}

if (oddValue === 0){
    console.log('Nenhum valor encontrado')
} else {
    console.log(oddValue);
}


// Exercício 7, descubra o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerN = numbers[0];

for (let index = 1; index < numbers.length ; index += 1){
    if (numbers[index] < lowerN){
        lowerN = numbers[index];
    }
}
console.log(lowerN);


// Exercício 8, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (let index = 1; index <= 25; index += 1){
    numbers.push(index);
}
console.log(numbers);


// Exercício 9, utilizando o array criado no exercício 8, imprima o rsultado de 
// cada número dividido por 2;

let numbers = [];

for (let index = 1; index <= 25; index += 1){
    numbers.push(index);
}

for (let index = 0; index < numbers.length ; index += 1){
    console.log(numbers[index] / 2);

}


// Bônus
//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length ; index += 1){
    for (secondIndex = 0; secondIndex < index; secondIndex += 1){
       if (numbers[index] < numbers[secondIndex]){
         let position = numbers[index];
         numbers[index] = numbers[secondIndex];
         numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);