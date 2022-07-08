/*Setup - é o primeiro ciclo. Ele ocorre antes dos testes serem executados. É uma fase inicial que você pode definir algumas configurações.
Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo em que foi trabalhado nos blocos anteriores.
Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados.*/
// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

/*Aqui temos a declaração de uma variável cities, que é uma lista de cidades;
Há duas funções, addCity que adiciona cidades ao array e removeCity que... Pasmem! Remove cidades desse array.
Agora você vai realizar dois testes, para saber se essas funções funcionam exatamente como deseja.*/

