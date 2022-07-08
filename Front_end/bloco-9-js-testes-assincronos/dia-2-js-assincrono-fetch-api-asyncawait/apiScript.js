// apiScript.js
/* const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke(); */

/* Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros:
O endereço para o qual a requisição será feita, ou seja, a url do serviço.
Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers */

// apiScript.js
/* const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchJoke(); */

/* O segundo parâmetro myObject define o tipo de request: method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' }, como visto nas requisições via curl. */

// apiScript.js
//==================================================================
/* const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();

// apiScript.js */
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  console.log(fetch)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();