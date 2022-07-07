/*Por último, mas não menos importante, vamos entender o que é o parâmetro default. Imagine que você queira executar a função greeting abaixo, que imprime uma saudação para o usuário*/

/*const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!*/

const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome usuário!

//======================================================================

const greeting2 = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting2(); // // Welcome usuário!