// Exemplo de tratamento de erro síncrono, sem promisse;
function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error('Não é possivel divisão por zero.');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(2, 2);
  console.log("resultado: %s", resultado);
} catch (e) {
  console.log("erro: %s", e.message);
};
