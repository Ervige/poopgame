import { BOARD_SIZE } from "./game_config.js";

import { generateBoard } from "./js/board/generateBoard.js";
import { movePlayer } from "./js/player/movePlayer.js";
import { spawnPlayer } from "./js/player/spawnPlayer.js";

/* 1. GENERATE BOARD */
generateBoard(BOARD_SIZE);

/* 2. SPAWN PLAYER */
const isBoardExist = document.querySelector(`[data-fieldid="${BOARD_SIZE}"]`);

if (isBoardExist) {
  spawnPlayer();

  const isPlayerExist = document.querySelector(".player");

  /* 3. MOVE PLAYER */
  if (isPlayerExist) {
    movePlayer();
  }
}
