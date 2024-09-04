
//traer el contenedor donde se van a renderizar las Canvas
//metodo fetch para cargar las primeras cards
//Crear la funcion encargada de crear las cards
//Utilizar el metodo fetch
//  +conocer rapidA

// traer el input de busqueda */
const textCharacter = document.getElementById("text-character");
const containerCards = document.getElementById("container-cards");

//Crear la funcion encargada de crear las cards
const createCards = ( character ) => {
    const card = document.getElementById("div");
    card.classList.add("card-character");

    const imgCard = documet.createElement("img");
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.getElement("div");
    containerDescription.classList.add("description-card");

    const nameCharacter = document.createElement("h2");
    nameCharacter.textContent = character.name;
    const gendeCharacter = document.createElement("p");
    genderCharacter.textContent = "Gender: "+character.gender;
   
    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card)

}