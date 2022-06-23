const sumFixAmount = (amount) => {//a constante sumFixAmount recebe a arrow function com o parâmetro amount;
    return (number) => amount + number;//o retorno da function recebe uma arrow function com o parâmetro de number;
    // e a chamada de amount + number;
  }
  const initialSum = sumFixAmount(15)//a constante initialSum recebe a constante sumFixAmount com o parâmetro 15;
  console.log(initialSum(5));//o console.log escreve na tela o resultado de initialSum com o parâmetro 5;

// Exemplos do bloco 8
//===============================================================================================================================
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);


// Exemplos do bloco 8
//===============================================================================================================================
const repeat = (number, action) => {// a constante repeat recebe a arrow function e nela são passados dois parâmetros
   // number, e action;
    for (let count = 0; count <= number; count += 1) {// o for percorre o tamanho do parâmetro e a cada loop recebe 
        // mais 1;
      action(count);//o parâmetro action chama o contador, nesse momento o valor de action passa a ser cada item da contagem;
    }
  };
  repeat(5, console.log);// a constante repeat passa dois parâmetros 5 para o number e console.log para action, nesse momento 
  //action vai escrever na tela a contagem; 


// Exemplos do bloco 8
//=============================================================================================================================
  const repeat2 = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);//o segundo parâmetro recebe o count como argumento, o valode de action passa a ser a contagem;
    }
  };
  repeat2(3, (number) => {//number faz a chamada do if, para verificar se o resto da divisão
    // de number por dois tem resto zero;
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });

// Exemplos do bloco 8
//==============================================================================================================================

  const repeat3 = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat3(3, isEven); // Testa quais números serão pares;
  repeat3(3, isOdd); // Testa quais números serão ímpares;

// Exemplos do bloco 8
//==============================================================================================================================

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator);
//==============================================================================================================================

//Exemplos do bloco 8
//==============================================================================================================================
const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);
//==============================================================================================================================  

// Para fixar

//Crie uma função que retorne a frase 'Acordando!!';

const wakingUp = () => {
    return ('Acordando!!');
  }
    const sayWakingUp = (phrase) => {
        console.log(phrase());
}

sayWakingUp(wakingUp);
//==============================================================================================================================

//Crie outra função que retorne a string 'Bora tomar café!!';

const coffee = () => { //arrow function que retorna a frase 'Bora tomar café!!';
    return ('Bora tomar café!!');
  }

  const sayCoffe = (callback) => {// arrow function sayCoffe com o parâmetro callback;
       console.log(callback());//o parâmetro callback é passado para para o console.log vazio, com a chamada para escrever na tela;
}

sayCoffe(coffee);//callback esta recebendo o conteúdo de coffee, pois o mesmo está sendo passado como parâmetro
//sayCoffe então passa coffee como parâmetro para a callback que escreve na tela com o console.log o conteúdo do return de coffee;

//================================================================================================================================

//Crie mais uma função que retorne a string 'Partiu dormir!!';

const sleepNow = () => {
    return ('Partiu dormir!!');
}
    const sleep = (goNow) => {
        console.log(goNow());//passei de parâmetro para sleep a função sleepNow;
    }

sleep(sleepNow);    

//===============================================================================================================================
 
//Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções
// que você criou nos exemplos anteriores.

const sayHello1 = () => {
    return ('hello trybers');
  }
  const wakingUp1 = () => {
    return ('Acordando!!');
  }

  const coffee1 = () => { 
    return ('Bora tomar café!!');
  }

  const sleepNow1 = () => {
    return ('Partiu dormir!!');
}

const call = (callback) => {
    console.log(callback());
}

call(wakingUp1);//mudo apenas a função que quero chamar no parâmetro;