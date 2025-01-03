import { BOARD_SIZE } from "../../game_config.js";
import { drawNumbers } from "../utils/drawNumbers.js";

export function moveDog() {
  const dog = document.querySelector(".dog");
  if (!dog) {
    console.error("Dog element not found.");
    return;
  }

  let currentDogPosition = parseInt(dog.getAttribute("data-position"));

  const isValidPosition = (position) => position >= 1 && position <= BOARD_SIZE;

  const directions = [-1, 1, -Math.sqrt(BOARD_SIZE), Math.sqrt(BOARD_SIZE)];
  let newDogPosition;

  do {
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    newDogPosition = currentDogPosition + randomDirection;
  } while (!isValidPosition(newDogPosition));

  dog.setAttribute("data-position", newDogPosition);

  const newField = document.querySelector(`[data-fieldid="${newDogPosition}"]`);
  if (newField) {
    newField.appendChild(dog);
    console.log(`Dog moved to position: ${newDogPosition}`);
  } else {
    console.error(`Field with data-fieldid="${newDogPosition}" not found.`);
  }
}

export function startDogMovement() {
  setInterval(moveDog, 1000);
}