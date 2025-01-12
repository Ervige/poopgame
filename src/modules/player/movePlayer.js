import { GAME_CONTROLS } from "src/game_config.js";

import { cleanPoop } from "poop/cleanPoop.js";
import { calculatePosition } from "utils/calculatePosition.js";

export function movePlayer() {
  document.addEventListener("keydown", function (event) {
    const direction = GAME_CONTROLS[event.key];

    const player = document.querySelector(".player");
    const dog = document.querySelector(".dog");

    const currentDogPosition = +dog.getAttribute("data-position");

    if (direction) {
      const playerPosition = +player.getAttribute("data-position");

      const newPlayerPosition = calculatePosition(playerPosition, direction);

      if (newPlayerPosition === currentDogPosition) {
        return;
      }

      const poops = document.querySelectorAll(".poop");

      if (poops.length !== 0) {
        cleanPoop(poops);
      }

      const newPlayerField = document.querySelector(
        `[data-fieldid='${newPlayerPosition}']`
      );

      if (newPlayerField) {
        player.setAttribute("data-position", newPlayerPosition);

        newPlayerField.appendChild(player);
      }
    }
  });
}
