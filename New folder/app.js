const characterEndpoint = "https://anapioficeandfire.com/api/characters/583";
const houseEndpoint = "https://anapioficeandfire.com/api/houses/362";

const characterInfoElement = document.getElementById("character-info");
const houseInfoElement = document.getElementById("house-info");

async function fetchCharacterInfo() {
  try {
    const response = await fetch(characterEndpoint);
    const data = await response.json();
    displayCharacterInfo(data);
  } catch (error) {
    console.error("Error fetching character info:", error);
  }
}

async function fetchHouseInfo() {
  try {
    const response = await fetch(houseEndpoint);
    const data = await response.json();
    displayHouseInfo(data);
  } catch (error) {
    console.error("Error fetching house info:", error);
  }
}

function displayCharacterInfo(character) {
  characterInfoElement.innerHTML = `
    <h2>Character Info</h2>
    <p>Name: ${character.name}</p>
    <p>Gender: ${character.gender}</p>
    <p>Culture: ${character.culture}</p>
    <p>Aliases: ${character.aliases.join(", ")}</p>
  `;
}

function displayHouseInfo(house) {
  houseInfoElement.innerHTML = `
    <h2>House Info</h2>
    <p>Name: ${house.name}</p>
    <p>Region: ${house.region}</p>
    <p>Coat of Arms: ${house.coatOfArms}</p>
    <p>Words: ${house.words}</p>
  `;
}

fetchCharacterInfo();
fetchHouseInfo();