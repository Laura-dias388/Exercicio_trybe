// uma promise recebe dois parâmetros, o resolve e o reject, uma promise convenciona
// que você tenha uma caso de sucesso e um caso de falha, o resolve trata o sucesso e 
// o reject trata a falha;

// Função assíncrona;

function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não é possivel divisão por zero.'));

    const resultado = num1 / num2;

    resolve(resultado);
  });

  return promise;
}

calcularDivisao(2, 2)
  .then((result) => console.log(result))
  .catch((err)=> console.log("erro: %s", err.message));