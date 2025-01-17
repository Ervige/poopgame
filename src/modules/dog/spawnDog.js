import { BOARD_SIZE } from "src/game_config.js";

import { drawNumbers } from "utils/drawNumbers.js";
import { spawnAwayFromPlayer } from "utils/spawnAwayFromPlayer.js";

export function spawnDog() {
  const dog = document.createElement("div");

  dog.classList.add("dog");

  const player = document.querySelector(".player");

  const currentPlayerPosition = player.getAttribute("data-position");

  let randomDogPosition = drawNumbers(BOARD_SIZE, currentPlayerPosition);

  if (randomDogPosition === +currentPlayerPosition) {
    randomDogPosition = spawnAwayFromPlayer(randomDogPosition);
  }

  dog.setAttribute("data-position", randomDogPosition);

  const spawnField = document.querySelector(
    `[data-fieldid="${randomDogPosition}"]`
  );

  if (spawnField) {
    const isPoop = !!spawnField.querySelector(".poop");

    spawnField.appendChild(dog);
    if (isPoop) {
      const poop = document.createElement("div");

      poop.classList.add("poop");

      poop.setAttribute("data-position", randomDogPosition);

      spawnField.appendChild(poop);
    }
  } else {
    console.error(`Field with data-fieldid="${randomDogPosition}" not found.`);
  }
}
