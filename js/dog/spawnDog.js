import { BOARD_SIZE } from "../../game_config.js";
import { drawNumbers } from "../utils/drawNumbers.js";
import { calculatePositionFromPlayer } from "../utils/calculatePositionFromPlayer.js";

export function spawnDog() {
  const dog = document.createElement("div");

  dog.classList.add("dog");

  const player = document.querySelector(".player");

  const currentPlayerPosition = player.getAttribute("data-position");

  let randomDogPosition = drawNumbers(BOARD_SIZE, currentPlayerPosition);

  if (randomDogPosition === +currentPlayerPosition) {
    randomDogPosition = calculatePositionFromPlayer(randomDogPosition);
  }

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
