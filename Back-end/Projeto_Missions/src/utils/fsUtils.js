const fs = require('fs').promises; // de todas as versões desse arquivo eu quero usar a promisse por que é a mais performática;
const path = require('path');// lib path para resolver problemas de localização(__dirname);

const MISSION_DATA_PATH = '../../data/missions.json';

async function readMissionsData() {
  try { // tratamento de excessão
    const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
    const missions = JSON.parse(data);
    console.log(missions);
    return missions;
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

async function writeNewMissionData(newMission) {
  try {
    const oldMissions = await readMissionsData();
    const allMissions = JSON.stringify([
      ...oldMissions, 
      { id: Date.now(), 
      ...newMission,
    }]);

    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions);
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

module.exports = {
  readMissionsData,
  writeNewMissionData,
};