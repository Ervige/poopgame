
import { BOARD_SIZE } from "../../game_config.js";
import { drawNumbers } from "../utils/drawNumbers.js";

export function spawnDog() {
  const dog = document.createElement("div");

  dog.classList.add("dog");

  const randomDogPosition = drawNumbers(BOARD_SIZE);

  dog.setAttribute("data-position", randomDogPosition);

  const spawnField = document.querySelector(
    `[data-fieldid="${randomDogPosition}"]`
  );

  if (spawnField) {
    spawnField.appendChild(dog);
  } else {
    console.error(`Field with data-fieldid="${randomDogPosition}" not found.`);
  }
}
