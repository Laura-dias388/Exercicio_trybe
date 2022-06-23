const newEmployees = () => {
    const employees = {
      id1: 'Pedro Guerra ', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const creatingEmail = (name) => {
    const generateMail = [];
    for(generateMail in name) {
        generateMail.push(name[generateMail]);
    }
    return generateMail;
};
const valueMail = (name) => Object.values(name);

console.log(valueMail(name));
console.log(creatingEmail(name));
creatingEmail(newEmployees);
