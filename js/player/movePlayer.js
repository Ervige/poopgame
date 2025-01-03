import { GAME_CONTROLS } from "../../game_config.js";

import { calculatePosition } from "../utils/calculatePosition.js";

export function movePlayer() {
  document.addEventListener("keydown", function (event) {
    const player = document.querySelector(".player");

    const direction = GAME_CONTROLS[event.key];

    if (direction) {
      const playerPosition = player.getAttribute("data-position");

      const newPlayerPosition = calculatePosition(playerPosition, direction);

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
