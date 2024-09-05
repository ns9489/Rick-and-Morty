const textCharacter = document.getElementById("txt-character");
const containerCards = document.getElementById("container-Cards");
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

// Método para traer la API mediante una URL
const getAPI = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
} 

// Crear la función encargada de crear las cards
const createCards = (character) => {
    const card = document.createElement("div");
    card.classList.add("card-character");

    const imgCard = document.createElement("img");
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement("div");
    containerDescription.classList.add("description-card");

    const nameCharacter = document.createElement("h2");
    nameCharacter.textContent = character.name;

    const genderCharacter = document.createElement("p");
    genderCharacter.textContent = "Gender: " + character.gender;

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);
}

// Método fetch para cargar las primeras cards
const generateAllCharacters = async () => {
    const data = await getAPI(URL1);
    data.map(character => createCards(character)); // Usamos map sin devolver un array
}

// Buscar personajes por nombre
const getCharacterByName = async (event) => {
    containerCards.innerHTML = ""; // Limpiar las cards previas
    const data = await getAPI(URL2 + event.target.value);
    data.map(character => createCards(character)); // Usamos map aquí también
}

window.addEventListener("DOMContentLoaded", generateAllCharacters);
textCharacter.addEventListener("keyup", getCharacterByName);
