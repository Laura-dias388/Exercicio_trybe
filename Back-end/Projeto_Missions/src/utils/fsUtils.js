const fs = require('fs').promises; // de todas as versões desse arquivo eu quero usar a promisse por que é a mais performática;
const path = require('path');

async function readMissionsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../../data/missions.json'));
    const mission = JSON.parse(data);
    console.log(mission);
    return mission;
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

readMissionsData();

module.exports = {
  readMissionsData,
}