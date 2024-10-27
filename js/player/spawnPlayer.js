import { BOARD_SIZE } from "../../game_config.js";
import { drawNumbers } from "../utlis/drawNumbers.js";

export function spawnPlayer() {
  const player = document.createElement("div");

  player.classList.add("player");

  const randomPlayerPosition = drawNumbers(BOARD_SIZE);

  player.setAttribute("data-position", randomPlayerPosition);

  const spawnField = document.querySelector(
    `[data-testid="${randomPlayerPosition}"]`
  );

  spawnField.appendChild(player);
}
